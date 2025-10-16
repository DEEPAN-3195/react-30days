import { FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function ProfileCard() {
    const user = {
        name: "Nick Romen",
        title: "Senior Software Developer",
        location: "Bangalore",
        bio: "Passionate about building beautiful, accessible, and user-friendly web experiences. Turning ideas into reality with React and coffee.",
        skills: ["React", "Tailwind", "CSS", "Figma", "GraphQL", "HTML", "TypeScript"],
        avatarUrl: "https://randomuser.me/api/portraits/men/42.jpg",
        coverImg: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop",
        social: {
            github: "https://github.com",
            linkin: "https://linkedin.com",
            twitter: "https://twitter.com",
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-emerald-500 to-emerald-900 p-4">
            <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                    <img className="w-full h-32 object-cover" src={user.coverImg} alt="Cover bg" />
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-16">
                        <img
                            className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-md"
                            src={user.avatarUrl} alt={user.name} />
                    </div>
                </div>

                <div className="pt-20 pb-8 px-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {user.name}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">{user.title}</p>
                    <div className="flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500 mt-2">
                        <FaMapMarkerAlt />
                        <span>{user.location}</span>
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">{user.bio}</p>

                    <div className='mt-6'>

                        <h2 className='text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2'>SKILLS</h2>
                        <div className='flex flex-wrap justify-center gap-2'>
                            {user.skills.map((skill) =>
                                <span
                                    key={skill}
                                    className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-xs font-semibold px-3 py-1 rounded-full"
                                >
                                    {skill}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-4 mt-8'>
                        <a href={user.social.github}>
                            < FaGithub size={24} />
                        </a>
                        <a href={user.social.linkin}>
                            < FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}