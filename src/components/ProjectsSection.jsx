import React from 'react';
import { FiExternalLink, FiGithub, FiCheck } from 'react-icons/fi';
import PremiumButton from './PremiumButton';

const projectsData = [
  {
    num: "01",
    title: "Lumière — AR Menu",
    desc: "A premium WebXR restaurant menu platform mapping high-fidelity culinary assets into 3D environments. Customers preview menu items in augmented reality, customize toppings dynamically, and submit orders directly.",
    tech: ["React", "Three.js", "React Three Fiber", "WebXR", "Rolldown"],
    liveUrl: "https://restaurant-ar-menu-fawn.vercel.app/",
    githubUrl: "https://github.com/HarmiAi/restaurant-ar-menu",
    features: ["Lumière Premium AR", "React Three Fiber", "3D Dish Previews", "Interactive Customizer"],
    mockupType: "restaurant"
  },
  {
    num: "02",
    title: "ETA Follow-Up Portal",
    desc: "A real-time administrative manager dashboard built to track shipment progress, compute ETAs, and streamline logistics operations with dynamic messaging interfaces.",
    tech: ["React.js", "Firebase Realtime DB", "Bootstrap", "Vite"],
    liveUrl: "https://eta-dashboard-three.vercel.app/",
    githubUrl: "https://github.com/HarmiAi/ETA-Dashboard",
    features: ["Real-time Status Sync", "Bootstrap Interface", "Interactive ETA Feeds", "Manager Portal Control"],
    mockupType: "dashboard"
  },
  {
    num: "03",
    title: "Export Cost Calculator",
    desc: "A robust price computation assistant for international trade. Businesses calculate shipping overheads, customs duties, taxes, and net margin profit percentages dynamically.",
    tech: ["React", "Vite", "Vanilla CSS", "Tailwind CSS"],
    liveUrl: "https://cost-calculator-vert.vercel.app/",
    githubUrl: "https://github.com/HarmiAi/Export-chatbot",
    features: ["Dynamic Duty Computations", "Custom Margins Breakdowns", "Export Assistant logic", "PDF Summary Exports"],
    mockupType: "finance"
  }
];

const ProjectsSection = () => {
  return (
    <section 
      id="projects-section"
      className="projects-section"
    >
      {/* Mobile layout: stacked view */}
      <div className="projects-mobile-wrap">
        <div className="services-mobile-header">
          <span className="services-mobile-eyebrow">
              PROJECTS
          </span>
          <h2 className="services-mobile-title">Featured Work</h2>
        </div>

        {projectsData.map((project, index) => (
          <div key={index} className="projects-mobile-card">
            <div className="projects-mobile-card-info" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span className="projects-mobile-card-num">{project.num}</span>
              <h3 className="services-mobile-card-title">{project.title}</h3>
              <p className="services-mobile-card-desc">{project.desc}</p>
              
              <div className="featured-tags-row">
                {project.tech.map((t, i) => (
                  <span key={i} className="featured-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="projects-mobile-card-mockup">
              {project.mockupType === "restaurant" && <div className="text-[#84a98c] text-xs font-mono">Restaurant AR Platform Mockup</div>}
              {project.mockupType === "dashboard" && <div className="text-[#84a98c] text-xs font-mono">Firebase Sync Graph</div>}
              {project.mockupType === "finance" && <div className="text-[#84a98c] text-xs font-mono">Cost Calculator Pricing Ledger</div>}
            </div>

            <div className="featured-ctas">
              <PremiumButton href={project.liveUrl} icon={FiExternalLink} target="_blank" rel="noopener noreferrer" >Live Demo</PremiumButton>
              <PremiumButton href={project.githubUrl} icon={FiGithub} target="_blank" rel="noopener noreferrer" >GitHub</PremiumButton>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop layout: Pinned absolute stacked slides */}
      <div className="projects-desktop-wrap">
        {/* Center fixed vertical slide progress indicator */}
        <div className="vertical-indicator">
          <span className="proj-indicator-num proj-num-01 active">01</span>
          <div className="indicator-line" />
          <span className="proj-indicator-num proj-num-02">02</span>
          <div className="indicator-line" />
          <span className="proj-indicator-num proj-num-03">03</span>
        </div>

        {/* Slides list */}
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`project-slide project-slide-${index}`}
            style={{
              opacity: index === 0 ? 1 : 0,
              pointerEvents: index === 0 ? 'auto' : 'none',
              willChange: 'opacity'
            }}
          >
            {/* Left Column: Info (5 columns) */}
            <div className="project-left-col">
              <div className="featured-title-wrap">
                <span className="featured-label" style={{ marginBottom: '1rem'}}>
                  PROJECT {project.num}
                </span>
                
                <h3 className="featured-title">
                  {project.title}
                </h3>
              </div>

              <p className="featured-desc">
                {project.desc}
              </p>

              {/* Features list */}
              <div className="featured-list">
                {project.features.map((feat, fIdx) => (
                  <div key={fIdx} className="featured-list-item">
                    <FiCheck className="text-[#84a98c] text-[10px]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="featured-tags-row">
                {project.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx}
                    className="featured-tag"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons with tooltips */}
              <div className="featured-ctas">
                <PremiumButton 
                  href={project.liveUrl} 
                  icon={FiExternalLink}
                  data-tooltip="View Live Site"
                >
                  Live Demo
                </PremiumButton>
                <PremiumButton 
                  href={project.githubUrl} 
                  icon={FiGithub}
                  data-tooltip="View Git Repository"
                >
                  GitHub
                </PremiumButton>
              </div>
            </div>

            {/* Spacer */}
            <div style={{ gridColumn: 'span 1' }} />

            {/* Right Column: Visual Mockup (6 columns) */}
            <div className="project-right-col">
              <div className="project-mockup">
                
                {project.mockupType === "restaurant" && (
                  <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <div className="project-mock-card-sales">
                      <div className="project-mock-ledger-row">
                        <span style={{ color: 'rgba(202, 210, 197, 0.4)', fontFamily: 'var(--font-sans)', fontSize: '10px' }}>sales_db.sql</span>
                        <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontFamily: 'var(--font-sans)', fontSize: '10px' }}>ACTIVE</span>
                      </div>
                      <div className="featured-bar-graph" style={{ height: '3.5rem' }}>
                        <div className="featured-bar dark" style={{ height: '20%' }} />
                        <div className="featured-bar secondary" style={{ height: '60%' }} />
                        <div className="featured-bar primary" style={{ height: '90%' }} />
                        <div className="featured-bar secondary" style={{ height: '40%' }} />
                      </div>
                    </div>

                    <div className="project-mock-bot-msg">
                      <p style={{ fontSize: '9px', fontWeight: 'bold', color: 'white', fontFamily: 'var(--font-sans)', lineHeight: '1' }}>WhatsApp Order Bot</p>
                      <p style={{ fontSize: '8px', color: '#cad2c5', lineHeight: '1.4', fontFamily: 'var(--font-sans)' }}>Burger + Drink sent to kitchen. Table 4.</p>
                      <div style={{ width: '100%', textAlign: 'right', fontSize: '7px', color: '#34d399', fontFamily: 'monospace' }}>14:02</div>
                    </div>
                  </div>
                )}

                {project.mockupType === "dashboard" && (
                  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(53, 79, 82, 0.3)', paddingBottom: '0.5rem' }}>
                      <span style={{ color: 'rgba(202, 210, 197, 0.4)' }}>// firebase_console</span>
                      <span style={{ color: 'var(--color-accent)' }}>ONLINE</span>
                    </div>
                    <div className="featured-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', margin: 'auto 0' }}>
                      <div className="project-mock-console-card" style={{ padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: 'rgba(11, 15, 20, 0.8)', border: '1px solid rgba(53, 79, 82, 0.2)' }}>
                        <p style={{ fontSize: '9px', color: 'rgba(202, 210, 197, 0.4)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>Sessions</p>
                        <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#f8fafc', marginTop: '0.25rem', fontFamily: 'var(--font-sans)' }}>1,402</p>
                      </div>
                      <div className="project-mock-console-card" style={{ padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: 'rgba(11, 15, 20, 0.8)', border: '1px solid rgba(53, 79, 82, 0.2)' }}>
                        <p style={{ fontSize: '9px', color: 'rgba(202, 210, 197, 0.4)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>DB Sync</p>
                        <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--color-accent)', marginTop: '0.25rem', fontFamily: 'var(--font-sans)' }}>0.4ms</p>
                      </div>
                    </div>
                    <div style={{ width: '100%', padding: '0.5rem 0', border: '1px solid rgba(53, 79, 82, 0.2)', backgroundColor: 'rgba(11, 15, 20, 0.5)', borderRadius: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'rgba(202, 210, 197, 0.5)', fontFamily: 'var(--font-sans)' }}>
                      Sync Status: Real-time ETA tracking active.
                    </div>
                  </div>
                )}

                {project.mockupType === "finance" && (
                  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ color: 'rgba(202, 210, 197, 0.4)' }}>// cost_calculator</span>
                      <span style={{ color: '#cad2c5', fontWeight: 'bold', fontFamily: 'var(--font-sans)' }}>EXPORT PRICING</span>
                    </div>
                    <div className="project-ledger-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: 'auto 0' }}>
                      <div className="project-mock-ledger-row">
                        <span style={{ color: '#cad2c5', fontFamily: 'var(--font-sans)' }}>Shipping Overhead</span>
                        <span style={{ color: '#f87171', fontFamily: 'var(--font-sans)' }}>-$3,200.00</span>
                      </div>
                      <div className="project-mock-ledger-row">
                        <span style={{ color: '#cad2c5', fontFamily: 'var(--font-sans)' }}>Customs Duties</span>
                        <span style={{ color: '#f87171', fontFamily: 'var(--font-sans)' }}>-$1,150.00</span>
                      </div>
                      <div className="project-mock-ledger-row">
                        <span style={{ color: '#cad2c5', fontFamily: 'var(--font-sans)' }}>Net Margin Profit</span>
                        <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-sans)' }}>+$8,130.00</span>
                      </div>
                    </div>
                    <div style={{ padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: 'rgba(6, 78, 59, 0.2)', border: '1px solid rgba(6, 120, 87, 0.2)', fontSize: '10px', color: '#34d399', fontFamily: 'var(--font-sans)' }}>
                      Pricing engine synced. Rates: 1 USD = 0.92 EUR
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
