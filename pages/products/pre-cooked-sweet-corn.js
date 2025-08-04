import Footer from '@/components/GeneralComponents/Footer'
import Header from '@/components/GeneralComponents/Header'
import SweetCornBanner from '@/components/Products/SweetCorn/SweetCornBanner'
import SweetCornDetails from '@/components/Products/SweetCorn/SweetCornDetails'
import React from 'react'

export default function SweetCorn () {
  return (
    <>
    <div className='bg-slate-100'>
      <Header />
      {/* <SweetCornBanner />  */}
      <SweetCornDetails />
      <Footer />
    </div>
    </>
  )
}
