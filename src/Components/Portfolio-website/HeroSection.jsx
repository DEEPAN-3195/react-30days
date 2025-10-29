import React from "react";

export default function HeroSection() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gradient-to-b from-indigo-50 to-white">

            <div className="text-center md:text-left space-y-6 md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
                    Hi, I’m <span className="text-indigo-600">Deepan Raj</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
                    I’m a Frontend Developer passionate about building beautiful and responsive web applications using React and Tailwind CSS.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                        href="#projects"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all"
                    >
                        Contact Me
                    </a>
                </div>
            </div>


        </section>
    );
}
