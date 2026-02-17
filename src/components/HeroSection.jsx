import React from 'react'
import { motion } from 'framer-motion'
import Instagram from '../assets/icons/instagram.svg'
import Facebook from '../assets/icons/facebook.svg'
import WhatsApp from '../assets/icons/Whatsapp.svg'
import Phone from '../assets/icons/phone.svg'

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
          left-1/2 
          // top-[-770px]
          // top-[-800px]
          top-[-805px]
          -translate-x-1/2
          // w-[930px] h-[901px]
          w-[901px] h-[901px]
          rounded-full
          bg-[linear-gradient(180deg,_#1F1C58_-17.26%,_#000000_47.81%)]
          shadow-[0_0_3px_rgba(70,65,172,0.30)]
          backdrop-blur-[17.6px]
          "
      //   shadow-[0_0_4px_rgba(70,65,172,0.22)]
      />

      {/* Black mask ONLY for circle area */}
      <div
        className="
            absolute
            z-5
            left-1/2 
            // top-[185px]
            // top-[290px]
            top-[300px]
            -translate-x-1/2
            // w-[930px] h-[901px]
            w-[901px] h-[901px]
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
          left-1/2 
          // top-[185px]
          // top-[290px]
          top-[300px]
          -translate-x-1/2
          // w-[930px] h-[901px]
          w-[901px] h-[901px]
          rounded-full
          bg-[linear-gradient(180deg,_#1F1C58_-4.11%,_rgba(0,0,0,0.45)_32.62%)]          
          shadow-[0_0_4px_rgba(70,65,172,0.30)]
          backdrop-blur-[17.6px]
        "
      />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-start text-center px-6 gap-4 md:gap-4 pt-40 md:pt-35">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-eyebrow">We Don’t Just{" "} <span className="italic tracking-wide ">Post</span>.</p>
        </motion.div>


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-hero leading-[1] md:leading-tight"
        >
          We Build <br className="md:hidden" /> Systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-body max-w-[296px] md:max-w-3xl mx-auto"
        >
          Inlite Media is an outcome-driven creative agency. We replace random
          marketing with engineered growth systems.
        </motion.p>

      </div>


      {/* Giant Background Text */}
      <div className="absolute bottom-[7px] left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <h2 className="
        text-[180px] md:text-[255px]
        font-extrabold
        tracking-[-0.03em]
        opacity-10
        // bg-gradient-to-b from-white to-[#13122C]
        text-[#FFFFFF]
        bg-clip-text 
        text-transparent
        whitespace-nowrap
        ">
         inlite media
        </h2>
      </div>



    </section>
  )
}

export default HeroSection
