import "./sidebar.css";

import Dog from "../dog/dog"

function Sidebar({page, setPage}) {
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
                <button
                    className={page === "coursework" ? "selected" : ""}
                    onClick={() => setPage("coursework")}
                >
                    Coursework
                </button>
                <button
                    className={page === "contact" ? "selected" :""}
                    onClick={() => setPage("contact")}
                >
                    Socials / Contact Info
                </button>
            </div>

        </aside>
    );
}

export default Sidebar;