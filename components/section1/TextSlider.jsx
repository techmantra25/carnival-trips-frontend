"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TextSlider = ({ textArray }) => {

  return (
    <Swiper
      //  modules={[Navigation]}
      spaceBetween={0}
      direction={"vertical"}
      slidesPerView={"1"}
      className="swiper-wrapper"
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={2000}
      modules={[Autoplay]}
    >
      {textArray.map((ele, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <h1>{ele}</h1>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TextSlider;
