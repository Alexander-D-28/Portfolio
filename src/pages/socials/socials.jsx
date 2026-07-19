import "./socials.css";

import GmailIcon from "../../images/socialIcons/Gmail.png";
import LinkedInIcon from "../../images/socialIcons/LinkedIn.png";
import GithubIcon from "../../images/socialIcons/Github.png";
import StravaIcon from "../../images/socialIcons/Strava.png";

export default function Contact() {
    return (
        <div className="contact">
            <div className="heading">
                <h3>I'd love to connect! The best way to reach me is by email or LinkedIn.</h3>
            </div>

            <div className="social">
                <div className="email">
                    <a href="mailto:justalexander28@gmail.com">
                        <img src={GmailIcon} height="30px"/>
                    </a>
                    <p>Email:</p>
                    <a href="mailto:justalexander28@gmail.com">justalexander28@gmail.com</a>
                </div>
            </div>

            <div className="social">
                <div className="linkedIn">
                    <a href="https://www.linkedin.com/in/alexander-r-d" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInIcon} height="30px"/>
                    </a>
                    <p>LinkedIn:</p>
                    <a href="https://www.linkedin.com/in/alexander-r-d" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/alexander-r-d</a>
                </div>
            </div>

            <div className="social">
                <div className="github">
                    <a href="https://github.com/Alexander-D-28" target="_blank" rel="noopener noreferrer">
                        <img src={GithubIcon} height="30px"/>
                    </a>
                    <p>Github:</p>
                    <a href="https://github.com/Alexander-D-28" target="_blank" rel="noopener noreferrer">https://github.com/Alexander-D-28</a>
                </div>
                <div className="details">
                    <p>Note: Many of my repositories are private, including work completed during my internship using company-managed GitHub accounts, so my public GitHub doesn't reflect everything I've built.</p>
                </div>
            </div>

            <div className="social">
                <div className="strava">
                    <a href="https://www.strava.com/athletes/140071846" target="_blank" rel="noopener noreferrer">
                        <img src={StravaIcon} height="30px"/>
                    </a>
                    <p style={{ marginLeft: "-5px" }}>Strava:</p>
                    <a href="https://www.strava.com/athletes/140071846" target="_blank" rel="noopener noreferrer">https://www.strava.com/athletes/140071846</a>
                </div>
                <div className="details">
                    <p>Outside of software, I enjoy spending time outdoors, especially cycling and skiing. I stay active year-round and regularly share my rides on Strava if you're curious about what I do beyond coding feel free to check out my Strava.</p>
                </div>
            </div>
        </div>
    );
}