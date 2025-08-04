import React from 'react'
import Image from 'next/image'

export default function Value() {
  return (
   <>
    <section className="text-gray-600 body-font font-quicksand">
      <div className="lg:max-w-[1300px] px-5 py-20 lg:py-24 mx-auto">
        <div className="text-center mb-14">
          {/* <h3 className="text-theme-1 italic mb-2 text-amber-500 font-semibold">FRESHCON</h3> */}
          <h1 className="lg:text-4xl text-3xl font-bold title-font text-green-900 mb-4">Our Value</h1>
          {/* <p className="text-base leading-relaxed lg:max-w-[600px] mx-auto">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.
          </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/about/about-value-1.png" loading="lazy" alt="freshcon why choose us" className="h-full w-full object-cover object-center shadow-md rounded-full" width={500} height={500} />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl title-font text-green-900 font-bold mb-3">Health & Quality First</h2>
              <p className="leading-relaxed text-sm">
              We’re all about pure, nutritious ingredients—no preservatives, no shortcuts. Quality you can taste, health you can trust by delivering the best of taste, nutrition, and safety.              </p>
            </div>
          </div>
          <div className="text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/about/about-value-2.png" loading="lazy" alt="freshcon why choose us" className="h-full w-full object-cover object-center shadow-md rounded-full" width={500} height={500} />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl title-font text-green-900 font-bold mb-3">Chef Empowerment</h2>
              <p className="leading-relaxed text-sm">
              Cooking should be fun, not frustrating. Our innovative products enhance the traditions and make it easy to get creative in the kitchen, turning meal prep into a joy.               </p>
            </div>
          </div>
          <div className="text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/about/about-value-3.png" loading="lazy" alt="freshcon why choose us" className="h-full w-full object-cover object-center shadow-md rounded-full" width={500} height={500} />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl title-font text-green-900 font-bold mb-3">Innovative & Honest</h2>
              <p className="leading-relaxed text-sm">
              We blend cutting-edge innovation with unwavering integrity, delivering products that simplify your life without compromising on quality and makes cooking a joy.               </p>
            </div>
          </div>
          <div className="text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/about/about-value-4.png" loading="lazy" alt="freshcon why choose us" className="h-full w-full object-cover object-center shadow-md rounded-full" width={500} height={500} />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl title-font text-green-900 font-bold mb-3">Sustainable by Design</h2>
              <p className="leading-relaxed text-sm">
              We minimize our environmental impact with products that reduce food waste & require no refrigeration. By mass-producing efficiently, we save energy & nourish people.               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}
