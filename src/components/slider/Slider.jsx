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
import Card1 from '../card/Card1';
import Card2 from '../card/Card2';
import Card3 from '../card/Card3';
import Card4 from '../card/Card4';
import Card5 from '../card/Card5';

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
          depth: 415,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Card1/>
        </SwiperSlide>
        <SwiperSlide>
            <Card2/>
        </SwiperSlide>
        <SwiperSlide>
            <Card3/>
        </SwiperSlide>
        <SwiperSlide>
            <Card4/>
        </SwiperSlide>
        <SwiperSlide>
            <Card5/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
