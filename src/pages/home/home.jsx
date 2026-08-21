import "./home.css";
import {useState} from "react";

import tvhLogo from "../../images/Treevah logo.png";
import MTULogo from "../../images/MTU logo.png";
import HIDELogo from "../../images/HIDE logo.png";

import BrockwayBike from "../../images/meImages/BrockwayBike.jpg";
import WinterBike from "../../images/meImages/WinterBike.jpg";
import SkiHike from "../../images/meImages/SkiHike.jpg";
import AlpineSki from "../../images/meImages/AlpineSki.jpg";
import LutsenSki from "../../images/meImages/LutsenSki.jpg";

const images = [
    BrockwayBike,
    WinterBike,
    SkiHike,
    AlpineSki,
    LutsenSki,
];

export default function Home() {

    const[currentImage, setCurrentImage] = useState(0);
    const nextImage = () => {
        setCurrentImage((prev) => (prev+1) % images.length);
    };
    const previousImage = () => {
        setCurrentImage((prev) => prev === 0 ? images.length-1 : prev-1);
    }

    return (
        <div className="home">
            <div className="home2">
                <h3 className="name">
                    Alexander Dobek
                </h3>
                <div className="rotatingImages">
                    <div className="arrow" title="Cycle Left">
                        <button onClick={previousImage}>←</button>
                    </div>
                    <img src={images[currentImage]} id="imageDisplay"/>
                    <div className="arrow" title="Cycle Right">
                        <button onClick={nextImage}>→</button>
                    </div>
                </div>
                <p className="quote">
                    Line by line, away we go
                </p>
                <hr></hr>
                <div className="icons">
                    <a href="https://www.treevah.com" target="_blank" rel="noopener noreferrer">
                        <img src={tvhLogo} id="tvhLogo"/>
                    </a>
                    <a href="https://sam.cs.mtu.edu" target="_blank" rel="noopener noreferrer">
                        <img src={MTULogo} id="MTULogo"/>
                    </a>
                    <a href="https://hide.cs.mtu.edu" target="_blank" rel="noopener noreferrer">
                        <img src={HIDELogo} id="hideLogo"/>
                    </a>
                </div>
                <hr></hr>
                <div className="aboutMe">
                    <p className="aboutMeText">
                        Hi, I'm Alexander Dobek, a third-year Software Engineering student at Michigan Technological University. 
                        I'm passionate about solving problems through software and continuously expanding my technical skills. 
                        This portfolio showcases my professional experience, personal projects, coursework, and the technologies 
                        I've worked with throughout my academic and professional journey. Whether you're here to learn more 
                        about me or explore my work, I hope you enjoy your visit.
                    </p>
                </div>
            </div>
        </div>
    );
}