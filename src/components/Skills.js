import React from "react";

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
    items: ["Git", "GitHub", "Docker", "Figma", "Jira", "VS Code", "IntelliJ", "Visual Studio", "Eclipse", "AWS"],
  },
  {
    title: "Deployment & APIs",
    items: ["Netlify", "Vercel", "Stripe API", "PayPal API", "Google Maps API", "Google Auth", "Postman"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-8 md:px-16 lg:px-24 bg-[#060606]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 text-xs tracking-[0.3em] font-medium uppercase">
            Skills
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-24">
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none tracking-tighter text-white mb-6"
              style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
            >
              Tech
              <br />
              <span className="text-white/20">Stack</span>
            </h2>
            <p className="text-white/90 text-sm leading-relaxed">
              Tools and Technologies I work with regularly.
            </p>
          </div>

          <div className="space-y-12">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="border-t border-white/[0.06] pt-8 grid grid-cols-[120px_1fr] gap-6 items-start"
              >
                <p className="text-white/90 text-xs tracking-[0.15em] uppercase font-medium pt-1">
                  {cat.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-white/60 border border-white/10 px-3 py-1.5 hover:border-cyan-400/50 hover:text-white transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  );
};

export default Skills;