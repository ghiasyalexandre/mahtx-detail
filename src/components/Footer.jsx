import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation(); // Get the current location
  const showFooter = `${location.pathname}` === "/customizer" ? false : true;

  return (
    <>
      {showFooter && (
        <footer className={``}>
          <div className="px-4 py-4 mx-auto">
            <div className="flex flex-col items-center text-center">
              <Link
                to="/"
                draggable={false}
                aria-label="Go Home"
                className="relative inline-block"
              >
                <img
                  className="w-auto h-32 hover:scale-110 transition-transform duration-500 ease-in-out"
                  src="./logoCropped.webp"
                  alt=""
                  aria-label="Logo"
                  draggable={false}
                />
              </Link>

              <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                <Link
                  to="/services"
                  draggable={false}
                  aria-label="View Services"
                  className="px-5 py-2 text-sm font-semibold tracking-wide shadow-lg scale-105 text-black hover:shadow-white/30 hover:scale-110 transition-all capitalize  duration-300 transform bg-white rounded-md sm:mx-2 sm:order-2 w-64  focus:outline-none focus:ring focus:ring-neutral-300 dark:focus:ring-white focus:ring-opacity-80"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <hr className="my-8 border-neutral-700 dark:border-neutral-700" />

            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
              <p className="text-sm text-neutral-500">
                © 2024, MahtX Detail Co
              </p>

              {/* Payment Icons */}
              <div className="flex gap-2 py-1 pt-4 sm:pt-1 justify-center">
                <div className="bg-white pt-1 h-8 w-10 rounded-md flex align-middle justify-center">
                  <img
                    className="w-6 h-6"
                    src="./paypal-icon.svg"
                    draggable={false}
                  />
                </div>
                <div className="bg-blue-400 pt-0 h-8 w-10 rounded-md flex align-middle justify-center">
                  <img
                    className="w-7 h-8"
                    src="./venmo-icon.svg"
                    draggable={false}
                  />
                </div>
                <div className="bg-white pl-0.5 pt-0 h-8 w-10 rounded-md flex align-middle justify-center">
                  <img
                    className="w-7 h-8"
                    src="./zelle.svg"
                    draggable={false}
                  />
                </div>
              </div>

              <div className="flex mt-1 pt-1 sm:mt-0">
                <Link
                  to="/contact"
                  className="mx-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-neutral-500 dark:hover:text-neutral-300"
                  aria-label="Contact Us"
                  draggable={false}
                >
                  {" "}
                  Contact{" "}
                </Link>

                <Link
                  to="/privacy"
                  className="mx-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                  aria-label="Privacy Policy"
                  draggable={false}
                >
                  {" "}
                  Privacy{" "}
                </Link>

                <Link
                  to="/faq"
                  className="mx-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                  aria-label="Frequently Asked Questions"
                  draggable={false}
                >
                  {" "}
                  FAQ{" "}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
