import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">

      {/* Hero Section */}
      <section className="bg-white dark:bg-green-900 border border-green-100 dark:border-green-800 rounded-2xl shadow-sm px-6 py-16 md:px-12 text-center">

        <p className="text-green-800 dark:text-green-400 font-semibold uppercase tracking-widest text-sm">
          Team Directory
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          Meet Our Team
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-green-100 max-w-2xl mx-auto leading-relaxed">
          Discover our team members, explore their professional
          roles, and quickly find the information you need.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            to="/users"
            className="bg-green-800 hover:bg-green-900 text-white px-7 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition"
          >
            Explore Team
          </Link>
        </div>

      </section>

      {/* Features */}
      <section className="mt-16">

        <div className="text-center mb-10">
          <p className="text-green-800 dark:text-green-400 font-semibold uppercase tracking-wider text-sm">
            Features
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            Everything in One Place
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white dark:bg-green-900 border border-green-100 dark:border-green-800 p-7 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 font-bold">
              01
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-5">
              Team Directory
            </h3>

            <p className="mt-3 text-gray-600 dark:text-green-100 leading-relaxed">
              View team members and their professional information
              through a clean and organized directory.
            </p>
          </div>

          <div className="bg-white dark:bg-green-900 border border-green-100 dark:border-green-800 p-7 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 font-bold">
              02
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-5">
              Quick Search
            </h3>

            <p className="mt-3 text-gray-600 dark:text-green-100 leading-relaxed">
              Find team members quickly by searching their name
              or professional role.
            </p>
          </div>

          <div className="bg-white dark:bg-green-900 border border-green-100 dark:border-green-800 p-7 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 font-bold">
              03
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-5">
              Favorites
            </h3>

            <p className="mt-3 text-gray-600 dark:text-green-100 leading-relaxed">
              Save important team members and access their profiles
              more easily.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;