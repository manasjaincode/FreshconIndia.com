import Image from 'next/image'
import React from 'react'

export default function AvailableOn() {
  return (
    <div className='w-full bg-white font-quicksand px-4 py-10 lg:mt-8'>
        <h3 className='lg:text-4xl text-3xl font-extrabold title-font mb-8 text-center text-green-900'>Available On</h3>
        <div className='grid grid-cols-2 gap-y-2 lg:grid-cols-3 mx-auto max-w-[500px] gap-x-4 items-center justify-center'>
            <Image width={600} height={300} className='w-48 lg:w-72 h-auto  border border-gray-200 rounded-lg' src = "https://cl85-next.s3.ap-south-1.amazonaws.com/home/logo-1.png" alt='Bigbasket' />
            {/* <Image width={600} height={120} className='w-48 lg:w-72 h-auto  border border-gray-200 rounded-lg' src = "https://cl85-next.s3.ap-south-1.amazonaws.com/home/logo-2.png" alt='Amazon' /> */}
            <Image width={600} height={300} className='w-48 lg:w-72 h-auto  border border-gray-200 rounded-lg' src = "https://cl85-next.s3.ap-south-1.amazonaws.com/home/logo-3.png" alt='Reliance Smart' />
            <Image width={600} height={300} className='w-48 lg:w-72 h-auto justify-center flex text-center border border-gray-200 rounded-lg' src = "https://cl85-next.s3.ap-south-1.amazonaws.com/home/swiggy.png" alt='NaturesBasket' />
        </div>
    </div>
  )
}
