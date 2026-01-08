import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505]">
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-35 z-0" />

      {/* Top arc (upper circle) */}
      <div
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
      <div
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
        {/* <p className="text-eyebrow">We Don’t Just Post</p> */}
        <p className="text-eyebrow">We Don’t Just{" "} <span className="italic tracking-wide">Post</span>.</p>


        <h1 className="text-hero">We Build Systems</h1>

        <p className="text-body max-w-3xl">
          Inlite Media is an outcome-driven creative agency. We replace random
          marketing with engineered growth systems.
        </p>

        <p className="text-launch mt-10">Launching Soon!</p>
      </div>

    </section>
  )
}

export default HeroSection
