import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );
  }, [darkMode]);

  return (
    <BrowserRouter>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-green-950 dark:via-green-900 dark:to-green-950 transition-colors">

        <Navbar
          favoriteCount={favorites.length}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/users"
              element={
                <Users
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />

            <Route
              path="/users/:id"
              element={<UserDetails />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </main>

        <footer className="bg-white dark:bg-green-950 border-t border-green-200 dark:border-green-900 mt-16">

          <div className="max-w-6xl mx-auto px-4 py-6 text-center">

            <p className="text-gray-500 dark:text-green-200">
              © 2026 TeamDirectory
            </p>

          </div>

        </footer>

      </div>

    </BrowserRouter>
  );
}

export default App;