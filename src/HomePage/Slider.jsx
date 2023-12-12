import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  useEffect(() => {
    const mySwiper = new window.Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      // Cleanup Swiper instance on unmount
      mySwiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container h-64">
      <div className="swiper-wrapper">
        {/* Slide 1 */}
        <div className="swiper-slide">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slide 2 */}
        <div className="swiper-slide">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slide 3 */}
        <div className="swiper-slide">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Add navigation buttons */}
      <div className="swiper-button-next text-white"></div>
      <div className="swiper-button-prev text-white"></div>
    </div>
  );
};

export default Slider;
