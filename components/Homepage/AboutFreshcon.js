import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutFreshcon = () => {
  return (
    <>
      <section className="py-10 bg-amber-50 font-quicksand relative">
      <div className='absolute right-4 -bottom-0 w-28 md:w-36 !z-30'>
          <Image src={'https://cl85-next.s3.ap-south-1.amazonaws.com/home/1.png'} width={400} height={400} alt='corn image' className='rotate-45 w-full h-full object-contain'></Image>
        </div>
        <div className="lg:max-w-[1300px] mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 md:pr-14 flex flex-col md:items-start text-left mb-8 md:mb-0 items-start">
            <h3 className="text-theme-1 italic mb-2 text-theme1 font-semibold">
              About Freshcon
            </h3>
            <h1 className="lg:text-4xl text-3xl mb-4 font-bold text-green-900">
              The Future of Home Cooking, Made Easy
            </h1>
            <p className="mb-2 leading-relaxed text-gray-800"> In today&apos;s fast-paced world, many crave home-cooked meals but struggle with the time-consuming preparation. The long hours of soaking, chopping, and cooking can make it difficult to enjoy the comfort of a homemade dish after a busy day. Moreover, many of the quick-fix options available on the market are filled with preservatives and lack the authentic taste and quality that make home-cooked meals so special.</p>
            <p className="mb-5 leading-relaxed text-gray-800"> Freshcon changes that. We bring the heart of home-cooked meals into your modern kitchen, offering convenience without compromising on quality. Whether you&apos;re a seasoned chef or new to cooking, our products simplify your kitchen experience while delivering authentic, delicious meals every time.</p>

            <div className="md:flex mt-4">
              <div className="w-16 h-16 inline-flex items-center justify-center mb-4 flex-shrink-0">
                <svg
                  className="w-[30px]"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25 59.9723L37.5167 69.3607C38.3156 69.9598 39.3151 70.227 40.3064 70.1065C41.2976 69.986 42.204 69.4872 42.8362 68.7142L75.33 29"
                    stroke="#15803d"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 50C3 24.0426 24.0426 3 50 3C75.9574 3 97 24.0426 97 50V92C97 94.7614 94.7614 97 92 97H50C24.0426 97 3 75.9574 3 50Z"
                    stroke="#15803d"
                    strokeWidth="6"
                  />
                </svg>
              </div>
              <div className="flex-grow md:pl-1">
                <h2 className="text-neutral-800 text-lg title-font font-semibold mb-1">
                  Freshness in Every Bite
                </h2>
                <p className="leading-relaxed text-base text-gray-800">
                  HT Technology ensures vibrant flavors and perfect textures,
                  keeping chickpeas and corn just as nature intended.
                </p>
              </div>
            </div>

            <div className="md:flex mt-4">
              <div className="w-16 h-16 inline-flex items-center justify-center mb-4 flex-shrink-0">
                <svg
                  className="w-[30px]"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25 59.9723L37.5167 69.3607C38.3156 69.9598 39.3151 70.227 40.3064 70.1065C41.2976 69.986 42.204 69.4872 42.8362 68.7142L75.33 29"
                    stroke="#15803d"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 50C3 24.0426 24.0426 3 50 3C75.9574 3 97 24.0426 97 50V92C97 94.7614 94.7614 97 92 97H50C24.0426 97 3 75.9574 3 50Z"
                    stroke="#15803d"
                    strokeWidth="6"
                  />
                </svg>
              </div>
              <div className="flex-grow md:pl-1">
                <h2 className="text-neutral-800 text-lg title-font font-semibold mb-1">
                  Convenience without Compromise
                </h2>
                <p className="leading-relaxed text-base text-gray-800">
                  With our pre-cooked range, you can enjoy the convenience of
                  quick meals without sacrificing the quality that home-cooked
                  food offers.
                </p>
              </div>
            </div>

            <div className="md:flex mt-4">
              <div className="w-16 h-16 inline-flex items-center justify-center mb-4 flex-shrink-0">
                <svg
                  className="w-[30px]"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25 59.9723L37.5167 69.3607C38.3156 69.9598 39.3151 70.227 40.3064 70.1065C41.2976 69.986 42.204 69.4872 42.8362 68.7142L75.33 29"
                    stroke="#15803d"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 50C3 24.0426 24.0426 3 50 3C75.9574 3 97 24.0426 97 50V92C97 94.7614 94.7614 97 92 97H50C24.0426 97 3 75.9574 3 50Z"
                    stroke="#15803d"
                    strokeWidth="6"
                  />
                </svg>
              </div>
              <div className="flex-grow md:pl-1">
                <h2 className="text-neutral-800 text-lg title-font font-semibold mb-1">
                  Sustainability
                </h2>
                <p className="leading-relaxed text-base text-gray-800">
                  Freshcon&apos;s preservative-free, no-refrigeration approach
                  promotes sustainability with less energy use and fewer
                  additives.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link href={"/about"}>
                <div className="flex items-center gap-2 text-white bg-green-700 border-0 py-2 px-4 focus:outline-none rounded-full text-base font-medium">
                  <div>Read More</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-2xl"
              alt="Freshcon - About"
              src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/home-hero.png"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFreshcon;
