import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SwiperSection = () => {
  return (
    <div className="mx-12 mt-4">
      <Swiper
        className=""
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="w-full min-h-[20em] bg-red-100/50 rounded-lg p-4">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="w-full min-h-[20em]  bg-red-100/50 rounded-lg p-4">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="w-full min-h-[20em] bg-red-100/50 rounded-lg p-4">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="w-full min-h-[20em] bg-red-100/50 rounded-lg p-4">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="w-full min-h-[20em] bg-red-100/50 rounded-lg p-4">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="w-full min-h-[20em] bg-red-100/50 rounded-lg p-4">
          Slide 6
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSection;
