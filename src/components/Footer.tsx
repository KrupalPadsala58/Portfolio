import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDribbble } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
    { icon: <FaGithub />, href: '#' },
    { icon: <FaDribbble />, href: '#' },
  ]

  const footerMenu = [
    { name: 'Services.', href: '#services' },
    { name: 'Work.', href: '#works' },
    { name: 'Skills.', href: '#skills' },
    { name: 'Experience.', href: '#resume' },
    { name: 'Blog.', href: '#' },
  ]

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        {/* Socials */}
        <ul className="flex justify-center items-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a 
                href={social.href} 
                className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-lg"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Link href="/">
            <img 
              src="https://gerold.themejunction.net/wp-content/themes/gerold/assets/images/logos/logo-primary.png" 
              alt="logo" 
              className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        {/* Menu */}
        <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
          {footerMenu.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href} 
                className="text-text-primary hover:text-primary font-bold text-lg transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div className="pt-10 border-t border-border text-text-secondary/60 text-sm">
          <p>© 2024 All Rights Reserved by <a href="#" target="_blank" className="text-text-primary hover:text-primary transition-colors">ThemeJunction</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
