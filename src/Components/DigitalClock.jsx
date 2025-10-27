import React, { useEffect, useState } from "react";

export default function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, [])

    const formatTime = (num) => String(num).padStart(2, "0");
    const h = formatTime(time.getHours());
    const m = formatTime(time.getMinutes());
    const s = formatTime(time.getSeconds());

    const formatMonth = (time) => {
        const option = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
        return time.toLocaleDateString(undefined, option)
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">

            <div className="bg-white dark:bg-gray-800 px-6 py-4 rounded-2xl shadow-md text-center">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4 tracking-wide">
                    Digital Clock
                </h2>
                <h1 className="text-5xl font-mono text-gray-900 dark:text-white mb-2">
                    {h}:{m}:{s}{time.getHours() < 12 ? " AM" : " PM"}
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                    {formatMonth(time)}
                </p>
            </div>
        </div>
    );

}