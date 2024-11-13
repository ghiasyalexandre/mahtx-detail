import { useEffect, useState } from "react";
import GalleryImages from "./GalleryImages";

export const detailImages = [
  "https://irp.cdn-website.com/8b4307b1/dms3rep/multi/auto+detailing.jpg",
  "https://static.wixstatic.com/media/451e97_3f90f634f4114571a6f8ec6c1630df89~mv2.jpg/v1/fill/w_556,h_366,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/451e97_3f90f634f4114571a6f8ec6c1630df89~mv2.jpg",
  "https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg",
  "https://img.freepik.com/free-photo/car-wash-detailing-station_1303-22307.jpg",
  "https://getundrdog.com/cdn/shop/articles/blog-template-1680617889868.jpg?v=1729704991&width=2048",
  "https://www.caratlantaga.com/wp-content/uploads/2022/01/plane-detailing.jpg",
  "https://premierdetailingandwash.com/wp-content/uploads/2023/02/151732244_m.jpg",
  "./cleanChevyInt.webp",
  "./cleanChevyRim.webp",
  "https://d14tal8bchn59o.cloudfront.net/0W4iXLlKuky7hwyUYVj1AykyTvfQqCFz5hZmBvXkOsU/w:960/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/26758/photos/999231/car-detailing-08-large_original.jpg",
  "./cleanChevyIntBack.webp",
  "https://cleanimage101.com/wp-content/uploads/2022/09/ezgif-4-349e5ac5ae.webp",
];

const Gallery = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in effect after mounting
  }, []);

  return (
    <div className="bg-white  dark:bg-transparent dark:bg-gradient-to-br dark:from-white/20 dark:via-transparent  transition-colors duration-500 ease-in-out">
      <div className="container px-4 pb-8 lg:pb-16 mx-auto">
        <div className="flex flex-col items-center gap-4 pb-4 pt-8 sm:pt-12 lg:pt-16 text-center">
          <h1
            className={`text-black dark:text-white font-bold text-4xl sm:text-6xl transition-opacity transform duration-1000 ease-in-out  ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            Gallery
          </h1>
        </div>
        <hr className="my-4 mx-0 lg:my-8 lg:mx-8 border-neutral-700" />

        <GalleryImages loadImages={detailImages} />
        <hr className="my-4 lg:my-8 mx-8 border-neutral-700" />
      </div>
    </div>
  );
};

export default Gallery;
