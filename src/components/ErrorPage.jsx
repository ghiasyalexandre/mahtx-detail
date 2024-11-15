import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-white/20 dark:via-transparent">
      <div className="container flex items-center min-h-96 px-6 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-white rounded-full bg-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-gray-800 dark:text-white md:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            The page you are looking for does not exist. Here are some helpful
            links:
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Link to=".." aria-label="Previous Page">
              <button
                aria-label="Go Back"
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-all duration-300 bg-black border rounded-lg gap-x-2 sm:w-auto dark:bg-white dark:hover:bg-black dark:hover:border-white dark:hover:text-white dark:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>Go back</span>
              </button>
            </Link>
            <Link to="/" aria-label="Homepage">
              <button
                aria-label="Go Home"
                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-all duration-300 bg-black dark:bg-white dark:hover:bg-black dark:hover:border-white dark:hover:text-white dark:text-black  rounded-lg shrink-0 sm:w-auto "
              >
                Take me home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
