import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import usersData from "../data/users";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const selectedUser = usersData.find(
      (user) => user.id === Number(id)
    );

    setUser(selectedUser);

    if (selectedUser) {
      document.title = `${selectedUser.name} | TeamDirectory`;
    } else {
      document.title = "User Not Found | TeamDirectory";
    }
  }, [id]);

  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">

        <div className="text-center">

          <p className="text-6xl font-bold text-green-800 dark:text-green-400">
            404
          </p>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
            User Not Found
          </h1>

          <p className="mt-3 text-gray-600 dark:text-green-100">
            The team member you are looking for does not exist.
          </p>

          <Link
            to="/users"
            className="inline-block mt-8 bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Back to Users
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      <Link
        to="/users"
        className="inline-block text-green-800 dark:text-green-400 hover:underline font-medium"
      >
        Back to Users
      </Link>

      <div className="mt-8 bg-white dark:bg-green-900 rounded-2xl shadow-lg border border-green-100 dark:border-green-800 p-8">

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

          <div className="w-28 h-28 rounded-full bg-green-800 text-white flex items-center justify-center text-5xl font-bold">
            {user.name.charAt(0)}
          </div>

          <div className="text-center md:text-left">

            <p className="text-sm text-green-800 dark:text-green-400 font-semibold uppercase tracking-wider">
              Team Member
            </p>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
              {user.name}
            </h1>

            <p className="mt-2 text-green-800 dark:text-green-300 font-medium">
              {user.role}
            </p>

          </div>

        </div>

        {/* Information */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-green-50 dark:bg-green-800 rounded-xl p-5 border border-green-100 dark:border-green-700">

            <p className="text-sm text-gray-500 dark:text-green-200">
              Email
            </p>

            <p className="mt-2 font-semibold text-gray-900 dark:text-white break-words">
              {user.email}
            </p>

          </div>

          <div className="bg-green-50 dark:bg-green-800 rounded-xl p-5 border border-green-100 dark:border-green-700">

            <p className="text-sm text-gray-500 dark:text-green-200">
              Company
            </p>

            <p className="mt-2 font-semibold text-gray-900 dark:text-white">
              {user.company}
            </p>

          </div>

          <div className="bg-green-50 dark:bg-green-800 rounded-xl p-5 border border-green-100 dark:border-green-700">

            <p className="text-sm text-gray-500 dark:text-green-200">
              Role
            </p>

            <p className="mt-2 font-semibold text-gray-900 dark:text-white">
              {user.role}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UserDetails;