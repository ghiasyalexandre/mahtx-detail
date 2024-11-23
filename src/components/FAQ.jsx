import { useState, useEffect } from "react";

export default function FAQ() {
  const [isOpen, setIsOpen] = useState([false, false, false, false, false]);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in effect after mounting
  }, []);

  const toggleOpen = (index) => {
    setIsOpen((prev) => {
      const newIsOpen = [...prev];
      newIsOpen[index] = !newIsOpen[index];
      return newIsOpen;
    });
  };

  return (
    <section
      aria-labelledby="faq-section-title"
      className="bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-white/20 dark:via-transparent transition-colors duration-500 ease-in-out"
    >
      <div className="container px-6 md:pb-6 mx-auto md:px-24">
        <div className="flex flex-col items-center gap-4 pb-4 pt-8 sm:pt-12 lg:pt-16 text-center">
          <h1
            id="faq-section-title"
            className={`text-black dark:text-white font-bold text-4xl sm:text-6xl transition-opacity transform duration-1000 ease-in-out  ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            Frequently Asked Questions
          </h1>
        </div>
        <hr className="my-4 mx-0 lg:mb-8 border-neutral-200 dark:border-neutral-700" />

        <div role="list">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`transition-opacity transform duration-1000 ease-in-out  ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              role="listitem"
            >
              <button
                aria-expanded={isOpen[index]}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleOpen(index)}
                className="flex items-center focus:outline-none shadow-lg shadow-black/30 dark:shadow-white/20"
              >
                {isOpen[index] ? (
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
                <h2 className="mx-4 text-xl text-neutral-50 dark:text-white">
                  {
                    [
                      "How do I book a detailing service?",
                      "What types of detailing packages do you offer?",
                      "How long does a detailing session take?",
                      "What products do you use for detailing?",
                      "How can I pay for my detailing service?",
                    ][index]
                  }
                </h2>
              </button>

              {isOpen[index] && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className="flex mt-8 md:mx-10 "
                >
                  <span className="border border-s-2 border-black dark:border-white "></span>

                  <p className="max-w-3xl lg:text-lg lg:max-w-full text-justify px-4 text-neutral-700 dark:text-neutral-300">
                    {
                      [
                        "You can book a detailing service through our website by selecting the 'Book Now' option. Alternatively, you can contact us via phone or send us a direct message on Instagram @mathx.detailco. We will confirm your booking details and schedule your appointment at your convenience.",
                        "We offer a variety of detailing packages, including Interior Detailing, Exterior Detailing, Engine Detailing, Ceramic Coating, and Full Detailing Packages. Each package is tailored to meet specific needs, and you can choose based on the level of care and protection you want for your vehicle.",
                        "The duration of a detailing session depends on the type of service selected. On average, an Interior or Exterior Detailing takes 2-4 hours, while a Full Detailing Package can take up to 6 hours. We strive to provide the highest quality service without rushing the process.",
                        "We use premium quality detailing products that are safe for your vehicle. This includes pH-neutral car shampoos, high-quality waxes, ceramic coatings, and specialized cleaners for different surfaces. Our products are carefully selected to ensure the best results and to protect your vehicle's surfaces.",
                        "We accept various payment methods, including PayPal, Venmo, Zelle, and cash. Payment can be made at the time of booking or upon completion of the detailing service.",
                      ][index]
                    }
                  </p>
                </div>
              )}
              <hr className="my-8 border-neutral-300 dark:border-neutral-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
