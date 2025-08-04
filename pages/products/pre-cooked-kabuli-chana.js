import Footer from '@/components/GeneralComponents/Footer'
import Header from '@/components/GeneralComponents/Header'
import KabuliChanaBanner from '@/components/Products/KabuliChana/KabuliChanaBanner'
import KabuliChanaDetails from '@/components/Products/KabuliChana/KabuliChanaDetails'
import React from 'react'

export default function KabuliChana () {
  return (
    <>
    <div className='bg-slate-100'>
      <Header />
      {/* <KabuliChanaBanner /> */}
      <KabuliChanaDetails />
      <Footer />
    </div>
    </>
  )
}
