import React, { useState, useEffect } from 'react';

const titles = ["SOFTWARE ENGINEER", "FULL STACK DEVELOPER", "WEB DEVELOPER", "GAMER", "FRONT-END DEVELOPER", "BACK-END DEVELOPER", "UNEMPLOYED"];

const Landing = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    let typingSpeed = isDeleting ? 50 : 100; 

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1500); 
        }
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section id="landing" className="flex flex-col justify-start items-center px-8 pt-10 pb-10 text-center relative">
      <div className="max-w-4xl z-10">
        <br /> <br />
        
        <h1 className="mt-20 text-6xl md:text-7xl font-extrabold text-[white] drop-shadow-md mb-4">
          Harutyun Gevoglanyan
        </h1>

        <br />

        <h2 className="text-2xl md:text-3xl font-semibold text-[cyan] tracking-widest mb-4">
          {displayedText}<span className="animate-blink">|</span>
        </h2>

        <p className="text-white-300 text-md md:text-lg max-w-l mb-6 mx-auto">
          Expert at debugging and processing ChatGPT faster than the speed of light.
        </p>

        <br />

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
          <a href="#about" className="bg-[cyan] text-black font-semibold px-6 py-2 rounded hover:bg-[cyan] transition">Learn More</a>
          <a href="#contact" className="bg-[cyan] text-black font-semibold px-6 py-2 rounded hover:bg-[cyan] transition">Contact Me</a>
        </div>

        <br />

        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mt-16 mb-8">
          Not to Brag, But These Are Worth a Look
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4">
          <a
            href="https://iaquaaquatics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 text-xl md:text-2xl font-semibold hover:underline transition"
          >
            iAqua Aquatics
          </a>

          <span className="text-white text-xl md:text-2xl font-semibold">&</span>

          <a
            href="https://gmgtransportation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 text-xl md:text-2xl font-semibold hover:underline transition"
          >
            GMG Transportation
          </a>
        </div>

        <br />

        <h2 className="text-2xl md:text-2xl font-extrabold text-white tracking-wide mt-16 mb-8">
          Currently Working on
          <br /> <br />
          <a href="#two-touch" className="text-cyan-400 hover:text-white transition">
            Two Touch
          </a>
          <br /> <br /> <br />
          <span className="text-lg md:text-lg font-bold text-white/80 tracking-wide">
            Coming in Spring 2026
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Landing;
