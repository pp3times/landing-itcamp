import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SwiperSection = () => {
  return (
    <div id="mood" className="mx-12 mt-12">
      <Swiper
        className=""
        spaceBetween={10}
        slidesPerView={1}
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
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="w-full  bg-red-100/50 rounded-lg p-1.5">
          <img
            src="feeling/DSC_1550.jpg"
            alt="ITCamp_img1"
            className="w-full h-full block"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full   bg-red-100/50 rounded-lg p-1.5">
          <img
            src="feeling/DSC_2008.jpg"
            alt="ITCamp_img1"
            className="w-full h-full block"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-red-100/50 rounded-lg p-1.5">
          <img
            src="feeling/_MG_9417.JPG"
            alt="ITCamp_img2"
            className="w-full h-full block"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-red-100/50 rounded-lg p-1.5">
          <img
            src="feeling/_MG_9426.JPG"
            alt="ITCamp_img3"
            className="w-full h-full block"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-red-100/50 rounded-lg p-1.5">
          <img
            src="feeling/IMG_6202.JPG"
            alt="ITCamp_img4"
            className="w-full h-full block"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-red-100/50 rounded-lg p-1.5">
          <img
            src="feeling/IMG_6598.jpg"
            alt="ITCamp_img5"
            className="w-full h-full block"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-red-100/50 rounded-lg p-1.5">
          <img
            src="feeling/IMG_6979.jpg"
            alt="ITCamp_img6"
            className="w-full h-full block"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-red-100/50 rounded-lg p-1.5">
          <img
            src="feeling/IMG_8206.jpg"
            alt="ITCamp_img7"
            className="w-full h-full block"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-red-100/50 rounded-lg p-1.5">
          <img
            src="feeling/IMG_8289.jpg"
            alt="ITCamp_img8"
            className="w-full h-full block"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-red-100/50 rounded-lg p-1.5">
          <img
            src="feeling/IMG_8404.jpg"
            alt="ITCamp_img9"
            className="w-full h-full block"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSection;
