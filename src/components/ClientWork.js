import React from "react";
import { motion } from "framer-motion";

const clientProjects = [
  {
    name: "GMG Transportation",
    description:
      "is a luxury vehicle booking platform built for a private transportation company, offering a seamless, user-friendly booking experience.",
    tools: ["React", "Next.js", "Stripe API", "Google Maps API"],
    features: [
      "Google Maps routing, fare estimation, and location autocomplete",
      "Secure Stripe Checkout integration for online payments",
      "Dynamic multi-step booking flow with real-time price updates",
      "Filterable vehicle carousels with responsive design",
      "SEO-optimized, fully deployed, and mobile-first experience",
    ],
    link: {
      text: "Visit Website",
      href: "https://gmgtransportation.com",
    },
  },
  {
    name: "iAqua Aquatics",
    description:
      "is an online store designed for aquarium enthusiasts, featuring a clean, modern shopping experience.",
    tools: ["React", "Next.js", "PayPal API"],
    features: [
      "Category-based product filtering (e.g., Betta, Sword Plants)",
      "Persistent cart powered by localStorage and React state",
      "Integrated PayPal Checkout for secure transactions",
      "Fully responsive and accessibility-optimized layout",
      "Minimal, modern UI design with smooth user interactions",
    ],
    link: {
      text: "Visit Store",
      href: "https://iaquaaquatics.com",
    },
  },
  {
    name: "Fiori Finti Cupcakes",
    description:
      "is an elegant e-commerce platform specializing in premium artificial flowers and floral arrangements.",
    tools: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Product catalog with detailed descriptions and high-quality imagery",
      "Shopping cart with real-time price calculations",
      "Secure Stripe payment processing",
      "Responsive design optimized for mobile and desktop",
      "Clean, modern interface focused on visual appeal",
    ],
    link: {
      text: "Visit Store",
      href: "https://fiori-finti.vercel.app/"
    },
  },
  {
    name: "Techmetrica",
    description:
      "is a psychology-driven web platform exploring decision-making, personality, and self-reflection through interactive games.",
    tools: ["React", "Next.js", "Node.js", "Express.js", "MySQL"],
    games: [
      "Try Buy Goodbye",
      "Game of Drones",
      "Sensi Bot",
      "Folk Theories of Phones",
    ],
    features: [
      "Guest login with progress resume",
      "Admin dashboard with per-game analytics and filters",
      "User dashboard with personalized game history",
      "Dynamic questionnaire system with multiple question types",
      "Data export to CSV and JSON-based game result storage",
    ],
    link: {
      text: "Tour Site",
      href: "https://techmetrica.org",
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

const ClientWork = () => {
  return (
    <section
      id="client-work"
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
          CLIENT WORK
        </motion.h2>

        <div className="space-y-20">
          {clientProjects.map((project, index) => (
            <motion.div
              key={project.name}
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

              {project.games && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <br />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Games:
                  </h4>
                  <br />
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
      </div>
    </section>
  );
};

export default ClientWork;