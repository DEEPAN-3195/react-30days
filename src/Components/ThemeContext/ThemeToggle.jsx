import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all"
        >
            {theme === "light" ? (
                <Moon className="text-gray-800" />
            ) : (
                <Sun className="text-yellow-400" />
            )}
        </button>
    );
}
