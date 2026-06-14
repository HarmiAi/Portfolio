import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheck } from 'react-icons/fi';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';

const featuresList = [
  "WhatsApp Ordering",
  "Restaurant Dashboard",
  "Full Stack Architecture",
  "MongoDB Atlas",
  "Render + Vercel Deployment"
];

const FeaturedProjectSection = () => {
  return (
    <section 
      id="featured-project-section"
      className="relative w-full md:w-screen h-auto md:h-screen flex-shrink-0 flex items-center bg-[#071714] overflow-hidden px-6 md:px-12 lg:px-24 py-20 md:py-0 border-l border-[#354f52]/10"
    >
      {/* Background ambient light */}
      <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-[#84a98c]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[350px] h-[350px] bg-[#52796f]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-7xl items-center z-10">
        
        {/* Left column: content & metadata */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          
          {/* Label */}
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2"
            >
              <span className="w-8 h-[1px] bg-[#84a98c]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#84a98c]">
                SECTION 04 // FEATURED PROJECT
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-[#f8fafc] tracking-tight leading-tight">
              <AnimatedText text="Restaurant AR Menu Platform" type="word" delay={0.1} />
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#cad2c5]/80 font-light leading-relaxed max-w-xl">
            Designed and developed a restaurant digitization platform featuring interactive ordering workflows and immersive concepts. Users view menu items in immersive spaces, customize toppings, and order seamlessly.
          </p>

          {/* Features checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
            {featuresList.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-center space-x-2.5 text-sm text-[#cad2c5] font-light"
              >
                <div className="flex-shrink-0 p-1 rounded-full bg-[#84a98c]/20 text-[#84a98c]">
                  <FiCheck className="text-xs" />
                </div>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 items-center pt-2"
          >
            <MagneticButton>
              <a
                href="#"
                className="group relative flex items-center space-x-2 px-5 py-3 bg-[#84a98c] text-[#071714] font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(132,169,140,0.5)]"
              >
                <span>Live Demo</span>
                <FiExternalLink />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#"
                className="group flex items-center space-x-2 px-5 py-3 border border-[#84a98c]/30 text-[#f8fafc] font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:border-[#84a98c] hover:scale-[1.03] hover:bg-[#84a98c]/5"
              >
                <FiGithub className="text-[#84a98c]" />
                <span>GitHub</span>
              </a>
            </MagneticButton>
          </motion.div>

        </div>

        {/* Right column: floating interactive mockups */}
        <div className="lg:col-span-6 h-[40vh] sm:h-[50vh] lg:h-[70vh] relative flex items-center justify-center select-none overflow-visible">
          
          {/* Main Dashboard Card Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
            className="absolute left-[5%] w-[65%] sm:w-[55%] lg:w-[65%] p-5 rounded-2xl bg-[#071714]/80 border border-[#354f52]/40 shadow-2xl backdrop-blur-md z-10 animate-float"
          >
            {/* Window buttons decoration */}
            <div className="flex items-center space-x-1.5 pb-4 border-b border-[#354f52]/30">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="text-[10px] text-[#cad2c5]/40 font-mono pl-4">dashboard_v1.0.js</span>
            </div>
            
            {/* Simulated analytics grid */}
            <div className="space-y-3.5 pt-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#cad2c5]/60">Live Sales Overview</span>
                <span className="text-[#84a98c] font-bold font-mono">+$2,480.00</span>
              </div>
              
              {/* Graphic bars */}
              <div className="flex items-end justify-between h-20 pt-2 border-b border-[#354f52]/20">
                <div className="w-[12%] bg-[#354f52]/50 h-[30%] rounded-t-sm" />
                <div className="w-[12%] bg-[#52796f]/50 h-[55%] rounded-t-sm" />
                <div className="w-[12%] bg-[#84a98c] h-[85%] rounded-t-sm" />
                <div className="w-[12%] bg-[#52796f]/50 h-[45%] rounded-t-sm" />
                <div className="w-[12%] bg-[#84a98c] h-[75%] rounded-t-sm" />
                <div className="w-[12%] bg-[#354f52]/50 h-[25%] rounded-t-sm" />
              </div>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 rounded bg-[#071714]/60 border border-[#354f52]/20">
                  <p className="text-[#cad2c5]/40">Active Tables</p>
                  <p className="font-bold text-sm text-[#f8fafc]">14 / 20</p>
                </div>
                <div className="p-2 rounded bg-[#071714]/60 border border-[#354f52]/20">
                  <p className="text-[#cad2c5]/40">Pending Orders</p>
                  <p className="font-bold text-sm text-[#84a98c]">4 New</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp / Chat Mockup (overlapping) */}
          <motion.div
            initial={{ opacity: 0, y: -40, x: 20, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: 4 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.5 }}
            className="absolute right-[5%] top-[10%] w-[55%] sm:w-[45%] lg:w-[50%] p-4 rounded-xl bg-emerald-950/75 border border-emerald-800/40 shadow-2xl backdrop-blur-md z-20"
          >
            {/* Contact Header */}
            <div className="flex items-center space-x-2.5 pb-2.5 border-b border-emerald-900/40">
              <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">WA</div>
              <div>
                <p className="text-[10px] font-bold text-white leading-none">WhatsApp Order Bot</p>
                <p className="text-[8px] text-emerald-400">online</p>
              </div>
            </div>
            
            {/* Chats */}
            <div className="space-y-2 pt-2.5 text-[9px] font-sans">
              <div className="p-2 rounded-r-lg rounded-bl-lg bg-emerald-900/60 text-[#cad2c5] max-w-[85%] self-start">
                🍔 Table 5 has requested the menu!
              </div>
              <div className="p-2 rounded-l-lg rounded-br-lg bg-emerald-800/80 text-white max-w-[85%] ml-auto text-right">
                <p className="font-bold">New Order Confirmed!</p>
                <p>1x AR Truffle Burger</p>
                <p>1x Mint Mocktail</p>
                <p className="text-[7px] text-emerald-300 pt-0.5">Total: $24.50</p>
              </div>
            </div>
          </motion.div>

          {/* Abstract 3D AR Shape decoration floating in background */}
          <div className="absolute right-[20%] bottom-[15%] w-16 h-16 bg-[#84a98c]/10 border border-[#84a98c]/30 rounded-lg blur-[2px] rotate-12 animate-spin-slow pointer-events-none" 
               style={{ animationDuration: '12s' }} />

        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectSection;
