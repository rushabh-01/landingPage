import React,{useState,useEffect} from 'react';
import style from '../style.css'
import wave3 from '../assets/img/waves3.svg'

// import hero data
import { heroData } from '../data';

// import components
import Header from './Header';

const Hero = () => {

  //mobile
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    window.innerWidth <= 768 ? setMobile(true) : setMobile(false);
  }, [mobile]);


  // destructure hero
  const { title, subtitle, btnText, image } = heroData;


  return (
    <>
    <section className='lg:h-[750px] py-12 section1-bg relative'>
      <Header />
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col xl:flex-row items-center h-full md:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left xl:absolute'>
            {/* title */}
            <h1
              className='h1 xl:max-w-[750px] mb-6 xl:mb-12 text-dark'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              {title}
            </h1>
            {/* subtitle */}
            <p
              className='lead xl:max-w-[380px] mb-6 lg:mb-12'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {subtitle}
            </p>
            <button
              className='btn btn-primary mb-8 xl:mb-0'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              {btnText}
            </button>
          </div>
          {/* image */}
          <div
            className='xl:absolute xl:-right-12 '
            data-aos='fade-up'
            data-aos-delay='200'
          >
            {mobile?<img src={image} alt='' style={{height:300}}/>:<img src={image} alt='' style={{height:500}}/>}
          </div>
        </div>
        
      </div>
      {/* <img src={wave} /> */}
      <img src={wave3} className='absolute bottom-0 scale-y-[-1.04] w-full'/>
    </section>
    
    </>
  );
};
export default Hero;
