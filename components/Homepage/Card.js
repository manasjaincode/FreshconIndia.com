import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full mt-10 lg:mt-14">
      <div className='absolute left-4 -bottom-7 w-20 md:w-32 !z-30'>
          <Image src={'https://cl85-next.s3.ap-south-1.amazonaws.com/home/5.png'} width={400} height={400} alt='corn image' className='rotate-45 w-full h-full object-contain'></Image>
        </div>
      <div className='absolute left-4 -top-2 w-20 md:w-32 !z-30'>
          <Image src={'https://cl85-next.s3.ap-south-1.amazonaws.com/home/4.png'} width={400} height={400} alt='corn image' className='rotate-45 w-full h-full object-contain'></Image>
        </div>
      <div className="lg:max-w-[1300px] px-4 py-10 lg:mb-5  lg:px-8 lg:py-14 mx-auto bg-white font-quicksand">
        <div className="flex flex-col text-center w-full mb-10">
          {/* <h2 className="text-xs text-theme1 tracking-widest font-semibold italic title-font mb-1">
            FRESHCON
          </h2> */}
          <h1 className="lg:text-4xl text-3xl font-extrabold title-font mb-4 text-green-900">
            The Comfort of Tradition, The Ease of Modern Life
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-800">
            At Freshcon, we understand the value of time, the importance of
            nutrition, and the joy that comes from sharing a meal that feels
            like home.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4">
          {/* Icon Block */}
          <div className="text-center border border-green-200 bg-green-50 rounded-2xl p-4 hover:shadow-lg duration-300">
            <div className="flex justify-center items-center  mx-auto">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/icon-1.svg" loading="lazy" alt="freshcon values" className="w-14 object-cover object-center" width={700} height={700}/>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-bold text-green-900">
                Ready in Minutes
              </h3>
              <p className="mt-1 text-gray-600">
                Enjoy a hearty, nutritious meal in under 10 minutes with our
                convenient, easy pre-cooked products.
              </p>
            </div>
          </div>
          {/* End Icon Block */}

          {/* Icon Block */}
          <div className="text-center border border-green-200 bg-green-50 rounded-2xl p-4 hover:shadow-lg duration-300">
            <div className="flex justify-center items-center  mx-auto">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/icon-2.svg" loading="lazy" alt="freshcon values" className="w-14 object-cover object-center" width={700} height={700}/>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-bold text-green-900">
                Preservative-Free
              </h3>
              <p className="mt-1 text-gray-600">
                No preservatives, just natural goodness and fresh taste with
                high-quality ingredients. Enjoy chemical-free meals.
              </p>
            </div>
          </div>
          {/* End Icon Block */}

          {/* Icon Block */}
          <div className="text-center border border-green-200 bg-green-50 rounded-2xl p-4 hover:shadow-lg duration-300">
            <div className="flex justify-center items-center  mx-auto">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/icon-3.svg" loading="lazy" alt="freshcon values" className="w-14 object-cover object-center" width={700} height={700} />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-bold text-green-900">
                Made with HT Techonology
              </h3>
              <p className="mt-1 text-gray-600">
                Our &quot;High Temperature Sterilization&quot; ensures safe,
                preservative-free products with preserved flavors, textures, and
                nutrients.
              </p>
            </div>
          </div>
          {/* End Icon Block */}

          {/* Icon Block */}
          <div className="text-center border border-green-200 bg-green-50 rounded-2xl p-4 hover:shadow-lg duration-300">
            <div className="flex justify-center items-center  mx-auto">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/icon-4.svg" loading="lazy" alt="freshcon values" className="w-14 object-cover object-center" width={700} height={700}/>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-bold lg:whitespace-nowrap text-green-900">
                Retained nutritional value
              </h3>
              <p className="mt-1 text-gray-600">
                Freshcon preserves vitamins, minerals, and nutrients, ensuring
                your meals are as nourishing as they are tasty.
              </p>
            </div>
          </div>
          {/* End Icon Block */}

          {/* Icon Block */}
          <div className="text-center border border-green-200 bg-green-50 rounded-2xl p-4 hover:shadow-lg duration-300">
            <div className="flex justify-center items-center  mx-auto">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/icon-5.svg" loading="lazy" alt="freshcon values" className="w-14 object-cover object-center" width={700} height={700}/>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-bold text-green-900">
                Just like Home-cooked
              </h3>
              <p className="mt-1 text-gray-600">
                Our products bring the comfort of home-cooked meals to your
                table in minutes, even on busy days.
              </p>
            </div>
          </div>
          {/* End Icon Block */}

          {/* Icon Block */}
          <div className="text-center border border-green-200 bg-green-50 rounded-2xl p-4 hover:shadow-lg duration-300">
            <div className="flex justify-center items-center  mx-auto">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/icon-6.svg" loading="lazy" alt="freshcon values" className="w-14 object-cover object-center" width={700} height={700} />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-bold text-green-900">
                Longer Shelf Life
              </h3>
              <p className="mt-1 text-gray-600">
                Freshcon offers peace of mind, ensuring pantry ingredients stay
                fresh and flavorful weeks after purchase.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
