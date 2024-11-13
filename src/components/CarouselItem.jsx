export default function CarouselItem({ imgUrl }) {
  return (
    <>
      <img
        className=" hover:scale-105 transition-all ease-in-out duration-300 rounded-md  min-w-44 min-h-44 lg:min-w-52 lg:min-h-60 max-h-60 w-full object-cover shadow-neonLightSlim"
        src={imgUrl}
        draggable={false}
        alt="img"
      ></img>
    </>
  );
}
