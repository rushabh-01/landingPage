import React,{useState,useEffect} from 'react';

// import features data
import { featuresData } from '../data';

// import icons
import { BsArrowRight } from 'react-icons/bs';

const Features = () => {

  //mobile
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    window.innerWidth <= 768 ? setMobile(true) : setMobile(false);
  }, [mobile]);


  // destructure features data
  const { title, subtitle, list } = featuresData;
  return (
    <section className='my-[70px] xl:my-[150px]'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center'>
          <h2
            className='h2 mb-6 xl:mb-12 text-dark'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            {title}
          </h2>
          <p
            className='lead max-w-[584px] mx-auto mb-16 xl:mb-24'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            {subtitle}
          </p>
        </div>
        {/* feature list */}
        <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
          {list.map((feature, index) => {
            // destructure feature
            const { image, title, description, linkText, delay } =
              feature;
            // feature item
            return (
              <div
                key={index}
                className='w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto bg-yellow rounded-full shadow-box1'
                data-aos='zoom-in'
                data-aos-offset='100'
                data-aos-delay={delay}
              >
                {/* bg image */}
                <div className='hidden xl:flex absolute top-0 right-0 -z-10'>
                  
                </div>

                {/* icon image */}
                <div
                  className='max-w-[120px] xl:mr-7 xl:max-w-[232px]'
                  data-aos='zoom-in-right'
                  data-aos-delay={delay}
                >
                  <img src={image} />
                </div>
                {/* text */}
                {mobile?
                <div className='max-w-[220px]'>
                  <h3 class="text-3xl text-center mb-4">{title}</h3>
                  <p className='font-light text-center italic mb-4'>{description}</p>
                </div>
                :
                <div className='max-w-[220px]'>
                <h3 className='text-[30px] font-bold mb-4'>{title}</h3>
                  <p className='font-light italic mb-4'>{description}</p>
                  {/* link & arrow */}
                  <div className='flex items-center gap-x-2 group'>
                    <a className='text-primary font-bold' href='#'>
                      {linkText}
                    </a>
                    <BsArrowRight className='text-xl text-accent-primary group-hover:ml-[5px] transition-all' />
                  </div>
                </div>
                }
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
