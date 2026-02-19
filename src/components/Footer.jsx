import React from 'react'

const Footer = () => {
  return (
    <footer className="relative -mt-80 md:-mt-10 w-full bg-[linear-gradient(177.15deg,_#100F24_10.28%,_#3D398A_116.23%)] overflow-hidden py-30 pt-28 pb-12 md:py-14 z-10">

      {/* Giant Background Text */}
      {/* <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none">
        <h2 className="
          text-[60px] md:text-[240px]
          font-extrabold
          tracking-[-0.03em]
          text-white/5
          whitespace-nowrap
          text-center
        ">
          inlite media
        </h2>
      </div> */}


      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-10">
      {/* <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16"> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 md:items-start"> */}
        <div className="grid grid-cols-2 grid-cols-[1.3fr_1fr] md:grid-cols-[1fr_auto] gap-6 md:gap-0 items-start">

          {/* Contact */}
          <div>
            <h3 className="text-[#E4BF6E] text-[18px] md:text-[22px] mb-4">
              Contact us
            </h3>

            <div className="space-y-2 text-white text-[15px] md:text-[18px] font-semibold">
              <p>
                Phone:{" "}
                <a href="tel:+919296977001" className="hover:opacity-80">
                  +91 92969 77001
                </a>
              </p>

              <p>
                Mail:{" "}
                <a href="mailto:Hello@inlitemedia.in" className="hover:opacity-80">
                  Hello@inlitemedia.in
                </a>
              </p>

              <p>
                Whatsapp:{" "}
                <a
                  href="https://wa.me/919296977001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  +91 92969 77001
                </a>
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="justify-self-end text-left">
            <h3 className="text-[#E4BF6E] text-[18px] md:text-[22px] mb-4">
              Socials
            </h3>

            <div className="space-y-2 text-white text-[15px] md:text-[18px] font-semibold">
              <p>
                <a href="https://www.instagram.com/inlitemedia/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/people/Inlite-Media/61583128961822/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/company/inlitemedia/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-[#E4BF6E] text-[15px] md:text-[18px] mt-8 md:mt-10">
          © 2026 InliteMedia. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer