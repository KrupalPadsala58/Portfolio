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
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-surface/80 backdrop-blur-lg border-b border-border py-4' : 'bg-transparent py-6'}`}>
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
            className="lg:hidden text-text-primary text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-background z-40 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="flex flex-col h-full pt-24 px-8">
          <div className="flex items-center justify-between mb-12">
             <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="https://gerold.themejunction.net/wp-content/themes/gerold/assets/images/logos/logo-primary.png" alt="logo" className="h-10 w-auto" />
             </Link>
             <ThemeToggle />
          </div>
          
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-text-primary text-2xl font-bold hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pb-12">
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
