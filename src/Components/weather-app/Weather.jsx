import { useState } from "react";
import { useWeather } from "./useWeather";

export default function WeatherApp() {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("");

    const { data, isLoading, isError, refetch } = useWeather(search);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(city);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-6">
            {/* Header */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                🌤️ Weather App
            </h1>

            {/* Search Box */}
            <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-md mb-6"
            >
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md transition-colors"
                >
                    Search
                </button>
            </form>

            {/* Feedback */}
            {isLoading && <p className="text-gray-800 dark:text-gray-200 mb-4">Loading...</p>}
            {isError && <p className="text-red-600 dark:text-red-400 mb-4">City not found!</p>}

            {/* Weather Card */}
            {data && (
                <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-gray-900 dark:text-gray-100 transition-colors">
                    <h2 className="text-2xl font-semibold mb-2">{data.name}</h2>
                    <p className="text-xl mb-1">🌡️ {data.main.temp}°C</p>
                    <p className="mb-1">💧 Humidity: {data.main.humidity}%</p>
                    <p className="mb-4">🌬️ Wind: {data.wind.speed} m/s</p>
                    <button
                        onClick={() => refetch()}
                        className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                    >
                        Refresh
                    </button>
                </div>
            )}
        </div>
    );
}
