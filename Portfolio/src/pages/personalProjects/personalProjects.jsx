import "./personalProjects.css";

import LeetCodeStatus from "../../assets/images/LeetCode.png";

export default function Projects() {
    return (
        <div className="personalProjects">
            <div className="projects">
                <div className="content">
                    <h3>This website (be more hireable)</h3>
                    <p>
Made this website using HTML and CSS to display more than what my resume can.
Shows a lot about me and makes me more hireable, 
hopefully :)
                    </p>
                </div>
            </div>

            <div className="projects">
                <img src={LeetCodeStatus} height="100px"/>
                <div className="content">
                    <h3>Leetcode</h3>
                    <p>I enjoy solving leetcode problems in my free time</p>
                </div>
            </div>

            <div className="projects">
                <div className="content">
                    <h3>Household Budget Tracker</h3>
                    <p>Made this during an entire semester in college with a group of four people</p>
                    <p>We used javascript, react, HTML, CSS, and firebase to create a household budget tracker</p>
                    <p>geared towards college students across four months</p>
                </div>
            </div>

            <div className="projects">
                <div className="content">
                    <h3>Online Webstore</h3>
                    <p>Worked with my friend and created basically an amazon replica for our databases class</p>
                    <p>We used PHP and HTML/CSS components for the front-end and MySQL for the backend</p>
                    <p>The focus of this was mainly the backend as part of the class but we made sure all security weakpoints were covered to prevent vulnerabilities</p>
                </div>
            </div>
        </div>
    );
}