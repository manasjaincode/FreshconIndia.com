import React from "react";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <>
      <section className="text-white bg-green-950 font-quicksand">
        <div className="lg:max-w-[1300px] px-5 py-20 mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-theme-1 italic mb-2 text-theme1 font-semibold">
              Why Choose Freshcon?
            </h3>
            <h1 className="lg:text-4xl text-3xl font-bold title-font text-white mb-4">
              Experience the Difference
            </h1>
            <p className="text-base leading-relaxed lg:max-w-[700px] mx-auto text-white">
              With Freshcon, convenience doesn’t mean compromise. It means you
              get to enjoy the food you love, with the people you love, without
              the stress of hours in the kitchen. It’s food that’s just like
              home-cooked, made for the modern world.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-theme1 inline-flex"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center  mb-5 flex-shrink-0">
                <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/why-choose-1.png" loading="lazy" alt="freshcon why choose us" className="h-full w-full object-cover object-center" width={500} height={500} />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl title-font text-white font-bold mb-3">
                  Pre-Cooked, Not Pre-Packaged
                </h2>
                <p className="leading-relaxed text-sm">
                  Unlike mass-produced meals that sacrifice flavour for speed,
                  our pre-cooked ingredients offer the best of both worlds.
                  They’re ready when you are, but they retain the authentic
                  taste and texture of home-cooked food.
                </p>
              </div>
            </div>
            <div className="text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center  mb-5 flex-shrink-0">
                <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/why-choose-2.png" loading="lazy" alt="freshcon why choose us" className="h-full w-full object-cover object-center" width={500} height={500} />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl title-font text-white font-bold mb-3">
                  No Shortcuts, Just Simplicity
                </h2>
                <p className="leading-relaxed text-sm">
                  With our products, there’s no need for long preps like soaking
                  or boiling. Just add your favorite seasonings, sauces, or
                  gravies, and you’re ready to enjoy a meal that tastes like
                  it’s been simmering all day.
                </p>
              </div>
            </div>
            <div className="text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center  mb-5 flex-shrink-0">
                <img />
                <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/why-choose-3.png" loading="lazy" alt="freshcon why choose us" className="h-full w-full object-cover object-center" width={500} height={500} />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl title-font text-white font-bold mb-3">
                  Comfort in Every Pack
                </h2>
                <p className="leading-relaxed text-sm">
                  Whether you’re making a quick lunch for one or a hearty dinner
                  for the whole family, our range is designed to fit seamlessly
                  into your routine. It’s comfort food, reimagined for modern
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
