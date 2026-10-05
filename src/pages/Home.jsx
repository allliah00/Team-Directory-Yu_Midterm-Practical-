import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">

      {/* Hero Section */}
      <section className="text-center py-10">

        <p className="text-green-800 dark:text-green-400 font-semibold uppercase tracking-wider text-sm">
          Team Directory
        </p>

        <h1 className="mt-3 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Meet Our Team
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-green-100 max-w-2xl mx-auto leading-relaxed">
          A simple and organized way to browse team members,
          view their information, and manage your favorite members.
        </p>

        <div className="mt-8">

          <Link
            to="/users"
            className="inline-block bg-green-800 hover:bg-green-900 text-white px-7 py-3 rounded-lg font-semibold transition"
          >
            View Team Members
          </Link>

        </div>

      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 mt-12">

        <div className="bg-white dark:bg-green-900 border border-green-100 dark:border-green-800 p-7 rounded-xl shadow-sm hover:shadow-md transition">

          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 font-bold text-xl">
            01
          </div>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-5">
            Team Members
          </h2>

          <p className="mt-3 text-gray-600 dark:text-green-100 leading-relaxed">
            Browse team members and view their professional
            information in one organized directory.
          </p>

        </div>

        <div className="bg-white dark:bg-green-900 border border-green-100 dark:border-green-800 p-7 rounded-xl shadow-sm hover:shadow-md transition">

          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 font-bold text-xl">
            02
          </div>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-5">
            Easy Search
          </h2>

          <p className="mt-3 text-gray-600 dark:text-green-100 leading-relaxed">
            Quickly find team members by searching their name
            or professional role.
          </p>

        </div>

        <div className="bg-white dark:bg-green-900 border border-green-100 dark:border-green-800 p-7 rounded-xl shadow-sm hover:shadow-md transition">

          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 font-bold text-xl">
            03
          </div>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-5">
            Favorites
          </h2>

          <p className="mt-3 text-gray-600 dark:text-green-100 leading-relaxed">
            Save important team members and easily access your
            favorite profiles.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Home;