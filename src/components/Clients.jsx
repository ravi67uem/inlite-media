"use client"

import React from 'react'
import Image from 'next/image'

import CarzspaLogo from '../assets/logo/Carzspa.png'
import D2DLogo from '../assets/logo/D2D.png'
import MauryansLogo from '../assets/logo/Mauryans Premier.png'
import MokakinoLogo from '../assets/logo/Mokakino.png'
import SVBLogo from '../assets/logo/SVB LOgo.png'
import SaffronLogo from '../assets/logo/Saffron.png'
import TCRLogo from '../assets/logo/TCR Logo.png'
import TheTaxiiLogo from '../assets/logo/the taxii.png'

const clientBrands = [
  { name: "CarzSpa", logo: CarzspaLogo },
  { name: "Sri Vishnu Buildcon", logo: SVBLogo },
  { name: "Mauryan's Premier", logo: MauryansLogo },
  { name: "Saffron Roof", logo: SaffronLogo },
  { name: "TCR", logo: TCRLogo },
  { name: "D2D", logo: D2DLogo },
  { name: "Mokakino", logo: MokakinoLogo },
  { name: "The Taxii", logo: TheTaxiiLogo }
]

// Duplicate items multiple times for seamless scrolling marquee
const doubleBrands = [...clientBrands, ...clientBrands, ...clientBrands, ...clientBrands]

const Clients = () => {
  return (
    <section className="relative w-full bg-[#050505] py-16 md:py-24 overflow-hidden z-20">

      {/* Separator line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className="text-eyebrow text-[#4641AC] tracking-wider font-semibold block text-center">
          Our Clients
        </span>
        <h2 className="text-[28px] md:text-[40px] font-extrabold text-white text-center mt-2 tracking-tight">
          Trusted by Innovative Brands
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative flex items-center w-full overflow-hidden py-6 bg-gradient-to-r from-transparent via-white/5 to-transparent border-y border-white/5">

        {/* Shadow overlays for smooth fade edges */}
        <div className="absolute top-0 left-0 h-full w-40 md:w-60 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-40 md:w-60 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Marquee Row */}
        <div className="flex w-max animate-marquee space-x-6 md:space-x-12 pr-16 md:pr-28">
          {doubleBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center select-none group"
            >
              <div className="relative h-12 md:h-16 w-32 md:w-44 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} Client Logo`}
                  fill
                  className="
                    object-contain 
                    transition-all 
                    duration-300 
                    opacity-50 
                    brightness-0 
                    invert 
                    group-hover:opacity-100 
                    group-hover:filter-none 
                    pointer-events-none
                  "
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Clients
