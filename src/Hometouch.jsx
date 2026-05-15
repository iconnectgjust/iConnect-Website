import "./Hometouch.css";

function Hometouch(){
    return(
        <>
            <section id="contact" className="whitetouch">
                <div className="touchcontainer">
                    <div className="contcontents">
                        <h2>Get in touch</h2>
                        <p>You can reach us at any time</p>
                        <div className="frame1">
                            <div>Full Name</div>
                            <input type="text" placeholder="Aditya Thakur"></input>
                        </div>
                        <div className="frame1">
                            <div>Contact</div>
                            <input type="text" placeholder="+91 9456352756"></input>
                        </div>
                        <div className="frame1">
                            <div>Email</div>
                            <input type="text" placeholder="some@example.com"></input>
                        </div>
                        <div className="frame2">
                            <div>How can we help you?</div>
                            <textarea type="text" placeholder="......."></textarea>
                        </div>
                        <button className="contbutton">Submit</button>
                        <h3>Contact Us</h3>
                        <div className="iconcontent">
                            <i className='bx bx-envelope'></i>
                            <p>Email us at: iconnectgjust@gmail.com</p>
                        </div>
                         <div className="iconcontent">
                            <i className='bx bx-phone' ></i>
                            <p>Whatsapp us at: +91 9467905906</p>
                        </div>
                        <div className="endtext">iConnect Society is committed to protecting and respecting your privacy. We use your personal data to respond to your contact requests.</div>
                    </div>
                    <div className="contmap">
                        <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAwhosDyC78wZzD3UrnGzhkTgpITeQjjrw&q=Guru+Jambheshwar+University+of+Science+and+Technology,Hisar">
                        </iframe>
                    </div>
                    {/* <div className="contmap">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.743530131716!2d75.72533527598264!3d29.172229075374307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912333b75d2db1d%3A0xd3d27cd450e433e3!2sGuru%20Jambheshwar%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1750671634783!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div> */}
                </div>
            </section>
        </>
    );
}
export default Hometouch;