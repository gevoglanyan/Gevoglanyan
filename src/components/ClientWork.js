import React, { useState } from "react";

const clientProjects = [
  {
    name: "GMG Transportation",
    index: "01",
    tag: "Luxury Booking Platform",
    description:
      "A luxury vehicle booking platform built for a private transportation company, offering a seamless booking experience with real-time routing and pricing.",
    tools: ["React", "Next.js", "Stripe API", "Google Maps API"],
    features: [
      "Google Maps routing, fare estimation, and location autocomplete",
      "Secure Stripe Checkout for online payments",
      "Dynamic multi-step booking with real-time price updates",
      "Filterable vehicle carousels with responsive design",
      "SEO-optimized, fully deployed, mobile-first",
    ],
    link: { text: "Visit Website", href: "https://gmgtransportation.com" },
  },
  {
    name: "iAqua Aquatics",
    index: "02",
    tag: "E-Commerce Store",
    description:
      "An online store designed for aquarium enthusiasts, featuring a clean, modern shopping experience with PayPal integration.",
    tools: ["React", "Next.js", "PayPal API"],
    features: [
      "Category-based product filtering",
      "Persistent cart powered by localStorage and React state",
      "Integrated PayPal Checkout for secure transactions",
      "Fully responsive and accessibility-optimized",
      "Minimal, modern UI with smooth interactions",
    ],
    link: { text: "Visit Store", href: "https://iaquaaquatics.com" },
  },
  {
    name: "Fiori Finti Cupcakes",
    index: "03",
    tag: "E-Commerce Store",
    description:
      "An elegant e-commerce platform for premium artificial flowers and floral arrangements with Stripe payment processing.",
    tools: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Product catalog with detailed descriptions",
      "Shopping cart with real-time price calculations",
      "Secure Stripe payment processing",
      "Responsive design for mobile and desktop",
      "Visually-focused clean interface",
    ],
    link: { text: "Visit Store", href: "https://fiori-finti.vercel.app/" },
  },
  {
    name: "Techmetrica",
    index: "04",
    tag: "Research Platform",
    description:
      "A psychology-driven web platform exploring decision-making and personality through interactive games, with full admin analytics.",
    tools: ["React", "Next.js", "Node.js", "Express.js", "MySQL"],
    features: [
      "Guest login with progress resume",
      "Admin dashboard with per-game analytics and filters",
      "User dashboard with personalized game history",
      "Dynamic questionnaire system",
      "Data export to CSV and JSON",
    ],
    games: ["Try Buy Goodbye", "Game of Drones", "Sensi Bot", "Folk Theories of Phones"],
    link: { text: "Tour Site", href: "https://techmetrica.org" },
  },
];

const ClientWork = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="client-work"
      className="relative py-28 px-8 md:px-16 lg:px-24 bg-[#080808]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 text-xs tracking-[0.3em] font-medium uppercase">
            Client Work
          </span>
        </div>

        <h2
          className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter text-white mb-16"
          style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
        >
          Shipped
          <br />
          <span className="text-white/20">& Live</span>
        </h2>

        <div className="space-y-0">
          {clientProjects.map((project, idx) => (
            <div
              key={project.name}
              className="border-t border-white/[0.06] group"
            >
              <button
                className="w-full text-left py-8 grid grid-cols-[60px_1fr_auto] md:grid-cols-[60px_1fr_160px_auto] gap-4 items-center"
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                <span className="text-white/90 text-xs font-mono">{project.index}</span>
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-200"
                    style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-white/90 text-xs tracking-[0.15em] uppercase mt-1">
                    {project.tag}
                  </p>
                </div>
                <div className="hidden md:flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] text-white/90 border border-white/10 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                  {project.tools.length > 2 && (
                    <span className="text-[10px] text-white/90 border border-white/[0.06] px-2 py-0.5">
                      +{project.tools.length - 2}
                    </span>
                  )}
                </div>
                <span className={`text-white/30 transition-transform duration-300 ${expanded === idx ? 'rotate-45' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              {expanded === idx && (
                <div className="pb-10 pl-[76px] pr-4">
                  <p className="text-white/90 text-sm leading-relaxed mb-8 max-w-xl">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <p className="text-white/90 text-xs tracking-[0.2em] uppercase mb-4">Features</p>
                      <ul className="space-y-2">
                        {project.features.map((f, i) => (
                          <li key={i} className="text-white/90 text-sm flex gap-3">
                            <span className="text-cyan-400 mt-0.5 flex-shrink-0">—</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-white/90 text-xs tracking-[0.2em] uppercase mb-4">Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((t) => (
                            <span key={t} className="text-sm text-white/90 border border-white/10 px-3 py-1">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      {project.games && (
                        <div>
                          <p className="text-white/25 text-xs tracking-[0.2em] uppercase mb-4">Games</p>
                          <div className="flex flex-wrap gap-2">
                            {project.games.map((g) => (
                              <span key={g} className="text-sm text-cyan-400/60 border border-cyan-400/20 px-3 py-1">
                                {g}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-cyan-400 border-b border-cyan-400/40 hover:border-cyan-400 pb-1 transition-colors"
                  >
                    {project.link.text}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  );
};

export default ClientWork;