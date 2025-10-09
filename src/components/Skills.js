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
  const skillCategories = [
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript", "Java", "Python", "C", "C++", "HTML", "CSS", "SQL"],
    },
    {
      title: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "JavaFX", "JUnit", "Prisma"],
    },
    {
      title: "Developer Tools",
      items: ["Git", "Docker", "Figma", "Jira", "VS Code", "IntelliJ", "Visual Studio", "Eclipse", "AWS"],
    },
    {
      title: "Deployment & APIs",
      items: ["Netlify", "Vercel", "Stripe API", "PayPal API", "Google Maps API", "Google Auth", "Postman"],
    },
  ];

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
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
              <ul className="flex flex-wrap justify-center gap-4 text-base">
                {category.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="px-5 py-2 rounded-full bg-cyan-400 text-black font-medium shadow-md hover:scale-110 hover:shadow-lg transition-all"
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
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
