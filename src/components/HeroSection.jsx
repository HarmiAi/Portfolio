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
        // Image wrapper moves left, while inner image reveals its remaining 20% (translateX 20% to 0%)
        .to("#hero-portrait-wrapper-v2", {
          x: -60,
          ease: "power1.inOut"
        }, 0)
        .to("#hero-portrait-inner", {
          x: '0%',
          ease: "power1.out"
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
      className="section-container bg-dark border-b border-[#354f52]/10"
      style={{ height: isMobile ? 'auto' : '100vh' }}
    >
      {/* Background glow orb */}
      <div className="absolute top-[-30%] left-[-10%] w-[60%] h-[60%] bg-[#354f52]/10 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Main layout container (using semantic styling) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center z-10 px-6 md:px-12 lg:px-24">
        
        {/* Left Side: Content Column */}
        <div 
          id="hero-content-left"
          className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#84a98c] animate-pulse shadow-[0_0_8px_#84a98c]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#84a98c] font-sans">
              FULL STACK DEVELOPER
            </span>
          </motion.div>

          {/* Heading in Morganite Black */}
          <div className="overflow-hidden">
            <h1 className="Morganite-heading text-[clamp(4.5rem,14vw,11rem)] uppercase select-none">
              <AnimatedText text="Harmi Pagada" type="letter" delay={0.2} />
            </h1>
          </div>

          {/* Subheading */}
          <div className="max-w-xl">
            <h2 className="text-lg sm:text-2xl font-medium text-[#cad2c5] leading-relaxed font-sans">
              <AnimatedText 
                text="Building impactful digital products through code, creativity, and emerging technologies."
                delay={0.4}
                type="word"
              />
            </h2>
          </div>

          {/* Premium CTA Buttons with Tooltips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap gap-4 items-center pt-2"
          >
            <PremiumButton 
              href="#about-vertical-section" 
              icon={FiArrowRight}
              data-tooltip="View About & Mission"
            >
              View Work
            </PremiumButton>

            <PremiumButton 
              href="#resume-section" 
              icon={FiDownload}
              data-tooltip="Download Technical PDF"
            >
              Download Resume
            </PremiumButton>
          </motion.div>

        </div>

        {/* Right Side: Portrait Image Column */}
        <div className="lg:col-span-5 h-[50vh] md:h-[65vh] lg:h-screen relative flex items-center justify-center lg:justify-end overflow-visible">
          {/* Soft background gradient */}
          <div className="absolute top-1/2 right-[-20%] -translate-y-1/2 w-[140%] h-[140%] bg-radial-accent opacity-75 pointer-events-none z-0" />

          {/* Portrait Wrapper */}
          <div
            id="hero-portrait-wrapper-v2"
            className="relative h-full w-[90%] sm:w-[75%] lg:w-[130%] xl:w-[115%] flex items-center z-10 select-none"
            style={{
              willChange: 'transform',
            }}
          >
            <div
              id="hero-portrait-inner"
              className="w-full h-full"
              style={{
                willChange: 'transform'
              }}
            >
              <InteractivePortrait className="h-[45vh] md:h-[55vh] lg:h-[85vh] w-full" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
