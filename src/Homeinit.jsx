import "./Homeinit.css";
import esummit from "./assets/Esummit.jpg";
import fest from "./assets/KonarkTechfest.jpg";
import learn from "./assets/LearnersClub.jpg";
import pitch from "./assets/PitchPoint.jpg";
import sih from "./assets/SIH.jpg";
import { useState} from "react";

function Homeinit(){
    const [showEsummitMessage, setShowEsummitMessage] = useState(false);

    const handleEsummitClick = (e) => {
    e.preventDefault();
    setShowEsummitMessage(true);
    setTimeout(() => {
      setShowEsummitMessage(false);
    }, 2500);
    setNav(false);
  };

    return(
        <>

        {/* Sliding message */}
      {showEsummitMessage && <div className="esummit-toast">🚧 Coming Soon</div>}

            <section id="initiative" className="blacksec">
                <div className="initheading">OUR INITIATIVES</div>
                <div className="cardcontainer">
                    <div className="leftcont">
                        <div className="initcard">
                            <article className="initimgcont">
                                <img src={fest} alt="about section" loading="lazy"/>
                            </article>
                            <h2>Konark TechFest</h2>
                            <p>Our flagship tech fest, celebrating creativity, coding, and cutting-edge technology with workshops, hackathons, and competitions.</p>
                            <a className="esummitlink" href="https://konark26.iconnectgjust.in" target="_blank" rel="noopener noreferrer">Learn more</a>
                        </div>
                        <div className="initcard">
                            <article className="initimgcont">
                                <img src={esummit} alt="about section" loading="lazy"/>
                            </article>
                            <h2>E-Summit</h2>
                            <p>A grand entrepreneurship summit featuring keynote speakers, startup founders, panel discussions, and idea showcases.</p>
                             <a className="esummitlink" href="https://esummit.iconnectgjust.in" target="_blank" rel="noopener noreferrer">Learn more</a>
                        </div>
                    </div>
                    <div className="middlecont">
                            <div className="initcard">
                                <article className="initimgcont">
                                    <img src={pitch} alt="about section" loading="lazy"/>
                                </article>
                                <h2>Pitch Point</h2>
                                <p>A high-energy pitch competition where young innovators and aspiring entrepreneurs present their startup ideas to real investors and mentors.</p>
                                <div onClick={handleEsummitClick}>Learn more</div>
                            </div>
                    </div>
                    <div className="rightcont">
                        <div className="initcard">
                             <article className="initimgcont">
                                <img src={learn} alt="about section" loading="lazy"/>
                            </article>
                            <h2>iConnect Learners</h2>
                            <p>A continuous learning initiative focused on student upskilling via training sessions, technical talks, and hands-on workshops.</p>
                            <div onClick={handleEsummitClick}>Learn more</div>
                        </div>
                        <div className="initcard">
                             <article className="initimgcont">
                                <img src={sih} alt="about section" loading="lazy"/>
                            </article>
                            <h2>Smart India Hackathon(SIH)</h2>
                            <p>A national-level hackathon where our team not only competes but also organizes internal hackathons and mentorship drives.</p>
                            <div onClick={handleEsummitClick}>Learn more</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Homeinit