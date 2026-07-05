"use client"

import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="relative w-full bg-[#050505] border-t border-white/10 overflow-hidden pt-20 pb-12 z-20">

      {/* Background glowing lamps */}
      <div className="absolute bottom-0 right-1/4 w-[50vw] h-[300px] rounded-full bg-[#1F1C58] opacity-15 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-0 left-10 w-[300px] h-[300px] rounded-full bg-[#4641AC] opacity-5 blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Row 1: Logo & Giant Email */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo-svg.svg"
              alt="Inlite Media Logo"
              className="h-10 md:h-[46px] w-auto leading-none"
            />
          </div>
          {/* Giant Email */}
          <a
            href="mailto:Hello@inlitemedia.in"
            className="text-[28px] sm:text-[44px] md:text-[60px] lg:text-[72px] font-extrabold tracking-tighter text-white hover:text-[#E4BF6E] transition-colors leading-none"
          >
            hello@inlitemedia.in
          </a>
        </div>

        {/* Row 2: Social Links & Industry Partner Badges */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-8 border-t border-white/10">
          {/* Socials */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="https://www.linkedin.com/company/inlitemedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] md:text-[16px] font-bold text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              LinkedIn <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
            <a
              href="https://www.facebook.com/people/Inlite-Media/61583128961822/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] md:text-[16px] font-bold text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              Facebook <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
            <a
              href="https://www.instagram.com/inlitemedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] md:text-[16px] font-bold text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              Instagram <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
            <a
              href="https://wa.me/919296977001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] md:text-[16px] font-bold text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              WhatsApp <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          </div>

          {/* Badge Grid */}
          <div className="flex items-center flex-wrap gap-6 md:gap-8 opacity-65 hover:opacity-90 transition-opacity duration-300">
            {/* Meta Partner */}
            {/* <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.029C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              <div className="flex flex-col text-[10px] font-bold text-white uppercase tracking-wider leading-none">
                <span>Meta Business</span>
                <span className="text-gray-500 text-[8px]">Partner</span>
              </div>
            </div> */}

            {/* Google Partner */}
            {/* <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5 items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="flex flex-col text-[10px] font-bold text-white uppercase tracking-wider leading-none">
                <span>Google</span>
                <span className="text-gray-500 text-[8px]">Partner</span>
              </div>
            </div> */}

            {/* Awwwards */}
            {/* <div className="flex items-center gap-1.5">
              <span className="text-[14px] font-extrabold text-white leading-none tracking-tight">w.</span>
              <div className="flex flex-col text-[8px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                <span>Awwwards</span>
                <span className="text-white text-[7px]">Honorable</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Row 3: Sub Navigation Links & Newsletter Form */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-8 border-t border-white/5">
          {/* Sub Navigation */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] font-semibold text-gray-400">
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Newsletter Input Form */}
          <form onSubmit={handleSubscribe} className="relative w-full max-w-[320px]">
            <div className="relative flex items-center rounded-full border border-white/10 bg-white/[0.02] hover:border-white/20 focus-within:border-[#4641AC]/50 transition-all p-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={subscribed ? "Subscribed!" : "Sign up to our newsletter"}
                disabled={subscribed}
                className="w-full bg-transparent px-4 py-2 text-[13px] md:text-[14px] text-white outline-none placeholder-gray-500 disabled:opacity-75"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="
                  flex-shrink-0
                  w-8 h-8 
                  rounded-full 
                  border border-[#4641AC] 
                  bg-[#1F1C58] 
                  text-white 
                  hover:bg-[#26216f] 
                  disabled:bg-green-700
                  disabled:border-green-600
                  flex items-center justify-center
                  transition-all
                  cursor-pointer
                "
              >
                {subscribed ? (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Row 4: Sectors & Copyright & Trust Seal */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pt-8 mt-4 border-t border-white/5">
          {/* Sectors */}
          <div className="flex flex-wrap items-center gap-2 max-w-2xl">
            <span className="text-[12px] font-bold text-gray-600 uppercase tracking-widest mr-2">Our sectors:</span>
            {["Real Estate", "Hospitality", "Restaurants & Cafes", "Automotive", "Startups"].map((sector, idx) => (
              <span
                key={idx}
                className="
                  px-3 py-1 
                  rounded-full 
                  border border-white/5 
                  bg-white/[0.01] 
                  text-[11px] 
                  font-bold 
                  text-gray-500
                  hover:border-white/10
                  hover:text-gray-300
                  transition-all
                  cursor-default
                "
              >
                {sector}
              </span>
            ))}
          </div>

          {/* Copyright & Certified Badge */}
          <div className="flex items-center gap-6">
            <span className="text-[13px] md:text-[14px] text-gray-500 font-semibold">
              © INLITE MEDIA 2026
            </span>

            {/* Cyber certified shield seal mock */}
            {/* <div className="flex items-center gap-2 border border-green-500/20 bg-green-500/[0.02] rounded px-3 py-1 text-green-400 font-bold select-none text-[9px] uppercase tracking-widest">
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Bihar Startup Certified</span>
            </div> */}
          </div>
        </div>

      </div>

      {/* Giant Background Text (Kept as requested) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none z-0 select-none">
        <h2 className="
          text-[60px] sm:text-[120px] md:text-[180px] lg:text-[230px]
          font-extrabold
          tracking-[-0.03em]
          text-white/[0.02]
          whitespace-nowrap
          text-center
          leading-none
          translate-y-[20%]
        ">
          inlite media
        </h2>
      </div>

    </footer>
  )
}

export default Footer