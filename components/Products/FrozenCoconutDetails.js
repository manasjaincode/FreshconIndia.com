import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FrozenCoconutDetails() {
  return (
    <section className="mb-[45px] mt-5 font-quicksand">
    <div className="px-6 z-[5] lg:py-12 md:px-12 text-gray-800 text-start lg:text-left">
      <div className="lg:max-w-[1200px] w-full mx-auto">
        <div className="flex justify-between w-full relative flex-col-reverse lg:flex-row">
          <div className="h-fit lg:mb-0 mt-7 lg:mt-0 lg:max-w-lg w-full mx-auto lg:sticky top-24 lg:pr-16">
            <Image className="object-cover object-center rounded-md" alt="freshcoconut detail" src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/p-5.png" width={500}  height={500}  layout="responsive" />
          </div>
          <div className="mt-2 w-full lg:mt-0">
            <div>
              <div className=" mt-4 lg:mt-0 mb-2">
                <h1 className="font-bold text-3xl lg:text-4xl text-green-700">
                  Frozen Shredded Coconut
                </h1>
              </div>
              <p className='mb-2'>Preparing fresh coconut can be a time-consuming chore, with its tough exterior and quick spoilage often making it impractical for everyday cooking. The search for high-quality, preservative-free coconut adds to the challenge, leaving many to settle for less-than-fresh alternatives. For those seeking convenience without compromising on taste, the struggle is real.</p>
              <p>However, we have the solution in the form of Freshcon Shredded Coconut where freshness meets convenience. Enjoy the pure, natural taste of coconut without the hassle—ready-to-use and perfectly shredded for all your culinary needs.</p>
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-[19px] mb-2">Key Features:</h3>
              <ul className="flex flex-col gap-2 gap-y-3 text-gray-800">
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span>100% Natural</span>
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span>No Added Preservatives</span>
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span>Rich in Dietary Fibres & Nutrients</span>
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span>Frozen when Fresh </span>
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span>Vegan & Gluten Free</span>
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span>Longer Shelf Life</span>
                  </span>
                </li> 
              </ul>
            </div>

         
            <div className="mt-4">
              <h3 className="font-bold text-[19px] mb-2">Enjoy real coconuts without hassle!</h3>
              <p>Freshcon Shredded Coconut is produced in a Food Safety Certified Plant. The high-quality sourced coconuts are first  hygienically shredded through automated machines and then are quickly frozen when fresh to retain the essential nutrients present.The frozen shredded coconut is packed fresh and is kept frozen. It is packaged with care to ensure freshness and prevent freezer burn. Each package is labelled with clear instructions for proper storage and preparation, facilitating ease of use.It is stowed in two SKUs of 100gm and 200gm packs. </p>

              <h3 className="font-bold text-[19px] mb-2 mt-4">Use Cases</h3>
              <ul className="flex flex-col gap-2 gap-y-3 text-gray-800">
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Smoothies & Shakes :-</span> Add instant flavor and texture to your favorite drinks.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Desserts :-</span> Perfect for sweets like coconut ladoos, cakes, and puddings.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Curries & Stir-Fries :-</span> A great addition to enhance flavor in Indian and Southeast Asian dishes.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Baking :-</span> Ideal for cakes, cookies, and other baked goods requiring coconut.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Garnishing :-</span>  Use as a topping for salads, yogurt, or breakfast bowls.
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-base font-medium italic mt-2">
            Available for purchase on major e-commerce platforms like Amazon and Zepto.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
