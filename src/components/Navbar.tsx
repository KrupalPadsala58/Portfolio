"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDribbble, FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll Lock logic
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#works' },
    { name: 'Resume', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
    { icon: <FaGithub />, href: '#' },
    { icon: <FaDribbble />, href: '#' },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
      isSticky || isMobileMenuOpen 
        ? 'bg-surface-navbar border-b border-border py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <img src="https://gerold.themejunction.net/wp-content/themes/gerold/assets/images/logos/logo-primary.png" alt="logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-text-primary hover:text-primary transition-colors font-medium">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Socials, Theme Toggle & Mobile Toggle */}
        <div className="flex items-center space-x-6">
          <ul className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a href={social.href} className="text-text-primary hover:text-primary transition-colors text-lg">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block border-l border-border pl-6">
            <ThemeToggle />
          </div>

          <button 
            className="lg:hidden text-text-primary text-2xl relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-surface-navbar/50 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className="flex flex-col h-full w-[85%] max-w-[400px] ml-auto bg-surface-navbar shadow-2xl pt-24 px-8 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-12">
             <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="https://gerold.themejunction.net/wp-content/themes/gerold/assets/images/logos/logo-primary.png" alt="logo" className="h-10 w-auto" />
             </Link>
             <ThemeToggle />
          </div>
          
          <nav>
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-text-primary text-2xl font-bold hover:text-primary block py-2 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12 pb-12">
             <h4 className="text-text-secondary text-sm font-semibold uppercase tracking-wider mb-6">Social Links</h4>
             <ul className="flex items-center space-x-6">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a href={social.href} className="text-text-primary hover:text-primary transition-colors text-3xl">
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
