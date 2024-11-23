import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./Home.css";
import Carousel from "./Carousel";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger the fade-in effect after component mounts
  }, []);

  return (
    <>
      <div className="dark:bg-gradient-to-tr bg-white dark:bg-transparent dark:from-white/20 dark:via-transparent flex flex-col justify-center transition-colors duration-500 ease-in-out">
        <div className="mx-auto max-w-7xl pb-16 pt-12 sm:pt-16">
          <header>
            <div
              className={`text-center mb-12 text-black dark:text-white text-6xl transition-opacity transform duration-1000 ease-in-out  ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
              aria-labelledby="welcome-heading"
            >
              <h1
                id="welcome-heading"
                className="text-4xl sm:text-6xl font-bold uppercase text-black dark:text-white mb-4"
                aria-label="Welcome to MAHTX Detailing"
              >
                Welcome to MAHTX Detailing
              </h1>
              <hr className="my-1 lg:my-2 mx-8 border-neutral-700" />

              <p className="text-lg mx-8 text-gray-600 dark:text-gray-400">
                Premium detailing services to keep your car or plane looking
                brand new, inside and out.
              </p>
            </div>{" "}
          </header>
          <section
            aria-labelledby="services"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 mx-4"
          >
            <h2 id="services" className="sr-only">
              Services We Offer
            </h2>
            {[
              {
                title: "Interior Detailing",
                description:
                  "Deep cleaning interiors include vacuuming, shampooing, and leather treatment.",
              },
              {
                title: "Exterior Detailing",
                description:
                  "Hand wash, clay bar treatment, polish, and wax to protect your car's finish.",
              },
              {
                title: "Ceramic Coating",
                description:
                  "Get long-lasting protection for your vehicle's paint with our advanced ceramic coating.",
              },
              {
                title: "Paint Correction",
                description:
                  "Remove scratches and swirls to bring back the shine of your car's paintwork.",
              },
              {
                title: "Engine Detailing",
                description:
                  "Keep your engine bay clean and free of dust, oil, and grime to maintain efficiency.",
              },
              {
                title: "Aircraft Detailing",
                description:
                  "Complete interior and exterior dry detailing to give your plane a clean takeoff.",
              },
            ].map((service, index) => (
              <article
                key={index}
                aria-labelledby={`service-${index}`}
                className="hover:scale-105 transition-transform ease-in-out duration-500 "
              >
                <div
                  className={`bg-gradient-to-tr via-70% from-black via-black to-transparent dark:from-white dark:via-white dark:to-black dark:bg-white rounded-lg shadow-xl dark:shadow-xl shadow-black/60 dark:shadow-white/20 p-6 flex flex-col justify-between transition-all  transform duration-1000 ease-in-out ${
                    fadeIn
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-96"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div>
                    <h3
                      id={`service-${index}`}
                      className="text-xl font-semibold mb-2 text-white dark:text-neutral-800"
                    >
                      {service.title}
                    </h3>
                    <p className="text-neutral-200 dark:text-neutral-600 mb-4">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link to="/booking">
                      <button
                        aria-label={`Learn more about our ${service.title}`}
                        className="text-black hover:text-white hover:shadow-md hover:shadow-white/50 dark:hover:shadow-black/50 hover:scale-105 bg-white dark:bg-black hover:bg-black dark:text-white border border-white px-4 py-2 rounded-md dark:hover:bg-white dark:hover:text-black dark:hover:border-black transition-all duration-300 ease-in-out"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
      <main>
        <Carousel />

        <section
          aria-labelledby="contact"
          className="bg-white dark:bg-transparent pt-4  lg:pt-20 dark:bg-gradient-to-br dark:from-white/20 dark:via-transparent transition-all duration-500 ease-in-out"
        >
          <div className="container max-w-7xl px-8 lg:px-12 py-8 lg:py-12  mx-auto xl:shadow-neonDark xl:dark:shadow-neonLight rounded-xl">
            <div className=" flex justify-center text-center">
              <div className="col-span-1">
                <p className="font-medium text-lg text-neutral-500 dark:text-neutral-400 ">
                  Get in touch
                </p>
                <h2
                  id="contact"
                  className="mt-2 md:mt-0 text-3xl font-semibold text-black md:text-4xl dark:text-white"
                >
                  Contact Us{" "}
                </h2>

                <article className=" w-full">
                  <div className="flex justify-center gap-4 mt-2 -mx-1.5 ">
                    <a
                      aria-label="Linkedin"
                      className="mx-1.5 dark:hover:text-neutral-100 text-gray-400 transition-colors duration-300 transform hover:text-black"
                      href="https://www.linkedin.com/in/matthew-patino-1a12a8313/"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        target="_blank"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>

                    <a
                      aria-label="Facebook"
                      className="mx-1.5 dark:hover:text-neutral-100 text-gray-400 transition-colors duration-300 transform hover:text-black"
                      href="https://www.facebook.com/Mahtu0607"
                      target="_blank"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>

                    <a
                      aria-label="Instagram"
                      className="mx-1.5 dark:hover:text-neutral-100 text-gray-400 transition-colors duration-300 transform hover:text-black"
                      href="https://www.instagram.com/mahtx.detailco/"
                      target="_blank"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </article>

                <p className=" text-neutral-800 dark:text-neutral-400">
                  Follow us on social media or email us to be added to our
                  newletter for promotions and deals!
                </p>
              </div>
            </div>

            <hr className="mt-2 mb-4 border-transparent dark:border-neutral-700" />

            <div className="grid grid-cols-1 gap-y-12 mt-10 lg:grid-cols-3">
              <div className="grid gap-6 grid-cols-1 xs:grid-cols-3 lg:grid-cols-1 xs:justify-items-center lg:justify-items-start">
                <div className=" min-w-36">
                  <span className="inline-block p-3 text-black dark:text-white rounded-full bg-black/20 dark:bg-neutral-700/50 shadow-md shadow-black/30 dark:shadow-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>

                  <h3
                    id="contact-email"
                    className="mt-4 text-base lg:text-lg font-medium text-gray-800 dark:text-white"
                  >
                    Email
                  </h3>
                  <p className="mt-2 text-sm lg:text-base text-gray-500 dark:text-gray-400">
                    Reach us here.
                  </p>
                  <p className="mt-2 text-sm lg:text-base text-black dark:text-white">
                    Mathpatino@gmail.com
                  </p>
                </div>

                <div className=" min-w-36">
                  <span className="inline-block p-3 text-black dark:text-white rounded-full bg-black/20 dark:bg-neutral-700/50 shadow-md shadow-black/30 dark:shadow-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>

                  <h3
                    id="contact-location"
                    className="mt-4 text-base lg:text-lg font-medium text-gray-800 dark:text-white"
                  >
                    Location
                  </h3>
                  <p className="mt-2 text-sm lg:text-base text-gray-500 dark:text-gray-400 ">
                    Based out of Florida.
                  </p>
                  <p className="mt-2 text-sm lg:text-base text-black dark:text-white">
                    West Palm Beach, FL
                  </p>
                </div>

                <div className=" min-w-36">
                  <span className="inline-block p-3 text-black dark:text-white rounded-full bg-black/20 dark:bg-neutral-700/50 shadow-md shadow-black/30 dark:shadow-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>

                  <h3
                    id="contact-phone"
                    className="mt-4 text-base lg:text-lg font-medium text-gray-800 dark:text-white"
                  >
                    Phone
                  </h3>
                  <p className="mt-2 text-sm lg:text-base text-gray-500 dark:text-gray-400">
                    Open 24 hours.
                  </p>
                  <p className="mt-2 text-sm lg:text-base text-black dark:text-white">
                    +1 (561) 814-3244
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border-white dark:border-black shadow-neonDark dark:shadow-neonLight border-2 col-span-4 lg:col-span-2 h-96 lg:h-auto">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Google Maps Location"
                  aria-label="Map showing West Palm Beach, Florida"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57022.95976337856!2d-80.09614518923404!3d26.714523922338916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1730263990654!5m2!1sen!2sus"
                ></iframe>
              </div>
            </div>
          </div>
          <hr className="mt-4 lg:mt-24 mx-4 border-neutral-300 dark:border-neutral-800" />
        </section>
      </main>
    </>
  );
}
