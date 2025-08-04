import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutBanner() {
  return (
<>
<div className="relative  font-quicksand">
<Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/about/about-banner.webp"  alt="About page Banner Image" objectFit="cover" quality={100} className="w-full h-full object-cover" width={1920} height={768}/>  
</div>
</>
  )
}
