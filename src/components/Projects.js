// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react'; 

/*
const imageData = [
  { src: "/images/Homepage.png", label: "Homepage" },
  { src: "/images/Games.png", label: "Games" },
  { src: "/images/Login.png", label: "Login" },
  { src: "/images/Sign Up.png", label: "Sign Up" },
  { src: "/images/Admin Dashboard.png", label: "Admin Dashboard" },
  { src: "/images/User Dashboard.png", label: "User Dashboard" },
];
*/

const Projects = () => {
  // const [index, setIndex] = useState(0);
  // const total = imageData.length;
  
  // const next = () => setIndex((index + 1) % total);
  // const prev = () => setIndex((index - 1 + total) % total);

  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-16 text-center bg-transparent relative"
    >
      <div className="max-w-5xl w-full z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-md mb-6">
          PROJECTS
        </h2>

        <br />

        <h3 className="text-2xl font-semibold text-white mb-6">
          Techmetrica
        </h3>

        <div className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto space-y-6">
          <p>
            <span className="font-semibold text-white">Techmetrica</span> is a psychology-based web platform that explores decision-making and self-reflection through interactive games.
          </p>
          <p>
            <span className="font-semibold text-white">
              Built with <strong>React</strong>, <strong>Next.js</strong>, and <strong>MySQL</strong>, it features 
              < br /> 
              games like <em>Try Buy Goodbye</em>, <em>Drone Decisions</em>,
              < br /> 
              <em>Robot Emotions</em>, & <em>Folk Theories of Phones</em>.
            </span>
          </p>
        </div>

        <p className="text-white font-semibold text-lg mt-8 mb-2">Techemtrica includes:</p>

        <div className="flex justify-center">
          <ul className="list-disc list-inside text-white/90 text-base leading-relaxed mb-12 px-4 text-center">
            <li>Guest Login & Resume Functionality using Cookies</li>
            <li>Admin Dashboard with Game-Specific Filters & Analytics</li>
            <li>User Dashboard with Personal Information & Hame History</li>
            <li>Dynamic Questionnaire Forms tied to Each Game</li>
            <li>CSV Export and JSON-Based Game Data Storage</li>
          </ul>
        </div>

        {/*

        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 z-10 p-3 sm:p-4 bg-white/10 hover:bg-white/20 rounded-full text-white"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="w-full max-w-5xl px-4 sm:px-12">
            <img
              src={imageData[index].src}
              alt={imageData[index].label}
              className="rounded-2xl shadow-2xl w-full max-h-[70vh] object-contain transition-all duration-500"
            />
            <p className="mt-6 text-2xl font-semibold text-white">
              {imageData[index].label}
            </p>
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-10 p-3 sm:p-4 bg-white/10 hover:bg-white/20 rounded-full text-white"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
        */}
      </div>
    </section>
  );
};

export default Projects;
