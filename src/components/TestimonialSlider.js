import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../slider.css';
import { Pagination } from 'swiper';
import { testimonialsData } from '../data';
import { Autoplay } from 'swiper';

const TestimonialSlider = () => {
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance.isEnd) {
      // Go back to the start when reaching the end
      swiperInstance.slideTo(0);
    }
  };

  const swiperParams = {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      clickable: true,
    },
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 3000, // 3-second interval between each slide
      disableOnInteraction: false, // Continue autoplay even on user interaction
    },
    loop: false,
    on: {
      slideChange: handleSlideChange,
    },
  };

  return (
    <Swiper {...swiperParams} className='mySwiper' ref={swiperRef}>
      {testimonialsData.map((slide, index) => {
        const { image, message, name, web, delay } = slide;
        return (
          <SwiperSlide
            key={index}
            className='bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'
          >
            <img src={image} alt='' />
            <div>
              <div className='text-lg text-dark font-bold'>{name}</div>
              <div className='mb-4 font-semibold text-accent-primary'>
                {web}
              </div>
              <p className='max-w-[240px]'>{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
