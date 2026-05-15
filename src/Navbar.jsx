import './Navbar.css';
import navimage from "./assets/iconnectlogo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [showEsummitMessage, setShowEsummitMessage] = useState(false);
  const location = useLocation();

  const pressClick = () => {
    setNav(!nav);
  };

 const handleScrollLink = (e, targetId) => {
  e.preventDefault();
  if (location.pathname === "/") {
    const el = document.getElementById(targetId);
    if (el) {
      const offset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  } else {
    window.location.href = `/#${targetId}`;
  }
  setNav(false);
};


  const handleEsummitClick = (e) => {
    e.preventDefault();
    setShowEsummitMessage(true);
    setTimeout(() => {
      setShowEsummitMessage(false);
    }, 2500);
    setNav(false);
  };

  useEffect(() => {
    setNav(false);
  }, [location]);

  return (
    <>
      {/* Sliding message */}
      {showEsummitMessage && <div className="esummit-toast">🚧 Esummit Coming Soon</div>}

      <div className='header'>
        <div className='logo'>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src={navimage} alt="iConnect Logo" height="68px" width="180px" />
          </Link>
        </div>

        <div id='navlinks' className={`navlinks ${nav ? 'mobile-active' : ''}`}>
          <ul id="navbar">
            <li><Link to="/" onClick={(e) => { e.preventDefault();if (location.pathname === "/") {window.scrollTo({ top: 0, behavior: "smooth" });} else {window.location.href = "/";}setNav(false);}}>Home</Link></li>
            <li><Link to="/about" onClick={pressClick}>About Us</Link></li>
            <li><a href="#initiative" onClick={(e) => handleScrollLink(e, "initiative")}>Our Initiative</a></li>
            <li><a href="#gallery" onClick={(e) => handleScrollLink(e, "gallery")}>Gallery</a></li>
            <li><a href="#contact" onClick={(e) => handleScrollLink(e, "contact")}>Contact</a></li>
            <li><a href="https://konark26.iconnectgjust.in" target="_blank" rel="noopener noreferrer">Konark'26</a></li>
          </ul>
          <a href="#" id="close" onClick={pressClick}><i className='bx bx-x'></i></a>
        </div>

        <div id="mobile" onClick={pressClick} className={nav ? 'mobile-active' : ''}>
          {!nav && <i className='bx bx-menu'></i>}
        </div>
      </div>
    </>
  );
}

export default Navbar;
