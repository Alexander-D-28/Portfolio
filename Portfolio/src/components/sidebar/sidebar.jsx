import "./sidebar.css";

import Dog from "../dog/dog"

function Sidebar({setPage}) {
    return (
        <aside className="sidebar">

            <h2 style={{color: "white"}}>Alexander's Portfolio</h2>

            <div className="dog" style={{color: "white"}}>
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