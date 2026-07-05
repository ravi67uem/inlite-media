"use client"

import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    num: "01",
    phase: "The Onboarding Call",
    desc: "We understand your business, audience and real problems.",
    glow: "rgba(59, 130, 246, 0.1)"
  },
  {
    num: "02",
    phase: "The Proposal",
    desc: "Clear plan, no fluff, only what will actually work.",
    glow: "rgba(16, 185, 129, 0.1)"
  },
  {
    num: "03",
    phase: "The Agreement",
    desc: "Simple, transparent and aligned expectations.",
    glow: "rgba(245, 158, 11, 0.1)"
  },
  {
    num: "04",
    phase: "Strategy Build",
    desc: "Content, ads and execution roadmap designed for results.",
    glow: "rgba(139, 92, 246, 0.1)"
  }
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const Method = () => {
  return (
    <section id="method" className="relative w-full bg-[#050505] py-20 md:py-32 overflow-hidden z-20">
      
      {/* Separator line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      {/* Background glow lamp */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[70vw] h-[400px] rounded-full bg-[#1F1C58] opacity-10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-eyebrow text-[#4641AC] tracking-wider font-semibold block">
            Our Method
          </span>
          <h2 className="text-[32px] md:text-[52px] leading-tight font-extrabold text-[#E4BF6E] tracking-tight">
            We Don’t Jump Into Posting.<br className="hidden sm:inline" /> We Build Clarity First.
          </h2>
          <p className="text-[15px] md:text-[18px] text-gray-400 max-w-xl mx-auto">
            Growth is engineered, not guessed. Here is the step-by-step roadmap we use to onboard new brands and secure alignment.
          </p>
        </div>

        {/* Timeline Roadmap Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connector line for large screens */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#1F1C58] via-[#E4BF6E]/30 to-[#4641AC] opacity-20 pointer-events-none z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: "rgba(228, 191, 110, 0.4)",
                boxShadow: `0 15px 35px -10px ${step.glow}`
              }}
              className="
                relative
                rounded-2xl 
                border border-white/10 
                bg-black/30 
                p-8 
                backdrop-blur-md 
                transition-all 
                duration-500
                group
                z-10
                flex flex-col
                justify-between
                min-h-[220px]
              "
            >
              {/* Inside card subtle glows */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Step Circle / Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-extrabold text-[15px] text-[#E4BF6E] group-hover:bg-[#E4BF6E] group-hover:text-black transition-all duration-500">
                    {step.num}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Phase {step.num}
                  </span>
                </div>

                {/* Phase Title */}
                <h3 className="text-[18px] md:text-[20px] font-extrabold text-white tracking-tight mb-3">
                  {step.phase}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-400 font-normal">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Small bottom note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[13px] text-gray-500 font-semibold tracking-wide">
            Average onboarding timeline: 7 to 10 business days to first campaign launch.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Method
