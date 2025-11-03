

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 dark:bg-gray-900 transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                🌤️ Weather App
            </h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded-md focus:outline-none"
                />
                <button className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                    Search
                </button>
            </form>

            {isLoading && <p className="text-gray-800 dark:text-gray-200">Loading...</p>}
            {isError && <p className="text-red-600 dark:text-red-400">City not found!</p>}

            {data && (
                <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-gray-900 dark:text-gray-100">
                    <h2 className="text-2xl font-semibold">{data.name}</h2>
                    <p>🌡️ {data.main.temp}°C</p>
                    <p>💧 Humidity: {data.main.humidity}%</p>
                    <p>🌬️ Wind: {data.wind.speed} m/s</p>
                    <button
                        onClick={() => refetch()}
                        className="mt-2 px-3 py-1 bg-blue-500 hover:bg-primary text-white rounded-md"
                    >
                        Refresh
                    </button>
                </div>
            )}
        </div>
    );
}
