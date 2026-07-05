"use client"

import React from 'react'
import { motion } from 'framer-motion'

const whyInliteItems = [
  {
    title: "Empowering Local Ambition",
    desc: "Providing the digital tools and creative strategy necessary for Gaya’s entrepreneurs to scale their dreams and compete on a broader stage.",
    glow: "rgba(70, 65, 172, 0.2)",
    icon: (
      <svg className="w-6 h-6 text-[#E4BF6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Cultivating Digital Excellence",
    desc: "Setting a new standard for marketing innovation in Bihar. We bring world-class design systems, data-driven campaigns, and high-quality production to local businesses.",
    glow: "rgba(228, 191, 110, 0.15)",
    icon: (
      <svg className="w-6 h-6 text-[#E4BF6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Custom Strategies for Bihar’s Businesses",
    desc: "We avoid generic, copy-paste approaches. Every strategy is carefully designed from scratch to fit Gaya’s cultural context, local consumer buying behavior, and regional pulse.",
    glow: "rgba(70, 65, 172, 0.2)",
    icon: (
      <svg className="w-6 h-6 text-[#E4BF6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  }
]

const WhyInlite = () => {
  return (
    <section id="why-inlite" className="relative w-full bg-[#050505] py-20 md:py-32 overflow-hidden z-20">
      
      {/* Separator line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      {/* Grid background for structure */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none z-0" />

      {/* Left glow lamp */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-[#4641AC] opacity-10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Left column: Sticky / Static Heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
          <span className="text-eyebrow text-[#4641AC] tracking-wider font-semibold block">
            Why Inlite
          </span>
          <h2 className="text-[36px] md:text-[56px] leading-[1.1] font-extrabold text-[#E4BF6E] tracking-tight">
            Rooted in Gaya,<br />Built for Scale.
          </h2>
          <p className="text-[15px] md:text-[18px] text-gray-400 leading-relaxed font-normal">
            {"Bihar's businesses have long been underserved by big-city agencies who don't understand the local heartbeat. We are changing that by merging tier-1 execution systems with absolute local context."}
          </p>
          
          <div className="pt-4 hidden lg:block">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[13px] font-semibold text-[#E4BF6E]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Empowering Gaya & Bihar
            </div>
          </div>
        </div>

        {/* Right column: Interactive Cards Stack */}
        <div className="lg:col-span-7 space-y-8">
          {whyInliteItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              whileHover={{ 
                x: 10,
                borderColor: "rgba(228, 191, 110, 0.3)",
                boxShadow: `0 10px 30px -10px ${item.glow}` 
              }}
              className="
                relative
                rounded-2xl 
                border border-white/10 
                bg-black/30 
                p-8 md:p-10 
                backdrop-blur-md 
                transition-all 
                duration-500
                group
                overflow-hidden
              "
            >
              {/* Card glow flare */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#1F1C58]/10 to-[#E4BF6E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                {/* Icon wrapper */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-[20px] md:text-[24px] font-extrabold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] leading-relaxed text-gray-400 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyInlite
