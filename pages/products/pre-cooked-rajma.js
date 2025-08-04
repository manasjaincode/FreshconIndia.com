import Footer from '@/components/GeneralComponents/Footer'
import Header from '@/components/GeneralComponents/Header'
import RajmaBanner from '@/components/Products/Rajma/RajmaBanner'
import RajmaDetails from '@/components/Products/Rajma/RajmaDetails'
import React from 'react'

export default function Rajma () {
  return (
    <>
    <div className='bg-slate-100'>
      <Header />
        {/* <RajmaBanner /> */}
        <RajmaDetails />
        <Footer />
    </div>
    </>
  )
}
