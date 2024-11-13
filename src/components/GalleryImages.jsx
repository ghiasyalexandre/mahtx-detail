import { useState, useEffect, useRef } from "react";
import "./GalleryImages.css";

export default function GalleryImages({ loadImages }) {
  const [modalImage, setModalImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(
    Array(loadImages.length).fill(false)
  );

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const newIsVisible = [...prev];
              newIsVisible[index] = true;
              return newIsVisible;
            });
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );

    loadImages.forEach((_, index) => {
      const element = document.getElementById(`image-${index}`);
      if (element) observerRef.current.observe(element);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [loadImages]);

  const openModal = (modalImage) => {
    setIsModalOpen(true);
    setModalImage(modalImage);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="py-2 ">
      <div className="mx-auto px-0 sm:px-6 lg:px-8 ">
        <div className="gallery bg-transparent rounded-lg">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:mb-11 mb-7">
            {loadImages.map((placedImage, index) => (
              <div
                key={index}
                id={`image-${index}`}
                data-index={index}
                className={`transition-all transform duration-1000 ease-in-out ${
                  isVisible[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-24"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image container */}
                <div className="h-[290px] sm:h-[230px] md:h-[200px] lg:h-[270px] xl:h-[350px] w-full hover:scale-105 transition-transform duration-300 ease-in-out">
                  <img
                    src={placedImage}
                    alt="Gallery"
                    draggable={false}
                    className="gallery-image object-cover mx-auto w-auto h-full cursor-pointer rounded-lg shadow-lg shadow-black/30 dark:shadow-white/20"
                    onClick={() => openModal(placedImage)}
                  />
                </div>
              </div>
            ))}
            {/* Modal */}
            {/* {isModalOpen && (
              <div
                className="container fixed z-50 flex items-center justify-center bg-black bg-opacity-40"
                onClick={() => closeModal()} // Close modal when clicking on background
              >
                <div
                  className="relative p-4 rounded-lg"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image container
                >
                  <button
                    className="text-3xl scale-50 sm:scale-75 lg:scale-100 absolute top-2 right-2 text-gray-700 hover:text-red-600 transition ease-in-out"
                    onClick={() => closeModal()}
                  >
                    &times;
                  </button>
                  <img
                    src={modalImage}
                    alt="Gallery"
                    className="w-full h-auto max-w-[80vw] max-h-[80vh] "
                    draggable={false}
                  />
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
