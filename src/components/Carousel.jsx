import "./Carousel.css"; // Import custom CSS for the animation
import CarouselItem from "./CarouselItem";
import { detailImages } from "./Gallery";

const cardDetails = {
  0: {
    imgUrl: "https://picsum.photos/id/237/200/300",
    title: "Text 1",
  },

  1: {
    imgUrl: "https://picsum.photos/id/238/200/300",
    title: "Text 2",
  },

  2: {
    imgUrl: "https://picsum.photos/id/239/200/300",
    title: "Text 3",
  },

  3: {
    imgUrl: "https://picsum.photos/id/240/200/300",
    title: "Text 4",
  },

  4: {
    imgUrl: "https://picsum.photos/id/241/200/300",
    title: "Text 5",
  },

  5: {
    imgUrl: "https://picsum.photos/id/42/200/300",
    title: "Text 6",
  },

  6: {
    imgUrl: "https://picsum.photos/id/243/200/300",
    title: "Text 7",
  },
};

const Carousel = () => {
  return (
    <div className="overflow-hidden w-full h-[225px] lg:h-[300px] relative border-y border-white shadow-neonDark dark:shadow-neonLight">
      <div className="carousel-track">
        {Object.keys(detailImages).map((index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={detailImages[index]}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={detailImages[index]}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
