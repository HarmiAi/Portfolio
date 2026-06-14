import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiBriefcase, FiBookOpen, FiAward } from 'react-icons/fi';
import AnimatedText from './AnimatedText';
import PremiumButton from './PremiumButton';

const ResumeSection = () => {
  return (
    <section 
      id="resume-section"
      className="relative w-full md:w-screen h-auto md:h-screen flex-shrink-0 flex items-center bg-[#071714] overflow-hidden px-6 md:px-12 lg:px-24 py-20 md:py-0 border-b md:border-b-0 md:border-l border-[#354f52]/10 z-10"
    >
      {/* Background drifting orb */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-[#52796f]/5 rounded-full blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-[#84a98c]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="w-full z-10 flex flex-col justify-center space-y-8 md:space-y-12">
        
        {/* Section Label & Title */}
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2"
          >
            <span className="w-8 h-[1px] bg-[#84a98c]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#84a98c] font-sans">
              SECTION 06 // CV
            </span>
          </motion.div>
          
          <h2 className="font-morganite text-[clamp(2.5rem,13vw,10rem)] font-black text-[#f8fafc] tracking-wide leading-[0.8] uppercase select-none">
            <AnimatedText text="Curriculum Vitae" type="word" delay={0.2} />
          </h2>
        </div>

        {/* 3-Column Grid on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full pt-4">
          
          {/* Column 1: Summary & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4 font-sans">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#84a98c] flex items-center space-x-2 select-none">
                <span className="p-1.5 rounded-lg bg-[#354f52]/20"><FiBriefcase className="text-sm" /></span>
                <span>Summary</span>
              </h3>
              <p className="body-text text-sm leading-relaxed">
                Frontend Developer with 1 year of professional experience (6 months internship + 6 months full-time) specializing in modern web technologies and multiple CMS platforms. Skilled in transforming design wireframes into functional, high-performance websites using React.js, Shopify, Webflow, Squarespace, and WordPress.
              </p>
            </div>
            
            <div className="pt-4 border-t border-[#354f52]/10 space-y-4">
              <p className="text-xs text-[#cad2c5]/60 font-light font-sans">
                Download the comprehensive PDF copy of my technical experience to review my history offline.
              </p>
              <div>
                <PremiumButton 
                  href="#" 
                  icon={FiDownload}
                  data-tooltip="Save copy as PDF"
                >
                  Download Resume
                </PremiumButton>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 font-sans"
          >
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#84a98c] flex items-center space-x-2 select-none">
              <span className="p-1.5 rounded-lg bg-[#354f52]/20"><FiBriefcase className="text-sm" /></span>
              <span>Experience</span>
            </h3>

            <div className="border-l-2 border-[#84a98c]/35 pl-4 space-y-2 relative">
              <div className="flex flex-col justify-between">
                <h4 className="text-base font-bold text-[#f8fafc] tracking-tight">Just Digital Gurus</h4>
                <span className="text-[10px] font-mono text-[#84a98c]">04/2025 – Present | Rajkot</span>
              </div>
              <p className="text-sm text-[#84a98c] font-medium">Frontend Developer</p>
              <p className="body-text text-xs leading-relaxed pt-1">
                Transitioned from intern to full-time Frontend Developer, building high-performance websites with HTML5, CSS3, JS, and React.js. I specialize in custom Shopify, WordPress, Webflow, and Squarespace themes, transforming wireframes into responsive realities.
              </p>
            </div>
          </motion.div>

          {/* Column 3: Education & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6 font-sans"
          >
            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#84a98c] flex items-center space-x-2 select-none">
                <span className="p-1.5 rounded-lg bg-[#354f52]/20"><FiBookOpen className="text-sm" /></span>
                <span>Education</span>
              </h3>
              <div className="border-l-2 border-[#84a98c]/35 pl-4 space-y-1">
                <h4 className="text-base font-bold text-[#f8fafc] tracking-tight">Grace College</h4>
                <p className="text-xs text-[#cad2c5]/75">BCA (Expected 04/2026)</p>
                <p className="text-[10px] font-mono text-[#84a98c]">Rajkot, Gujarat</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#84a98c] flex items-center space-x-2 select-none">
                <span className="p-1.5 rounded-lg bg-[#354f52]/20"><FiAward className="text-sm" /></span>
                <span>Achievements</span>
              </h3>
              <ul className="space-y-2 pl-4 border-l-2 border-[#84a98c]/35 text-xs text-[#cad2c5]/80 font-light">
                <li className="flex items-start space-x-1.5">
                  <span className="text-[#84a98c]">•</span>
                  <span>Built and launched the EverFresh International export portal.</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <span className="text-[#84a98c]">•</span>
                  <span>Programmed sofa catalogs for Hicon Seating Solution using React.js.</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <span className="text-[#84a98c]">•</span>
                  <span>Developed the ReachGiant agency website with dynamic CMS filters.</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
