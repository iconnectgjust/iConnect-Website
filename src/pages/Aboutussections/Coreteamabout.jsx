import "./Coreteamabout.css";
// import bigcardimage from "../../assets/bigcard.png";
import rahul from "../../assets/rahul.jpeg";
import sarika from "../../assets/sarika.jpeg";
import akhil from "../../assets/akhil1.jpeg";
import shreya from "../../assets/shreya.jpeg";
import sanju from "../../assets/sanju.jpeg";
import rashi from "../../assets/rashi.jpeg";
import sneha from "../../assets/sneha.jpeg";
import naina from "../../assets/naina.jpeg";
import prashant from "../../assets/prashant.jpeg";
import payal from "../../assets/payal.jpeg";
import krish from "../../assets/krish.jpeg";
import nikki from "../../assets/nikki.jpeg";
import akanshi from "../../assets/akanshi.jpeg";
import aditya from "../../assets/aditya.jpg";

function Coreteamabout(){
    return(
        <>
         <section className="whitesec">
                    <h1>Core team</h1>
                    <div className="fourcardcontainer">
                         <div className="smallcard">
                            <img src={sarika} alt="about section" loading="lazy"/>
                            <h2>Sarika Kalkal</h2>
                            <p>Captain</p>
                         </div>
                         <div className="smallcard">
                            <img src={akanshi} alt="about section" loading="lazy"/>
                            <h2>Akanshi Chhillar</h2>
                            <p>Captain</p>
                         </div>
                    </div>
                    <div className="fourcardcontainer">
                         <div className="smallcard">
                            <img src={rahul} alt="about section" loading="lazy"/>
                            <h2>Rahul Kumar</h2>
                            <p>HR Head</p>
                         </div>
                         <div className="smallcard">
                            <img src={naina} alt="about section" loading="lazy"/>
                            <h2>Naina Bansal</h2>
                            <p>Industrial Connect Head</p>
                         </div>
                         <div className="smallcard">
                            <img src={akhil} alt="about section" loading="lazy"/>
                            <h2>Akhil Sharma</h2>
                            <p>Documentation Head</p>
                         </div>
                         <div className="smallcard">
                            <img src={shreya} alt="about section" loading="lazy"/>
                            <h2>Shreya Mittal</h2>
                            <p>Promotion Head</p>
                         </div>
                    </div>
                    <div className="fourcardcontainer">
                         <div className="smallcard">
                            <img src={aditya} alt="about section" loading="lazy"/>
                            <h2>Aditya Thakur</h2>
                            <p>Website Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={rashi} alt="about section" loading="lazy"/>
                            <h2>Rashi</h2>
                            <p>Organizing and Planning Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={nikki} alt="about section" loading="lazy"/>
                            <h2>Nikki Varma</h2>
                            <p>Hospitality & Volunteering Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={payal} alt="about section" loading="lazy"/>
                            <h2>Payal Bhyan</h2>
                            <p>Data Management Coordinator</p>
                         </div>
                    </div>
                    <div className="fourcardcontainer">
                         <div className="smallcard">
                            <img src={prashant} alt="about section" loading="lazy"/>
                            <h2>Prashant</h2>
                            <p>Sponsorship & Logistics Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={sneha} alt="about section" loading="lazy"/>
                            <h2>Sneha Singh</h2>
                            <p>Content Writing Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={krish} alt="about section" loading="lazy"/>
                            <h2>Krish</h2>
                            <p>Media Coordinator</p>
                         </div>
                         <div className="smallcard">
                            <img src={sanju} alt="about section" loading="lazy"/>
                            <h2>Sanju Singh</h2>
                            <p>Infographics Coordinator</p>
                         </div>
                    </div>
                </section>
        </>
    );
}

export default Coreteamabout;
           