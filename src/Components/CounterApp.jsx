import { useState } from "react";

export default function CounterApp() {
    const [count, setCount] = useState(0);

    return (
        <div
            className="flex items-center justify-center min-h-screen 
            bg-gradient-to-br from-neutral-light to-primary-soft 
            dark:from-neutral-dark dark:to-neutral-card 
            transition-colors duration-500"
        >
            <div
                className="w-full max-w-sm 
                bg-white dark:bg-neutral-card 
                rounded-2xl shadow-xl p-8 text-center 
                border border-neutral-border transition-all duration-500"
            >
                {/* Title */}
                <h1 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-6">
                    ⚡ Counter App
                </h1>

                {/* Count Display */}
                <div className="text-6xl font-extrabold text-primary hover:text-primary-hover dark:text-primary-light mb-6 select-none transition-colors duration-300">
                    {count}
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                    {/* Decrease Button */}
                    <button
                        onClick={() => {
                            if (count > 0) setCount(count - 1);
                        }}
                        className={`px-5 py-2 font-semibold rounded-lg transition-colors duration-300
                            ${count === 0
                                ? "bg-neutral-light text-neutral-textDark dark:bg-neutral-dark dark:text-neutral-textLight cursor-not-allowed"
                                : "bg-primary hover:bg-primary-dark dark:bg-primary hover:dark:bg-primary-hover text-primary-contrast"
                            }`}
                        disabled={count === 0}
                    >
                        -
                    </button>

                    {/* Reset Button */}
                    <button
                        onClick={() => setCount(0)}
                        className="px-5 py-2 font-semibold rounded-lg 
                            bg-secondary-soft hover:bg-secondary-hover 
                            text-secondary-dark 
                            dark:bg-neutral-dark dark:hover:bg-neutral-border 
                            dark:text-neutral-textLight 
                            transition-colors duration-300"
                    >
                        Reset
                    </button>

                    {/* Increase Button */}
                    <button
                        onClick={() => setCount(count + 1)}
                        className="px-5 py-2 font-semibold rounded-lg 
                            bg-secondary hover:bg-secondary-dark 
                            text-secondary-contrast 
                            dark:bg-secondary hover:dark:bg-secondary-hover 
                            transition-colors duration-300"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
