import {useState} from "react";
import "./sidebar.css";
import Dog from "../dog/dog"

function Sidebar({page, setPage}) {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <aside className="sidebar">

            <div className="title">
                <h2>Alexander's Portfolio</h2>
            </div>
            <div className="dog" title="Click the dog">
                <Dog />
            </div>
    
            <div className="pages">
                <button 
                    className={page === "home" ? "selected" : ""}
                    onClick={() => setPage("home")}
                >
                    Home
                </button>
                <button
                    className={page === "experience" ? "selected" : ""}
                    onClick={() => setPage("experience")}
                >
                    Professional Experience
                </button>
                <button
                    className={page === "projects" ? "selected" : ""}
                    onClick={() => setPage("projects")}
                >
                    Personal Projects
                </button>
                <button
                    className={page === "techstack" ? "selected" : ""}
                    onClick={() => setPage("techstack")}
                >
                    Techstack
                </button>
                {/* <button
                    className={page === "coursework" ? "selected" : ""}
                    onClick={() => setPage("coursework")}
                >
                    Coursework
                </button> */}
                <button
                    className={page === "contact" ? "selected" :""}
                    onClick={() => setPage("contact")}
                >
                    Socials / Contact Info
                </button>
            </div>

            <div 
                className="version"
                onClick={() => setShowPopup(true)}
            >
                <p>Version: 3.4</p>
            </div>
            {showPopup && (
                <div 
                    className="popup-overlay"
                    onClick={() => setShowPopup(false)}
                >
                    <div
                        className="popup"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="popup-content">
                            <div className="topGroup-popup">
                                <h3>Version 3.4</h3>
                                <button
                                    className="close-popup"
                                    title="Close Popup"
                                    onClick={() => setShowPopup(false)}
                                >
                                    X
                                </button>
                            </div>
                            <p>Last Updated: 8/21/2026</p>
                            <p>Recent updates to my portfolio include the following:</p>
                            <ul className="newAdditions">
                                <li>Version History Popup Details</li>
                                <li>Treevah github images</li>
                                <li>Techstack updates</li>
                            </ul>
                        </div>
                        <p className="future">Many more updates are planned for my portfolio, stay tunned :)</p>
                    </div>
                </div>
            )}

        </aside>
    );
}

export default Sidebar;