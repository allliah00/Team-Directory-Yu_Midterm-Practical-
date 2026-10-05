function Loader() {
  return (
    <div className="flex justify-center items-center py-16">

      <div className="w-10 h-10 border-4 border-green-800 border-t-transparent rounded-full animate-spin"></div>

      <span className="ml-3 text-gray-600 dark:text-green-200">
        Loading users...
      </span>

    </div>
  );
}

export default Loader;