import React from 'react';

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-start items-center px-6 md:px-12 lg:px-24 py-12 text-center bg-transparent relative"
    >
      <div className="max-w-5xl w-full z-10">
        <br /> <br /> <br /> <br />

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-md mb-10">
          SKILLS
        </h2>

        <br /> <br />

        <div className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Languages</h3>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              {["JavaScript", "TypeScript", "Java", "Python", "C", "C++", "HTML", "CSS"].map(lang => (
                <li key={lang} className="bg-cyan-400 text-black px-4 py-2 rounded-lg">{lang}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Databases</h3>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              {["MySQL", "MongoDB"].map(db => (
                <li key={db} className="bg-cyan-400 text-black px-4 py-2 rounded-lg">{db}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Frameworks & Libraries</h3>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              {["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "JavaFX", "JUnit"].map(framework => (
                <li key={framework} className="bg-cyan-400 text-black px-4 py-2 rounded-lg">{framework}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Developer Tools</h3>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              {["Git", "Docker", "Figma", "Jira", "VS Code", "IntelliJ", "Visual Studio", "Eclipse"].map(tool => (
                <li key={tool} className="bg-cyan-400 text-black px-4 py-2 rounded-lg">{tool}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Deployment & APIs</h3>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              {["Netlify", "Vercel", "Stripe API", "PayPal Checkout", "Google Maps API", "Google Auth"].map(item => (
                <li key={item} className="bg-cyan-400 text-black px-4 py-2 rounded-lg">{item}</li>
              ))}
            </ul>
          </div>

         <div>
          <span className="block text-3xl md:text-2xl font-semibold text-white text-center pt-14">
            I will add more!
          </span>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
