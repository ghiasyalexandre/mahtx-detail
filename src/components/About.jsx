import { useState, useEffect } from "react";

export default function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in effect after mounting
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-white/20 dark:via-transparent transition-colors duration-500 ease-in-out">
        <div className="container px-6 py-0 mx-auto pt-8 sm:pt-12 lg:pt-16">
          <div className="lg:flex lg:items-center space-x-8 lg:mx-8">
            <div
              className={`w-full space-y-12 lg:w-1/2 transition-opacity transform duration-300 ease-in-out ${
                fadeIn ? "opacity-100 " : "opacity-0 "
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div>
                <h1
                  className="font-bold text-black capitalize dark:text-white text-center lg:text-left text-4xl sm:text-6xl"
                  aria-label="About Us"
                >
                  About Us
                </h1>
                <div
                  role="separator"
                  aria-hidden="true"
                  className="mt-4 flex justify-center lg:justify-start"
                >
                  <span className="inline-block w-40 h-1 bg-black dark:bg-white rounded-full"></span>
                  <span className="inline-block w-14 h-1 ml-1 bg-black dark:bg-white rounded-full"></span>
                  <span className="inline-block w-6 h-1 ml-1 bg-black dark:bg-white rounded-full"></span>
                  <span className="inline-block w-3 h-1 ml-1 bg-black dark:bg-white rounded-full"></span>
                  <span className="inline-block w-1 h-1 ml-1 bg-black dark:bg-white rounded-full"></span>
                </div>
              </div>

              {/* Our History */}
              <div className="md:flex md:items-start md:-mx-4 md:pl-4">
                <span
                  role="img"
                  aria-label="History Icon"
                  className="inline-block p-2 text-white dark:text-black bg-black dark:bg-white rounded-xl md:mx-4 border border-white shadow-neonDarkSlim dark:border-black dark:shadow-neonLightSlim"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                  </svg>
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-neutral-800 capitalize dark:text-white">
                    Our History
                  </h1>
                  <p className="mt-3 text-gray-700 dark:text-gray-200">
                    We started our detailing journey with a passion for cars and
                    a desire to provide high-quality detailing services. Located
                    in West Palm Beach, Florida, our mission is to make every
                    car look as pristine as possible, inside and out.
                  </p>
                </div>
              </div>

              {/* Our Staff */}
              <div className="md:flex md:items-start md:-mx-4 md:pl-4">
                <span
                  role="img"
                  aria-label="Staff Icon"
                  className="inline-block p-2 text-white dark:text-black bg-black dark:bg-white rounded-xl md:mx-4 border border-white shadow-neonDarkSlim dark:border-black dark:shadow-neonLightSlim"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                    viewBox="0 0 16 16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
                    />
                  </svg>
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h2 className="text-xl font-semibold text-gray-900 capitalize dark:text-white">
                    Our Staff
                  </h2>
                  <p className="mt-3 text-neutral-800 dark:text-gray-200">
                    Our team is made up of skilled and passionate detailers who
                    take pride in their work. We are dedicated to providing the
                    best service and ensuring each vehicle receives the care and
                    attention it deserves.
                  </p>
                </div>
              </div>

              {/* Contact Us */}
              <div className="md:flex md:items-start md:-mx-4 md:pl-4">
                <span className="inline-block p-2 text-white dark:text-black bg-black dark:bg-white rounded-xl md:mx-4 border border-white shadow-neonDarkSlim dark:border-black dark:shadow-neonLightSlim">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                    viewBox="0 0 16 16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-gray-900 capitalize dark:text-white">
                    Contact Us
                  </h1>
                  <p className="mt-3 text-neutral-800 dark:text-gray-200">
                    Have questions or need to schedule an appointment? Contact
                    us by email at mathpatino@gmail.com or send us a direct
                    message on Instagram{" "}
                    <a
                      target="_blank"
                      draggable={false}
                      href="https://www.instagram.com/mahtx.detailco/"
                      className="hover:underline underline-offset-2"
                    >
                      @mathx.detailco
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div
              className={`hidden lg:flex lg:items-center lg:w-1/2 lg:justify-end transition-opacity transform duration-1000 ease-in-out ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <img
                draggable={false}
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-lg border border-white dark:border-black shadow-neonDark dark:shadow-neonLight "
                src="./MattSpray.webp"
                alt="Mathew Washing a Car"
              />
            </div>
          </div>
        </div>
        <hr className="mt-12 mx-0 md:mx-4 border-gray-200 dark:border-neutral-700" />
        {/* Trusted Brands */}
        <div className=" mx-auto my-12">
          <div className="flex flex-col justify-center align-middle mb-8 text-center">
            <h1 className="font-semibold text-black dark:text-white">
              Brands We Trust
            </h1>
            <p className=" text-neutral-700 dark:text-neutral-300">
              Ensures quality to keep your vehicle pristine.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 mx-4 md:mx-0">
            <div className="flex items-center justify-center col-span-1">
              <img
                draggable={false}
                alt="Matthew spraying a car"
                className="max-h-32 hover:scale-105 transition-all duration-300 ease-in-out"
                src="https://www.hydrosilex.com/cdn/shop/files/hydrosilex_logo_2020_white_200x.png?v=1613736867"
              />
            </div>

            <div className="flex items-center justify-center col-span-1">
              <img
                draggable={false}
                className=" max-h-32 dark:invert hover:scale-105 transition-all duration-300 ease-in-out"
                src="https://fineshine.ee/wp-content/uploads/2024/06/carpro-colour-logo.png"
              />
            </div>

            <div className="flex items-center justify-center col-span-1">
              <img
                draggable={false}
                className=" max-h-32 dark:invert hover:scale-105 transition-all duration-300 ease-in-out"
                src="https://fineshine.ee/wp-content/uploads/2024/08/Angelwax_logo-copy.png"
              />
            </div>

            <div className="flex items-center justify-center col-span-1">
              <img
                draggable={false}
                className=" max-h-32 dark:invert hover:scale-105 transition-all duration-300 ease-in-out"
                src="https://fineshine.ee/wp-content/uploads/2024/06/autofinesse-logo.png"
              />
            </div>

            <div className="flex items-center justify-center col-span-1">
              <img
                draggable={false}
                className="  max-h-32 dark:invert hover:scale-105 transition-all duration-300 ease-in-out"
                src="https://fineshine.ee/wp-content/uploads/2024/08/logo_t-puhtax.png"
              />
            </div>
          </div>
        </div>
        <hr className="mt-12 mb-6 mx-0 md:mx-4 border-gray-200 dark:border-neutral-700" />
      </div>
    </>
  );
}
