import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiCpu, FiEye, FiGlobe, FiServer, FiAward, FiArrowRight } from 'react-icons/fi';
import PremiumButton from './PremiumButton';
import '../styles/services.css';

const servicesData = [
  {
    num: "01",
    title: "Full Stack Apps",
    desc: "End-to-end applications built with clean architecture and optimized databases.",
    hoverDesc: "React, Node.js, Express, MongoDB, Firebase. Delivering robust APIs, secure sessions, and pixel-perfect design interfaces.",
    icon: FiLayers
  },
  {
    num: "02",
    title: "AI Experiences",
    desc: "Custom automation workflows integrating advanced language models.",
    hoverDesc: "Prompt orchestration, contextual vector memory embeddings, and LLM integrations for intelligent UX actions.",
    icon: FiCpu
  },
  {
    num: "03",
    title: "AR Experiences",
    desc: "Interactive 3D spaces and WebXR configuration canvases.",
    hoverDesc: "Three.js and camera layouts bringing spatial menus, topping configurators, and 3D product previews directly to browsers.",
    icon: FiEye
  },
  {
    num: "04",
    title: "Modern Web Apps",
    desc: "High-performance client sites prioritizing SEO, accessibility, and speed.",
    hoverDesc: "React, Vite, and tailwind. Core focus on quick page speeds, fluid layouts, semantic structure, and conversion metrics.",
    icon: FiGlobe
  },
  {
    num: "05",
    title: "Scalable Backends",
    desc: "Secure logic engines and transactional data synchronization loops.",
    hoverDesc: "MongoDB Atlas data schemas, REST API endpoints, real-time database webhooks, and secure user session structures.",
    icon: FiServer
  },
  {
    num: "06",
    title: "Digital Products",
    desc: "Polished SaaS tools and customized Shopify/WordPress CMS configurations.",
    hoverDesc: "Tailored schemas for ReachGiant and Hicon catalogs. Fast load times, modular widgets, and optimized user landing journeys.",
    icon: FiAward
  }
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const container = sectionRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); // Normalized cursor -1 to 1
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    // Apply smooth mouse parallax coordinates via CSS variables
    container.style.setProperty('--parallax-x', `${(x * 24).toFixed(1)}px`);
    container.style.setProperty('--parallax-y', `${(y * 24).toFixed(1)}px`);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    const container = sectionRef.current;
    if (!container) return;
    container.style.setProperty('--parallax-x', '0px');
    container.style.setProperty('--parallax-y', '0px');
  };

  const handleCardMouseMove = (e) => {
    if (isMobile) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x.toFixed(1)}%`);
    card.style.setProperty('--mouse-y', `${y.toFixed(1)}%`);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSec = document.getElementById('projects-section');
    if (projectsSec) {
      projectsSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isMobile) {
    // Mobile layout: Premium vertical stacked capability cards
    return (
      <section 
        id="services-section"
        className="w-full bg-[#071714] px-6 py-20 space-y-16 border-b border-[#354f52]/10 z-20"
      >
        <div className="space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#84a98c] font-sans">
             WHAT I BUILD
          </span>
          <h2 className="font-morganite text-5xl font-black text-[#f8fafc] uppercase">What I Build</h2>
          <p className="text-sm text-[#cad2c5]/80 max-w-sm mx-auto leading-relaxed font-sans font-light">
            I transform ideas into impactful digital experiences through thoughtful engineering and modern technologies.
          </p>
          <div className="pt-2">
            <PremiumButton href="#projects-section" icon={FiArrowRight} onClick={handleScrollToProjects}>
              View Projects
            </PremiumButton>
          </div>
        </div>

        <div className="space-y-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="p-6 rounded-2xl border border-[#354f52]/20 bg-[#071714]/45 backdrop-blur-sm space-y-4 font-sans"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#84a98c]/10 text-[#84a98c]">
                    <Icon className="text-xl" />
                  </div>
                  <span className="text-xs font-mono text-[#84a98c]/40 font-semibold">{service.num}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#f8fafc]">{service.title}</h3>
                  <p className="text-xs text-[#cad2c5]/70 leading-relaxed font-light">{service.desc}</p>
                  <p className="text-[11px] text-[#84a98c]/90 leading-relaxed pt-1 border-t border-[#354f52]/10">{service.hoverDesc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  // Desktop layout: Elliptical circular composition with mouse parallax
  return (
    <section 
      ref={sectionRef}
      id="services-section"
      className="services-panel"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background drifting glow orbs */}
      <div className="services-bg-glow-1" />
      <div className="services-bg-glow-2" />

      {/* Center content block */}
      <div className="services-center-content services-center-wrapper opacity-0 scale-75">
        <span className="services-eyebrow">
           WHAT I BUILD
        </span>
        <h2 className="services-title">
          What I Build
        </h2>
        <p className="services-desc">
          I transform ideas into impactful digital experiences through thoughtful engineering and modern technologies.
        </p>
        <div className="pt-2">
          <PremiumButton 
            href="#projects-section" 
            icon={FiArrowRight} 
            onClick={handleScrollToProjects}
            data-tooltip="View Featured Work"
          >
            View Projects
          </PremiumButton>
        </div>
      </div>

      {/* Orbital Cards List */}
      {servicesData.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className={`orbit-card orbit-card-${index}`}
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-content-wrap">
              {/* Header */}
              <div className="card-header-row">
                <div className="card-icon-container">
                  <Icon className="text-xl" />
                </div>
                <span className="card-number">
                  {service.num}
                </span>
              </div>

              {/* Title & Copy */}
              <div className="card-text-block">
                <h3 className="card-title">
                  {service.title}
                </h3>
                
                {/* Default text */}
                <p className="card-default-desc">
                  {service.desc}
                </p>

                {/* Hover details section (revealed inside mask) */}
                <p className="card-hover-details">
                  {service.hoverDesc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServicesSection;
