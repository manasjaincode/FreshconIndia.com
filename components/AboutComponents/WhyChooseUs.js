import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <>
       <section className="text-gray-600 body-font font-quicksand">
      <div className="lg:max-w-[1300px] px-5 py-20 lg:py-24 mx-auto">
        <div className="text-center mb-14">
          <h3 className="text-theme-1 italic mb-2 text-amber-500 font-semibold">The Heart of Our Products</h3>   
          <h1 className="lg:text-4xl text-3xl font-bold title-font text-green-900 mb-4">Why Choose Us?</h1> 
          <p className="text-base leading-relaxed lg:max-w-[1100px] mx-auto mb-2">
          Our range includes pre-cooked kala chana, corn kernels, rajma, and kabuli chana—each one carefully crafted using our signature HT Technology. This advanced process ensures that our ingredients are perfectly cooked, bacteria-free, and have a longer shelf life, all without the need for preservatives or refrigeration. It’s the perfect blend of tradition and technology, bringing you the best of both worlds.
          </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="text-center items-center bg-green-50 p-6 rounded-3xl border border-green-300">
            <div className="w-20 h-20 inline-flex items-center justify-cente mb-5 flex-shrink-0">
            <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/about/about-whychoose-1.png" loading="lazy" alt="freshcon why choose us" className="h-full w-full object-cover object-center shadow-md rounded-full" width={500} height={500} />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl title-font text-green-900 font-bold mb-3">Authentic Taste</h2>
              <p className="leading-relaxed text-sm">
              We capture the authentic flavors of home cooking, so every meal you prepare with our products tastes like it’s been simmering on the stove all day.
              </p>
            </div>
          </div>
          <div className="text-center items-center bg-green-50 p-6 rounded-3xl border border-green-300">
            <div className="w-20 h-20 inline-flex items-center justify-cente mb-5 flex-shrink-0">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/about/about-whychoose-2.png" loading="lazy" alt="freshcon why choose us" className="h-full w-full object-cover object-center shadow-md rounded-full" width={500} height={500} />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl title-font text-green-900 font-bold mb-3">Ready When You Are</h2>
              <p className="leading-relaxed text-sm">
              No soaking, no boiling, no fuss. Our ingredients are pre-cooked and ready to use, so you can have a delicious, nutritious meal on the table in minutes.
              </p>
            </div>
          </div>
          <div className="text-center items-center bg-green-50 p-6 rounded-3xl border border-green-300">
            <div className="w-20 h-20 inline-flex items-center justify-cente mb-5 flex-shrink-0">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/about/about-whychoose-3.png" loading="lazy" alt="freshcon why choose us" className="h-full w-full object-cover object-center shadow-md rounded-full" width={500} height={500} />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl title-font text-green-900 font-bold mb-3">Healthy and Natural</h2>
              <p className="leading-relaxed text-sm">
              Our products are free from artificial preservatives, packed with natural goodness, and designed to help you maintain a healthy, balanced diet.
              </p>
            </div>
          </div>
          <div className="text-center items-center bg-green-50 p-6 rounded-3xl border border-green-300">
            <div className="w-20 h-20 inline-flex items-center justify-cente mb-5 flex-shrink-0">
              <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/about/about-whychoose-4.png" loading="lazy" alt="freshcon why choose us" className="h-full w-full object-cover object-center shadow-md rounded-full" width={500} height={500} />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl title-font text-green-900 font-bold mb-3">Futuristic Approach</h2>
              <p className="leading-relaxed text-sm">
              With our longer shelf life and room temperature storage, you can reduce food waste and enjoy greater peace of mind effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default WhyChooseUs