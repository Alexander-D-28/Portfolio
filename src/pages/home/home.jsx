import "./home.css";

import tvhLogo from "../../assets/images/Treevah logo.png";
import MTULogo from "../../assets/images/MTU logo.png";
import HIDELogo from "../../assets/images/HIDE logo.png";
import BrockwayBike from "../../assets/images/BrockwayBike.jpg";

export default function Home() {
    return (
        <div classNameName="home">
            <div className="rotatingImages">
                <div className="leftIcons">
                    <a href="https://www.treevah.com" target="_blank" rel="noopener noreferrer">
                        <img src={tvhLogo} id="tvhLogo"/>
                    </a>
                    <a href="https://sam.cs.mtu.edu" target="_blank" rel="noopener noreferrer">
                        <img src={MTULogo} id="MTULogo"/>
                    </a>
                </div>
                <button style={{ margin: '30px' }}>left</button>
                <img src={BrockwayBike} id="bikeImg"/>
                <button style={{ margin: '30px' }}>right</button>
                <div className="rightIcons">
                    <a href="https://hide.cs.mtu.edu" target="_blank" rel="noopener noreferrer">
                        <img src={HIDELogo} id="hideLogo"/>
                    </a>
                </div>
            </div>
            <div className="aboutMe">
                <p className="aboutMeText">
                    Hi, I'm Alexander Dobek, a third-year Software Engineering student at Michigan Technological University. 
                    I'm passionate about solving problems through software and continuously expanding my technical skills. 
                    This portfolio showcases my professional experience, personal projects, coursework, and the technologies 
                    I've worked with throughout my academic and professional journey. Whether you're here to learn more 
                    about me or explore my work, I hope you enjoy your visit.
                </p>
            </div>
            <p style={{textAlign: "center"}}>Please note this site is a work in progress and this a very rough start</p>
        </div>
    );
}