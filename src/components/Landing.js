import React, { useState, useEffect } from 'react';

const titles = ["SOFTWARE ENGINEER", "FULL STACK DEVELOPER", "WEB DEVELOPER", "GAMER"];

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
    <section id="landing" className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center px-8 pt-2 text-center relative">
      <div className="max-w-4xl z-10">
        <h1 className="text-6xl md:text-7xl font-extrabold text-[white] drop-shadow-md mb-4">Harutyun Gevoglanyan</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[cyan] tracking-widest mb-6">
          {displayedText}<span className="animate-blink">|</span>
        </h2>

        <p className="text-white-300 text-md md:text-lg max-w-l mb-10 mx-auto">
          Expert at debugging and processing ChatGPT faster than the speed of light.
        </p>
        
        <br />

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="bg-[cyan] text-black font-semibold px-6 py-2 rounded hover:bg-[cyan] transition">Contact Me</a>
          <a href="#about" className="bg-[cyan] text-black font-semibold px-6 py-2 rounded hover:bg-[cyan] transition">Learn More</a>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-[white] tracking-widest mb-6">
          <br />
          <br />
          Revamp Coming Soon
        </h2>
      </div>
    </section>
  );
};

export default Landing;
