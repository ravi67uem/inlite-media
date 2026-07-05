"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simple Validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.')
      return
    }

    setErrorMessage('')
    setIsSubmitting(true)

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', brand: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="relative w-full bg-[#050505] py-20 md:py-32 overflow-hidden z-20">
      
      {/* Separator line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      {/* Grid background mask for visual depth */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none z-0" />

      {/* Background glow lamps */}
      <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] rounded-full bg-[#1F1C58] opacity-25 blur-[100px] pointer-events-none" />
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[#4641AC] opacity-15 blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <span className="text-eyebrow text-[#4641AC] tracking-wider font-semibold block">
            Get In Touch
          </span>
          <h2 className="text-[36px] md:text-[56px] leading-tight font-extrabold text-[#E4BF6E] tracking-tight">
            Let’s Build Your System.
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-400 max-w-xl mx-auto">
            Ready to scale? Drop us details about your brand and our team will get in touch with a customized growth audit.
          </p>
        </div>

        {/* Form / Success Card */}
        <div className="relative w-full max-w-[650px] mx-auto">
          {/* Card Border glow */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#1F1C58] to-transparent opacity-40 blur-[1px]" />
          
          <div className="relative rounded-2xl border border-white/10 bg-black/50 p-8 md:p-12 backdrop-blur-xl shadow-2xl">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  {errorMessage && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 font-semibold text-sm bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-[12px] md:text-[14px] font-bold text-white uppercase tracking-wider block">
                      Name <span className="text-[#E4BF6E]">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-[#4641AC] focus:ring-1 focus:ring-[#1F1C58] focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-[12px] md:text-[14px] font-bold text-white uppercase tracking-wider block">
                      Email <span className="text-[#E4BF6E]">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="hello@company.com"
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-[#4641AC] focus:ring-1 focus:ring-[#1F1C58] focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Brand/Website field */}
                  <div className="space-y-2">
                    <label className="text-[12px] md:text-[14px] font-bold text-white uppercase tracking-wider block">
                      Brand / Website URL
                    </label>
                    <input 
                      type="text" 
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder="www.yourbrand.com"
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-[#4641AC] focus:ring-1 focus:ring-[#1F1C58] focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label className="text-[12px] md:text-[14px] font-bold text-white uppercase tracking-wider block">
                      Tell Us About Your Goals <span className="text-[#E4BF6E]">*</span>
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="What is your current marketing bottleneck?"
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-[#4641AC] focus:ring-1 focus:ring-[#1F1C58] focus:outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="
                        w-full
                        px-6 py-4 
                        rounded-lg 
                        border border-[#4641AC]
                        bg-[#1F1C58]
                        text-white 
                        font-semibold 
                        text-[14px] md:text-[16px]
                        hover:bg-[#26216f]
                        transition-all
                        shadow-[0_4px_20px_rgba(70,65,172,0.25)]
                        cursor-pointer
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                      "
                    >
                      {isSubmitting ? 'Sending Request...' : 'Send Audit Request'}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-[80px] h-[80px] bg-[#1F1C58]/30 border border-[#4641AC] rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(70,65,172,0.3)]">
                    <svg className="w-8 h-8 text-[#E4BF6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[24px] md:text-[30px] font-extrabold text-[#E4BF6E]">
                      Audit Request Received!
                    </h3>
                    <p className="text-gray-300 text-[15px] md:text-[17px] max-w-sm mx-auto">
                      Thank you for reaching out. Our growth engineers will review your brand details and follow up within 24 hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-semibold text-[#E4BF6E] underline hover:opacity-85"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactForm
