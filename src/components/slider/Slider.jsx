import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Card from '../card/Card';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 400,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Card/>
        </SwiperSlide>
        <SwiperSlide>
            <Card/>
        </SwiperSlide>
        <SwiperSlide>
            <Card/>
        </SwiperSlide>
        <SwiperSlide>
            <Card/>
        </SwiperSlide>
        <SwiperSlide>
            <Card/>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
