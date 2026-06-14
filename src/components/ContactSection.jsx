import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import AnimatedText from './AnimatedText';

const contacts = [
  {
    name: "Email",
    value: "harmipagada4@gmail.com",
    url: "mailto:harmipagada4@gmail.com",
    icon: FiMail,
    glow: "rgba(132, 169, 140, 0.12)",
    tooltip: "Send me an email"
  },
  {
    name: "GitHub",
    value: "github.com/harmi_pagada",
    url: "https://github.com/harmi_pagada",
    icon: FiGithub,
    glow: "rgba(82, 121, 111, 0.12)",
    tooltip: "View my code base"
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/harmipagada",
    url: "https://linkedin.com",
    icon: FiLinkedin,
    glow: "rgba(53, 79, 82, 0.18)",
    tooltip: "Connect on LinkedIn"
  }
];

const ContactSection = () => {
  return (
    <section 
      id="contact-section"
      className="relative w-full md:w-screen h-auto md:h-screen flex-shrink-0 flex items-center bg-[#071714] overflow-hidden px-6 md:px-12 lg:px-24 py-20 md:py-0 border-b md:border-b-0 md:border-l border-[#354f52]/10 z-10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-[#354f52]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-[#84a98c]/5 rounded-full blur-[140px] pointer-events-none animate-pulse-soft z-0" />

      <div className="w-full z-10 flex flex-col justify-center space-y-12">
        
        {/* Section Label & Title */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <span className="w-8 h-[1px] bg-[#84a98c]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#84a98c] font-sans">
               CONNECT
            </span>
          </motion.div>
          
          <h2 className="font-morganite text-[clamp(2.5rem,13vw,10rem)] font-black text-[#f8fafc] tracking-wide leading-[0.8] uppercase select-none">
            <AnimatedText text="Let's build something exceptional." type="word" delay={0.1} />
          </h2>
        </div>

        {/* Contact Links Grid (with premium pure CSS tooltips) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 w-full">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                data-tooltip={contact.tooltip}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative flex items-center justify-between p-4 sm:p-8 rounded-2xl bg-[#071714]/30 border border-[#354f52]/20 hover:border-[#84a98c]/50 hover:bg-[#071714]/50 transition-all duration-500 overflow-hidden font-sans"
              >
                {/* Custom inner glow */}
                <div 
                  className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: contact.glow }}
                />

                <div className="flex items-center space-x-4">
                  <div className="p-3.5 rounded-xl bg-[#84a98c]/10 text-[#84a98c] group-hover:bg-[#84a98c] group-hover:text-[#071714] transition-all duration-500">
                    <Icon className="text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#cad2c5]/40 group-hover:text-[#84a98c]/70 transition-colors duration-300">
                      {contact.name}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#f8fafc] group-hover:text-[#f8fafc]/90 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </div>

                <div className="p-2 text-[#cad2c5]/40 group-hover:text-[#84a98c] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <FiArrowUpRight className="text-xl" />
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>

      {/* Desktop footer */}
      <footer className="absolute bottom-6 left-0 right-0 text-center text-[10px] text-[#cad2c5]/35 select-none hidden md:block">
        <p>© {new Date().getFullYear()} Harmi Pagada. Crafted with Passion & Precision.</p>
      </footer>
    </section>
  );
};

export default ContactSection;
