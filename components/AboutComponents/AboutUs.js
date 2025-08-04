import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
<>
<section className="text-gray-600 body-font font-quicksand bg-amber-50 relative">
<div className='absolute right-8 -bottom-7 w-20 md:w-28 !z-30'>
          <Image src={'https://cl85-next.s3.ap-south-1.amazonaws.com/home/2.png'} width={400} height={400} alt='corn image' className='rotate-45 w-full h-full object-contain'></Image>
        </div>
      <div className='absolute left-4 -top-2 w-20 md:w-32 !z-30'>
          <Image src={'https://cl85-next.s3.ap-south-1.amazonaws.com/home/4.png'} width={400} height={400} alt='corn image' className='rotate-45 w-full h-full object-contain'></Image>
        </div>
      <div className="lg:max-w-[1300px] mx-auto flex px-5 lg:py-20 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <h2 className="text-xs text-amber-500 tracking-widest font-semibold italic title-font mb-1">ABOUT FRESHCON</h2>
          <h1 className="title-font lg:text-4xl text-3xl mb-2 font-manrope font-extrabold text-green-900">Designed for Long-Term Excellence</h1>
          <p className="mb-5 leading-relaxed lg:mb-6">Inspired by the challenge of balancing tradition with modern convenience, we set out to develop a range of products that could deliver the same home-cooked quality with a fraction of the effort. The result is a line of Freshcon’s pre-cooked, preservative-free ingredients that are ready to use whenever you are, allowing you to enjoy the warmth and nourishment of home-cooked meals without the time-consuming prep work.</p>
          <ul className="space-y-3 bg-amber-100 border border-amber-200 w-full p-6 rounded-2xl mb-6 lg:mb-10">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-700"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" /></svg>
              <span className="text-gray-800 font-semibold">Blending Tradition with Innovation</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-700"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" /></svg>
              <span className="text-gray-800 font-semibold">Effortless Home-Cooked Quality</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-700"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" /></svg>
              <span className="text-gray-800 font-semibold">Fresh Ingredients, No Preservatives</span>
            </li>
          </ul>
          {/* <div className="flex gap-6 flex-col lg:flex-row items-center justify-center">
            <a href="/contact-us" className="rounded-lg px-6 py-4 overflow-hidden group bg-amber-500 relative hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-15 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-medium">Get Free Quote</span>
            </a>
            <a href="mailto:freshconindia@gmail.com" className="flex items-center gap-3">
            <svg className='w-14' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_16231_11)"><path d="M50 99C77.062 99 99 77.062 99 50C99 22.938 77.062 1 50 1C22.938 1 1 22.938 1 50C1 77.062 22.938 99 50 99Z" stroke="#14532D"/><path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" fill="#14532D"/><path d="M70.2188 39.3438V61.6562C70.2188 62.9243 69.715 64.1404 68.8184 65.0371C67.9217 65.9338 66.7056 66.4375 65.4375 66.4375H33.5625C32.2944 66.4375 31.0783 65.9338 30.1816 65.0371C29.285 64.1404 28.7813 62.9243 28.7813 61.6562V39.3438M70.2188 39.3438C70.2188 38.0757 69.715 36.8596 68.8184 35.9629C67.9217 35.0662 66.7056 34.5625 65.4375 34.5625H33.5625C32.2944 34.5625 31.0783 35.0662 30.1816 35.9629C29.285 36.8596 28.7813 38.0757 28.7813 39.3438M70.2188 39.3438V39.8601C70.2188 40.6764 70.0099 41.4792 69.6119 42.1919C69.2139 42.9046 68.64 43.5035 67.945 43.9316L52.0075 53.7385C51.2536 54.2029 50.3855 54.4488 49.5 54.4488C48.6145 54.4488 47.7464 54.2029 46.9925 53.7385L31.055 43.9337C30.36 43.5056 29.7861 42.9067 29.3881 42.194C28.9901 41.4813 28.7812 40.6786 28.7813 39.8622V39.3438" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_16231_11"><rect width="100" height="100" fill="white"/></clipPath></defs></svg>
              <div>
                <h1 className="text-base text-gray-600">Support center 24X7</h1>
                <h2 className="font-bold text-lg text-slate-900">freshconindia@gmail.com</h2>
              </div>
            </a>
          </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <Image className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
          <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/about/about-hero.png"  alt="Freshcon" objectFit="cover" quality={100} className="w-full h-full object-cover rounded-xl" width={400} height={400}/>
        </div>
      </div>
    </section>
</>
  )
}
