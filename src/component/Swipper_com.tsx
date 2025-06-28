// import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
function Swipper_com() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <div className=" relative w-full h-full"> */}
          <img src="/gallery01.png" className=" object-contain" alt="01" />

          {/* </div> */}
        </SwiperSlide>

        <SwiperSlide>
          <img src="/gallery02.png" alt="01" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/gallery03.png" alt="01" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/gallery04.png" alt="01" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Swipper_com;
