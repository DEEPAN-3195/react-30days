import { Link } from "react-router-dom";

const projects = [
  { day: "01", title: "Profile Card", path: "/profile-card" },
  { day: "03", title: "Counter App", path: "/counter-app" },
  { day: "05", title: "Todo List", path: "/todo-list" },
  { day: "07", title: "Digital Clock", path: "/digital-clock" },
  { day: "09", title: "NavBar", path: "/navbar" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        🚀 React 30-Day Challenge
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {projects.map((p) => (
          <Link
            key={p.day}
            to={p.path}
            className="block p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">
              Day {p.day}
            </h2>
            <p className="text-gray-700 mt-2">{p.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
