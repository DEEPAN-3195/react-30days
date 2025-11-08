import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProfileCard() {
    const user = {
        name: "Nick Romen",
        title: "Senior Software Developer",
        location: "Bangalore",
        bio: "Passionate about building beautiful, accessible, and user-friendly web experiences. Turning ideas into reality with React and coffee.",
        skills: ["React", "Tailwind", "CSS", "Figma", "GraphQL", "HTML", "TypeScript"],
        avatarUrl: "https://randomuser.me/api/portraits/men/42.jpg",
        coverImg:
            "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop",
        social: {
            github: "https://github.com",
            linkin: "https://linkedin.com",
            twitter: "https://twitter.com",
        },
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary-light to-primary-light dark:from-neutral-light dark:to-neutral-light p-4 transition-colors duration-500">
            <div className="w-full max-w-xs sm:max-w-sm bg-white dark:bg-neutral-card p-5 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-neutral-border dark:border-neutral-border/50">
                {/* Cover Image */}
                <div className="relative">
                    <img
                        className="w-full h-24 object-cover rounded-t-2xl"
                        src={user.coverImg}
                        alt="Cover background"
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-12">
                        <img
                            className="w-24 h-24 rounded-full border-4 border-white dark:border-neutral-border shadow-md"
                            src={user.avatarUrl}
                            alt={user.name}
                        />
                    </div>
                </div>

                {/* Info Section */}
                <div className="pt-16 pb-6 px-4 text-center">
                    <h1 className="text-xl font-bold text-neutral-textDark dark:text-neutral-textLight">
                        {user.name}
                    </h1>
                    <p className="text-neutral-textDark/70 dark:text-neutral-textLight/70 text-sm font-medium">
                        {user.title}
                    </p>

                    <div className="flex items-center justify-center gap-2 text-neutral-textDark/60 dark:text-neutral-textLight/60 mt-2 text-sm">
                        <FaMapMarkerAlt />
                        <span>{user.location}</span>
                    </div>

                    <p className="mt-3 text-neutral-textDark/80 dark:text-neutral-textLight/80 text-sm leading-relaxed">
                        {user.bio}
                    </p>

                    {/* Skills */}
                    <div className="mt-5">
                        <h2 className="text-xs font-semibold text-neutral-textDark/70 dark:text-neutral-textLight/70 mb-2">
                            SKILLS
                        </h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            {user.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-primary-soft text-primary-dark dark:bg-primary-dark dark:text-primary-soft text-xs font-semibold px-3 py-1 rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center items-center gap-5 mt-6">
                        <a
                            href={user.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-dark dark:text-primary-soft hover:text-primary-hover dark:hover:text-primary-light transition-colors"
                        >
                            <FaGithub size={22} />
                        </a>
                        <a
                            href={user.social.linkin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-dark dark:text-primary-soft hover:text-primary-hover dark:hover:text-primary-light transition-colors"
                        >
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
