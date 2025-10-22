import { useState } from "react";

export default function CounterApp() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-blue-200">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">⚡Counter App</h1>

                <div className="text-6xl font-extrabold text-blue-600 mb-6 select-none">
                    {count}
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setCount(count - 1)}
                        className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
                    >
                        -
                    </button>

                    <button
                        onClick={() => setCount(0)}
                        className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-lg transition"
                    >
                        Reset
                    </button>

                    <button
                        onClick={() => setCount(count + 1)}
                        className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
