import React, { useState } from "react";

const projects = [
  {
    id: "two-touch",
    name: "Two Touch",
    index: "01",
    tag: "Sports App",
    status: "In Development",
    description:
      "A real-world soccer companion app that tracks and gamifies 1v1 and small-sided soccer challenges with an ELO-based ranking system.",
    tools: ["React", "Firebase Auth", "Firestore"],
    features: [
      "Friends system with search, add, and remove",
      "Global leaderboards (weekly, monthly, all-time)",
      "Match logging across multiple game modes",
      "ELO-based ranking with win/loss tracking",
    ],
    categories: [
      { title: "Modes", items: ["Penalty Shootouts", "Crossbar Challenges", "Freekicks", "Juggling", "Corners"] },
      { title: "Games", items: ["1v1s", "3v3s", "5v5s", "6v6s", "11v11s"] },
    ],
    links: [
      { text: "Website", href: "https://twotouchgame.com" },
      { text: "GitHub", href: "https://github.com/yourusername/two-touch" },
    ],
  },
  {
    name: "Gym Tracker Pro",
    index: "02",
    tag: "Fitness Web App",
    description:
      "A comprehensive fitness tracking app for logging workouts, monitoring progress, and tracking personal records.",
    tools: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Customizable workout routines and exercise libraries",
      "Progress tracking with visual charts",
      "Personal record (PR) tracking",
      "Workout history with detailed session logs",
      "User auth and personalized dashboards",
    ],
    links: [
      { text: "Website", href: "https://gym-tracker-ten-nu.vercel.app/" },
      { text: "GitHub", href: "https://github.com/gevoglanyan/GymTracker" },
    ],
  },
  {
    name: "Tarkov Quest Tracker",
    index: "03",
    tag: "Gaming Tool",
    description:
      "A quest tracking tool for Escape from Tarkov — manage and track in-game quests, dependencies, and unlock requirements.",
    tools: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Complete quest database with objectives and rewards",
      "Progress tracking with save/load",
      "Filter by trader, map, and completion status",
      "Quest dependency visualization",
    ],
    links: [
      { text: "Website", href: "https://tarkov-quest-tracker.vercel.app/" },
      { text: "GitHub", href: "https://github.com/gevoglanyan/TarkovTracker" },
    ],
  },
  {
    name: "Zavala",
    index: "04",
    tag: "Discord Bot",
    description:
      "An AI-powered Discord bot bringing intelligent conversation and assistance to servers using advanced language models.",
    tools: ["Python", "Discord.py", "OpenAI API", "LangChain"],
    features: [
      "Natural language conversation with context awareness",
      "Multi-server support with per-server configs",
      "Slash command support",
      "Customizable personality and response styles",
      "Message history for contextual responses",
    ],
    links: [{ text: "GitHub", href: "https://github.com/gevoglanyan/Zavala" }],
  },
  {
    name: "Better Spotify",
    index: "05",
    tag: "Discord Bot",
    description:
      "A feature-rich Discord music bot with high-quality playback, queue management, and playlist support.",
    tools: ["Node.js", "Discord.js", "YouTube API", "FFmpeg"],
    features: [
      "YouTube search and play",
      "Queue management with skip, pause, resume",
      "Playlist support with save/load",
      "Volume control and audio filters",
      "Now playing display",
    ],
    links: [{ text: "GitHub", href: "https://github.com/gevoglanyan/BetterSpotify" }],
  },
  {
    name: "Echo",
    index: "06",
    tag: "Web App",
    description:
      "Generates realistic mock conversations across iMessage, WhatsApp, Instagram, and Twitter/X with authentic platform aesthetics.",
    tools: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Multiple platform interfaces",
      "Customizable sender and recipient names",
      "Real-time conversation builder with timestamps",
      "Export as images",
      "Authentic platform-matched design",
    ],
    links: [
      { text: "Website", href: "https://echo-zeta-jet.vercel.app/" },
      { text: "GitHub", href: "https://github.com/gevoglanyan/Echo" },
    ],
  },
  {
    name: "Sasna Tsrer",
    index: "07",
    tag: "Cultural Platform",
    description:
      "A multilingual cultural showcase platform celebrating Armenian heritage, optimized for performance and localization.",
    tools: ["React", "Next.js"],
    features: [
      "Static site generation for fast performance",
      "Lazy-loaded assets and responsive typography",
      "Modular Tailwind architecture",
      "Localization-ready for multilingual content",
    ],
    links: [{ text: "Website", href: "https://sasnatsrer.vercel.app/" }],
  },
  {
    name: "Binary Bros Hotel",
    index: "08",
    tag: "Desktop App",
    description:
      "A comprehensive desktop hotel management system for administrators and guests built in Java.",
    tools: ["Java", "JavaFX", "MySQL"],
    features: [
      "Guest login and session persistence",
      "Admin dashboard with advanced search and filtering",
      "Booking and history management",
      "Dynamic check-in with post-stay surveys",
    ],
    links: [{ text: "GitHub", href: "https://github.com/gevoglanyan/BinaryBrosHotel" }],
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-28 px-8 md:px-16 lg:px-24 bg-[#060606]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 text-xs tracking-[0.3em] font-medium uppercase">
            Projects
          </span>
        </div>

        <h2
          className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter text-white mb-16"
          style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
        >
          Personal
          <br />
          <span className="text-white/20">Builds</span>
        </h2>

        <div className="space-y-0">
          {projects.map((project, idx) => (
            <div key={project.name} id={project.id} className="border-t border-white/[0.06] group">
              <button
                className="w-full text-left py-8 grid grid-cols-[60px_1fr_auto] md:grid-cols-[60px_1fr_140px_auto] gap-4 items-center"
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                <span className="text-white/90 text-xs font-mono">{project.index}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3
                      className="text-2xl md:text-3xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-200"
                      style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
                    >
                      {project.name}
                    </h3>
                    {project.status && (
                      <span className="text-[10px] px-2 py-0.5 bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 tracking-wide hidden sm:inline">
                        {project.status}
                      </span>
                    )}
                  </div>
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
                <span className={`text-white/30 flex-shrink-0 transition-transform duration-300 ${expanded === idx ? 'rotate-45' : ''}`}>
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
                      {project.categories && (
                        <div className="space-y-4">
                          {project.categories.map((cat) => (
                            <div key={cat.title}>
                              <p className="text-white/ text-xs tracking-[0.2em] uppercase mb-2">{cat.title}</p>
                              <div className="flex flex-wrap gap-2">
                                {cat.items.map((item) => (
                                  <span key={item} className="text-xs text-cyan-400/60 border border-cyan-400/20 px-2 py-1">
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-6">
                    {project.links.map((link) => (
                      <a
                        key={link.text}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-cyan-400 border-b border-cyan-400/40 hover:border-cyan-400 pb-1 transition-colors"
                      >
                        {link.text}
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
        
        <br /> 
        
        <p className="text-white/90 text-xs tracking-[0.2em] uppercase mt-12">
          More projects coming soon — check back.
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  );
};

export default Projects;