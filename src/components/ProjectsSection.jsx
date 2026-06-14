import React from 'react';
import { FiExternalLink, FiGithub, FiCheck } from 'react-icons/fi';
import PremiumButton from './PremiumButton';

const projectsData = [
  {
    num: "01",
    title: "Restaurant AR Menu Platform",
    desc: "Designed and developed a restaurant digitization platform featuring interactive ordering workflows and immersive WebXR concepts. Customers can view meals in 3D, customize toppings, and send orders directly.",
    tech: ["React", "Three.js", "MongoDB", "Node.js", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["WhatsApp Ordering", "Restaurant Dashboard", "Full Stack Architecture", "Render + Vercel Deployment"],
    mockupType: "restaurant"
  },
  {
    num: "02",
    title: "Firebase Dashboard",
    desc: "Real-time administrative operations utility showing connection metrics, database sync states, live active sessions, and detailed analytics graphs.",
    tech: ["React.js", "Firebase Auth", "Realtime DB", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["Live Session Sync", "Security Rules Auditor", "Interactive Charts", "Responsive Control Panel"],
    mockupType: "dashboard"
  },
  {
    num: "03",
    title: "Redux Finance Application",
    desc: "A personal ledger platform managing accounting transactions, checking balances, budget allocations, and currency conversion trackers.",
    tech: ["React", "Redux Toolkit", "Express.js", "MongoDB", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["Redux State Cache", "Transaction Ledger", "Exchange Rates API", "Expense Category Audits"],
    mockupType: "finance"
  },
  {
    num: "04",
    title: "E-Commerce Platform",
    desc: "Modern digital marketplace featuring dynamic inventory feeds, customized cart pipelines, secure checkout systems, and Stripe payment webhooks.",
    tech: ["Vite", "Stripe API", "Node.js", "Tailwind CSS", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["Stripe Checkout", "Admin Inventory Feed", "Automatic Webhooks", "Session Cart Cache"],
    mockupType: "ecommerce"
  }
];

const ProjectsSection = () => {
  return (
    <section 
      id="projects-section"
      className="relative w-full md:w-screen h-auto md:h-screen flex-shrink-0 bg-[#0b0f14] overflow-hidden border-l border-[#354f52]/10 z-10"
    >
      {/* Mobile layout: stacked view */}
      <div className="block md:hidden px-6 py-20 space-y-20">
        <div className="space-y-2 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#84a98c] font-sans">
            SECTION 04 // PROJECTS
          </span>
          <h2 className="font-morganite text-5xl font-black text-[#f8fafc] uppercase">Featured Work</h2>
        </div>

        {projectsData.map((project, index) => (
          <div key={index} className="space-y-6 border-b border-[#354f52]/20 pb-12">
            <div className="space-y-4 font-sans">
              <span className="text-5xl font-black text-[#84a98c]/35 font-mono">{project.num}</span>
              <h3 className="text-2xl font-bold text-[#f8fafc]">{project.title}</h3>
              <p className="text-sm text-[#cad2c5]/80 leading-relaxed font-light">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#354f52]/20 border border-[#354f52]/30 text-[#cad2c5]">{t}</span>
                ))}
              </div>
            </div>

            <div className="w-full h-[220px] rounded-xl bg-[#0f1720] border border-[#354f52]/20 flex items-center justify-center p-4">
              {project.mockupType === "restaurant" && <div className="text-[#84a98c] text-xs font-mono">Restaurant AR Platform Mockup</div>}
              {project.mockupType === "dashboard" && <div className="text-[#84a98c] text-xs font-mono">Firebase Sync Graph</div>}
              {project.mockupType === "finance" && <div className="text-[#84a98c] text-xs font-mono">Redux Financial Charts</div>}
              {project.mockupType === "ecommerce" && <div className="text-[#84a98c] text-xs font-mono">Stripe Checkout Simulator</div>}
            </div>

            <div className="flex space-x-4">
              <PremiumButton href={project.liveUrl} icon={FiExternalLink}>Live Demo</PremiumButton>
              <PremiumButton href={project.githubUrl} icon={FiGithub}>GitHub</PremiumButton>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop layout: Pinned absolute stacked slides */}
      <div className="hidden md:block w-full h-full relative">
        {/* Center fixed vertical slide progress indicator */}
        <div className="vertical-indicator top-[38%] font-mono text-sm">
          <span className="proj-num-01 text-[#84a98c] transition-all duration-300">01</span>
          <div className="indicator-line" />
          <span className="proj-num-02 text-[#354f52] opacity-35 transition-all duration-300">02</span>
          <div className="indicator-line" />
          <span className="proj-num-03 text-[#354f52] opacity-35 transition-all duration-300">03</span>
          <div className="indicator-line" />
          <span className="proj-num-04 text-[#354f52] opacity-35 transition-all duration-300">04</span>
        </div>

        {/* Slides list */}
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`project-slide project-slide-${index} absolute inset-0 w-full h-full px-12 lg:px-24 grid grid-cols-12 gap-12 items-center`}
            style={{
              opacity: index === 0 ? 1 : 0,
              pointerEvents: index === 0 ? 'auto' : 'none',
              willChange: 'opacity'
            }}
          >
            {/* Left Column: Info (5 columns) */}
            <div className="col-span-5 flex flex-col justify-center space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#84a98c] tracking-[0.2em] uppercase block">
                  PROJECT {project.num}
                </span>
                
                <h3 className="Morganite-heading text-[clamp(3.5rem,8vw,7rem)] uppercase select-none">
                  {project.title}
                </h3>
              </div>

              <p className="body-text text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Features list */}
              <div className="space-y-1 text-xs text-[#cad2c5] font-light font-sans">
                {project.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-2">
                    <FiCheck className="text-[#84a98c] text-[10px]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx}
                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#354f52]/20 border border-[#354f52]/40 text-[#cad2c5]/90"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons with tooltips */}
              <div className="flex space-x-4 pt-3">
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
            <div className="col-span-1" />

            {/* Right Column: Visual Mockup (6 columns) */}
            <div className="col-span-6 flex items-center justify-center">
              <div className="w-[90%] xl:w-[85%] aspect-[4/3] rounded-2xl border border-[#354f52]/40 bg-[#0f1720]/80 shadow-2xl backdrop-blur-md relative overflow-hidden flex items-center justify-center p-6 hover:border-[#84a98c]/35 transition-all duration-500">
                
                {project.mockupType === "restaurant" && (
                  <div className="w-full h-full relative">
                    <div className="absolute left-0 bottom-0 w-[60%] p-4 rounded-xl bg-[#0b0f14]/80 border border-[#354f52]/30 space-y-3 z-10">
                      <div className="flex items-center justify-between text-[10px] font-mono border-b border-[#354f52]/20 pb-1.5 text-[#cad2c5]/40 font-sans">
                        <span>sales_db.sql</span>
                        <span className="text-[#84a98c] font-bold font-sans">ACTIVE</span>
                      </div>
                      <div className="flex items-end justify-between h-14 font-sans">
                        <div className="w-[15%] h-[20%] bg-[#354f52]/40 rounded-t-sm" />
                        <div className="w-[15%] h-[60%] bg-[#52796f]/40 rounded-t-sm" />
                        <div className="w-[15%] h-[90%] bg-[#84a98c] rounded-t-sm" />
                        <div className="w-[15%] h-[40%] bg-[#52796f]/40 rounded-t-sm" />
                      </div>
                    </div>

                    <div className="absolute right-0 top-0 w-[55%] p-3 rounded-xl bg-emerald-950/70 border border-emerald-800/40 space-y-1.5 z-20 rotate-3">
                      <p className="text-[9px] font-bold text-white font-sans leading-none">WhatsApp Order Bot</p>
                      <p className="text-[8px] text-[#cad2c5] leading-relaxed font-sans">Burger + Drink sent to kitchen. Table 4.</p>
                      <div className="w-full text-right text-[7px] text-emerald-400 font-mono">14:02</div>
                    </div>
                  </div>
                )}

                {project.mockupType === "dashboard" && (
                  <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-[#354f52]/30 pb-2">
                      <span className="text-[#cad2c5]/40">// firebase_console</span>
                      <span className="text-[#84a98c]">ONLINE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 my-auto">
                      <div className="p-3 rounded-lg bg-[#0b0f14]/80 border border-[#354f52]/20">
                        <p className="text-[9px] text-[#cad2c5]/40 uppercase font-sans">Sessions</p>
                        <p className="text-base font-bold text-[#f8fafc] mt-1 font-sans">1,402</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[#0b0f14]/80 border border-[#354f52]/20">
                        <p className="text-[9px] text-[#cad2c5]/40 uppercase font-sans">DB Sync</p>
                        <p className="text-base font-bold text-[#84a98c] mt-1 font-sans">0.4ms</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[#0b0f14]/80 border border-[#354f52]/20">
                        <p className="text-[9px] text-[#cad2c5]/40 uppercase font-sans">CPU Load</p>
                        <p className="text-base font-bold text-[#f8fafc] mt-1 font-sans">12%</p>
                      </div>
                    </div>
                    <div className="w-full h-12 border border-[#354f52]/20 bg-[#0b0f14]/50 rounded flex items-center justify-center text-[10px] text-[#cad2c5]/50 font-sans">
                      Sync Status: All security rules audited.
                    </div>
                  </div>
                )}

                {project.mockupType === "finance" && (
                  <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#cad2c5]/40">// accounting_ledger</span>
                      <span className="text-[#cad2c5] font-bold font-sans">$12,480.00</span>
                    </div>
                    <div className="space-y-2.5 my-auto">
                      <div className="flex items-center justify-between text-[10px] border-b border-[#354f52]/20 pb-1">
                        <span className="text-[#cad2c5] font-sans">Salary Credited</span>
                        <span className="text-[#84a98c] font-sans">+$3,200.00</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] border-b border-[#354f52]/20 pb-1">
                        <span className="text-[#cad2c5] font-sans">Stripe Checkout</span>
                        <span className="text-[#84a98c] font-sans">+$150.00</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] border-b border-[#354f52]/20 pb-1">
                        <span className="text-[#cad2c5] font-sans">AWS Cloud hosting</span>
                        <span className="text-red-400 font-sans">-$42.00</span>
                      </div>
                    </div>
                    <div className="p-2 rounded bg-emerald-950/20 border border-emerald-800/20 text-[10px] text-emerald-400 font-sans">
                      Redux Cache synced. Rates: 1 USD = 0.92 EUR
                    </div>
                  </div>
                )}

                {project.mockupType === "ecommerce" && (
                  <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-[#354f52]/30 pb-2">
                      <span className="text-[#cad2c5]/40">// shop_checkout</span>
                      <span className="text-[#84a98c] font-bold font-sans">STRIPE</span>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0b0f14]/80 border border-[#354f52]/20 space-y-3 my-auto">
                      <div className="flex items-center justify-between text-[10px] font-sans">
                        <span className="text-[#cad2c5]">Subtotal</span>
                        <span>$140.00</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-sans">
                        <span className="text-[#cad2c5]">Taxes</span>
                        <span>$11.20</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-bold border-t border-[#354f52]/20 pt-2 text-[#84a98c] font-sans">
                        <span>Total Due</span>
                        <span>$151.20</span>
                      </div>
                    </div>
                    <div className="w-full py-2 bg-[#84a98c] text-[#0b0f14] font-bold rounded text-center text-[10px] hover:bg-[#84a98c]/90 transition-colors duration-300 font-sans">
                      SECURE CHECKOUT VIA STRIPE
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
