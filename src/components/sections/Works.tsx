"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  desc: string;
  image: string;
  tags: string[];
  checklist: string[];
  delay: number;
}

const projects = [
  {
    title: "Deloitte",
    category: "Branding",
    desc: "Project was about precision and information. That's all. Our design team helps clients achieve their marketing target and branding.",
    image:
      "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-3.jpg",
    tags: ["Branding", "Graphic Design", "User Stories"],
    checklist: [
      "We provide the most reasonable.",
      "Finish Work Before Deadline.",
      "The certified materials in a timely.",
      "We provide 24/7 on time services",
    ],
    delay: 0.1,
  },
  {
    title: "New Age",
    category: "UX/UI",
    desc: "Project was about precision and information. That's all. Our design team helps clients achieve their marketing target and branding.",
    image:
      "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-4.jpg",
    tags: ["Branding", "Graphic Design", "User Stories"],
    checklist: [
      "We provide the most reasonable.",
      "Finish Work Before Deadline.",
      "The certified materials in a timely.",
      "We provide 24/7 on time services",
    ],
    delay: 0.2,
  },
  {
    title: "Sebastian",
    category: "Apps",
    desc: "Project was about precision and information. That's all. Our design team helps clients achieve their marketing target and branding.",
    image:
      "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-2.jpg",
    tags: ["Branding", "Graphic Design", "User Stories"],
    checklist: [
      "We provide the most reasonable.",
      "Finish Work Before Deadline.",
      "The certified materials in a timely.",
      "We provide 24/7 on time services",
    ],
    delay: 0.3,
  },
  {
    title: "Mochnix",
    category: "Branding",
    desc: "Project was about precision and information. That's all. Our design team helps clients achieve their marketing target and branding.",
    image:
      "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-1.jpg",
    tags: ["Branding", "Graphic Design", "User Stories"],
    checklist: [
      "We provide the most reasonable.",
      "Finish Work Before Deadline.",
      "The certified materials in a timely.",
      "We provide 24/7 on time services",
    ],
    delay: 0.4,
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
  total: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Stacking effect: cards scale down slightly as they are scrolled past
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div
      ref={containerRef}
      className="sticky top-24 mb-16 last:mb-0"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale }}
        initial={{ opacity: 1, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="group bg-[#140c1c] rounded-[40px] overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-2xl"
      >
        <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <span className="text-primary font-medium text-sm mb-3 block uppercase tracking-[0.2em]">
              {project.category}
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-primary transition-colors">
              <a href="#">{project.title}</a>
            </h3>
            <p className="text-body text-base leading-relaxed mb-8 opacity-80">
              {project.desc}
            </p>

            {/* Checklist */}
            <div className="mb-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.checklist.map((item: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-white/70 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {project.tags.map((tag: string, i: number) => (
                <a
                  key={i}
                  href="#"
                  className="px-4 py-2 bg-white/5 hover:bg-primary/20 text-white/60 hover:text-primary text-xs rounded-full border border-white/5 hover:border-primary/30 transition-all"
                >
                  {tag}
                </a>
              ))}
            </div>

            <div className="project-button">
              <a
                href="#"
                className="inline-flex items-center gap-4 text-white font-bold text-lg hover:text-primary transition-colors group/btn"
              >
                View Live Project
                <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/20 overflow-hidden transform group-hover/btn:scale-110 transition-transform duration-300">
                  <motion.span className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  <div className="relative z-10 flex gap-2 group-hover/btn:-translate-x-full transition-transform duration-300">
                    <FaArrowRight className="text-sm shrink-0" />
                    <FaArrowRight className="text-sm shrink-0 absolute left-full ml-2" />
                  </div>
                </span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[45%] order-1 lg:order-2 rounded-[30px] overflow-hidden aspect-[4/3] relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Works = () => {
  return (
    <section className="py-24 bg-[#0a0c10] relative" id="works">
      {/* Background Shape */}
      <div className="absolute top-0 right-0 opacity-20 pointer-events-none select-none">
        <Image
          src="https://gerold.themejunction.net/wp-content/uploads/2024/05/h2-testimonial-shape.png"
          alt=""
          width={800}
          height={800}
          className="w-full max-w-[800px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            My Recent Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-primary font-medium uppercase tracking-[0.3em] text-sm"
          >
            Recent Projects
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
