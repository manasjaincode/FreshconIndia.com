import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const KabuliChanaDetails = () => {
  return (
    <>
      <section className="mb-[45px] mt-5 font-quicksand">
      <div className="px-6 z-[5] lg:py-12 md:px-12 text-gray-800 text-start lg:text-left">
        <div className="lg:max-w-[1200px] w-full mx-auto">
          <div className="flex justify-between w-full relative flex-col-reverse lg:flex-row">
            <div className="h-fit lg:mb-0 mt-7 lg:mt-0 lg:max-w-lg w-full mx-auto lg:sticky top-24 lg:pr-16">
              <Image
                className="object-cover object-center rounded-md"
                alt="Kabuli chana detail"
                src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/P1.png"
                width={500} 
                height={500} 
                layout="responsive"
              />
            </div>
            <div className="mt-2 w-full lg:mt-0">
              <div>
                <div className=" mt-4 lg:mt-0 mb-2">
                  <h1 className="font-bold text-3xl lg:text-4xl text-green-700">
                    Pre Cooked Kabuli Chana
                  </h1>
                </div>
                <p>
                Say hello to our Pre-Cooked Kabuli Chana—your shortcut to authentic, home-style chickpea dishes without the hassle. Perfectly cooked and bursting with natural flavor, our chickpeas are ready to elevate your meals with wholesome goodness in just minutes. No soaking, no waiting—just open, season, and enjoy!
                </p>
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
                      <span className="">100% Natural</span>
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
                      <span className="">Convenient and versatile – perfect for quick meals and snacks.</span>
                    </span>
                  </li> 
                </ul>
              </div>

           
              <div className="mt-3">
                {/* <h3 className="font-bold text-[19px] mb-2">Benefits</h3> */}
                <p>Freshcon Pre-cooked Kabuli Chana is a game-changer for anyone who loves this protein-rich legume. Carefully selected and perfectly cooked, they retain their firm texture and nutty flavor, making them ideal for a wide range of dishes. Whether you’re adding them to salads, stews, or making hummus, our chickpeas are ready to use straight from the pack – no soaking or boiling required.</p>

                <h3 className="font-bold text-[19px] mb-2 mt-4">Use Cases</h3>
                <ul className="flex flex-col gap-2 gap-y-3 text-gray-800">
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="font-semibold text-neutral-800">Chana Masala :-</span> Whip up a classic chana masala in a fraction of the time with our pre-cooked kabuli chana. The beans are perfectly tender and soak up spices and flavors beautifully, delivering an authentic taste experience.
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="font-semibold text-neutral-800">Salads :-</span> Add a protein boost to your salads with our ready-to-use chickpeas. Toss them with fresh greens, veggies, and your favorite dressing for a quick, nutritious meal.
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="font-semibold text-neutral-800">Hummus :-</span> Make creamy, smooth hummus in minutes. Our pre-cooked chickpeas blend effortlessly, giving you a rich, velvety texture that’s perfect for dipping or spreading.
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="font-semibold text-neutral-800">Curries and Stews :-</span> Enhance your curries and stews with the hearty texture of our kabuli chana. They’re a perfect addition to vegetarian and non-vegetarian dishes alike, providing a satisfying bite.
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-theme2 mt-1 w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="text-neutral-700 w-[90%]">
                      <span className="font-semibold text-neutral-800">Snacks :-</span> Season our pre-cooked chickpeas with spices and roast them for a healthy, crunchy snack. They’re great for on-the-go munching or as a topping for soups and salads.
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 text-base font-medium italic mt-2">
              Our pre-cooked kabuli chana is flavorful and ready to be the star of your favorite dishes. These chickpeas are a staple in both Indian and Mediterranean cuisines, and our pre-cooked version makes it easier than ever to enjoy them.
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

export default KabuliChanaDetails