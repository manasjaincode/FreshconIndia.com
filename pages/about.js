import AboutBanner from '@/components/AboutComponents/AboutBanner'
import AboutUs from '@/components/AboutComponents/AboutUs'
import Value from '@/components/AboutComponents/Value'
import VisionMision from '@/components/AboutComponents/VisionMision'
import WhyChooseUs from '@/components/AboutComponents/WhyChooseUs'
import Footer from '@/components/GeneralComponents/Footer'
import Header from '@/components/GeneralComponents/Header'
import React from 'react'

export default function about() {
  return (
    <>
   <Header/>
    <AboutBanner/>
    <AboutUs/>
    <Value/>
   <VisionMision/>
   <WhyChooseUs />
   <Footer/>
    </>
  )
}
