import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiFolder } from 'react-icons/fi';
import AnimatedText from './AnimatedText';

const projects = [
  {
    title: "Lumière — AR Menu",
    desc: "A premium WebXR restaurant menu platform mapping high-fidelity culinary assets into 3D environments.",
    tech: ["React", "Three.js", "WebXR", "R3F"],
    link: "https://restaurant-ar-menu-fawn.vercel.app/"
  },
  {
    title: "ETA Follow-Up Portal",
    desc: "A real-time administrative manager dashboard built to track shipment progress and logistics operations.",
    tech: ["React.js", "Firebase Realtime DB", "Vite"],
    link: "https://eta-dashboard-three.vercel.app/"
  },
  {
    title: "Export Cost Calculator",
    desc: "A price computation assistant calculating shipping overheads, customs duties, margins, and taxes.",
    tech: ["React", "Vite", "Tailwind CSS", "Vanilla CSS"],
    link: "https://cost-calculator-vert.vercel.app/"
  },
  {
    title: "EverFresh Export Portal",
    desc: "A bespoke commercial export gateway designed for managing wholesale trade pipelines and inventory tracking.",
    tech: ["React", "Vite", "Node.js", "Tailwind"],
    link: "#"
  }
];

const SelectedWorkSection = () => {
  return (
    <section 
      id="selected-work-section"
      className="selected-work-section"
    >
      {/* Background ambient lighting */}
      <div className="selected-work-glow-orb-1" />
      <div className="selected-work-glow-orb-2" />

      <div className="selected-work-content">
        
        {/* Section title */}
        <div className="selected-work-title-wrap">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="selected-work-label-wrap"
          >
            <span className="selected-work-label-line" />
            <span className="selected-work-label-text">
              SECTION 05 // PORTFOLIO
            </span>
          </motion.div>
          
          <h2 className="selected-work-title">
            <AnimatedText text="Selected Work" type="word" delay={0.1} />
          </h2>
        </div>

        {/* Projects Cards Container */}
        <div className="selected-work-grid">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="selected-work-card"
            >
              {/* Card content */}
              <div className="selected-work-card-info">
                {/* Header Icon */}
                <div className="selected-work-card-header">
                  <FiFolder className="selected-work-card-folder" />
                  <FiExternalLink className="selected-work-card-link-icon" />
                </div>

                <div className="selected-work-card-text">
                  <h3 className="selected-work-card-title">
                    {project.title}
                  </h3>
                  <p className="selected-work-card-desc">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Technologies list */}
              <div className="selected-work-card-techs">
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="selected-work-card-tech"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Custom border lighting line */}
              <div className="selected-work-card-border-v" />
              <div className="selected-work-card-border-h" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedWorkSection;
