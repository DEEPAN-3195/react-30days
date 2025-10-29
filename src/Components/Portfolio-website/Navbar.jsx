import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
            <h1 className="text-xl font-bold">MyPortfolio</h1>
            <div className="space-x-6">
                <Link to="/portfolio">Home</Link>
                <Link to="/portfolio/about">About</Link>
                <Link to="/portfolio/projects">Projects</Link>
                <Link to="/portfolio/contact">Contact</Link>
            </div>
        </nav>
    );
}
