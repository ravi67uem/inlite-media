import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505]">

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-35 z-0" />

      {/* Top arc (upper circle) */}
      <motion.div
        animate={{
          rotate: [0, 5, 0, -5, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
          absolute
          z-10
          left-1/2 top-[-770px]
          -translate-x-1/2
          w-[930px] h-[901px]
          rounded-full
          bg-[linear-gradient(180deg,_#1F1C58_-17.26%,_#000000_47.81%)]
          shadow-[0_0_3px_rgba(70,65,172,0.30)]
          
          "
      //   shadow-[0_0_4px_rgba(70,65,172,0.22)]
      />

      {/* Black mask ONLY for circle area */}
      <div
        className="
            absolute
            z-5
            left-1/2 top-[180px]
            -translate-x-1/2
            w-[930px] h-[901px]
            rounded-full
            bg-[#050505]
            "
      />

      {/* Main circle */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 4px rgba(70,65,172,0.30)",
            "0 0 15px rgba(70,65,172,0.50)",
            "0 0 4px rgba(70,65,172,0.30)"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
          absolute
          z-10
          left-1/2 top-[180px]
          -translate-x-1/2
          w-[930px] h-[901px]
          rounded-full
          bg-[linear-gradient(180deg,_#1F1C58_-4.11%,_rgba(0,0,0,0.45)_32.62%)]          
         shadow-[0_0_4px_rgba(70,65,172,0.30)]
        "
      />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-6 gap-6 pt-37">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-eyebrow">We Don’t Just{" "} <span className="italic tracking-wide">Post</span>.</p>
        </motion.div>


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-hero"
        >
          We Build Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-body max-w-3xl"
        >
          Inlite Media is an outcome-driven creative agency. We replace random
          marketing with engineered growth systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="text-launch mt-10"
        >
          Launching Soon!
        </motion.p>
      </div>

    </section>
  )
}

export default HeroSection
