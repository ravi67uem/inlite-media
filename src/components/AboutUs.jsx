"use client"

import React from 'react'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <section className="relative w-full bg-[#050505] py-20 md:py-32 overflow-hidden z-20">

      {/* Grid line separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <span className="text-eyebrow text-[#4641AC] tracking-wider font-semibold block">
              About Us
            </span>
            <h2 className="text-[36px] md:text-[56px] leading-[1.1] font-extrabold text-[#E4BF6E] tracking-tight">
              Systems Over <br /> Random Marketing.
            </h2>
          </div>

          <p className="text-[16px] md:text-[16px] leading-[18px] text-gray-300 font-normal">
            {"Remember the tweet where Sam Altman announced ChatGPT and the internet collectively lost its mind? Good times."}
          </p>
          <p className="text-[16px] md:text-[16px] leading-[18px] text-gray-300 font-normal">
            {"Well, we didn't shake the world but we're here to shake up Gaya, Bihar and honestly, that means everything to us. Introducing our brainchild: Inlite Media. A Gaya-based creative marketing agency, built from the heart of this city. Of the people of Gaya. For the people of Gaya. By the people of Gaya."}
          </p>
          <p className="text-[16px] md:text-[16px] leading-[18px] text-gray-300 font-normal">
            {"It started with a simple idea, what if a group of scattered friends, each remarkable in their own way (yes, a little like the Avengers, don't judge us), came together and did something real for the businesses of Gaya? So on January 23, 2025, that's exactly what we did. It hasn't always been easy. Two quiet months followed the launch and then, almost all at once, four to five client deals closed in a single month. Hard work meeting its moment."}
          </p>
          <p className="text-[16px] md:text-[16px] leading-[18px] text-gray-300 font-normal">
            {"Here's why we think it's working: we're homegrown, and proud of it. As locals, we understand Bihar's market, its pulse, its people, what actually works here. We don't bring a copy-paste approach. We bring context, and that makes all the difference. We promised ourselves this wouldn't turn into a sales pitch, and it hasn't. It's just a few friends from Gaya, genuinely excited about what they're building."}
          </p>
          <p className="text-[16px] md:text-[16px] leading-[18px] text-gray-300 font-normal">
            {"If you're a business owner ready to grow, we'd love to be in your corner because there's no better time than now."}<br></br>
            Team Inlite Media
          </p>




          {/* <div className="pt-4">
            <a
              href="#contact"
              className="
                inline-block
                px-5 py-3 
                rounded-lg 
                border border-[#4641AC]
                bg-[#1F1C58]
                text-white 
                font-semibold 
                text-[14px] md:text-[16px]
                hover:bg-[#26216f]
                transition-colors
                shadow-[0_4px_20px_rgba(70,65,172,0.25)]
              "
            >
              Learn Our Method
            </a>
          </div> */}
        </motion.div>

        {/* Right Side: Graphic Card with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative group justify-self-center lg:justify-self-end w-full max-w-[500px]"
        >
          {/* Glowing backlights */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#1F1C58] to-[#4641AC] opacity-30 blur-xl group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

          <div className="relative rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl shadow-2xl overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src="/about-us-visual.png"
              alt="Inlite Media Abstract Design"
              className="w-full h-auto rounded-lg object-cover aspect-[4/3] opacity-90"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutUs
