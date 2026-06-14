import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Loader from '../components/Loader';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';
import InteractivePortrait from '../components/InteractivePortrait';

import { useLoader } from '../hooks/useLoader';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';
import '../styles/animations.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // 1.8-second loading sequence
  const isLoading = useLoader(1800);
  const { containerRef, triggerRef } = useHorizontalScroll(isLoading);

  // Initialize Lenis Smooth Scroll globally
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Sync Lenis scroll ticks with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickHandler = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickHandler);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickHandler);
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <>
      {/* Loading overlay */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Main Experience */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative min-h-screen bg-[#071714] text-[#f8fafc]"
        >
          {/* Animated WebP Background Overlay */}
          <div 
            className="fixed inset-0 pointer-events-none z-0 opacity-20"
            style={{
              backgroundImage: "url('/hero-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />

          {/* Timeline Scroll Container */}
          <div ref={triggerRef} className="relative w-full h-auto md:h-screen md:overflow-hidden">
            

            {/* Horizontal panels strip (stacked vertically on mobile, row list on desktop) */}
            <div
              ref={containerRef}
              id="story-section"
              className="flex flex-col md:flex-row md:w-[700vw] md:h-screen w-full h-auto will-change-transform"
            >
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <ProjectsSection />
              <SkillsSection />
              <ResumeSection />
              <ContactSection />
            </div>
          </div>

          {/* Premium Ambient grid background overlay */}
          <div className="ambient-grid animate-pulse-soft" />

          {/* Footer for mobile/tablet stack only (Desktop has absolute footer inside ContactSection) */}
          <footer className="relative w-full py-6 text-center text-[10px] text-[#cad2c5]/35 bg-[#071714] border-t border-[#354f52]/10 z-30 select-none block md:hidden">
            <p>© {new Date().getFullYear()} Harmi Pagada. Crafted with Passion & Precision.</p>
          </footer>
        </motion.div>
      )}
    </>
  );
};

export default Home;
