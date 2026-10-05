function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">

      <div className="bg-white dark:bg-green-900 rounded-2xl shadow-lg border border-green-100 dark:border-green-800 p-8">

        <p className="text-green-800 dark:text-green-400 font-semibold uppercase tracking-wider text-sm">
          Team Directory
        </p>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">
          About
        </h1>

        <p className="mt-6 text-gray-600 dark:text-green-100 leading-7">
          TeamDirectory is a React-based team directory application
          created using Vite and Tailwind CSS.
        </p>

        <p className="mt-4 text-gray-600 dark:text-green-100 leading-7">
          The application allows users to browse team members,
          search for specific members, view their profiles, and
          manage favorite team members.
        </p>

        <div className="mt-8">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Technologies Used
          </h2>

          <ul className="mt-4 space-y-3 text-gray-600 dark:text-green-100">
            <li>React</li>
            <li>Vite</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
            <li>JavaScript</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default About;