import Footer from '@/components/GeneralComponents/Footer'
import Header from '@/components/GeneralComponents/Header'
import KalaChanaBanner from '@/components/Products/KalaChana/KalaChanaBanner'
import KalaChanaDetails from '@/components/Products/KalaChana/KalaChanaDetails'
import React from 'react'

export default function KalaChana () {
  return (

    <div className='bg-slate-100'>
        <Header />
        {/* <KalaChanaBanner /> */}
        <KalaChanaDetails />
        <Footer />
        
    </div>

  )
}
