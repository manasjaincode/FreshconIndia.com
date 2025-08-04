import Link from 'next/link'
import React from 'react'

const RajmaBanner = () => {
  return (
    <>
       <div
        className="bg-cover h-[250px] lg:h-[360px] flex items-center object-cover justify-center flex-col relative"
        style={{ backgroundImage: 'url(/images/home-banner-1.png)' }}
      >
        <div className="absolute inset-0 bg-gray-900/50"></div>
        <div className="lg:mt-10 flex items-center justify-center flex-col w-full mt-0 !z-[999] px-5">
          <h3 className="text-3xl text-center lg:text-5xl text-white relative z-0 mx-auto font-bold tracking-wider">Pre Cooked Rajma</h3>
          <p className='md:text-lg font-medium mt-2 md:mt-4 text-white text-center'>No more compromising on the right rajma texture!</p>
        </div>
      </div>
    </>
  )
}

export default RajmaBanner