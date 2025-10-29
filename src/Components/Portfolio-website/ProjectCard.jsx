import React from "react";

export default function ProjectCard({ title, description, link }) {
    return (
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a
                href={link}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Project →
            </a>
        </div>
    );
}
