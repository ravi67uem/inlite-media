import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Clients from '../components/Clients'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import WhyInlite from '../components/WhyInlite'
import Method from '../components/Method'
import Achievements from '../components/Achievements'
import Testimonials from '../components/Testimonials'
import FAQs from '../components/FAQs'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-[#050505]'>
      <Navbar />
      <HeroSection />
      <Clients />
      <AboutUs />
      <Services />
      <WhyInlite />
      <Method />
      <Achievements />
      <Testimonials />
      <FAQs />
      <ContactForm />
      <Footer />
    </div>
  )
}
