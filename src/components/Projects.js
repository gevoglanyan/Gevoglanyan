import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "two-touch",
    name: "Two Touch",
    description:
      "Two Touch is an IRL Soccer Companion App built for tracking and gamifying 1v1 and small-sided soccer challenges.",
    subtext:
      "This is a passion project currently in progress, being developed for release on the Apple & Google Play Store.",
    tools: ["React", "Firebase Auth", "Firestore"],
    features: [
      "Friends List (Search, Add, & Remove Functionality)",
      "Leaderboards (Weekly, Monthly, & All-Time)",
      "Match Logging for Various Game Modes & Games",
      "ELO Rating System with Win/Loss Tracking",
    ],
    categories: [
      {
        title: "Game Modes",
        items: [
          "Penalty Shootouts",
          "Crossbar Challenges",
          "Freekicks",
          "1v1s",
          "3v3s",
          "6v6s",
          "11v11s",
        ],
      },
    ],
  },
  {
    name: "GMG Transportation",
    description:
      "GMG Transportation is a high-end vehicle booking platform built for a private transportation company.",
    tools: ["React", "Next.js", "Stripe API", "Google Maps API"],
    features: [
      "Google Maps routing, fare estimation, and location autocomplete",
      "Stripe Checkout with secure payment integration",
      "Dynamic booking flow with multi-step navigation",
      "Filterable vehicle carousels and real-time pricing",
      "Fully deployed with SEO and mobile-first UX",
    ],
    link: {
      text: "GMG Transportation",
      href: "https://gmgtransportation.com",
    },
  },
  {
    name: "iAqua Aquatics",
    description:
      "iAqua Aquatics is an e-commerce site tailored for aquarium enthusiasts.",
    tools: ["React", "Next.js", "PayPal API"],
    features: [
      "Category-based product filtering (e.g., Betta, Sword Plants)",
      "Custom cart with localStorage and state handling",
      "PayPal Checkout for seamless transactions",
      "Optimized for mobile-first and accessible UX",
      "Clean, modern UI with minimal gradients",
    ],
    link: { text: "iAqua Aquatics", href: "https://iaquaaquatics.com" },
  },
  {
    name: "Sasna Tsrer",
    description:
      "Sasna Tsrer is a multilingual cultural celebration site focused on promoting Armenian heritage.",
    tools: ["React", "Next.js"],
    features: [
      "Static Generation with Next.js",
      "Lazy-Loaded Assets and Responsive Font Scaling",
      "Modular Components with Tailwind utility Classes",
      "Vercel Deployment",
      "Localization-Ready Structure for Multilingual Content",
    ],
    link: { text: "Sasna Tsrer", href: "https://sasnatsrer.vercel.app/" },
  },
  {
    name: "Techmetrica",
    description:
      "Techmetrica is a psychology-based web platform that explores decision-making and self-reflection through interactive games.",
    tools: ["React", "Next.js", "Node.js", "Express.js", "MySQL"],
    games: ["Try Buy Goodbye", "Game of Drones", "Sensi Bot", "Folk Theories of Phones"],
    features: [
      "Guest Login & Resume Functionality",
      "Admin Dashboard with Game-Specific Filters",
      "User Dashboard with Game History",
      "Dynamic Questionnaire Forms",
      "CSV Export and JSON Game Data Storage",
    ],
  },
  {
    name: "Binary Bros Hotel",
    description:
      "A full-featured hotel management system designed for both guest and admin users.",
    tools: ["Java", "JavaFX", "MySQL"],
    features: [
      "Guest Login & Session Resume",
      "Admin Dashboard with Filters",
      "User Booking & History View",
      "Dynamic Check-In & Survey Forms",
    ],
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
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <br /> 
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {cat.title}:
                    </h4>
                    <ul className="space-y-1 text-white/80">
                      {cat.items.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
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

              {project.games && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Games:
                  </h4>
                  <ul className="flex flex-wrap justify-center gap-4">
                    {project.games.map((game, idx) => (
                      <motion.li
                        key={idx}
                        className="bg-cyan-400 text-black px-4 py-2 rounded-lg"
                        custom={idx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {game}
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
                    {project.name === "Two Touch" && (
                      <li className="italic text-white/70">More Being Added!</li>
                    )}
                  </ul>
                </motion.div>
              )}

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
          I will add more Projects!
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
