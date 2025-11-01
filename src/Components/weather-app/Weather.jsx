

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
            <h1 className="text-3xl font-bold mb-4">🌤️ Weather App</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border px-3 py-2 rounded-md"
                />
                <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md">
                    Search
                </button>
            </form>

            {isLoading && <p>Loading...</p>}
            {isError && <p>City not found!</p>}

            {data && (
                <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold">{data.name}</h2>
                    <p>🌡️ {data.main.temp}°C</p>
                    <p>💧 Humidity: {data.main.humidity}%</p>
                    <p>🌬️ Wind: {data.wind.speed} m/s</p>
                    <button
                        onClick={() => refetch()}
                        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md"
                    >
                        Refresh
                    </button>
                </div>
            )}
        </div>
    );
}
