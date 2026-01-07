"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaPaintBrush, FaPenNib, FaChartLine } from 'react-icons/fa'

const services = [
  {
    title: 'Web Development',
    desc: 'Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points.',
    icon: <FaCode />,
    delay: 0.1
  },
  {
    title: 'UI/UX Design',
    desc: 'Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points.',
    icon: <FaPaintBrush />,
    delay: 0.2
  },
  {
    title: 'Content Writing',
    desc: 'Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points.',
    icon: <FaPenNib />,
    delay: 0.3
  },
  {
    title: 'Digital Marketing',
    desc: 'Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points.',
    icon: <FaChartLine />,
    delay: 0.4
  }
]

const Services = () => {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-primary font-medium uppercase tracking-widest"
          >
            Offered Services
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
              className="group p-10 bg-surface rounded-[30px] border border-border hover:border-primary transition-all duration-300 flex items-start gap-8 shadow-sm hover:shadow-lg"
            >
              <div className="text-4xl text-primary transition-transform duration-300 group-hover:rotate-12">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
