"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "We knew how to serve great food, but we didn't know how to translate the Saffron Roof vibe online. Inlite Media got it instantly. Our tables are packed, and our Instagram finally feels like us.",
    author: "Saffron Roof",
    location: "Dining & Cafe, Gaya",
    initials: "SR",
    color: "#f97316", // Saffron
  },
  {
    quote: "In real estate, vanity views mean nothing; we need high-intent buyers. Inlite built campaigns that targeted actual homeowners and investors in Bihar. That is systems over random posting.",
    author: "Sri Vishnu Buildcon",
    location: "Infrastructure & Real Estate, Gaya",
    initials: "SV",
    color: "#fb923c", // Orange
  },
  {
    quote: "We brought a premium franchise to Gaya but needed local traction. Inlite Media's content systems and reels got over a million local views, converting digital attention into premium detailing bookings.",
    author: "CarzSpa",
    location: "Premium Detailing, Gaya",
    initials: "CS",
    color: "#ef4444", // Red
  }
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="results" className="relative w-full bg-[#050505] py-20 md:py-32 overflow-hidden z-20">
      
      {/* Separator line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      {/* Glow lamp behind */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full bg-[#1F1C58] opacity-10 blur-[130px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-eyebrow text-[#4641AC] tracking-wider font-semibold block">
            Our Results
          </span>
          <h2 className="text-[36px] md:text-[56px] leading-tight font-extrabold text-[#E4BF6E] tracking-tight">
            What Our Clients Say.
          </h2>
          <p className="text-[15px] md:text-[18px] text-gray-400 max-w-xl mx-auto">
            {"Gaya's fastest-growing businesses count on Inlite Media to run their growth systems. Here is what they have to say."}
          </p>
        </div>

        {/* Carousel Card Wrapper */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Decorative double borders */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#1F1C58] via-[#E4BF6E]/10 to-[#4641AC] opacity-40 blur-[1px]" />
          
          <div className="relative rounded-3xl border border-white/10 bg-black/40 p-8 md:p-14 backdrop-blur-xl min-h-[380px] flex flex-col justify-between overflow-hidden shadow-2xl">
            
            {/* Big quote graphic background */}
            <div className="absolute top-8 right-10 text-white/[0.03] select-none pointer-events-none">
              <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
              </svg>
            </div>

            {/* Testimonial Quote slider */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <p className="text-[18px] md:text-[24px] font-medium leading-relaxed text-gray-200 tracking-wide">
                    “{testimonials[activeIndex].quote}”
                  </p>

                  <div className="flex items-center gap-4 pt-4">
                    {/* Avatar Initials with custom glowing ring */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-[15px] text-white border"
                      style={{ 
                        borderColor: `${testimonials[activeIndex].color}40`,
                        backgroundColor: `${testimonials[activeIndex].color}15`,
                        boxShadow: `0 0 15px ${testimonials[activeIndex].color}20`
                      }}
                    >
                      {testimonials[activeIndex].initials}
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[16px] md:text-[18px] font-extrabold text-white">
                        {testimonials[activeIndex].author}
                      </span>
                      <span className="text-[12px] md:text-[13px] font-bold text-[#E4BF6E] uppercase tracking-wider">
                        {testimonials[activeIndex].location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="relative z-10 flex items-center justify-between mt-12 pt-6 border-t border-white/5">
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-[#E4BF6E]' : 'w-2 bg-white/20'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/25 transition-all cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/25 transition-all cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
