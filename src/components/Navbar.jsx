import { NavLink } from "react-router-dom";

function Navbar({
  favoriteCount,
  darkMode,
  setDarkMode,
}) {
  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      isActive
        ? "bg-green-800 text-white"
        : "text-gray-700 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-900"
    }`;

  return (
    <nav className="bg-white/80 dark:bg-green-950/80 backdrop-blur-md border-b border-green-200/50 dark:border-green-900/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <NavLink
            to="/"
            className="text-2xl font-bold text-green-800 dark:text-green-400"
          >
            TeamDirectory
          </NavLink>

          <div className="flex flex-wrap items-center gap-2">

            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>

            <NavLink to="/users" className={linkStyle}>
              Users
            </NavLink>

            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>

            <span className="px-4 py-2 text-gray-700 dark:text-gray-200">
              Favorites: {favoriteCount}
            </span>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 transition"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;