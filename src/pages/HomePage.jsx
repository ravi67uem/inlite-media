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

      {/* <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Social Media Marketing Agency
        </h2>

        <p className="text-gray-400">
          Inlite Media is a social media marketing agency focused on building
          engineered growth systems for modern brands. Our services include
          social media strategy, content marketing, brand growth systems,
          and digital marketing campaigns designed to scale businesses online.
        </p>
      </section> */}

      <Footer />
    </div>
    </>
  )
}

export default HomePage