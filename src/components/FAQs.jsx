"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqItems = [
  {
    question: "Do you only work with businesses in Gaya, or across Bihar too?",
    answer: "We're based in Bihar and know this market inside out, but we work with businesses across India, from real estate and hospitality to restaurants and retail. If you're a Tier 1, Tier 2, or even Tier 3 city business, we understand your local customers better than a big-city agency ever will."
  },
  {
    question: "How much do your marketing and branding services cost?",
    answer: "We don't believe in one-size-fits-all solutions, so we don't offer cookie-cutter pricing. The investment depends entirely on your business goals, the scope of your project, and the specific channels you need. We work closely with you to design a customized proposal that maximizes your budget and delivers a clear return on investment."
  },
  {
    question: "What does the onboarding process look like if we decide to work together?",
    answer: "We keep things simple and streamlined. It starts with a brief discovery call where we audit your current digital footprint and discuss your goals. From there, we present a tailored strategy and proposal. Once approved, our team dives into deep market research and content planning phases, setting up clear communication channels so you are always updated on our progress."
  },
  {
    question: "How soon can I expect to see results?",
    answer: "It depends on the service. A Meta Ads campaign can start generating leads within days, while SEO and organic social growth build over a few months. We'll always be upfront about realistic timelines before we start, not after."
  }
]

const FAQAccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0 py-5">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left gap-4 py-2 text-white font-extrabold text-[16px] md:text-[20px] tracking-tight hover:text-[#E4BF6E] transition-colors cursor-pointer"
      >
        <span>{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[14px] md:text-[16px] leading-relaxed text-gray-400 font-normal pt-3 pb-2 max-w-4xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0) // Default first item open

  return (
    <section id="faqs" className="relative w-full bg-[#050505] py-20 md:py-32 overflow-hidden z-20">
      
      {/* Separator line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      {/* Background glow lamp */}
      <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-[#4641AC] opacity-10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-eyebrow text-[#4641AC] tracking-wider font-semibold block">
            Questions
          </span>
          <h2 className="text-[36px] md:text-[56px] leading-tight font-extrabold text-[#E4BF6E] tracking-tight">
            Frequently Asked.
          </h2>
          <p className="text-[15px] md:text-[18px] text-gray-400 max-w-xl mx-auto">
            Everything you need to know about our collaboration, capabilities, timelines, and deliverables.
          </p>
        </div>

        {/* FAQs list wrapper */}
        <div className="relative rounded-2xl border border-white/10 bg-black/40 p-6 md:p-10 backdrop-blur-xl shadow-2xl">
          {faqItems.map((item, idx) => (
            <FAQAccordionItem
              key={idx}
              item={item}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQs
