import "./Homegallery.css";
import gallery1 from "./assets/Gallery1.jpeg";
import gallery2 from "./assets/Gallery2.JPG";
import gallery3 from "./assets/Gallery3.jpeg";
import gallery4 from "./assets/Gallery4.jpg";
import gallery5 from "./assets/Gallery5.JPG";
import gallery7 from "./assets/Gallery7.jpg";
import gallery9 from "./assets/Gallery9.jpeg";
import gallery20 from "./assets/Gallery20.jpg";
import gallery11 from "./assets/Gallery11.jpg";
import gallery81 from "./assets/Gallery81.jpg";
import gallery16 from "./assets/Gallery16.JPG";
import Masonry from './Masonry';

function Homegallery() {
const items = [
  { id: "1", img: gallery1, url: "#", height: 380 },
  { id: "2", img: gallery9, url: "#", height: 380 },
  { id: "3", img: gallery3, url: "#", height: 280 },
  { id: "4", img: gallery16, url: "#", height: 600 },
  { id: "5", img: gallery7, url: "#", height: 350 },
  { id: "6", img: gallery5, url: "#", height: 310 },
  { id: "7", img: gallery11, url: "#", height: 550 },
  { id: "8", img: gallery20, url: "#", height: 680 },
  { id: "9", img: gallery81, url: "#", height: 630 },
  { id: "10", img: gallery2, url: "#", height:570 },
  { id: "11", img: gallery4, url: "#", height: 330 },
];


  return (
    <>
      <section id="gallery" className="whitegallery">
        <div className="galleryheading">GALLERY</div>
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </section>
    </>
  );
}

export default Homegallery;
