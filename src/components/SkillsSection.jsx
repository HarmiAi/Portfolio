import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiServer, FiActivity } from 'react-icons/fi';
import AnimatedText from './AnimatedText';

const row1 = ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "GSAP"];
const row2 = ["Node.js", "Express.js", "MongoDB", "Firebase Auth", "REST APIs", "Shopify", "GitHub", "Vercel"];

const SkillsSection = () => {
  return (
    <section
      id="skills-section"
      className="relative w-full md:w-screen h-auto md:h-screen flex-shrink-0 flex items-center bg-[#071714] overflow-hidden px-6 md:px-12 lg:px-24 py-20 md:py-0 border-b md:border-b-0 md:border-l border-[#354f52]/10 z-10"
    >
      {/* Background soft parallax layers */}
      <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] bg-[#52796f]/5 rounded-full blur-[110px] pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[#354f52]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full z-10 flex flex-col justify-center space-y-12">
        {/* Section Label & Title */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2"
          >
            <span className="w-8 h-[1px] bg-[#84a98c]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#84a98c] font-sans">
               CAPABILITIES
            </span>
          </motion.div>

          <h2 className="font-morganite text-[clamp(2.5rem,13vw,10rem)] font-black text-[#f8fafc] tracking-wide leading-[0.8] uppercase select-none">
            <AnimatedText text="Capabilities" type="letter" delay={0.2} />
          </h2>
        </div>

        {/* Dual Opposing Marquees */}
        <div className="w-full space-y-6 select-none overflow-hidden py-4">
          {/* Marquee Row 1 (Moves Left) */}
          <div className="w-full overflow-hidden flex whitespace-nowrap">
            <div className="flex animate-marquee whitespace-nowrap gap-12 text-5xl md:text-7xl font-bold font-morganite tracking-widest text-[#f8fafc]/30">
              {row1.map((item, i) => (
                <span key={i} className="hover:text-[#84a98c] transition-colors duration-300 uppercase">
                  {item} •
                </span>
              ))}
              {row1.map((item, i) => (
                <span key={`dup1-${i}`} className="hover:text-[#84a98c] transition-colors duration-300 uppercase">
                  {item} •
                </span>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (Moves Right) */}
          <div className="w-full overflow-hidden flex whitespace-nowrap">
            <div className="flex animate-marquee-reverse whitespace-nowrap gap-12 text-5xl md:text-7xl font-bold font-morganite tracking-widest text-[#f8fafc]/30">
              {row2.map((item, i) => (
                <span key={i} className="hover:text-[#84a98c] transition-colors duration-300 uppercase">
                  {item} •
                </span>
              ))}
              {row2.map((item, i) => (
                <span key={`dup2-${i}`} className="hover:text-[#84a98c] transition-colors duration-300 uppercase">
                  {item} •
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Highlights / Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4"
        >
          <div className="editorial-card space-y-4">
            <div className="flex items-center space-x-3 text-[#84a98c]">
              <FiLayers className="text-xl" />
              <h4 className="text-sm font-bold tracking-wider uppercase font-sans">Frontend</h4>
            </div>
            <p className="text-xs text-[#cad2c5]/90 leading-relaxed font-light font-sans">
              Specialized in responsive user interfaces, fluid animations using GSAP & Framer Motion, and highly optimized rendering cycles.
            </p>
          </div>

          <div className="editorial-card space-y-4">
            <div className="flex items-center space-x-3 text-[#84a98c]">
              <FiServer className="text-xl" />
              <h4 className="text-sm font-bold tracking-wider uppercase font-sans">Backend</h4>
            </div>
            <p className="text-xs text-[#cad2c5]/90 leading-relaxed font-light font-sans">
              Solid database design using MongoDB, RESTful backend logic with Node/Express, and real-time data sync scripts.
            </p>
          </div>

          <div className="editorial-card space-y-4">
            <div className="flex items-center space-x-3 text-[#84a98c]">
              <FiActivity className="text-xl" />
              <h4 className="text-sm font-bold tracking-wider uppercase font-sans">Operations</h4>
            </div>
            <p className="text-xs text-[#cad2c5]/90 leading-relaxed font-light font-sans">
              Efficient Git collaboration, automated server hosting deployments, and professional CMS template builds.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
