import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">

      <div className="text-center">

        <p className="text-8xl font-bold text-green-800 dark:text-green-400">
          404
        </p>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
          Page Not Found
        </h1>

        <p className="text-gray-600 dark:text-green-100 mt-3">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg"
        >
          Go Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;