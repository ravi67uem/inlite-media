import { useState } from 'react'
import Logo from '../assets/logo/logo-svg.svg'

const Navbar = () => {
  const [buttonText, setButtonText] = useState('Contact us')

  const handleContactClick = () => {
    navigator.clipboard.writeText("Hello@inlitemedia.in")
    setButtonText('Email Copied!')
    setTimeout(() => {
      setButtonText('Contact us')
    }, 1000)
    // The link will naturally handle the href="mailto:..."
  }

  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-9 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Inlite Media Social Media Marketing Agency Logo"
            // className="h-8 md:h-10 w-auto"
            // className="h-9 md:h-11 w-auto leading-none"
            className="h-10 md:h-[46px] w-auto leading-none"
          />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6">

          {/* CTA Button */}
          <a
            href="mailto:Hello@inlitemedia.in"
            onClick={handleContactClick}
            className="
              px-3 py-[6px] md:px-4 md:py-2 
              rounded-[4px] md:rounded-lg 
              border border-[#4641AC]
              bg-[#1F1C58]
              text-white 
              font-semibold 
              text-[10px] leading-[13px] md:text-button
              hover:bg-[#26216f]
              transition-colors
              cursor-pointer
              inline-block
              min-w-[73px] md:min-w-[140px]
              text-center
            "
          >
            {buttonText}
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
