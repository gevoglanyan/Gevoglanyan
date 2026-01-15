import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "two-touch",
    name: "Two Touch",
    description:
      "is a real-world soccer companion app that tracks and gamifies 1v1 and small-sided soccer challenges.",
    tools: ["React", "Firebase Auth", "Firestore"],
    features: [
      "Friends system with search, add, and remove functionality",
      "Global leaderboards (weekly, monthly, and all-time)",
      "Match logging across multiple game modes and formats",
      "ELO-based ranking system with win/loss tracking",
    ],
    categories: [
      {
        title: "Modes",
        challenges: [
          "Penalty Shootouts",
          "Crossbar Challenges",
          "Freekicks",
          "Juggling Challenge",
          "Corners Challenge",
        ],
      },
      {
        title: "Games",
        games: [
          "1v1s",
          "3v3s",
          "5v5s",
          "6v6s",
          "11v11s",
        ],
      },
    ],
    link: {
      text: "View Project",
      href: "https://twotouchgame.com",
    },
  },
  {
    name: "Gym Tracker Pro",
    description:
      "is a comprehensive fitness tracking application that helps users log workouts, monitor progress, and achieve their fitness goals.",
    tools: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Customizable workout routines and exercise libraries",
      "Progress tracking with visual charts and statistics",
      "Personal record (PR) tracking across all exercises",
      "Workout history with detailed session logs",
      "User authentication and personalized dashboards",
    ],
    link: {
      text: "View Project",
      href: "https://github.com/gevoglanyan/GymTracker",
    },
  },
  {
    name: "Zavala - Dicord LLM Bot",
    description:
      "is an AI-powered Discord bot that brings intelligent conversation and assistance to Discord servers using advanced language models.",
    tools: ["Python", "Discord.py", "OpenAI API", "LangChain"],
    features: [
      "Natural language conversation with context awareness",
      "Multi-server support with per-server configurations",
      "Command-based interactions and slash command support",
      "Customizable personality and response styles",
      "Message history tracking for contextual responses",
    ],
    link: {
      text: "View Project",
      href: "https://github.com/gevoglanyan/Zavala",
    },
  },
  {
    name: "Better Spotify - Discord Music Bot",
    description:
      "is a feature-rich Discord music bot that brings high-quality music playback and playlist management to Discord servers.",
    tools: ["Node.js", "Discord.js", "YouTube API", "FFmpeg"],
    features: [
      "Play music from YouTube with search functionality",
      "Queue management with skip, pause, and resume controls",
      "Playlist support with save and load capabilities",
      "Volume control and audio filters",
      "Now playing display with song information",
    ],
    link: {
      text: "View Project",
      href: "https://github.com/gevoglanyan/BetterSpotify",
    },
  },
  {
    name: "Echo - Mock Conversation",
    description:
      "is a web application that generates realistic mock conversations between two people across various popular messaging platforms.",
    tools: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Multiple platform interfaces (iMessage, WhatsApp, Instagram, Twitter/X)",
      "Customizable sender and recipient names",
      "Real-time conversation builder with timestamps",
      "Export conversations as images",
      "Responsive design matching authentic platform aesthetics",
    ],
    link: {
      text: "View Project",
      href: "https://github.com/gevoglanyan/Echo",
    },
  },
  {
    name: "Sasna Tsrer",
    description:
      "is a multilingual cultural showcase platform dedicated to celebrating and promoting Armenian heritage.",
    tools: ["React", "Next.js"],
    features: [
      "Static site generation for fast performance",
      "Lazy-loaded assets and responsive typography",
      "Modular architecture built with Tailwind utility classes",
      "Deployed and hosted on Vercel",
      "Localization-ready setup for multilingual content",
    ],
    link: {
      text: "Explore Site",
      href: "https://sasnatsrer.vercel.app/",
    },
  },
  {
    name: "Binary Bros Hotel",
    description:
      "is a comprehensive desktop hotel management system for both administrators and guests.",
    tools: ["Java", "JavaFX", "MySQL"],
    features: [
      "Guest login and session persistence",
      "Admin dashboard with advanced search and filtering",
      "User-side booking and history management",
      "Dynamic check-in process with post-stay surveys",
    ],
    link: {
      text: "View Project",
      href: "https://github.com/gevoglanyan/BinaryBrosHotel",
    },
  },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-24 py-20 bg-transparent text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          PROJECTS
        </motion.h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id || project.name}
              id={project.id || undefined}
              className="bg-white/5 rounded-2xl p-8 md:p-12 shadow-lg border border-white/10 text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {project.name}
              </motion.h3>

              <motion.p
                className="text-white/90 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>

              {project.subtext && (
                <motion.p
                  className="text-white/70 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.subtext}
                </motion.p>
              )}

              {project.categories &&
                project.categories.map((cat, i) => (
                  <motion.div
                    key={i}
                    className="mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <br />
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {cat.title}:
                    </h4>

                    <br />

                    {cat.challenges && (
                      <ul className="flex flex-wrap justify-center gap-3 mb-4">
                        {cat.challenges.map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="bg-cyan-400 text-black px-4 py-2 rounded-lg"
                            custom={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {cat.challenges && cat.games && <div className="h-2" />}

                    {cat.games && (
                      <ul className="flex flex-wrap justify-center gap-3">
                        {cat.games.map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="bg-cyan-400 text-black px-4 py-2 rounded-lg"
                            custom={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}

              

              {project.tools && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >

                  <br />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Tools:
                  </h4>
                  <br />
                  <ul className="flex flex-wrap justify-center gap-3">
                    {project.tools.map((tool, idx) => (
                      <motion.li
                        key={idx}
                        className="bg-cyan-400 text-black px-4 py-2 rounded-lg"
                        custom={idx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tool}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {project.features && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <br />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Features:
                  </h4>
                  <ul className="space-y-1 text-white/80">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        • {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <br />

              {project.link && (
                <motion.div
                  className="text-xl font-semibold mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-white transition"
                  >
                    {project.link.text}
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-2xl text-white font-semibold mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          More Projects Coming Soon!
          <br/> <br/> <br/>
          Make Sure To Check Back To See
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;