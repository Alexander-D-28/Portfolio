import "./App.css";

import Sidebar from "./components/sidebar/sidebar";

import Home from "./pages/home/home";
import Experience from "./pages/professionalExperience/professionalExperience";
import Projects from "./pages/personalProjects/personalProjects";
import Techstack from "./pages/techstack/techstack";
import Coursework from "./pages/coursework/coursework";
import Contact from "./pages/socials/socials";

import { useState } from "react";

function App() {

    const [page, setPage] = useState("home");


    function displayPage() {

        if (page === "home") {
            return <Home />;
        }

        if (page === "experience") {
            return <Experience />;
        }

        if (page === "projects") {
            return <Projects />;
        }

        if(page === "techstack") {
          return <Techstack />;
        }

        if (page === "coursework") {
            return <Coursework />;
        }

        if (page === "contact") {
            return <Contact />;
        }

    }


    return (
        <>
            <Sidebar setPage={setPage} />

            <main>
                {displayPage()}
            </main>
        </>
    );
}

export default App;