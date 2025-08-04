import Link from 'next/link'
import React from 'react'

const KabuliChanaBanner = () => {
  return (
    <div
        className="bg-cover h-[250px] lg:h-[360px] flex items-center object-cover justify-center flex-col relative"
        style={{ backgroundImage: 'url(/images/home-banner-1.png)' }}
      >
        <div className="absolute inset-0 bg-gray-900/50"></div>
        <div className="lg:mt-10 flex items-center justify-center flex-col w-full mt-0 !z-[999] px-5">
          <h3 className="text-3xl text-center lg:text-5xl text-white relative z-0 mx-auto font-bold tracking-wider">Pre Cooked Kabuli Chana</h3>
          <p className='md:text-lg font-medium mt-2 md:mt-4 text-white text-center'>Nutritious, Delicious, and Ready in Minutes.</p>
          {/* <nav className="z-0 py-2">
            <ol className="flex uppercase text-xs text-center justify-center items-center gap-x-2">
              <li>
                <Link href="/">
                  <p className="text-white">Home</p>
                </Link>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>

              </li>
              <li>
                <Link href="/about">
                  <p className="text-white font-semibold">Kabuli Chana</p>
                </Link>
              </li>
            </ol>
          </nav> */}
        </div>
      </div>
  )
}

export default KabuliChanaBanner