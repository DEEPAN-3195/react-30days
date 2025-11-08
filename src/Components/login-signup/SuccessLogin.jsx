export default function About() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-light dark:bg-neutral-dark transition-colors duration-300 px-4">
            <div className="text-center bg-white dark:bg-neutral-card shadow-lg rounded-2xl p-10 border border-neutral-border">
                <h2 className="text-3xl font-bold mb-4 text-primary-dark dark:text-primary-light">
                    Successfully Logged In 🎊🎊
                </h2>
                <p className="text-neutral-textDark dark:text-neutral-textLight">
                    Welcome back! You’ve successfully logged into your account.
                </p>
            </div>
        </div>
    );
}
