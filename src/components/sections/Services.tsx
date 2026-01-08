"use client";

import React from "react";
import { motion } from "framer-motion";

import { FaCode, FaRocket, FaDatabase, FaMagic, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "Custom Web Application Development",
    desc: "Using ReactJS, NextJS, and NodeJS with ExpressJS, I build responsive, SEO-optimized apps that attract more users and convert them into paying customers.",
    impact:
      "Expect a potential 20-40% uplift in revenue through better UX and backend efficiency.",
    icon: <FaCode />,
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "SaaS Platform Creation and Scaling",
    desc: "Specializing in SaaS architecture, I'll design and deploy subscription-based models with secure database designs (e.g., MongoDB or PostgreSQL integration).",
    impact:
      "Monetize recurring revenue streams, reduce churn, and expand market reach.",
    icon: <FaRocket />,
    color: "from-orange-500/20 to-rose-500/20",
  },
  {
    title: "MVP Development for Rapid Market Entry",
    desc: "Get your Minimum Viable Product live in weeks, not months, using agile methodologies and problem-solving skills honed in real-world scenarios.",
    impact:
      "Minimize development costs while validating ideas quickly to boost ROI.",
    icon: <FaCogs />,
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Database Design and Optimization",
    desc: "I'll architect robust databases that handle high traffic without downtime, ensuring data security and scalability for data-driven businesses.",
    impact:
      "Faster queries, better analytics, and informed decisions that drive efficiency.",
    icon: <FaDatabase />,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "UI/UX Enhancements with Modern Tools",
    desc: "Harnessing Tailwind CSS and JavaScript, I revamp your interfaces to be intuitive and mobile-first, upgrading user satisfaction.",
    impact:
      "Reduce bounce rates and increase conversions for tangible earnings growth.",
    icon: <FaMagic />,
    color: "from-indigo-500/20 to-purple-500/20",
  },
];

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
            Services Tailored to <span className="text-primary">Skyrocket</span>{" "}
            Your US Business
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
  );
};

export default Services;
