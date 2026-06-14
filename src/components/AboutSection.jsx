import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const AboutSection = () => {
  return (
    <section 
      id="about-section"
      className="relative w-full md:w-screen h-auto md:h-screen flex-shrink-0 flex items-center bg-[#0b0f14] overflow-hidden px-6 md:px-12 lg:px-24 py-20 md:py-0 border-b md:border-b-0 md:border-l border-[#354f52]/10"
    >
      {/* Background soft parallax layers */}
      <div 
        className="absolute top-[20%] left-[40%] w-[350px] h-[350px] bg-[#52796f]/5 rounded-full blur-[110px] pointer-events-none animate-pulse-soft"
        style={{ transform: 'translateY(-5%)' }}
      />
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-[#354f52]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Content wrapper: centered max-width layout on desktop */}
      <div className="w-full max-w-5xl mx-auto z-10 space-y-6 md:space-y-8">
        
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-2"
        >
          <span className="w-8 h-[1px] bg-[#84a98c]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#84a98c] font-sans">
            SECTION 02 // WHO I AM
          </span>
        </motion.div>

        {/* Title in Morganite Black */}
        <div className="overflow-hidden">
          <h2 className="font-morganite text-[clamp(2.5rem,13vw,10rem)] font-black text-[#f8fafc] tracking-wide leading-[0.8] uppercase select-none">
            <AnimatedText text="Who I Am" type="letter" delay={0.2} />
          </h2>
        </div>

        {/* Oversized paragraph */}
        <div className="overflow-hidden pt-2">
          <p className="text-lg sm:text-2xl md:text-3xl font-light text-[#cad2c5] leading-relaxed tracking-wide font-sans">
            <AnimatedText 
              text="A Full Stack Developer passionate about building meaningful digital experiences that combine creativity and functionality."
              type="word"
              delay={0.4}
            />
          </p>
        </div>

        {/* Sub-details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.75, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 text-xs sm:text-sm text-[#cad2c5]/90 leading-relaxed font-light font-sans"
        >
          <p>
            I craft digital products that live at the intersection of design and technology. By focusing on both backend architecture and frontend animations, I ensure every experience is high-performing, fluid, and memorable.
          </p>
          <p>
            Always pushing boundaries, I explore emerging spaces like AR/VR layouts, AI tool integrations, and interactive interfaces that challenge standard scrolling formats. Let's make the web a canvas for creativity.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
