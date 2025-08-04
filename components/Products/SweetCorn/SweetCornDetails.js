import Image from 'next/image'
import React from 'react'

const SweetCornDetails = () => {
  return (
    <>
  <section className="mb-[45px] mt-5 font-quicksand">
    <div className="px-6 z-[5] lg:py-12 md:px-12 text-gray-800 text-start lg:text-left">
      <div className="lg:max-w-[1200px] w-full mx-auto">
        <div className="flex justify-between w-full relative flex-col-reverse lg:flex-row">
          <div className="h-fit lg:mb-0 mt-7 lg:mt-0 lg:max-w-lg w-full mx-auto lg:sticky top-24 lg:pr-16">
            <Image
              className="object-cover object-center rounded-md"
              alt="sweet corn detail"
              src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/P3.png"
              width={500} 
              height={500} 
              layout="responsive"
            />
          </div>
          <div className="mt-2 w-full lg:mt-0">
                  <h1 className="font-bold mb-2 text-3xl lg:text-4xl text-green-700">Pre-Cooked Sweet Corn</h1>
              <div className="mt-4 lg:mt-0 mb-2">
                <p>Bursting with natural sweetness and crisp texture, these kernels are perfectly cooked and ready to elevate any dish in seconds. Say goodbye to long prep times and hello to effortless cooking. Just open, season, and enjoy!</p>
            </div>
            
            <div className="mt-2">
            <h3 className="font-bold text-[19px] mb-2 mt-2">Key Features:</h3>
              <ul className="flex flex-col gap-2 gap-y-3 text-gray-800">
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="">Preservative-Free, Bacteria-Free, No Refrigeration Needed.</span>
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="">Sweet, crunchy, and full of natural flavor.</span>
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="">Ready to use in a variety of dishes – salads, soups, snacks, and more.</span>
                  </span>
                </li>  
              </ul>
            </div>

         
            <div className="mt-4">
            <p className='mb-2'>Freshcon Pre-cooked Sweet Corn Kernels -  your culinary muse. Whether you’re sprinkling them over a salad, stirring them into a soup, or simply enjoying them as a snack, their sweet, juicy flavor will transport you to a summer’s day, no matter the season</p>
              <h3 className="font-bold text-[19px] mb-2 mt-4">Use Cases</h3>
              <ul className="flex flex-col gap-2 gap-y-3 text-gray-800">
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Salads :-</span>  Add a pop of sweetness and crunch to your salads. Our pre-cooked corn kernels blend seamlessly with greens, grains, and proteins, making every bite refreshing and satisfying.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Soups and Stews :-</span> Enhance the flavor and texture of your soups and stews with our ready-to-use corn kernels. They retain their shape and sweetness, even after simmering, adding a delightful contrast to hearty broths.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Stir-Fries :-</span> Perfect for quick, nutritious stir-fries, our corn kernels cook in minutes and pair well with a variety of vegetables, meats, and sauces, making weeknight dinners a breeze.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Salsas and Dips :-</span> Create vibrant, flavorful salsas and dips with our corn kernels. Their natural sweetness balances the spice, adding depth to your favorite recipes.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Side Dishes :-</span> Serve our pre-cooked corn kernels as a stand-alone side dish. Simply season with butter, herbs, or spices for a quick, delicious addition to any meal.

                  </span>
                </li>
              </ul>
              <p className="text-gray-700 text-base font-medium italic mt-2">
              No matter where you shop, our products are just a click away, ready to bring convenience and flavor to your kitchen. Buy Now from Zepto and Amazon. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default SweetCornDetails