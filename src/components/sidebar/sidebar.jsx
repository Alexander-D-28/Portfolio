import "./sidebar.css";

import Dog from "../dog/dog"

function Sidebar({setPage}) {
    return (
        <aside className="sidebar">

            <div className="title">
                <h2>Alexander's Portfolio</h2>
            </div>
            <div className="dog">
                <Dog />
            </div>
    
            <div className="pages">
                <button onClick={() => setPage("home")}>
                    Home
                </button>
                <button onClick={() => setPage("experience")}>
                    Professional Experience
                </button>
                <button onClick={() => setPage("projects")}>
                    Personal Projects
                </button>
                <button onClick={() => setPage("techstack")}>
                    Techstack
                </button>
                <button onClick={() => setPage("coursework")}>
                    Coursework
                </button>
                <button onClick={() => setPage("contact")}>
                    Socials / Contact Info
                </button>
            </div>

        </aside>
    );
}

export default Sidebar;