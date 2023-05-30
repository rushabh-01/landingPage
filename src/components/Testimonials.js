import React from 'react';
import waves3 from '../assets/img/waves3.svg'

// import components
import TestimonialSlider from '../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <section className='relative'>
      <div className='container-fluid mx-auto'>
        <div
          className='bg-dark min-h-[600px]'
          data-aos='fade-up'
          data-aos-offset='300'
        >
          <img className='w-full' src={waves3}/>
          <div className='flex flex-col justify-center px-2 xl:px-0 h-[600px]'>
            <h2 className='h1 text-white text-center mb-[80px]'>
              Testimonials
            </h2>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
