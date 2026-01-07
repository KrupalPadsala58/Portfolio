"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const marqueeItems = [
  { title: 'Development', icon: 'https://gerold.themejunction.net/wp-content/uploads/2024/09/marquee-icon.png' },
  { title: 'Design', icon: 'https://gerold.themejunction.net/wp-content/uploads/2024/09/marquee-icon.png' },
  { title: 'Webflow', icon: 'https://gerold.themejunction.net/wp-content/uploads/2024/09/marquee-icon.png' },
  { title: 'Graphic', icon: 'https://gerold.themejunction.net/wp-content/uploads/2024/09/marquee-icon.png' },
  { title: 'Motion', icon: 'https://gerold.themejunction.net/wp-content/uploads/2024/09/marquee-icon.png' },
]

const Marquee = () => {
  // Duplicate items for seamless loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems]

  return (
    <section className="bg-secondary py-14 overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex items-center gap-12"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-8 h-8 opacity-50 relative">
                <Image 
                  src={item.icon} 
                  alt="" 
                  width={32}
                  height={32}
                  className="w-full h-full object-contain" 
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white/20 uppercase tracking-tighter">
                {item.title}
              </h2>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Marquee
