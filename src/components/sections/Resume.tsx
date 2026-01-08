"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaChartLine, 
  FaBolt, 
  FaUserCheck, 
  FaLayerGroup, 
  FaGem, 
  FaArrowRight 
} from 'react-icons/fa'

const growthFeatures = [
  {
    title: "Increase Sales with Conversion-Optimized Web Apps",
    description: "I build lightning-fast, SEO-optimized applications using React, Next.js, and Node.js that are designed to convert. Clients typically see 20–40% higher conversions by turning traffic into paying customers and recurring revenue.",
    icon: <FaChartLine />,
    delay: 0.1
  },
  {
    title: "Launch Faster & Start Earning Sooner",
    description: "I take ideas from concept to market in weeks, not months by delivering smart, lean MVPs using agile workflows and Git—so you can validate fast, reduce risk, and start generating revenue earlier.",
    icon: <FaBolt />,
    delay: 0.2
  },
  {
    title: "Keep Users Engaged & Coming Back",
    description: "I design mobile-first, intuitive experiences using Tailwind CSS and modern UI practices that reduce bounce rates, improve engagement, and increase lifetime customer value.",
    icon: <FaUserCheck />,
    delay: 0.3
  },
  {
    title: "Build Systems That Scale Without Breaking",
    description: "I architect robust backend systems and databases using Node.js and Java that scale effortlessly, automate workflows, and support growth—without downtime or performance issues.",
    icon: <FaLayerGroup />,
    delay: 0.4
  },
  {
    title: "Cut Costs, Save Time & Maximize Profit",
    description: "I optimize code, performance, SEO, and analytics to eliminate inefficiencies—saving you time, money, and technical debt while improving long-term profitability.",
    icon: <FaGem />,
    delay: 0.5
  }
]

const Resume = () => {
  return (
    <section className="py-24 bg-background overflow-hidden" id="resume">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Business Growth Partner
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight"
          >
            How I Help US Businesses <br className="hidden md:block" />
            <span className="text-primary">Grow & Boost Earnings</span>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-text-secondary font-medium mb-8"
          >
            Turn Your Website Into a Revenue Engine — Not Just an Online Presence
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 text-lg text-text-secondary/80 leading-relaxed max-w-3xl mx-auto"
          >
            <p>
              I help US businesses increase revenue, launch faster, and scale confidently by building high-performance web applications that convert visitors into customers and ideas into profitable products.
            </p>
            <p>
              I don’t just write code — I solve business problems using modern, battle-tested technologies that improve conversions, reduce operational costs, and unlock long-term growth.
            </p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {growthFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-surface border border-border rounded-[18px] shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="text-6xl text-primary">
                  {feature.icon}
                </div>
              </div>
              
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              
              <h4 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h4>
              <p className="text-text-secondary/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Impact Highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary/5 border border-primary/20 rounded-[24px] p-8 md:p-12 mb-20 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center relative z-10">
            <div className="space-y-2">
              <span className="text-4xl md:text-5xl font-bold text-primary block">25%+</span>
              <p className="text-text-secondary font-medium uppercase tracking-tight text-sm">increase in recurring revenue</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-primary/20 py-8 md:py-0">
              <span className="text-4xl md:text-5xl font-bold text-primary block">50%</span>
              <p className="text-text-secondary font-medium uppercase tracking-tight text-sm">faster product launches</p>
            </div>
            <div className="space-y-2">
              <span className="text-2xl md:text-3xl font-bold text-text-primary block">Real results.</span>
              <p className="text-text-secondary font-medium uppercase tracking-tight text-sm">Real growth. No guesswork.</p>
            </div>
          </div>
          
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
        </motion.div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl text-text-secondary leading-relaxed">
              If you’re serious about growing your business, improving conversions, and building a product that actually makes money—let’s talk.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>Get Your Free Growth Consultation Now</span>
              <FaArrowRight className="text-sm" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Resume

