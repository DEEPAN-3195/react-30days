import ProjectCard from "./ProjectCard";

export default function Projects() {
    const projects = [
        { title: "Flight Booking App", description: "React + Tailwind project", link: "#" },
        { title: "Portfolio Website", description: "React Router + Tailwind", link: "#" },
    ];

    return (
        <div className="p-8 grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
                <ProjectCard key={i} {...p} />
            ))}
        </div>
    );
}
