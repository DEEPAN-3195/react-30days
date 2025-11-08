import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("Please fill in all fields.");
            return;
        }
        setError("");
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-light dark:bg-neutral-dark transition-colors duration-300">
            <div className="w-full max-w-md bg-white dark:bg-neutral-card shadow-xl rounded-2xl p-8 border border-neutral-border transition-colors duration-300">
                <h2 className="text-3xl font-bold text-center text-primary-dark dark:text-primary-light mb-6">
                    Create Account
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-neutral-textDark dark:text-neutral-textLight mb-1">
                            Name
                        </label>
                        <input
                            value={name}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-neutral-border rounded-lg bg-neutral-soft dark:bg-neutral-dark text-neutral-textDark dark:text-neutral-textLight focus:outline-none focus:ring-2 focus:ring-primary-hover transition"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-textDark dark:text-neutral-textLight mb-1">
                            Email
                        </label>
                        <input
                            value={email}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-neutral-border rounded-lg bg-neutral-soft dark:bg-neutral-dark text-neutral-textDark dark:text-neutral-textLight focus:outline-none focus:ring-2 focus:ring-primary-hover transition"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-textDark dark:text-neutral-textLight mb-1">
                            Password
                        </label>
                        <input
                            value={password}
                            type="password"
                            placeholder="Create a password"
                            className="w-full px-4 py-2 border border-neutral-border rounded-lg bg-neutral-soft dark:bg-neutral-dark text-neutral-textDark dark:text-neutral-textLight focus:outline-none focus:ring-2 focus:ring-primary-hover transition"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && (
                        <p className="text-secondary text-sm text-center">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-hover text-white dark:bg-primary-dark dark:hover:bg-primary text-primary-contrast font-semibold py-2 rounded-lg shadow-md transition-all"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-sm text-center text-neutral-textDark dark:text-neutral-textLight mt-5">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-secondary hover:text-secondary-hover dark:text-secondary-soft dark:hover:text-secondary transition"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
