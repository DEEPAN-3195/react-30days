import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeContext/ThemeToggle";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full h-[10vh] bg-neutral-light dark:bg-neutral-dark shadow-md z-50 flex items-center border-b border-neutral-border transition-colors duration-300">
            <div className="relative max-w-6xl mx-auto w-full px-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-primary dark:text-primary-light hover:text-primary-hover transition-colors duration-300"
                >
                    MyApp
                </Link>

                {/* Title */}
                <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl font-bold text-secondary dark:text-secondary-light">
                    🚀 React 30-Day Challenge
                </h1>

                {/* Theme Toggle */}
                <div className="flex items-center">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
