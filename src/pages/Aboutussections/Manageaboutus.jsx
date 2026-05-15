import "./Manageaboutus.css";
// import bigcardimage from "../../assets/bigcard.png";
//import manprofile from "../../assets/manprofile.jpg";
import opsang from "../../assets/oopsangwan.jpeg";
import vimal from "../../assets/vvimal.jpeg";
import sunil from "../../assets/ssunil.jpeg";
import vijay from "../../assets/vvijay.jpeg";
import rajendar from "../../assets/rajenderr.jpeg";
import ajay from "../../assets/ajaykumar.jpeg";
import narender from "../../assets/narender.jpeg";
import sandeep from "../../assets/sandeep.jpeg";
import sumit from "../../assets/sumit.jpeg";

function Manageaboutus(){
    return(
        <>
        <section className="greysec">
            <h1>Faculty</h1>
            <div className="onecardcontainer">
                    <div className="bigcard">
                        <img src={opsang} alt="about section" loading="lazy"/>
                        <h2>Prof. O.P Sangwan</h2>
                        <p>Director PDUIIC</p>
                    </div>
            </div>
            <div className="fourcardcontainer">
                 {/* <div className="smallcard">
                    <img src={opsang} alt="about section" loading="lazy"/>
                    <h2>Prof. O.P Sangwan</h2>
                    <p>Director PDUIIC</p>
                 </div> */}
                 <div className="smallcard">
                    <img src={vimal} alt="about section" loading="lazy"/>
                    <h2>Mr. Vimal K Jha</h2>
                    <p>Deputy Director PDUIIC</p>
                 </div>
            </div>
            <div className="fourcardcontainer">
                 <div className="smallcard">
                    <img src={sunil} alt="about section" loading="lazy"/>
                    <h2>Dr. Sunil Kumar</h2>
                    <p>Coordinator PDUIIC</p>
                 </div>
                 <div className="smallcard">
                    <img src={rajendar} alt="about section" loading="lazy"/>
                    <h2>Dr. Rajender Singh</h2>
                    <p>Coordinator PDUIIC</p>
                 </div>
            </div>
             <div className="fourcardcontainer">
                 <div className="smallcard">
                    <img src={ajay} alt="about section" loading="lazy"/>
                    <h2>Mr. Ajay Kumar</h2>
                    <p>Coordinator Idea Lab</p>
                 </div>
                 <div className="smallcard">
                    <img src={narender} alt="about section" loading="lazy"/>
                    <h2>Dr. Narender Kumar</h2>
                    <p>Coordinator Idea Lab</p>
                 </div>
                 
            </div>
            <div className="fourcardcontainer">
                 <div className="smallcard">
                    <img src={vijay} alt="about section" loading="lazy"/>
                    <h2>Dr. Vijay Pal Singh</h2>
                    <p>Coordinator Idea Lab</p>
                 </div>
                 <div className="smallcard">
                    <img src={sumit} alt="about section" loading="lazy"/>
                    <h2>Dr. Sumit Sharma</h2>
                    <p>Coordinator Idea Lab</p>
                 </div>
                 <div className="smallcard">
                    <img src={sandeep} alt="about section" loading="lazy"/>
                    <h2>Dr. Sandeep Jindal</h2>
                    <p>Coordinator Idea Lab</p>
                 </div>
            </div>
        </section>
        </>
    );
}

export default Manageaboutus