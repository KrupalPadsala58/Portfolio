"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { name: 'Figma', level: '92%', icon: 'https://gerold.themejunction.net/wp-content/uploads/2024/05/figma.png', delay: 0.1 },
  { name: 'Sketch', level: '80%', icon: 'https://gerold.themejunction.net/wp-content/uploads/2024/05/sketch.png', delay: 0.2 },
  { name: 'XD', level: '85%', icon: 'https://gerold.themejunction.net/wp-content/uploads/2024/05/xd.png', delay: 0.3 },
  { name: 'WordPress', level: '99%', icon: 'https://gerold.themejunction.net/wp-content/uploads/2024/05/wp.png', delay: 0.4 },
  { name: 'React', level: '89%', icon: 'https://gerold.themejunction.net/wp-content/uploads/2024/05/react.png', delay: 0.5 },
  { name: 'JavaScript', level: '93%', icon: 'https://gerold.themejunction.net/wp-content/uploads/2024/05/js.png', delay: 0.6 },
]

const Skills = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="skills">
       {/* Background Shape */}
       <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <Image 
          src="https://gerold.themejunction.net/wp-content/uploads/2024/05/h2-project-shape.png" 
          alt="" 
          width={500}
          height={500}
          className="w-full max-w-[500px]" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            My Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-primary font-medium uppercase tracking-widest text-sm"
          >
            Technical Expertise
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: skill.delay }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="w-40 h-44 bg-surface rounded-[30px] border border-border flex flex-col items-center justify-center gap-6 group-hover:bg-primary/20 group-hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-14 h-14 transition-transform duration-300 group-hover:scale-110 relative">
                  <Image 
                    src={skill.icon} 
                    alt={skill.name} 
                    fill
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 dark:invert-0 light:invert-[0.1]" 
                  />
                </div>
                <span className="text-2xl font-bold text-text-primary/50 group-hover:text-text-primary transition-colors">{skill.level}</span>
              </div>
              <p className="mt-4 text-primary font-bold text-lg uppercase tracking-tight">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
