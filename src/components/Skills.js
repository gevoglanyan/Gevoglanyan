import React from 'react';

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-16 text-center bg-transparent relative"
    >
      <div className="max-w-5xl w-full z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-md mb-6">
          SKILLS
        </h2>

        <div className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto space-y-12 mt-8">
          <div>
            <br />
            <h3 className="text-2xl font-semibold text-white mb-4">Front-End</h3>
            <br />
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">HTML</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">CSS</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">JavaScript</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">TypeScript</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">React</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Next.js</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <br />
            <h3 className="text-2xl font-semibold text-white mb-4">Back-End</h3>
            <br />
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Node.js</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Express.js</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">MySQL</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">MongoDB</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Java</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Python</li>
            </ul>

          </div>

          <div>
            <br />
            <h3 className="text-2xl font-semibold text-white mb-4">Tools</h3>
            <br />
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Git</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Docker</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Figma</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Jira</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Vercel</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Netlify</li>
            </ul>
          </div>

          <br /> <br /> <br />

          <div className="max-w-5xl w-full z-10">
            <span className="block text-3xl md:text-2xl font-semibold text-white text-center">
              I will add more!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
