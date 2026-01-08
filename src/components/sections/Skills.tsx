"use client"

import React from 'react'
import { motion } from 'framer-motion'
import SkillIcon from '@/components/ui/SkillIcon'

const skillsData = [
  {
    name: "React.js",
    slug: "react",
    description: "Building interactive, component-oriented user interfaces.",
    color: "61DAFB"
  },
  {
    name: "Next.js",
    slug: "nextdotjs",
    description: "Advanced React framework for optimized production apps.",
    color: "000000"
  },
  {
    name: "Node.js",
    slug: "nodedotjs",
    description: "Scalable server-side JavaScript environment.",
    color: "339933"
  },
  {
    name: "Express.js",
    slug: "express",
    description: "Lightweight framework for powerful Node.js APIs.",
    color: "888888"
  },
  {
    name: "JavaScript",
    slug: "javascript",
    description: "Modern ES6+ development for complex logic.",
    color: "F7DF1E"
  },
  {
    name: "HTML5",
    slug: "html5",
    description: "Semantic foundation for web content and structure.",
    color: "E34F26"
  },
  {
    name: "CSS3",
    slug: "css",
    description: "Sophisticated styling and layout control.",
    color: "1572B6"
  },
  {
    name: "Tailwind CSS",
    slug: "tailwindcss",
    description: "Modern, utility-first CSS for efficient UI development.",
    color: "06B6D4"
  },
  {
    name: "Git & GitHub",
    slug: "github",
    description: "Global standard for version control and collaboration.",
    color: "181717"
  },
  {
    name: "Java",
    slug: "openjdk",
    description: "Reliable, enterprise-scale backend development.",
    color: "007396"
  },
  {
    name: "PostgreSQL",
    slug: "postgresql",
    description: "Powerful relational database for data integrity.",
    color: "4169E1"
  },
  {
    name: "MongoDB",
    slug: "mongodb",
    description: "Flexible, document-oriented NoSQL database system.",
    color: "47A248"
  },
  {
    name: "SaaS",
    slug: "vercel",
    description: "Architecting scalable cloud-native software services.",
    color: "000000"
  },
  {
    name: "MVP Dev",
    slug: "producthunt",
    description: "Rapid iteration to launch ideas and capture markets.",
    color: "DA552F"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
}

const Skills = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="skills">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight"
          >
            Powering Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Elite Technical Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-text-secondary font-medium uppercase tracking-[0.2em] text-xs md:text-sm"
          >
            Professional Expertise & Strategic Execution
          </motion.p>
        </div>

        {/* Staggered Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 md:gap-10 justify-items-center"
        >
          {skillsData.map((skill, idx) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
            >
              <SkillIcon 
                name={skill.name}
                iconSlug={skill.slug}
                description={skill.description}
                color={skill.color}
                index={idx}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
