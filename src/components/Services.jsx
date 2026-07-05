"use client"

import React from 'react'
import { motion } from 'framer-motion'

const servicesList = [
  {
    num: "01",
    title: "Social Media Management",
    pills: ["Strategy", "Community Management", "Profile Optimization", "Post Scheduling"],
    desc: "Your social media shouldn't just exist, it should work. With our finger on the pulse of current trends, we build the strategy, plan the content, manage your community, and keep your profiles active and on-brand.",
    color: "from-blue-500/20 to-[#4641AC]/20",
    glowColor: "rgba(59, 130, 246, 0.15)",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Digital Growth & SEO",
    pills: ["SEO", "Performance Marketing", "Ongoing Strategy"],
    desc: "We build end-to-end digital solutions that do more than just generate clicks. Performance campaigns built to convert, and SEO that gets your business found on Google and brings recurring traffic.",
    color: "from-emerald-500/20 to-[#4641AC]/20",
    glowColor: "rgba(16, 185, 129, 0.15)",
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Content Creation & Research",
    pills: ["Content Strategy", "Market Research", "Editorial Planning"],
    desc: "We study your audience and your market before we write a single caption, so every post has a reason to exist. High quality content that cuts through the noise and keeps your brand relevant.",
    color: "from-amber-500/20 to-[#4641AC]/20",
    glowColor: "rgba(245, 158, 11, 0.15)",
    icon: (
      <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Paid Advertising & Local Search",
    pills: ["Meta Ads", "Google Business Profile", "Lead Generation"],
    desc: "We design and run ads built to convert. From setting up and optimizing your Google My Business profile for local discovery, to running targeted Meta Ad campaigns that generate real leads and footfall.",
    color: "from-indigo-500/20 to-[#4641AC]/20",
    glowColor: "rgba(99, 102, 241, 0.15)",
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    )
  }
]

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#050505] py-20 md:py-32 overflow-hidden z-20">
      
      {/* Separator line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      {/* Subtle Background glow */}
      <div className="absolute top-1/3 right-0 w-[50vw] h-[50vw] rounded-full bg-[#1F1C58] opacity-10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-eyebrow text-[#4641AC] tracking-wider font-semibold block">
              Our Services
            </span>
            <h2 className="text-[36px] md:text-[56px] leading-[1.1] font-extrabold text-[#E4BF6E] tracking-tight">
              Engineered Growth <br />Capabilities.
            </h2>
          </div>
          <p className="text-[15px] md:text-[18px] text-gray-400 max-w-md lg:pb-2">
            We build end-to-end digital solutions designed to capture attention, build trust, and scale local & national brands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -5,
                borderColor: "rgba(228, 191, 110, 0.4)",
                boxShadow: `0 15px 35px -10px ${service.glowColor}`
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
                overflow-hidden
                group
                flex flex-col justify-between
                min-h-[320px]
              "
            >
              {/* Radial gradient background behind icons */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${service.color} filter blur-xl opacity-40 group-hover:scale-150 transition-transform duration-700 pointer-events-none`} />

              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/25 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[14px] font-bold text-gray-600 tracking-widest uppercase">
                    {service.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[22px] md:text-[28px] font-extrabold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-400 font-normal mb-8">
                  {service.desc}
                </p>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {service.pills.map((pill, pIdx) => (
                  <span 
                    key={pIdx}
                    className="
                      px-3 py-1 
                      rounded-full 
                      border border-white/5 
                      bg-white/[0.02] 
                      text-[11px] md:text-[12px] 
                      font-bold 
                      text-gray-300
                      group-hover:border-[#4641AC]/40
                      group-hover:text-white
                      transition-colors
                      duration-300
                    "
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Service: Branding & Visual Identity (Large Span / Featured Block) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ 
            y: -5,
            borderColor: "rgba(228, 191, 110, 0.5)",
            boxShadow: "0 20px 40px -15px rgba(228, 191, 110, 0.15)"
          }}
          className="
            relative 
            rounded-2xl 
            border border-white/10 
            bg-[linear-gradient(135deg,_rgba(11,10,29,0.7)_0%,_rgba(5,5,5,0.7)_100%)] 
            p-8 md:p-12 
            backdrop-blur-xl 
            transition-all 
            duration-500 
            overflow-hidden
            group
            grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center
          "
        >
          {/* Subtle gold glow lamps */}
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#E4BF6E]/10 filter blur-3xl opacity-60 group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#4641AC]/20 filter blur-3xl opacity-60 group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

          {/* Left Column: Number, Title, Description, Pills */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E4BF6E]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <span className="text-[13px] font-bold text-[#E4BF6E] tracking-widest uppercase">
                Featured Capability · 05
              </span>
            </div>

            <h3 className="text-[28px] md:text-[36px] font-extrabold text-white tracking-tight leading-tight">
              Branding & Visual Identity
            </h3>

            <p className="text-[14px] md:text-[16px] leading-relaxed text-gray-300">
              {"Your brand is your most valuable asset. We provide complete visual solutions from foundational brand strategy and logo design to dynamic motion graphics, so your business has a personality that's consistent everywhere it shows up."}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Brand Strategy", "Logo Design", "Motion Graphics", "Visual Systems"].map((pill, idx) => (
                <span 
                  key={idx}
                  className="
                    px-3 py-1 
                    rounded-full 
                    border border-white/10 
                    bg-white/[0.04] 
                    text-[12px] 
                    font-bold 
                    text-gray-200
                    group-hover:border-[#E4BF6E]/40
                    transition-colors
                    duration-300
                  "
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Statement Card */}
          <div className="lg:col-span-5 relative z-10 w-full">
            <div className="relative rounded-xl border border-[#E4BF6E]/20 bg-black/60 p-6 md:p-8 shadow-2xl backdrop-blur-md overflow-hidden">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-[#E4BF6E]/5 filter blur-2xl pointer-events-none" />
              <div className="text-[#E4BF6E] mb-4">
                <svg className="w-8 h-8 opacity-45" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
                </svg>
              </div>
              <blockquote className="text-[18px] md:text-[22px] font-extrabold italic text-white leading-snug">
                We take care of your brand, <span className="text-[#E4BF6E]">so you can take care of your business</span>.
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#E4BF6E] rounded-full" />
                <span className="text-[11px] md:text-[12px] font-bold text-gray-400 uppercase tracking-wider">
                  Our Brand Promise
                </span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Services
