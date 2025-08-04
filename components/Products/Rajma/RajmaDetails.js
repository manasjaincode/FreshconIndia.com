import Image from 'next/image'
import React from 'react'

const RajmaDetails = () => {
  return (
    <>
     <section className="mb-[45px] mt-5 font-quicksand">
      <div className="px-6 z-[5] lg:py-12 md:px-12 text-gray-800 text-start lg:text-left">
        <div className="lg:max-w-[1200px] w-full mx-auto">
          <div className="flex justify-between w-full relative flex-col-reverse lg:flex-row">
            <div className="h-fit lg:mb-0 mt-7 lg:mt-0 lg:max-w-lg w-full mx-auto lg:sticky top-24 lg:pr-16">
              <Image
                className="object-cover object-center rounded-md"
                alt="hero"
                src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/P2.png"
                width={500} 
                height={500} 
                layout="responsive"
              />
            </div>
            <div className="mt-2 w-full lg:mt-0">
              <div>
                <div className=" mt-4 lg:mt-0 mb-2">
                  <h1 className="font-bold text-3xl lg:text-4xl text-green-700">
                  Pre Cooked Rajma  
                  </h1>
                </div>
              </div>
              
              {/* <div className="mt-4">
                <ul className="flex flex-col gap-2 gap-y-3 text-gray-800">
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="">Saves time</span>
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="">Ready in minutes</span>
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="">Easy & Tasty</span>
                    </span>
                  </li> 
                </ul>
              </div> */}

              <div className="mt-4">
                <p> Our pre-cooked rajma is rich, hearty, and full of flavor. Perfectly cooked to retain their firm texture, these kidney beans are a staple in Indian cuisine. Whether you’re making the classic Rajma Chawal or adding them to a stew, our pre-cooked rajma saves you time without compromising on taste or quality.                </p>
                <h3 className="font-bold text-[19px] mb-2 mt-2">Key Features:</h3>
                <ul className="flex flex-col gap-2 gap-y-3 text-gray-800">
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="">No Additives and preservatives </span>
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="">Not frozen</span>
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="">High in protein and fiber</span>
                    </span>
                  </li> 
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="">Ready to use – perfect for quick Indian dishes and more</span>
                    </span>
                  </li> 
                </ul>
              </div>

           
              <div className="mt-4">
                <p>Introducing Freshcon Pre-Cooked Rajma, your go-to solution for delicious, home-style rajma without the wait. Tender, flavorful, and perfectly cooked, our rajma beans are ready to bring the rich, authentic taste of North Indian cuisine to your table in minutes. Skip the soaking and boiling—just open, season, and savor the goodness!</p>
                <h3 className="font-bold text-[19px] mb-2 mt-4">Use Cases</h3>
                <ul className="flex flex-col gap-2 gap-y-3 text-gray-800">
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="font-semibold text-neutral-800">Rajma Masala :-</span> Create the classic North Indian dish with ease. Our pre-cooked rajma absorbs spices and gravies perfectly, giving you a rich and flavorful rajma masala in a fraction of the time.
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="font-semibold text-neutral-800">Rajma Chawal :-</span> Pair our pre-cooked rajma with steamed basmati rice for a quick and satisfying meal. It’s the comfort food you love, made more convenient than ever.
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="font-semibold text-neutral-800">Burritos and Wraps :-</span> Add a twist to your burritos or wraps by using our rajma as a filling. The beans are tender and flavorful, complementing a variety of ingredients like cheese, salsa, and guacamole.
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="font-semibold text-neutral-800">Rajma Salad :-</span> Create a hearty and nutritious salad by combining our pre-cooked rajma with fresh vegetables, herbs, and a tangy dressing. It’s a healthy meal option that’s both filling and delicious.
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="font-semibold text-neutral-800">Stews and Soups :-</span> Enhance your stews and soups with our rajma beans. They add a rich, hearty texture and absorb flavors beautifully, making your dishes more robust and satisfying.
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 text-base font-medium italic mt-2">
              Bring the rich, authentic taste of our Pre-Cooked Rajma to your kitchen!
              </p>
              <p className="text-gray-700 text-base font-medium mt-2">
                No matter where you shop, our products are just a click away, ready to bring convenience and flavor to your kitchen. Buy Now from  Zepto and Amazon.              
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default RajmaDetails