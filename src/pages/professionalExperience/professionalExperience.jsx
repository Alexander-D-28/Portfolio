import "./professionalExperience.css";

import tvhLogo from "../../images/Treevah logo.png";
import contributions from "../../images/Contributions.png";
import breakdown from "../../images/Breakdown.png";
import MTULogo from "../../images/MTU logo.png";
import HIDELogo from "../../images/HIDE logo.png";

export default function Experience() {
    return (
        <div classNameName="professionalExp">
            <div className="exp">
                <div className="content">
                    <div className="top-content">
                        <a href="https://www.treevah.com" target="_blank" rel="noopener noreferrer">
                            <img src={tvhLogo} id="tvhLogo" />
                        </a>
                        <div>
                            <h3>Software Engineer Intern @ Treevah</h3>
                            <h4>- Summer 2026</h4>
                        </div>
                    </div>
                    <p>
Treevah is an AI file managing system platform focused on reinventing the traditional folder.
</p>
<p>
As a member of the front-end team, I developed and implemented user-facing features using
JavaScript, React, HTML, and CSS. Midway through my internship, I was promoted to Front-End Team Lead, 
where I was overseeing a team of six interns while continuing to contribute directly to product development.
</p>
<p>
In addition to developing new features, I coordinated tasks across the front-end team, 
collaborated with design and other leads, reviewed feature implementations, managed the pull request process, 
and provided technical guidance to interns to ensure high-quality code and smooth production.
                    </p>
                </div>
                <div className="githubLogs">
                    <img src={contributions} id="contributions" />
                    <img src={breakdown} id="breakdown" />
                </div>
            </div>

            <div className="exp">
                <div className="content">
                    <div className="top-content">
                        <a href="https://sam.cs.mtu.edu" target="_blank" rel="noopener noreferrer">
                            <img src={MTULogo} id="MTULogo" />
                        </a>
                        <div>
                            <h3>SAM Leader @ Michigan Tech College of Computing</h3>
                            <h4>- January 2026 - Present (During Academic Semesters)</h4>
                        </div>
                    </div>
                    <p>
The SAM Program was created by Michigan Tech's College of Computing to help 
students succeed in four of its most challenging computer science courses.
</p>
<p>
I worked as a Student Academic Mentor for Data Structures and Algorithms (CS2321) where I led after-class review sessions,
created study materials and practice problems, taught Java concepts, and mentored students through difficult 
course topics. The most rewarding part of the role was watching students grow in confidence and understanding 
throughout the semester, and hearing how the SAM sessions helped them succeed in one of the program's most demanding courses.
                    </p>
                </div>
            </div>

            <div className="exp">
                <div className="content">
                    <div className="top-content">
                        <a href="https://hide.cs.mtu.edu" target="_blank" rel="noopener noreferrer">
                            <img src={HIDELogo} id="HIDELogo" />
                        </a>
                        <div>
                            <h3>Student Software Developer + Treasurer @ HIDE</h3>
                            <h4>- August 2025 - Present (During Academic Semesters)</h4>
                        </div>
                    </div>
                    <p>
HIDE (Humane Interface Design Enterprise) is an organization at Michigan Technological University that gives students the 
opportunity to gain real-world software engineering experience by working on projects for external clients. 
</p>
<p>
I am part of the YooPapers subteam, where I contributed to a web application that assists in the process of serving court
documents across Michigan's Upper Peninsula by programming through TypeScript, React, Tailwind CSS, Next.js, and Firebase.
I was also elected Treasurer for the following year, where I manage a multi-thousand-dollar budget for a 40-member software 
engineering organization.
                    </p>
                </div>
            </div>
        </div>
    );
}