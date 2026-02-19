import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import GiantText from '../components/GiantText'

const HomePage = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <HeroSection />
      {/* <GiantText /> */}
      <Footer />
    </div>
    </>
  )
}

export default HomePage