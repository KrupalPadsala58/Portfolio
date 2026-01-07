"use client"

import React, { useEffect, useState } from 'react'
import { useTheme } from '@/context/theme-context'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border opacity-0">
        <FaMoon />
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-text-primary hover:text-primary hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FaMoon className="text-lg" />
      ) : (
        <FaSun className="text-lg" />
      )}
    </button>
  )
}

export default ThemeToggle
