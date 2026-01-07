"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="py-24 bg-accent" id="contact">
      <div className="container mx-auto px-4">
        {/* CTA Area */}
        <div className="bg-secondary/30 rounded-[50px] p-12 md:p-20 border border-white/5 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-primary font-bold uppercase tracking-widest mb-4"
              >
                Want to start a project?
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
              >
                Let’s have a chat
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a 
                href="mailto:info@taylor.com" 
                className="text-2xl md:text-4xl font-bold text-white hover:text-primary transition-colors flex items-center gap-4"
              >
                info@taylor.com
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <FaArrowRight className="text-xl md:text-2xl" />
                </div>
              </a>
            </motion.div>
          </div>

          {/* Background decoration */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default Contact
