import { Link } from "react-router-dom";
import Button from "./button";

function UserCard({
  id,
  name,
  email,
  company,
  role,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="bg-white/75 dark:bg-green-900/75 backdrop-blur-md rounded-xl shadow-md p-6 border border-green-200/50 dark:border-green-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center justify-between mb-4">

        <div className="w-12 h-12 rounded-full bg-green-800 text-white flex items-center justify-center text-xl font-bold">
          {name.charAt(0)}
        </div>

        <button
          onClick={() => onToggleFavorite(id)}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
            isFavorite
              ? "bg-green-800 text-white"
              : "bg-green-100 text-green-800 hover:bg-green-200"
          }`}
        >
          {isFavorite ? "Favorited" : "Favorite"}
        </button>

      </div>

      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        {name}
      </h2>

      <p className="text-gray-500 dark:text-green-100 mt-1">
        {email}
      </p>

      <div className="mt-4">

        <p className="text-sm text-gray-500 dark:text-green-200">
          Company
        </p>

        <p className="font-medium text-gray-800 dark:text-white">
          {company}
        </p>

      </div>

      <div className="mt-3">

        <p className="text-sm text-gray-500 dark:text-green-200">
          Role
        </p>

        <p className="font-medium text-green-800 dark:text-green-300">
          {role}
        </p>

      </div>

      <div className="flex gap-2 mt-6">

        <Link
          to={`/users/${id}`}
          className="flex-1 text-center bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-lg transition"
        >
          View Details
        </Link>

        <Button
          variant={isFavorite ? "danger" : "primary"}
          onClick={() => onToggleFavorite(id)}
        >
          {isFavorite ? "Remove" : "Favorite"}
        </Button>

      </div>

    </div>
  );
}

export default UserCard;