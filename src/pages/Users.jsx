import { useEffect, useState } from "react";
import usersData from "../data/users";
import UserCard from "../components/UserCard";
import Loader from "../components/loader";
import ErrorMessage from "../components/ErrorMessage";

function Users({ favorites, setFavorites }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Users | TeamDirectory";

    const timer = setTimeout(() => {
      try {
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        setError("Unable to load users.");
        setLoading(false);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = users.filter((user) => {
    const searchText = search.toLowerCase();

    return (
      user.name.toLowerCase().includes(searchText) ||
      user.role.toLowerCase().includes(searchText)
    );
  });

  const toggleFavorite = (id) => {
    setFavorites((previousFavorites) => {
      if (previousFavorites.includes(id)) {
        return previousFavorites.filter(
          (favoriteId) => favoriteId !== id
        );
      }

      return [...previousFavorites, id];
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <div className="text-center mb-10">

        <p className="text-green-800 dark:text-green-400 font-semibold uppercase tracking-wider text-sm">
          Team Directory
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">
          Our Team
        </h1>

        <p className="mt-3 text-gray-600 dark:text-green-100">
          Browse and search through our team members.
        </p>

      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-10">

        <label
          htmlFor="search"
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-green-100"
        >
          Search Team Members
        </label>

        <input
          id="search"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by name or role..."
          className="w-full px-4 py-3 rounded-lg border border-green-200/60 dark:border-green-700/60 bg-white/70 dark:bg-green-900/70 backdrop-blur-md text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-green-700 transition"
        />

      </div>

      {/* Results */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">

        <p className="text-gray-600 dark:text-green-100">
          Showing {filteredUsers.length} of {users.length} team members
        </p>

        <p className="text-gray-600 dark:text-green-100">
          Favorites: {favorites.length}
        </p>

      </div>

      {filteredUsers.length === 0 ? (
        <ErrorMessage message="No team members found." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              {...user}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default Users;