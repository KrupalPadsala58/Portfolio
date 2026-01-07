"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    title: 'Lead Developer',
    company: 'Blockdots, India',
    period: '2022 - Present',
    type: 'exp',
    delay: 0.1
  },
  {
    title: 'Full Stack Web Developer',
    company: 'Parsons, The New School',
    period: '2021 - 2022',
    type: 'exp',
    delay: 0.2
  },
  {
    title: 'UI Designer',
    company: 'House of Life, Leeds',
    period: '2020 - 2021',
    type: 'exp',
    delay: 0.3
  }
]

const education = [
  {
    title: 'Programming course',
    institution: 'Harvard University',
    period: '2020 - 2023',
    type: 'edu',
    delay: 0.1
  },
  {
    title: 'Graphic design course',
    institution: 'University of Denmark',
    period: '2016 - 2020',
    type: 'edu',
    delay: 0.2
  },
  {
    title: 'Web design course',
    institution: 'University of California',
    period: '2012 - 2015',
    type: 'edu',
    delay: 0.3
  }
]

const Resume = () => {
  return (
    <section className="py-24 bg-background" id="resume">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            My Resume
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl">
                <FaBriefcase />
              </div>
              <h3 className="text-3xl font-bold text-text-primary">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-border"
                >
                  <div className="absolute top-0 left-[-5px] w-[10px] h-[10px] rounded-full bg-primary" />
                  <span className="text-primary font-medium text-sm block mb-2">{item.period}</span>
                  <h4 className="text-xl font-bold text-text-primary mb-1 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-text-secondary/60 text-sm">{item.company}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl">
                <FaGraduationCap />
              </div>
              <h3 className="text-3xl font-bold text-text-primary">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-border"
                >
                  <div className="absolute top-0 left-[-5px] w-[10px] h-[10px] rounded-full bg-primary" />
                  <span className="text-primary font-medium text-sm block mb-2">{item.period}</span>
                  <h4 className="text-xl font-bold text-text-primary mb-1 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-text-secondary/60 text-sm">{item.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
