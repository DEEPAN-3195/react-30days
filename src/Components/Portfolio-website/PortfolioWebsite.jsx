import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Project.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";


export default function PortfolioWebsite() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                <Routes>
                    {/* Default: /portfolio → Home */}
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
