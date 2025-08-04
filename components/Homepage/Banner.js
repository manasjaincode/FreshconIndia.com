"use client";
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const HeroSwiper = [
    {
      id: 2,
      sliderImage: "https://cl85-next.s3.ap-south-1.amazonaws.com/home/home-banner-1.png",
    },
    {
      id: 3,
      sliderImage: "https://cl85-next.s3.ap-south-1.amazonaws.com/home/home-banner-2.png",
    },
    {
      id: 4,
      sliderImage: "https://cl85-next.s3.ap-south-1.amazonaws.com/home/home-banner-3.png",
    },
  ];

  const HeroSwiperSmallSideDropImage = [
    {
      id: 23,
      sliderImage: "https://cl85-next.s3.ap-south-1.amazonaws.com/home/home-banner-1.png",
    },
    {
      id: 33,
      sliderImage: "https://cl85-next.s3.ap-south-1.amazonaws.com/home/home-banner-2.png",
    },
    {
      id: 43,
      sliderImage: "https://cl85-next.s3.ap-south-1.amazonaws.com/home/home-banner-3.png",
    },
  ];

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    // <section className="bg-cover bg-no-repeat relative lg:h-[590px] h-auto flex font-quicksand items-center flex-col">
    //   <div className='absolute right-4 -bottom-7 w-20 md:w-32 z-30'>
    //     <Image
    //       src={'https://cl85-next.s3.ap-south-1.amazonaws.com/home/5.png'}
    //       width={400}
    //       height={400}
    //       alt='corn image'
    //       className='rotate-45 w-full h-full object-contain'
    //     />
    //   </div>
    //   <div className="w-full">
    //     <Swiper
    //       spaceBetween={30}
    //       effect={'fade'}
    //       autoplay={{
    //         delay: 3000,
    //         disableOnInteraction: false,
    //       }}
    //       onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    //       modules={[EffectFade, Navigation, Autoplay, Pagination]}
    //       className="mySwiper w-full h-full"
    //       ref={swiperRef}
    //     >
    //       {/* Combine HeroSwiper and HeroSwiperSmallSideDropImage */}
    //       {[...HeroSwiper, ...HeroSwiperSmallSideDropImage].map((slide) => (
    //         <SwiperSlide
    //           key={slide.id}
    //           className="relative flex items-center bg-white"
    //         >
    //           <Image
    //             className="h-full w-full object-center object-cover"
    //             src={slide.sliderImage}
    //             alt="slider"
    //             width={1920}
    //             height={768}
    //           />
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>
    // </section>


    <div className="grid justify-center overflow-hidden lg:justify-between mx-auto md:isolate">
       <div className='absolute right-4 top-[170px] md:top-[290px] lg:top-[640px] w-16 md:w-28 lg:w-32 z-30'>
         <Image
          src={'https://cl85-next.s3.ap-south-1.amazonaws.com/home/5.png'}
          width={400}
          height={400}
          alt='Freshcon'
          className='rotate-45 w-full h-full object-contain'
        />
      </div>
      {/* img container */}
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        className="mySwiper heroSwiper !w-full"
        ref={swiperRef}
      >
        
        {/* Combine HeroSwiper and HeroSwiperSmallSideDropImage */}
      {[...HeroSwiper, ...HeroSwiperSmallSideDropImage].map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="relative flex items-center bg-white"
            >
              <Image
                className="h-full w-full object-center object-cover"
                src={slide.sliderImage}
                alt="slider"
                width={1920}
                height={768}
              />
            </SwiperSlide>
          ))}
        
      </Swiper>

    </div>

  );
};

export default Banner;
