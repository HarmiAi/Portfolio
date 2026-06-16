import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AnimatedText from './AnimatedText';
import PremiumButton from './PremiumButton';
import InteractivePortrait from './InteractivePortrait';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    let ctx;
    if (window.innerWidth > 768) {
      ctx = gsap.context(() => {
        // Pin the Hero section and animate elements translating leftwards as user scrolls down
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "+=100%",
            scrub: 0.5,
            pin: true,
            invalidateOnRefresh: true,
          }
        });

        // Left text translates leftwards & fades out subtly
        tl.to("#hero-content-left", {
          x: -120,
          opacity: 0.05,
          ease: "power1.inOut"
        }, 0)
        // Background portrait translates slower to the right for deep horizontal parallax exit
        .to("#hero-portrait-wrapper-v2", {
          x: 80,
          ease: "none"
        }, 0)
        .to("#hero-portrait-inner", {
          xPercent: 15,
          ease: "none"
        }, 0);

      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (ctx) ctx.revert();
    };
  }, [isMobile]);

  return (
    <section 
      id="hero-section"
      className="relative w-full md:w-screen h-screen flex-shrink-0 bg-[#071714] overflow-hidden border-b border-[#354f52]/10 z-10"
    >
      {/* Layer 1: Atmospheric background animated WebP video (loaded globally in page background) */}

      {/* Layer 2: Interactive Portrait Full-Screen Background */}
      <div
        id="hero-portrait-wrapper-v2"
        className="absolute inset-0 w-full h-full z-0 select-none pointer-events-auto"
        style={{ willChange: 'transform' }}
      >
        <div
          id="hero-portrait-inner"
          className="w-full h-full"
          style={{ willChange: 'transform' }}
        >
          <InteractivePortrait 
            fullBleed={true} 
            className="w-full h-full scale-[1.01]" 
          />
        </div>
      </div>

      {/* Layer 3: Ambient Glow Discs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#354f52]/10 rounded-full blur-[130px] pointer-events-none z-1" />

      {/* Layer 4: Gradient Overlays for Text Legibility (Vignettes) */}
      {/* Horizontal Gradient (Left-to-Right) */}
      {/* <div 
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background: isMobile
            ? "linear-gradient(180deg, rgba(11, 15, 20, 0.85) 0%, rgba(11, 15, 20, 0.65) 50%, rgba(11, 15, 20, 0.85) 100%)"
            : "linear-gradient(90deg, rgba(11, 15, 20, 0.92) 0%, rgba(11, 15, 20, 0.7) 35%, rgba(11, 15, 20, 0.3) 70%, transparent 100%)"
        }}
      /> */}
      {/* Bottom Gradient Vignette (Transitions smoothly to next vertical section) */}
      <div 
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 75%, #071714 100%)"
        }}
      />

      {/* Layer 5: Hero content layout overlay (centered flex container) */}
      <div className="absolute inset-0 z-10 flex items-center px-6 md:px-12 lg:px-24 pointer-events-none py-20 lg:py-0">
        <div 
          id="hero-content-left"
          className="max-w-2xl lg:max-w-3xl flex flex-col justify-center space-y-6 md:space-y-8 pointer-events-none"
        >
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#84a98c] animate-pulse shadow-[0_0_8px_#84a98c]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#84a98c] font-sans">
              FULL STACK DEVELOPER
            </span>
          </motion.div>

          {/* Main Heading in Morganite Black */}
          <div className="overflow-hidden">
            <h1 className="Morganite-heading text-[clamp(3rem,14vw,9.5rem)] uppercase leading-none tracking-wide text-white">
              <AnimatedText text="Harmi Pagada" type="letter" delay={0.2} />
            </h1>
          </div>

          {/* Supporting Heading */}
          <div className="max-w-lg">
            <h2 className="text-lg sm:text-2xl font-bold text-[#f8fafc] leading-snug font-sans">
              <AnimatedText 
                text="Building impactful digital products through code, creativity, and emerging technologies."
                delay={0.4}
                type="word"
              />
            </h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xs sm:text-sm font-light text-[#cad2c5] leading-relaxed max-w-lg font-sans"
          >
            Full Stack Developer specializing in React, Node.js, AI integrations, and immersive digital experiences.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="flex flex-wrap gap-4 items-center pt-2 pointer-events-auto"
          >
            <PremiumButton 
              href="#" 
              icon={FiArrowRight}
              data-tooltip="View About & Mission"
            >
              View Work
            </PremiumButton>

            <PremiumButton 
               href="/Harmi_Pagada_CV.pdf" 
                                download="Harmi_Pagada_CV.pdf"
                                icon={FiDownload}
                                data-tooltip="Save copy as PDF"
            >
              Download Resume
            </PremiumButton>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
