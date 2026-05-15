import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import HomeFront from "./HomeFront";
import Homeabout from "./Homeabout";
import Homeinit from "./Homeinit";
import Homegallery from "./Homegallery";
import Hometouch from "./Hometouch";
import Homefooter from "./Homefooter";
import AboutusPage from './pages/Aboutus';
import NotFound from "./NotFound";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      // Scroll to top when About page is loaded
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.pathname === "/" && location.hash) {
      // Scroll to section if hash exists (e.g. /#gallery)
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Delay to ensure the DOM is fully rendered
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeFront />
              <Homeabout />
              <Homeinit />
              <Homegallery />
              <Hometouch />
              <Homefooter />
            </>
          }
        />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
