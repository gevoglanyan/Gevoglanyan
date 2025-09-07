import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-start items-center px-6 md:px-12 lg:px-24 py-20 text-center relative bg-black"
    >
      <motion.div
        className="max-w-5xl w-full z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          SKILLS
        </h2>

        <div className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto space-y-16">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Languages</h3>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              {[
                "JavaScript",
                "TypeScript",
                "Java",
                "Python",
                "C",
                "C++",
                "HTML",
                "CSS",
              ].map((lang, i) => (
                <motion.li
                  key={lang}
                  className="px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 text-cyan-400 font-medium shadow-md hover:scale-110 hover:bg-white/20 transition"
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {lang}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Databases</h3>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              {["MySQL", "PostgreSQL", "MongoDB"].map((db, i) => (
                <motion.li
                  key={db}
                  className="px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 text-cyan-400 font-medium shadow-md hover:scale-110 hover:bg-white/20 transition"
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {db}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Frameworks & Libraries
            </h3>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "Tailwind CSS",
                "JavaFX",
                "JUnit",
              ].map((fw, i) => (
                <motion.li
                  key={fw}
                  className="px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 text-cyan-400 font-medium shadow-md hover:scale-110 hover:bg-white/20 transition"
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {fw}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Developer Tools
            </h3>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              {[
                "Git",
                "Docker",
                "Figma",
                "Jira",
                "VS Code",
                "IntelliJ",
                "Visual Studio",
                "Eclipse",
              ].map((tool, i) => (
                <motion.li
                  key={tool}
                  className="px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 text-cyan-400 font-medium shadow-md hover:scale-110 hover:bg-white/20 transition"
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {tool}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Deployment & APIs
            </h3>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              {[
                "Netlify",
                "Vercel",
                "Stripe API",
                "PayPal API",
                "Google Maps API",
                "Google Auth",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  className="px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 text-cyan-400 font-medium shadow-md hover:scale-110 hover:bg-white/20 transition"
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
