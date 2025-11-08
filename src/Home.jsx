import { Link } from "react-router-dom";

const projects = [
  { day: "01", title: "Profile Card", path: "/profile-card" },
  { day: "03", title: "Counter App", path: "/counter-app" },
  { day: "05", title: "Todo List", path: "/todo-list" },
  { day: "07", title: "Digital Clock", path: "/digital-clock" },
  // { day: "09", title: "NavBar", path: "/navbar" },
  { day: "09", title: "Portfolio", path: "/portfolio" },
  { day: "11", title: "Login/Signup", path: "/login" },
  { day: "13", title: "Weather", path: "/weather" },
  { day: "15", title: "Shopping Cart", path: "/shopping-cart" },
  { day: "17", title: "Blogs", path: "/blogs-list" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 pt-[15vh] transition-colors duration-300">


      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {projects.map((p) => (
          <Link
            key={p.day}
            to={p.path}
            className="block p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                       shadow-md rounded-xl hover:shadow-xl hover:bg-primary-hover dark:hover:bg-secondary-hover 
                       transition-all"
          >
            <h2 className="text-xl font-semibold text-primary dark:text-secondary">
              Day {p.day}
            </h2>
            <p className="mt-2">{p.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
