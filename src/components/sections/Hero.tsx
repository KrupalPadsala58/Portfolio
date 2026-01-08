"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="intro">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Image (Desktop only, or first on mobile) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-5/12 order-2 md:order-1"
          >
            <div className="relative mx-auto max-w-[400px] md:max-w-none">
              <div className="rounded-[40px] overflow-hidden border-4 border-secondary rotate-[-3deg] hover:rotate-0 transition-transform duration-500 bg-secondary">
                <Image 
                  src="https://gerold.themejunction.net/wp-content/uploads/2024/05/hero_img.jpg" 
                  alt="Aneri Raval" 
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover scale-110"
                />
              </div>
              {/* Decorative elements or background blobs could go here */}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-7/12 text-center md:text-left order-1 md:order-2"
          >
            <span className="inline-block text-xl font-medium text-text-primary mb-4">
              Hi, I am Krupal Padsala.
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Elevate Your <span className="text-primary italic">Business</span> with Cutting-Edge Web Solutions
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 mx-auto md:mx-0">
              I help startups, founders, and businesses turn ideas into scalable web applications, conversion-focused websites, and revenue-driven SaaS products.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-primary transition-colors border border-primary/20"
              >
                Let&apos;s Upgrade Your Business – Get in Touch Today!
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration or text-stroke if needed */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-text-primary opacity-5 whitespace-nowrap pointer-events-none select-none z-0">
        Krupal Padsala
      </div>
    </section>
  )
}

export default Hero
