import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-indigo-600">
                    MyApp
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-indigo-600 transition ${isActive ? "font-semibold text-indigo-600" : ""
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-700"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Links */}
            {open && (
                <div className="md:hidden bg-white shadow-md">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-indigo-50 ${isActive ? "font-semibold text-indigo-600" : ""
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
}
