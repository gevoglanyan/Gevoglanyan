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
        className="flex flex-col justify-start items-center px-6 md:px-12 lg:px-24 py-12 text-center bg-transparent relative overflow-x-hidden"
      >
        <div className="max-w-5xl w-full z-10 space-y-12">
          <div>

            <br /> <br /> <br />

            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-md mb-6">
              PROJECTS
            </h2>

            <br />

            <h3 className="text-2xl font-semibold text-white mb-4">Techmetrica</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              <span className="font-semibold text-white">Techmetrica</span> is a psychology-based web platform that explores decision-making and self-reflection through interactive games.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Tools:</h4>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">React</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Next.js</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Node.js</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Express.js</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">MySQL</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Games:</h4>
            <ul className="flex flex-col items-center gap-4 text-base">
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Try Buy Goodbye</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Game of Drones</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Sensi Bot</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Folk Theories of Phones</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Features:</h4>
            <ul className="list-none text-white/90 text-base leading-relaxed px-4 text-center space-y-2">
              <li>Guest Login & Resume Functionality</li>
              <li>Admin Dashboard with Game-Specific Filters</li>
              <li>User Dashboard with Game History</li>
              <li>Dynamic Questionnaire Forms</li>
              <li>CSV Export and JSON Game Data Storage</li>
            </ul>
          </div>

          <br /> <br />

          <div>
            <span className="block text-3xl md:text-2xl font-semibold text-white text-center pt-4">
              I will add more!
            </span>
          </div>
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
