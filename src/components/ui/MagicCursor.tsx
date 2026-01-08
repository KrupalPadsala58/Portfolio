"use client"
 

import React, { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { useTheme } from '@/context/theme-context'

const MagicCursor = () => {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      mouseX.set(e.clientX - 10)
      mouseY.set(e.clientY - 10)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMounted, mouseX, mouseY])

  if (!isMounted) return null

  return (
    <motion.div
      className={`fixed top-0 left-0 w-5 h-5 bg-primary rounded-full pointer-events-none z-[9999] hidden lg:block ${
        theme === 'dark' ? 'mix-blend-difference' : ''
      }`}
      style={{
        x: mouseX,
        y: mouseY,
      }}
    />
  )
}

export default MagicCursor
