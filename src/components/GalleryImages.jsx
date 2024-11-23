import { useState, useEffect, useRef } from "react";
import "./GalleryImages.css";

export default function GalleryImages({ loadImages }) {
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

  return (
    <div className="py-2 " aria-labelledby="gallery-images" role="region">
      <div className="mx-auto px-0 sm:px-6 lg:px-8 ">
        <div className="gallery bg-transparent rounded-lg">
          <div
            role="list"
            className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:mb-11 mb-7"
          >
            {loadImages.map((placedImage, index) => (
              <div
                key={index}
                id={`image-${index}`}
                data-index={index}
                role="listitem"
                className={`transition-all transform duration-1000 ease-in-out ${
                  isVisible[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-24"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image container */}
                <figure
                  aria-labelledby={`gallery-image-${index}`}
                  className=" h-[290px] sm:h-[230px] md:h-[200px] lg:h-[270px] xl:h-[350px] w-full hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <img
                    src={placedImage}
                    alt={`Gallery image ${index + 1}`}
                    draggable={false}
                    className="gallery-image object-cover mx-auto w-auto h-full cursor-pointer rounded-lg shadow-lg shadow-black/30 dark:shadow-white/20"
                  />{" "}
                  <figcaption id={`gallery-image-${index}`} className="sr-only">
                    Gallery image {index + 1}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
