import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in effect after mounting
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your EmailJS credentials here

    emailjs
      .send(
        "service_ijk20o2", // Replace with your service ID
        "template_tk0916c", // Replace with your template ID
        formData,
        "mahtx" // Replace with your user ID
      )
      .then(
        (response) => {
          setStatus("SUCCESS");
          setFormData({
            name: "",
            phone: "",
            user_email: "",
            message: "",
          });
          setTimeout(() => setStatus(""), 5000); // Clear status message after 5 seconds
        },
        (error) => {
          setStatus("ERROR");
          setTimeout(() => setStatus(""), 5000); // Clear status message after 5 seconds

          console.log("Failed to send email", error);
        }
      );
  };

  return (
    <div>
      <div className=" bg-white flex justify-center  dark:bg-transparent dark:bg-gradient-to-br dark:from-white/20 dark:via-transparent pt-16 pb-8 lg:pb-16 transition-all duration-500 ease-in-out">
        <div className="container px-6 sm:px-12 lg:px-12 lg:py-12 mx-auto lg:mx-16 xl:mx-32 2xl:mx-52 lg:border border-black dark:border-white lg:shadow-neonDark lg:dark:shadow-neonLightSlim lg:rounded-lg">
          <div
            className={`lg:flex lg:items-center lg:-space-x-8 transition-all duration-700 ease-in-out ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="lg:w-1/2 lg:mx-6">
              <h1
                aria-label="Contact Us for More Info"
                className=" text-center text-pretty lg:mr-48 lg:text-left text-5xl font-bold text-gray-800  dark:text-white md:text-6xl xl:text-7xl"
              >
                Contact Us
              </h1>
              <hr className="lg:mb-2 mt-4 lg:mt-6 lg:mr-24 2xl:mr-48 border-neutral-300 dark:border-neutral-700" />

              <div className="mt-6 space-y-4 sm:space-y-0 lg:space-y-8 block md:mt-8 sm:flex sm:justify-between lg:block text-xl">
                <div className="flex items-center -mx-2 -ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 lg:w-8 lg:h-8 mx-1 sm:mr-1 lg:mr-2 text-black dark:text-white"
                    fill="none"
                    role="img"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-labelledby="locationIcon"
                  >
                    {" "}
                    <title id="locationIcon">Location</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <div className="flex flex-col">
                    <span className="mx-1 lg:pt-1 text-gray-700 truncate lg:w-72 dark:text-gray-400 text-sm md:text-base lg:text-xl">
                      Port St. Lucie, FL &
                    </span>
                    <span className="mx-1 lg:pt-1 text-gray-700 truncate lg:w-72 dark:text-gray-400 text-sm md:text-base lg:text-xl">
                      West Palm Beach, FL
                    </span>
                  </div>
                </div>

                <p className="flex items-center -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 md:w-8 lg:h-8 mx-2 sm:mr-1 lg:mr-2 text-black dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    role="img"
                    aria-labelledby="phoneIcon"
                  >
                    {" "}
                    <title id="phoneIcon">Phone</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-1 lg:pt-0.5 text-gray-700 truncate lg:w-72 dark:text-gray-400 text-sm md:text-base lg:text-xl">
                    (561) 814-3244
                  </span>
                </p>

                <p className="flex items-center -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 lg:w-8 lg:h-8 mx-2 sm:mr-1 lg:mr-2 text-black dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    role="img"
                    aria-labelledby="emailIcon"
                  >
                    {" "}
                    <title id="emailIcon">Email</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-1 lg:pt-0.5 text-gray-700 truncate lg:w-72 dark:text-gray-400 text-sm md:text-base lg:text-xl">
                    mathpatino@gmail.com
                  </span>
                </p>
              </div>

              <div className="mt-6 w-80 lg:mt-8">
                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>

                <div className="flex mt-3 -mx-1.5 ">
                  <a
                    draggable={false}
                    aria-label="Visit our LinkedIn page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-1.5 dark:hover:text-neutral-100 text-gray-400 transition-colors duration-300 transform hover:text-black"
                    href="https://www.linkedin.com/in/matthew-patino-1a12a8313/"
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      target="blank"
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
                    draggable={false}
                    className="mx-1.5 dark:hover:text-neutral-100 text-gray-400 transition-colors duration-300 transform hover:text-black"
                    href="https://www.facebook.com/Mahtu0607"
                    aria-label="Visit our Facebook page"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    draggable={false}
                    className="mx-1.5 dark:hover:text-neutral-100 text-gray-400 transition-colors duration-300 transform hover:text-black"
                    href="https://www.instagram.com/mahtx.detailco/"
                    aria-label="Visit our Instagram page"
                    target="_blank"
                    rel="noopener noreferrer"
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
              </div>
            </div>

            <div className="mt-4 lg:mt-0 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-6 mx-auto overflow-hidden bg-neutral-50 rounded-lg shadow-lg dark:shadow-md dark:bg-neutral-800 lg:max-w-xl shadow-black/50 dark:shadow-white/20">
                <form
                  className=""
                  onSubmit={handleSubmit}
                  aria-label="Contact Form"
                >
                  <div className="flex-1">
                    <label className="block mb-2 text-gray-600 dark:text-neutral-200">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-label="Name"
                      required
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-neutral-600 dark:bg-neutral-900 dark:text-gray-300 dark:border-neutral-700 focus:border-blue-400 dark:focus:border-neutral-500 focus:ring-blue-400 dark:focus:ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2  text-gray-600 dark:text-gray-200">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      aria-label="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-neutral-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-neutral-600 dark:bg-neutral-900 dark:text-gray-300 dark:border-neutral-700 focus:border-blue-400 dark:focus:border-neutral-500 dark:focus:ring-neutral-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2  text-gray-600 dark:text-gray-200">
                      Email address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      aria-label="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-neutral-600 dark:bg-neutral-900 dark:text-gray-300 dark:border-neutral-700 focus:border-blue-400 dark:focus:border-neutral-500 dark:focus:ring-neutral-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2  text-gray-600 dark:text-gray-200">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      aria-label="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 dark:bg-neutral-900 placeholder-gray-400 bg-white border border-gray-200 rounded-md  dark:placeholder-neutral-600 dark:text-gray-300 dark:border-neutral-700 focus:border-blue-400 dark:focus:border-neutral-500 dark:focus:ring-neutral-400 focus:ring-blue-100 focus:outline-none focus:ring focus:ring-opacity-40"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    aria-label="Submit Message"
                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black hover:bg-white hover:text-black hover:border-black dark:bg-white rounded-md dark:hover:bg-black dark:hover:text-white dark:text-black"
                  >
                    Get in touch
                  </button>
                </form>

                {status === "SUCCESS" && (
                  <p className="text-green-500 mt-4">
                    Message sent successfully!
                  </p>
                )}
                {status === "ERROR" && (
                  <p className="text-red-500 mt-4">
                    Failed to send message. Please try again later.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <hr className=" border-neutral-400  dark:border-neutral-800" />
    </div>
  );
}
