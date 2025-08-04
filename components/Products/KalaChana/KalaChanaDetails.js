import Image from 'next/image'
import React from 'react'

const KalaChanaDetails = () => {
  return (
    <section className="mb-[45px] mt-5 font-quicksand">
    <div className="px-6 z-[5] lg:py-12 md:px-12 text-gray-800 text-start lg:text-left">
      <div className="lg:max-w-[1200px] w-full mx-auto">
        <div className="flex justify-between w-full relative flex-col-reverse lg:flex-row">
          <div className="h-fit lg:mb-0 mt-7 lg:mt-0 lg:max-w-lg w-full mx-auto lg:sticky top-24 lg:pr-16">
            <Image
              className="object-cover object-center rounded-md"
              alt="kala chana detail"
              src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/P4.png"
              width={500} 
              height={500} 
              layout="responsive"
            />
          </div>
          <div className="mt-2 w-full lg:mt-0">
              <div className="mt-4 lg:mt-0 mb-2">
              <div className="flex items-center mt-4 lg:mt-0 mb-2">
                  <h1 className="font-bold text-3xl lg:text-4xl text-green-700">
                  Pre-Cooked Kala Chana
                  </h1>
                </div>
                <p className='mb-2'>Experience the rich, earthy flavor of our Pre-Cooked Kala Chana, perfectly prepared and ready to use in your favorite dishes. Whether you’re cooking up a hearty curry or adding a protein punch to your salad, our black chickpeas offer convenience without compromising on taste or nutrition. Just open, season, and serve!</p>

                <p>Traditional cooking methods for kala chana require hours of soaking and extended cooking times, which can be inconvenient for those with busy lifestyles. </p>
            </div>
            
            <div className="mt-4">
            <h3 className="font-bold text-[19px] mb-2 mt-2">Key Features:</h3>
              <ul className="flex flex-col gap-2 gap-y-3 text-gray-800">
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="">Versatile Ingredient</span>
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="">100% Natural</span>
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="">Long Shelf Life</span>
                  </span>
                </li> 
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="">Rich in Nutrition</span>
                  </span>
                </li> 
              </ul>
            </div>

            <div className="mt-4">
            <p className='mb-2'> Traditionally, preparing kala chana involves hours of soaking and slow cooking, but our pre-cooked version takes away the hassle while retaining all the goodness and taste.</p>
            <p> With our Pre-Cooked Kala Chana, you can enjoy the authentic taste of this cherished legume without the lengthy preparation time. It&apos;s the perfect solution for those who want to create delicious, home-style meals with ease and convenience. Just open, season, and savor the rich flavor and texture that Kala Chana adds to your favorite recipes.</p>
              <h3 className="font-bold text-[19px] mb-2 mt-4">Use Cases</h3>
              <ul className="flex flex-col gap-2 gap-y-3 text-gray-800">
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Kala Chana Curry :-</span> Create a traditional, hearty kala chana curry in a fraction of the time. Our pre-cooked kala chana beans are perfectly tender, absorbing spices and flavors for a rich, satisfying dish.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Chaat :-</span> Whip up a quick and delicious kala chana chaat by tossing the beans with chopped onions, tomatoes, herbs, and spices. It’s a nutritious snack or side dish that’s full of flavor and texture.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Salads :-</span> Add our pre-cooked kala chana to your salads for a boost of protein and fiber. They pair well with fresh vegetables, greens, and tangy dressings, making your salad more filling and nutritious.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Soups and Stews :-</span> Enhance your soups and stews with the robust texture of kala chana. The beans hold up well in broths and gravies, adding depth and a hearty bite to your dishes.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="text-neutral-700 w-[90%]">
                    <span className="font-semibold text-neutral-800">Snacks :-</span> Create a healthy, protein-packed snack by roasting our pre-cooked kala chana with your favorite spices. They’re perfect for on-the-go munching or as a crunchy addition to other dishes.
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 text-base font-medium mt-2">
                No matter where you shop, our products are just a click away, ready to bring convenience and flavor to your kitchen. Buy Now from Zepto and Amazon.              
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default KalaChanaDetails