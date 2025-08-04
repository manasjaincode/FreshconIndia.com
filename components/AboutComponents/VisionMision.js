import Image from 'next/image'
import React from 'react'

export default function VisionMision() {
  return (
   <>
    <section className="text-gray-100 font-quicksand bg-green-700 body-font relative">
    <div className='absolute right-8 -bottom-7 w-20 md:w-28 !z-30'>
          <Image src={'https://cl85-next.s3.ap-south-1.amazonaws.com/home/2.png'} width={400} height={400} alt='corn image' className='rotate-45 w-full h-full object-contain'></Image>
        </div>
      <div className='absolute left-4 -top-2 w-20 md:w-32 !z-30'>
          <Image src={'https://cl85-next.s3.ap-south-1.amazonaws.com/home/4.png'} width={400} height={400} alt='corn image' className='rotate-45 w-full h-full object-contain'></Image>
        </div>
      <div className="lg:max-w-[1000px] px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {/* Mission */}
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              {/* <Image
                alt="Mission" 
                className="object-cover object-center h-full w-full" 
                src="https://dummyimage.com/1201x501" 
              /> */}
                 <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/about/mission.png"  alt="Our mission" objectFit="cover" quality={100} className="w-full h-full object-cover" width={400} height={500}/>
            </div>
            <h2 className="title-font text-3xl font-bold text-white mt-6 mb-1">Our Mission</h2>
            <h2 className="title-font text-lg md:text-xl font-bold text-white mb-2">Home-Cooked Comfort for Kitchens</h2>
            <p className="leading-relaxed text-lg">Freshcon is dedicated to making nutritious, preservative-free, easy-to-prepare meals accessible to everyone, simplifying home cooking.</p>
          </div>

          {/* Vision */}
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              {/* <Image
                alt="Vision" 
                className="object-cover object-center h-full w-full" 
                src="https://dummyimage.com/1202x502" 
              /> */}
               <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/about/vission.png"  alt="Our vision" objectFit="cover" quality={100} className="w-full h-full object-cover" width={400} height={500}/>
              
            </div>
            <h2 className="title-font text-3xl font-bold text-white mt-6 mb-1">Our Vision</h2>
            <h2 className="title-font  text-lg md:text-xl font-bold text-white mb-2">Convenience with Unmatched Quality</h2>
            <p className="leading-relaxed text-lg">
            We envision a world where convenience meets authenticity, offering busy lives the comfort of home-cooked flavors effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}
