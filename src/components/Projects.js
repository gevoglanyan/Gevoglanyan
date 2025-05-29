import React, { /* useState, useEffect */ } from 'react';

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
  // const [lightboxOpen, setLightboxOpen] = useState(false);
  // const total = imageData.length;

  // const next = () => setIndex((index + 1) % total);
  // const prev = () => setIndex((index - 1 + total) % total);

  /*
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);
  */

  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-16 text-center bg-transparent relative overflow-x-hidden"
    >
      <div className="max-w-5xl w-full z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-md mb-6">
          PROJECTS
        </h2>

        <h3 className="text-2xl font-semibold text-white mb-6">
          Techmetrica
        </h3>

        <div className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto space-y-6">
          <p>
            <span className="font-semibold text-white">Techmetrica</span> is a psychology-based web platform that explores decision-making and self-reflection through interactive games.
          </p>
          <p>
            <span className="font-semibold text-white">
              Built with React, Next.js, Node.js, Express.js, and MySQL
            </span>
          </p>
        </div>

        <p className="text-white font-semibold text-lg mt-8 mb-2">Features:</p>

        <div className="flex justify-center">
          <ul className="list-none text-white/90 text-base leading-relaxed mb-4 px-4 text-center">
            <li>Try Buy Goodbye</li>
            <li>Game of Drones</li>
            <li>Sensi Bot</li>
            <li>Folk Theories of Phones</li>
          </ul>
        </div>

        <p className="text-white font-semibold text-lg mt-8 mb-2">Includes:</p>

        <div className="flex justify-center">
          <ul className="list-none text-white/90 text-base leading-relaxed mb-4 px-4 text-center">
            <li>Guest Login & Resume Functionality using Cookies</li>
            <li>Admin Dashboard with Game-Specific Filters & Analytics</li>
            <li>User Dashboard with Personal Information & Game History</li>
            <li>Dynamic Questionnaire Forms tied to Each Game</li>
            <li>CSV Export and JSON-Based Game Data Storage</li>
          </ul>
        </div>
      </div>

      <br /> <br /> <br />

      <div className="max-w-5xl w-full z-10">
        <span className="block text-3xl md:text-2xl font-semibold text-white text-center">
          I will add more!
        </span>
      </div>

        {/*

        <div className="flex justify-center mt-12">
          <div className="flex-1 px-4 sm:px-12 text-center">
            <img
              src={imageData[index].src}
              alt={imageData[index].label}
              onClick={() => setLightboxOpen(true)}
              className="rounded-2xl shadow-2xl max-w-[500px] max-h-[50vh] mx-auto object-contain cursor-pointer transition-all duration-500"
            />
            <p className="mt-6 text-2xl font-semibold text-white">
              {imageData[index].label}
            </p>
          </div>
        </div>
      </div>

      {/*

      {false && lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
          <div className="relative flex items-center justify-center max-w-[90vw] mx-auto">
            <button
              onClick={prev}
              className="absolute left-2 sm:-left-16 text-white text-4xl sm:text-5xl z-10"
              aria-label="Previous"
            >
              ‹
            </button>

            <img
              src={imageData[index].src}
              alt={imageData[index].label}
              className="max-h-[60vh] sm:max-h-[70vh] max-w-full object-contain rounded shadow-lg"
            />

            <button
              onClick={next}
              className="absolute right-2 sm:-right-16 text-white text-4xl sm:text-5xl z-10"
              aria-label="Next"
            >
              ›
            </button>

            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-2 right-2 sm:-top-16 sm:right-1/2 sm:translate-x-1/2 text-white text-3xl sm:text-4xl font-bold z-10"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}

      */}
    </section>
  );
};

export default Projects;
