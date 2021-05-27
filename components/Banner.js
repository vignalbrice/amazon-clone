import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src="/gateway.jpg" alt="" loading="lazy" />
        </div>
        <div>
          <img src="/beedinghero.jpg" alt="" loading="lazy" />
        </div>
        <div>
          <img src="/spring.jpg" alt="" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
