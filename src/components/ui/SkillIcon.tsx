"use client"

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface SkillIconProps {
  name: string
  iconSlug: string
  description: string
  color?: string
  index: number
}

const SkillIcon: React.FC<SkillIconProps> = ({ 
  name, 
  iconSlug, 
  description, 
  color = "61DAFB",
  index
}) => {
  const [isHovered, setIsHovered] = useState(false)

  // Generate unique floating animation parameters for each icon based on index
  const floatTransition = useMemo(() => ({
    y: {
      duration: 2 + (index % 5) * 0.5,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut" as const,
      delay: (index % 4) * 0.4
    }
  }), [index])

  // Use simpleicons.org CDN for tech logos
  const iconUrl = `https://cdn.simpleicons.org/${iconSlug}/${isHovered ? color : 'beafe3'}`

  return (
    <div 
      className="relative flex flex-col items-center justify-center p-4 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={floatTransition}
        whileHover={{ 
          y: -10,
          scale: 1.05,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.95 }}
        className="w-20 h-20 md:w-28 md:h-28 bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 relative z-10 overflow-hidden"
        style={{ 
          boxShadow: isHovered ? `0 10px 30px -10px #${color}40, inset 0 0 20px -10px #${color}20` : undefined,
          borderColor: isHovered ? `#${color}40` : undefined
        }}
        tabIndex={0}
        role="button"
        aria-label={`${name}: ${description}`}
      >
        <div className="relative w-10 h-10 md:w-14 h-14 flex items-center justify-center">
            <Image 
                src={iconUrl}
                alt={name}
                fill
                className={`object-contain transition-all duration-500 ${isHovered ? 'scale-110 drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]' : 'opacity-60'}`}
                unoptimized
            />
        </div>
      </motion.div>
      
      <motion.span 
        animate={{ opacity: isHovered ? 1 : 0.6 }}
        className="mt-4 text-xs md:text-sm font-semibold text-text-primary tracking-widest text-center uppercase"
      >
        {name}
      </motion.span>

      {/* Premium Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 bg-text-primary/95 backdrop-blur-sm text-background text-[10px] md:text-xs font-medium rounded-xl whitespace-nowrap z-20 pointer-events-none shadow-2xl border border-white/10"
          >
            {description}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-text-primary/95 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SkillIcon
