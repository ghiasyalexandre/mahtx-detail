import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ServiceNav from "./ServiceNav";
import { detailImages } from "./Gallery";
import MyDatePicker from "./MyDatePicker";

export default function ServiceSelection() {
  const [selectedItems, setSelectedItems] = useState({
    services: [],
    packages: [],
    aircraftServices: [],
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategories, setShowCategories] = useState(true);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState([]);
  const [status, setStatus] = useState("");
  const form = useRef();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    user_email: "",
    message: "",
    total: "",
    services: "",
    date: "",
  });

  const categories = [
    {
      id: 1,
      title: "Detail Packages",
      description: "",
      key: "packages",
    },
    {
      id: 2,
      title: "Single Services",
      key: "services",
      description:
        "Select any additional services that you would like to receive during the main appointment.",
    },
    {
      id: 3,
      title: "Aircraft Services",
      description: "",
      key: "aircraftServices",
    },
  ];

  const packages = [
    {
      id: 1,
      title: "Express Detail",
      price: 199,
      duration: "2 hours",
      description: "Wash n' Wax - Pre Foam Treatment - Contact wash.",
      image: detailImages[2],
    },
    {
      id: 2,
      title: "Refresh Detail",
      price: 398,
      duration: "4 hours",
      description:
        "Decontamination - Full exterior wash - Debugging & door jams.",
      image: detailImages[7],
    },
    {
      id: 3,
      title: "Reset Detail",
      price: 749,
      duration: "6 hours",
      description: "Deep interior clean - Polish - Wax protection.",
      image: detailImages[4],
    },
  ];

  const aircraftServices = [
    {
      id: 1,
      title: "Aircraft Detail Inquiry",
      price: 0,
      duration: "Unspecified",
      description: "Interior full detailing and exterior dry cleaning.",
      image: detailImages[5],
    },
  ];

  const services = [
    {
      id: 1,
      title: "Headlight Restoration",
      price: 65,
      duration: "1 hour",
      description: "Make your headlights shine line new.",
      image: detailImages[3],
    },
    {
      id: 2,
      title: "Engine Bay Dry Wash",
      price: 50,
      duration: "1 hour",
      description: [
        "- Dust, oil leaks, old leaves, sand and other contaminants accumulate on the engine. All these can clog the radiator and the filters. Consequently, this can lead to an unpleasant view when you open the car. Worse, it can lead to vehicle malfunctioning. This is where engine detailing comes into play regardless of the kind of vehicle in question.",
        <br />,
        "– Car, van, bus, truck, or else. Engine detailing is, by no doubt, important and you should do it from time to time.",
      ],
      image: detailImages[2],
    },
    {
      id: 3,
      title: "Scratch/Defect Removal",
      price: 99,
      duration: "2 hours",
      description: [
        "Wash n' Wax - Pre Foam Treatment.",
        <br />,
        "- Contact wash.",
      ],
      image: detailImages[1],
    },
    {
      id: 4,
      title: "Windshield Diamond Coating",
      price: 99,
      duration: "1 hour",
      description:
        "Coat windshield to have better visibility while driving in the rain.",
      image: detailImages[11],
    },
    {
      id: 5,
      title: "Windshield Water Spot Removal",
      price: 49,
      duration: "1.5 hours",
      description:
        "Add this to your detail to remove hard water spots from your windows.",
      image: detailImages[4],
    },
    {
      id: 6,
      title: "Deodorization Treatment",
      price: 75,
      duration: "1 hour",
      description:
        "Proven effective for treating odors in automobiles to control or remove odors caused by smoke, mold, mildew, chemicals, paint, sewage, animals, decaying organic matter and a variety of other sources.",
      image: detailImages[10],
    },
    {
      id: 7,
      title: "Interior Protection + Antimicrobial",
      price: 49,
      duration: "1.5 hours",
      description: "Add a Stain Resistant coating to your interior.",
      image: detailImages[7],
    },
    {
      id: 8,
      title: "Diamond Body 36",
      price: 990,
      duration: "Unspecified",
      description:
        "This service includes a paint coating that protects virtually any surface from dirt, sun exposure, and moisture permanently. Durability tests prove that after 600 washes, water still beads on surfaces after being treated. The latest coating technology gives automobiles, aircraft, boats, and recreational vehicles unbeatable protection from the elements.",
      image: detailImages[6],
    },
    {
      id: 9,
      title: "Ceramic Wheel & Brake Caliper Coating",
      price: 350,
      duration: "1.5 hours",
      description:
        "This service protects your wheels/brake calipers against brake dust and all kinds of dirt for 1-2 years. Keeps them looking super shiny, water Repellent and easy to clean.",
      image: detailImages[8],
    },
    {
      id: 10,
      title: "Cabin Interior Rest",
      price: 89,
      duration: "4.5 hours",
      description:
        "Full Vehicle Make over Plus: Steam Clean & Vacuum Trunk Jambs, Steam Clean & Condition Motor, Clay Bar Extraction, Ceramic Shield Wheels & Windshield. This is a Superior Hydroponic Service that will leave your vehicle with a Show Room Finish & Superior Protection.",
      image: detailImages[9],
    },
  ];

  const [fadeInTitle, setFadeInTitle] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeIn2, setFadeIn2] = useState(false);
  const [fadeIn3, setFadeIn3] = useState(false);

  useEffect(() => {
    setFadeInTitle(true); // Trigger fade-in effect after mounting
  }, []);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in effect after mounting
  }, []);

  const handleCategoryView = (category) => {
    setSelectedCategory(category);
    setFadeIn(false); // Fade out categories

    setTimeout(() => {
      setShowCategories(false);
      setFadeIn2(true); // Fade in services after hiding categories
    }, 500); // Adjust this delay to control the timing between the two sections
  };

  const handleOptionView = () => {
    setFadeIn2(false); // Fade out services
    setTimeout(() => {
      setShowCategories(true);
      setFadeIn(true); // Fade in categories
    }, 500); // Adjust this delay to control the timing between the two sections
  };

  const handleBackContactView = () => {
    setFadeIn3(false); // Fade out contact information form
    setTimeout(() => {
      setShowContactInfo(false);
      setFadeIn2(true); // Fade in services
    }, 500); // Adjust this delay to control the timing between the two sections
  };

  const handleContactView = () => {
    setFadeIn2(false); // Fade out services
    setTimeout(() => {
      setShowContactInfo(true);
      setFadeIn3(true); // Fade in contact information form
    }, 500); // Adjust this delay to control the timing between the two sections
  };

  emailjs.init({
    publicKey: "YtIz5jNwYDKHKJtxy",
    blockHeadless: true,

    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 60s
      throttle: 5000,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your EmailJS credentials here

    emailjs
      .send(
        "service_ijk20o2", // Replace with your service ID
        "template_abewy5p", // Replace with your template ID
        formData
        // "maht" // Replace with your user ID
      )
      .then(
        (response) => {
          setStatus("SUCCESS");
          setFormData({
            first_name: "",
            last_name: "",
            phone: "",
            user_email: "",
            message: "",
            total: "",
            services: "",
            date: "",
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

  useEffect(() => {
    const selectedServiceTitles = ["services", "packages", "aircraftServices"]
      .flatMap((category) =>
        getCategoryItems(category)
          .filter((item) => selectedItems[category].includes(item.id))
          .map((item) => item.title)
      )
      .join(", ");

    console.log("Selected Services: ", selectedServiceTitles);

    setFormData({
      ...formData,
      services: selectedServiceTitles,
      total: calculateTotal(),
      date: selectedDate.toLocaleString(),
    });
  }, [selectedItems, selectedDate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleServiceSelection = (category, serviceId) => {
    setSelectedItems((prevSelected) => {
      const isSelected = prevSelected[category].includes(serviceId);
      return {
        ...prevSelected,
        [category]: isSelected
          ? prevSelected[category].filter((id) => id !== serviceId)
          : [...prevSelected[category], serviceId],
      };
    });
  };

  const getCategoryItems = (category) => {
    switch (category) {
      case "packages":
        return packages;
      case "services":
        return services;
      case "aircraftServices":
        return aircraftServices;
      default:
        return [];
    }
  };

  const calculateTotal = () => {
    return ["services", "packages", "aircraftServices"].reduce(
      (total, category) =>
        total +
        getCategoryItems(category)
          .filter((item) => selectedItems[category].includes(item.id))
          .reduce((sum, item) => sum + item.price, 0),
      0
    );
  };

  const toggleDescription = (serviceId) => {
    if (expandedDescriptions.includes(serviceId)) {
      setExpandedDescriptions(
        expandedDescriptions.filter((id) => id !== serviceId)
      );
    } else {
      setExpandedDescriptions([...expandedDescriptions, serviceId]);
    }
  };

  return (
    <div className="bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-white/20 dark:via-transparent xs:px-2 md:px-12 lg:px-12 xl:px-20 2xl:px-28 transition-colors duration-500 ease-in-out">
      <div className="flex flex-col items-center gap-4 pb-4 lg:pb-0 pt-8 sm:pt-12 lg:pt-16 text-center">
        <h1
          className={`text-black dark:text-white font-bold text-5xl sm:text-6xl transition-opacity transform duration-1000 ease-in-out  ${
            fadeInTitle ? "opacity-100" : "opacity-0"
          }`}
          aria-labelledby="booking-heading"
        >
          Booking
        </h1>
      </div>
      <hr className="my-4 mx-4 lg:my-8 border-neutral-700" />
      <div className="flex flex-col lg:flex-row   md:pb-8 lg:pb-0">
        <div className="flex-1 p-4 lg:pr-2 ">
          <ServiceNav
            showCategories={showCategories}
            showOptions={!showCategories}
            showContactInfo={showContactInfo}
          />

          {showCategories && !showContactInfo ? (
            <div>
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div
                    key={category.id}
                    className={`border rounded-lg p-6 relative shadow-lg shadow-black/30 dark:shadow-white/20 transition-all transform-gpu duration-500 ease-in-out ${
                      fadeIn ? "opacity-100 " : "opacity-0 "
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }} // Delay each item by 200ms
                  >
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      {category.description}
                    </p>
                    <button
                      aria-label="Select Service Category"
                      onClick={() => handleCategoryView(category.key)}
                      className="mt-4 flex items-center text-sm font-normal text-white dark:invert border border-white hover:text-black hover:bg-white hover:border-black transition-colors duration-300 ease-in-out px-4 py-2 rounded-md"
                    >
                      Select
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : !showCategories && !showContactInfo ? (
            <div>
              <div className="space-y-4">
                {getCategoryItems(selectedCategory).map((service, index) => (
                  <div
                    key={service.id}
                    className={`border flex rounded-lg relative  shadow-lg shadow-black/20 dark:shadow-white/20 transition-all transform-gpu duration-500 ease-in-out ${
                      fadeIn2 ? "opacity-100 " : "opacity-0 "
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="p-6 w-3/4 sm:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl xl:text-2xl font-semibold mb-2 text-neutral-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                          ${service.price}.00
                        </p>
                        <div className="mt-2 flex items-center space-x-2">
                          <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm shadow-md shadow-black/20 dark:shadow-white/20">
                            Service
                          </span>
                          <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm shadow-md shadow-black/20 dark:shadow-white/20">
                            {service.duration}
                          </span>
                        </div>
                        <div className="text-neutral-700 dark:text-neutral-300 mt-4">
                          {expandedDescriptions.includes(service.id) ? (
                            <>
                              <p className="">{service.description}</p>
                              <div
                                className="text-neutral-600 mt-2 hover:text-neutral-400 pointer-events-auto text-sm"
                                onClick={() => toggleDescription(service.id)}
                              >
                                Show less...
                              </div>
                            </>
                          ) : (
                            <>
                              {service.description.toString().length >= 200 ? (
                                <>
                                  <p>
                                    {service.description
                                      .toString()
                                      .substring(0, 200)}
                                    ...
                                  </p>
                                  <div
                                    className="text-neutral-600 mt-2 hover:text-neutral-400 pointer-events-auto text-sm"
                                    onClick={() =>
                                      toggleDescription(service.id)
                                    }
                                  >
                                    Show more...
                                  </div>
                                </>
                              ) : (
                                <p>{service.description}</p>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="mt-4">
                        {selectedItems[selectedCategory].includes(
                          service.id
                        ) ? (
                          <div className="flex space-x-4 transition-all ease-in-out duration-300">
                            <button
                              aria-label="Service Selected"
                              onClick={() =>
                                toggleServiceSelection(
                                  selectedCategory,
                                  service.id
                                )
                              }
                              className="flex items-center text-sm bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 ease-in-out dark:shadow-white/30 shadow-black/30 shadow-md"
                            >
                              <span className="mr-2 py-1">&#x2713;</span>
                              Selected
                            </button>
                          </div>
                        ) : (
                          <button
                            aria-label="Select Service"
                            onClick={() =>
                              toggleServiceSelection(
                                selectedCategory,
                                service.id
                              )
                            }
                            className="flex items-center text-sm dark:invert font-normal text-white border border-white hover:bg-white hover:text-black px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 ease-in-out dark:shadow-white/30 shadow-black/30 shadow-md"
                          >
                            <span className="mr-2 py-1">&#128722;</span>Select
                          </button>
                        )}
                      </div>
                    </div>
                    <img
                      draggable={false}
                      src={service.image}
                      alt={service.title}
                      className="h-32 w-32 max-h-60 mt-2 mr-2 sm:m-2 lg:my-6 lg:mr-6 sm:h-auto object-cover rounded-full sm:rounded-xl lg:rounded-md md:w-1/3 sm:w-1/3 lg:w-1/3 hover:scale-105 shadow-black/30 shadow-lg dark:shadow-md dark:shadow-white/30 transition-all duration-300 ease-in-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              className={` p-4 border rounded-lg relative shadow-lg shadow-black/20 dark:shadow-white/20 transition-all transform-gpu duration-1000 ease-in-out  ${
                fadeIn3 ? "opacity-100 " : "opacity-0 "
              }`}
            >
              <form id="myForm" method="get" ref={form} onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold text-neutral-700 dark:text-white">
                  Customer Information
                </h2>

                <div className="mt-4 md:items-center md:flex">
                  <div className="flex-1 pr-2">
                    <label className="block mb-2 ml-2 text-sm text-gray-600 dark:text-gray-200">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      aria-label="First Name"
                      className="block w-full px-4 py-2.5 mt-2 border rounded-lg placeholder-gray-600/50 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-300 border-neutral-700 dark:border-white focus:ring-neutral-400/50 dark:focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 md:pl-2 mt-4 md:mt-0">
                    <label className="block mb-2 ml-2 text-sm text-gray-600 dark:text-gray-200">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      aria-label="Last Name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      className="block w-full px-4 py-2.5 mt-2 border rounded-lg placeholder-gray-600/50 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-300 border-neutral-700 dark:border-white focus:ring-neutral-400/50 dark:focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 ml-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    name="user_email"
                    aria-label="User Email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2.5 mt-2 border rounded-lg placeholder-gray-600/50 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-300 border-neutral-700 dark:border-white  focus:ring-neutral-400/50 dark:focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-4">
                  <label className="block mb-2 ml-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone
                  </label>
                  <input
                    required
                    type="text"
                    name="phone"
                    aria-label="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2.5 mt-2 border rounded-lg placeholder-gray-600/50 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-300 border-neutral-700 dark:border-white  focus:ring-neutral-400/50 dark:focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 ml-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    aria-label="Message"
                    onChange={handleInputChange}
                    className=" block w-full h-32 px-4 py-2.5 my-2 border rounded-lg placeholder-gray-600/50 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 border-neutral-700 dark:border-white focus:ring-neutral-400/50 dark:focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Optional notes or requests..."
                  ></textarea>
                </div>

                <input
                  type="hidden"
                  name="services"
                  value={formData.services}
                />
                <input
                  type="hidden"
                  name="total"
                  value={formData.total}
                  aria-label="Order Total"
                />
                <input
                  type="hidden"
                  name="date"
                  value={formData.date}
                  aria-label="Scheduled Date"
                />
              </form>
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="lg:w-1/3 lg:ml-2 m-4 p-4 border rounded-lg shadow-lg shadow-black/20 dark:shadow-white/20 transition-all transform-gpu duration-500 ease-in-out">
          <h3 className="text-2xl xl:text-3xl text-center font-semibold mb-3 text-black dark:text-white">
            Summary
          </h3>
          <hr className="mt-0 mb-4 border-neutral-700" />

          <div className="space-y-4">
            {/* Selected Services */}
            {/* Display selected items for each category */}
            {["services", "packages", "aircraftServices"].flatMap((category) =>
              getCategoryItems(category)
                .filter((item) => selectedItems[category].includes(item.id))
                .map((item) => (
                  <div
                    key={`${category}-${item.id}`}
                    className="flex justify-between text-neutral-700 dark:text-neutral-300"
                  >
                    <span>{item.title}</span>
                    <span>${item.price}.00</span>
                  </div>
                ))
            )}

            <div className="flex justify-between border-t border-neutral-700 pt-4 text-neutral-700 dark:text-neutral-300">
              <span>Items Total</span>
              <span>${calculateTotal()}.00</span>
            </div>
            <div className="flex justify-between text-neutral-700 dark:text-neutral-300">
              <span>Surcharge (if paying by card)</span>
              <span>${(calculateTotal() * 0.03).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-neutral-700 dark:text-neutral-300">
              <span className="text-black dark:text-white">Order total</span>
              <span>
                ${(calculateTotal() + calculateTotal() * 0.03).toFixed(2)}
              </span>
            </div>
          </div>
          <hr className="my-4 border-neutral-700" />

          <div className="">
            {!showContactInfo ? (
              <div className="">
                <div className="flex flex-col ">
                  {!showCategories && !showContactInfo && (
                    <div className="flex flex-col gap-2">
                      <div className="relative">
                        <MyDatePicker onDateChange={setSelectedDate} />
                      </div>
                      <div className="flex gap-4">
                        <button
                          aria-label="Go Back"
                          onClick={handleOptionView}
                          className="dark:bg-white bg-black text-white dark:text-black font-semibold w-full lg:w-1/2 py-3 rounded-md mt-2 tracking-wide shadow-lg dark:hover:shadow-white/30 hover:shadow-black/30 transition-all capitalize ease-in-out  duration-300 transform"
                        >
                          Back
                        </button>
                        <button
                          aria-label="Next"
                          onClick={handleContactView}
                          className="dark:bg-white bg-black text-white dark:text-black font-semibold w-full lg:w-1/2 py-3 rounded-md mt-2 tracking-wide shadow-lg dark:hover:shadow-white/30 hover:shadow-black/30  transition-all capitalize ease-in-out  duration-300 transform"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <p
                  htmlFor="Schedule"
                  className="block text-neutral-700 dark:text-neutral-300"
                >
                  Scheduled for{" "}
                  {selectedDate.toString().replace("T", " @ ").split(".")[0]}{" "}
                  EST
                </p>
                <div className="flex flex-row gap-2">
                  <button
                    aria-label="Go Back"
                    onClick={handleBackContactView}
                    className="dark:bg-white bg-black text-white dark:text-black font-semibold w-1/2 py-2 rounded-md mt-2 tracking-wide shadow-lg dark:hover:shadow-white/30 hover:shadow-black/30 transition-all capitalize ease-in-out  duration-300 transform"
                  >
                    Back
                  </button>
                  <button
                    form="myForm"
                    type="submit"
                    aria-label="Submit Booking"
                    className="dark:bg-white bg-black text-white dark:text-black font-semibold w-1/2 py-2 rounded-md mt-2 tracking-wide shadow-lg dark:hover:shadow-white/30 hover:shadow-black/30  transition-all capitalize ease-in-out  duration-300 transform"
                  >
                    Submit
                  </button>
                </div>
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
              </>
            )}
          </div>
        </div>
      </div>

      <hr className="mt-4 md:mt-2 lg:mt-8 mx-4  dark:border-neutral-700" />
    </div>
  );
}
