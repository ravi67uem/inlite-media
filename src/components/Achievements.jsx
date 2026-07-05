"use client"

import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  {
    metric: "500k+",
    label: "Organic Views",
    description: "Generated across client channels with our content systems."
  },
  {
    metric: "100%+",
    label: "Avg Brand Growth",
    description: "Increase in audience retention and organic brand engagement."
  },
  {
    metric: "10+",
    label: "Scaling Brands",
    description: "Modern businesses powered by our systems globally."
  },
  {
    metric: "$1M+",
    label: "Client Revenue",
    description: "Direct and assisted revenue scaled through online systems."
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

const Achievements = () => {
  return (
    <section className="relative w-full bg-[#050505] py-20 md:py-28 overflow-hidden z-20">

      {/* Separator line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      {/* Background glowing sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full bg-[#1F1C58] opacity-15 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Title / Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-eyebrow text-[#4641AC] tracking-wider font-semibold block">
            Achievements & Reach
          </span>
          <h2 className="text-[36px] md:text-[56px] leading-tight font-extrabold text-[#E4BF6E] tracking-tight">
            Engineered Results.
          </h2>
          <p className="text-[16px] md:text-[20px] text-gray-400">
            We don&apos;t count posts or vanity metrics. We focus on real attention systems that yield tangible business outputs.
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(70, 65, 172, 0.6)",
                boxShadow: "0 10px 30px -10px rgba(70, 65, 172, 0.4)"
              }}
              className="
                relative
                rounded-2xl 
                border border-white/10 
                bg-black/30 
                p-8 
                text-center 
                backdrop-blur-md 
                transition-colors 
                duration-300
                overflow-hidden
                group
              "
            >
              {/* Subtle inner hover glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#1F1C58]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <h3 className="text-[44px] md:text-[54px] font-extrabold text-[#E4BF6E] tracking-tight mb-2">
                {stat.metric}
              </h3>
              <p className="text-[14px] md:text-[16px] font-bold text-white uppercase tracking-wider mb-2">
                {stat.statLabel || stat.label}
              </p>
              <p className="text-[13px] md:text-[15px] text-gray-400 leading-relaxed font-normal">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Achievements
