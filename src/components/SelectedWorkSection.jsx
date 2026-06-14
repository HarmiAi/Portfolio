import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiFolder } from 'react-icons/fi';
import AnimatedText from './AnimatedText';

const projects = [
  {
    title: "Restaurant AR Menu",
    desc: "A client-facing WebXR platform mapping restaurant assets into 3D environments with zero application installs required.",
    tech: ["React", "Three.js", "WebXR", "Node.js"],
    link: "#"
  },
  {
    title: "Firebase Dashboard",
    desc: "Real-time administrative operations utility showing connection metrics, databases syncs, and authentication flows.",
    tech: ["React", "Firebase", "Chart.js", "Tailwind"],
    link: "#"
  },
  {
    title: "Redux Finance Application",
    desc: "A personal ledger platform managing accounting ledgers, transaction records, and real-time conversion rates.",
    tech: ["React", "Redux Toolkit", "Express", "MongoDB"],
    link: "#"
  },
  {
    title: "E-Commerce Platform",
    desc: "Modern digital marketplace including custom cart pipelines, inventory models, Stripe transactions, and webhooks.",
    tech: ["Vite", "Stripe API", "Node.js", "Tailwind CSS"],
    link: "#"
  }
];

const SelectedWorkSection = () => {
  return (
    <section 
      id="selected-work-section"
      className="relative w-full md:w-screen h-auto md:h-screen flex-shrink-0 flex items-center bg-[#071714] overflow-hidden px-6 md:px-12 lg:px-24 py-20 md:py-0 border-l border-[#354f52]/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-[#52796f]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-[#354f52]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full z-10 space-y-8 md:space-y-12">
        
        {/* Section title */}
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <span className="w-8 h-[1px] bg-[#84a98c]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#84a98c]">
              SECTION 05 // PORTFOLIO
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#f8fafc] tracking-tight">
            <AnimatedText text="Selected Work" type="word" delay={0.1} />
          </h2>
        </div>

        {/* Projects Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl pt-4">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#071714]/30 border border-[#354f52]/20 hover:border-[#84a98c]/40 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              style={{
                willChange: "transform, border-color"
              }}
            >
              {/* Card content */}
              <div className="space-y-5">
                {/* Header Icon */}
                <div className="flex items-center justify-between text-[#84a98c]/60 group-hover:text-[#84a98c] transition-colors duration-300">
                  <FiFolder className="text-2xl sm:text-3xl" />
                  <FiExternalLink className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] tracking-tight group-hover:text-[#84a98c] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#cad2c5]/75 leading-relaxed font-light">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Technologies list */}
              <div className="flex flex-wrap gap-1.5 pt-6 mt-auto">
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-[#354f52]/20 border border-[#354f52]/40 text-[#cad2c5]/90"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Custom border lighting line */}
              <div className="absolute top-0 right-0 h-full w-[1.5px] bg-[#84a98c] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#84a98c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedWorkSection;
