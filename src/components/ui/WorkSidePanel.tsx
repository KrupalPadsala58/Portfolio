"use client";

import React from "react";
import { motion } from "framer-motion";

const WorkSidePanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="hidden lg:block absolute left-0 top-0 bottom-0 w-[800px] pointer-events-none"
    >
      {/* <div className="sticky top-24 h-[calc(100vh-120px)] w-full rounded-[40px] overflow-hidden">
        {/* Main purple gradient background */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#2a1454] to-[#140b27] border border-white/5" /> */}
        
        {/* Inner glow/shadow for depth */}
        {/* <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(135,80,247,0.1)]" /> */}

        {/* Decorative elements / Shapes */}
        {/* <div className="absolute top-[20%] left-[-10%] w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] blur-[80px]" /> */}
        
        <div className="py-0 my-0 absolute inset-0 flex flex-col justify-center z-10">
                              <div className="elementor-element elementor-element-4ff5d9f elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-image" data-id="4ff5d9f" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                            <img width="938" height="1466" src="https://gerold.themejunction.net/wp-content/uploads/2024/05/h2-testimonial-shape.png" className="attachment-full size-full wp-image-931" alt="" srcSet="https://gerold.themejunction.net/wp-content/uploads/2024/05/h2-testimonial-shape.png 938w, https://gerold.themejunction.net/wp-content/uploads/2024/05/h2-testimonial-shape-192x300.png 192w, https://gerold.themejunction.net/wp-content/uploads/2024/05/h2-testimonial-shape-655x1024.png 655w, https://gerold.themejunction.net/wp-content/uploads/2024/05/h2-testimonial-shape-768x1200.png 768w"
                                sizes="(max-width: 938px) 100vw, 938px" /> </div>
                    </div>
        </div>

        {/* Subtle noise texture or pattern */}
        {/* <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      </div> */}
    </motion.div>
  );
};

export default WorkSidePanel;
