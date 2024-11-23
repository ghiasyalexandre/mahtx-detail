import { useEffect, useState } from "react";
import GalleryImages from "./GalleryImages";

export const detailImages = [
  "./ventClean.webp",
  "https://static.wixstatic.com/media/451e97_3f90f634f4114571a6f8ec6c1630df89~mv2.jpg/v1/fill/w_556,h_366,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/451e97_3f90f634f4114571a6f8ec6c1630df89~mv2.jpg",
  "https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg",
  "https://img.freepik.com/free-photo/car-wash-detailing-station_1303-22307.jpg",
  "./orangeFer.webp",
  "./plane-detailing.webp",
  "./diamondBody36.webp",
  "./cleanChevyInt.webp",
  "./cleanChevyRim.webp",
  "./blackCoating.webp",
  "./cleanChevyIntBack.webp",
  "https://cleanimage101.com/wp-content/uploads/2022/09/ezgif-4-349e5ac5ae.webp",
];

const Gallery = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in effect after mounting
  }, []);

  return (
    <section
      aria-labelledby="gallery-section-title"
      className="bg-white  dark:bg-transparent dark:bg-gradient-to-br dark:from-white/20 dark:via-transparent  transition-colors duration-500 ease-in-out"
    >
      <div className="container px-4 pb-0 lg:pb-4 mx-auto">
        <div className="flex flex-col items-center gap-4 pb-4 lg:pb-0 pt-8 sm:pt-12 lg:pt-16 text-center">
          <h1
            id="gallery-section-title"
            className={`text-black dark:text-white font-bold text-4xl sm:text-6xl transition-opacity transform duration-1000 ease-in-out  ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            Gallery
          </h1>
        </div>
        <hr className="my-4 mx-0 lg:my-8 lg:mx-8 border-neutral-700" />

        <GalleryImages loadImages={detailImages} />
        <hr className="mt-4 mx-0 lg:mx-8 border-neutral-300 dark:border-neutral-800" />
      </div>
    </section>
  );
};

export default Gallery;
