import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  //const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    // Apply theme to the body class
    document.documentElement.className = theme;
    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="shadow-neonDark dark:shadow-neonLight z-50">
      <div className="px-4 py-4">
        <div className="md:flex md:items-center">
          <div className="flex items-center justify-between ">
            <Link to="/">
              <img
                className="w-auto h-16 scale-110 hover:scale-125 transition-transform ease-in-out duration-300"
                src="./logoTrimCropped.webp"
                alt="logo"
              />
            </Link>

            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`inset-x-0 z-20 flex-1 w-full px-4 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${
              isOpen
                ? "translate-x-0 opacity-100 pb-2 "
                : "opacity-0 -translate-x-full absolute"
            }`}
          >
            <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex md:px-4 md:-mx-4 md:flex-row md:items-center">
              <Link
                to="/"
                draggable={false}
                className="mt-2 hover:underline-offset-8 hover:underline transition-colors duration-300 transform md:mt-0 md:mx-4 hover:text-gray-200"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                draggable={false}
                className="mt-2 hover:underline-offset-8 hover:underline  transition-colors duration-300 transform md:mt-0 md:mx-4  hover:text-gray-200"
              >
                Gallery
              </Link>
              <Link
                to="/booking"
                draggable={false}
                className="mt-2 hover:underline-offset-8 hover:underline  transition-colors duration-300 transform md:mt-0 md:mx-4 hover:text-gray-200"
              >
                Booking
              </Link>
              <Link
                to="/contact"
                draggable={false}
                className="mt-2 hover:underline-offset-8 hover:underline  transition-colors duration-300 transform md:mt-0 md:mx-4 hover:text-gray-200"
              >
                Contact
              </Link>
              <Link
                to="/about"
                draggable={false}
                className="mt-2 hover:underline-offset-8 hover:underline  transition-colors duration-300 transform md:mt-0 md:mx-4 hover:text-gray-200"
              >
                About Us
              </Link>
              <Link
                to="/faq"
                draggable={false}
                className="mt-2 hover:underline-offset-8 hover:underline  transition-colors duration-300 transform md:mt-0 md:mx-4 hover:text-gray-200"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="absolute flex right-2 bottom-2 z-50 md:static md:mr-0">
            <div className="flex justify-end transition-all ease-in-out duration-300">
              <a
                href="https://www.instagram.com/mahtx.detailco/"
                target="blank"
                className="hidden md:block mx-1 lg:mx-2 p-2 font-semibold text-white border-black  bg-black hover:border-white hover:bg-neutral-200 focus:ring-2 ring-white hover:text-black rounded-full transition-colors ease-in-out duration-300"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
              <button
                onClick={toggleTheme}
                className="mx-1 lg:mx-2 p-2 font-semibold text-black bg-white/30 md:bg-white/80 border-black dark:text-white dark:bg-black/30 dark:hover:bg-neutral-200 dark:hover:text-black hover:border-white hover:bg-neutral-800 hover:text-neutral-300 rounded-full"
              >
                {theme === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
