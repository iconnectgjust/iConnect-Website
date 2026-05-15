import "./Homefooter.css";
import footerlogo from "./assets/FooterLogo.png";

function Homefooter() {
  return (
    <>
      <section className="footerblack">
        <div className="footercontent">
          <div className="footimage">
            <img src={footerlogo} alt="footer image" />
          </div>

          <div className="footsociety">
            <h2>iCONNECT SOCIETY</h2>
            <a href="#">Information</a>
            <a href="#">Insight</a>
            <a href="#">Ideation</a>
            <a href="#">Investigation</a>
            <a href="#">Implementation</a>
          </div>

          <div className="footfollow">
            <h2>Follow Us</h2>
            <a href="https://www.linkedin.com/company/iconnect-gjust/">LinkedIn</a>
            <a href="https://www.instagram.com/iconnectgjust/">Instagram</a>
            <a href="https://x.com/iconnectgjust?t=GZGkd_h65aoTtg3M5MnmCg&s=08">X (Twitter)</a>
            <a href="https://www.whatsapp.com/channel/0029VaELUPEGU3BNfgEAmU0h">Whatsapp</a>
            <a href="https://www.youtube.com/@iConnectGJUST">YouTube</a>
          </div>

          <div className="footget">
            <h2>GET NOTIFIED</h2>
            <p>Be the first to know about the activities of iConnect.</p>
            <div className="footgetcom">
              <input type="text" placeholder="Type email" />
              <button><i className='bx bx-envelope'></i></button>
            </div>
          </div>
        </div>

        <div className="footerend">
          <span>With love from </span>
          <span>iConnect Society, GJUS&T, Hisar</span>
        </div>
      </section>
    </>
  );
}

export default Homefooter;
