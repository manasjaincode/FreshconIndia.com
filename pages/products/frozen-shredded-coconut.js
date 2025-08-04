import Footer from '@/components/GeneralComponents/Footer'
import Header from '@/components/GeneralComponents/Header'
import FrozenCoconutDetails from '@/components/Products/FrozenCoconutDetails'

import React from 'react'

export default function FrozenCoconut () {
  return (
    <>
    <div className='bg-slate-100'>
      <Header />
      {/* <KabuliChanaBanner /> */}
      <FrozenCoconutDetails/>
      <Footer />
    </div>
    </>
  )
}
