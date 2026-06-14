import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiCpu, FiEye, FiTv } from 'react-icons/fi';
import AnimatedText from './AnimatedText';

const services = [
  {
    num: "01",
    title: "Full Stack Applications",
    desc: "Architecting secure, modular backends combined with high-fidelity React frontends. Skilled in database relationships and API design.",
    icon: FiLayers,
    glow: "rgba(132, 169, 140, 0.12)"
  },
  {
    num: "02",
    title: "AI Integrations",
    desc: "Connecting language models, vector search, and agentic workflows to existing apps to build smart automation and contextual user interactions.",
    icon: FiCpu,
    glow: "rgba(82, 121, 111, 0.12)"
  },
  {
    num: "03",
    title: "AR Experiences",
    desc: "Bridging physical and digital spaces through WebXR, interactive menus, and camera overlays for immersive retail and entertainment layouts.",
    icon: FiEye,
    glow: "rgba(53, 79, 82, 0.18)"
  },
  {
    num: "04",
    title: "Modern Web Platforms",
    desc: "Creating high-performance, SEO-optimized, highly responsive client sites using optimized rendering models and smooth visual cues.",
    icon: FiTv,
    glow: "rgba(132, 169, 140, 0.12)"
  }
];

const ServicesSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section 
      id="services-section"
      className="relative w-full md:w-screen h-auto md:h-screen flex-shrink-0 flex items-center bg-[#0b0f14] overflow-hidden px-6 md:px-12 lg:px-24 py-20 md:py-0 border-l border-[#354f52]/10"
    >
      {/* Background orbs */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-[#84a98c]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Centered max-width content wrapper */}
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center space-y-6 md:space-y-8 z-10">
        
        {/* Section Label & Title */}
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <span className="w-8 h-[1px] bg-[#84a98c]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#84a98c] font-sans">
              SECTION 03 // WHAT I BUILD
            </span>
          </motion.div>
          
          <h2 className="font-morganite text-[clamp(4.5rem,13vw,10rem)] font-black text-[#f8fafc] tracking-wide leading-[0.8] uppercase select-none">
            <AnimatedText text="What I Build" type="word" delay={0.1} />
          </h2>
        </div>

        {/* Services Cards: 2x2 grid on desktop, 1x1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full pt-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-[#0f1720]/45 border border-[#354f52]/20 hover:border-[#84a98c]/50 transition-all duration-500 overflow-hidden"
                style={{
                  willChange: "transform, border-color"
                }}
              >
                {/* Subtle inner hover glow */}
                <div 
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: service.glow }}
                />

                <div className="space-y-4">
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[#84a98c]/10 text-[#84a98c] group-hover:bg-[#84a98c] group-hover:text-[#0b0f14] transition-all duration-500">
                      <Icon className="text-lg" />
                    </div>
                    <span className="text-xs font-mono text-[#84a98c]/40 font-semibold group-hover:text-[#84a98c]/80 transition-colors duration-500">
                      {service.num}
                    </span>
                  </div>

                  {/* Copy */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#f8fafc] tracking-tight group-hover:text-[#84a98c] transition-colors duration-300 font-sans">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#cad2c5]/75 leading-relaxed font-light font-sans">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom hover bar */}
                <div className="h-[1.5px] w-0 bg-[#84a98c] absolute bottom-0 left-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
