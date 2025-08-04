import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <>
      <div className="bg-white py-6  lg:py-12 mt-10 font-quicksand relative">
      <div className='absolute right-8 -bottom-7 w-20 md:w-28 !z-30'>
          <Image src={'https://cl85-next.s3.ap-south-1.amazonaws.com/home/7.png'} width={400} height={400} alt='corn image' className='rotate-45 w-full h-full object-contain'></Image>
        </div>
      <div className='absolute left-4 -top-2 w-20 md:w-32 !z-30'>
          <Image src={'https://cl85-next.s3.ap-south-1.amazonaws.com/home/4.png'} width={400} height={400} alt='corn image' className='rotate-45 w-full h-full object-contain'></Image>
        </div>
        <div className="mx-auto lg:max-w-[1300px] px-4 md:px-8">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="lg:text-4xl text-3xl font-extrabold title-font mb-4 text-green-900">
              Our Products Range
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-800">
              Much more than just ingredients— our products are your gateway to
              simpler, faster, and more enjoyable cooking. Welcome to a new era
              of cooking, where convenience meets tradition, and quality is
              never compromised.
            </p>
          </div>

          <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-5">
            {/* product - start */}
            <div>
              <div className="group relative mb-2 block h-80 lg:h-[250px] overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image
                  src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/P1.png"
                  loading="lazy"
                  alt="Freshcon products"
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <div className="hover:gray-800 mb-1 text-gray-800 font-bold transition duration-100 lg:text-lg">
                  Pre-cooked Kabuli Chana
                </div>
                <div>
                  <span className=" text-gray-500">
                    The perfect balance of nutty flavor and creamy texture
                  </span>
                  <Link href={'/products/pre-cooked-kabuli-chana'} className="flex gap-1 mt-1 items-center text-theme1 text-base font-semibold">
                  <p>View details</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5"> <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" /> </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="group relative mb-2 block h-80 lg:h-[250px] overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image
                  src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/P2.png"
                  loading="lazy"
                  alt="Freshcon products"
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <div className="hover:gray-800 mb-1 text-gray-800 font-bold transition duration-100 lg:text-lg">
                  Pre-cooked Rajma
                </div>
                <div>
                  <span className=" text-gray-500">
                    Rich, earthy flavour without hours of preparation
                  </span>
                  <Link href={'/products/pre-cooked-rajma'} className="flex gap-1 mt-1 items-center text-theme1 text-base font-semibold">
                  <p>View details</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5"> <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" /> </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="group relative mb-2 block h-80 lg:h-[250px] overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image
                  src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/P4.png"
                  loading="lazy"
                  alt="Freshcon products"
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <div className="hover:gray-800 mb-1 text-gray-800 font-bold transition duration-100 lg:text-lg">
                  Pre-cooked Kala Chana
                </div>
                <div>
                  <span className=" text-gray-500">
                    Symbol of nourishment, comfort, and tradition
                  </span>
                  <Link href={'/products/pre-cooked-kala-chana'} className="flex gap-1 mt-1 items-center text-theme1 text-base font-semibold">
                  <p>View details</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5"> <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" /> </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="group relative mb-2 block h-80 lg:h-[250px] overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image
                  src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/P3.png"
                  loading="lazy"
                  alt="Freshcon products"
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <div className="hover:gray-800 mb-1 text-gray-800 font-bold transition duration-100 lg:text-lg">
                  Pre-cooked Sweet Corn
                </div>
                <div>
                  <span className=" text-gray-500">
                  Sweet, juicy, and bursting with vibrant flavor
                  </span>
                  <Link href={'/products/pre-cooked-sweet-corn'} className="flex gap-1 mt-1 items-center text-theme1 text-base font-semibold">
                  <p>View details</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5"> <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" /> </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="group relative mb-2 block h-80 lg:h-[250px] overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image
                  src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/p-5.png"
                  loading="lazy"
                  alt="Freshcon products"
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <div className="hover:gray-800 mb-1 text-gray-800 font-bold transition duration-100 lg:text-lg">
                Frozen Shredded Coconut 
                </div>
                <div>
                  <span className=" text-gray-500">
                  Best quality Kerala coconuts grated and frozen while fresh
                  </span>
                  <Link href={'/products/frozen-shredded-coconut'} className="flex gap-1 mt-1 items-center text-theme1 text-base font-semibold">
                  <p>View details</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5"> <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" /> </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
