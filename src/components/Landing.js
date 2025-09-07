import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const titles = [
  "SOFTWARE ENGINEER",
  "FULL STACK DEVELOPER",
  "WEB DEVELOPER",
  "GAMER",
  "UNEMPLOYED",
];

const Landing = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
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
    <section
      id="landing"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-20 md:pt-0 bg-black text-center"
    >
      <motion.div
        className="max-w-4xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Harutyun Gevoglanyan
        </h1>

        <motion.h2
          className="text-lg sm:text-2xl md:text-3xl font-semibold text-cyan-400 tracking-widest mb-8"
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.8 }}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10">
          Expert at debugging and processing ChatGPT faster than the speed of
          light.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#about"
            className="bg-cyan-500/90 text-black font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-[0_0_20px_cyan] hover:scale-105 transition"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="bg-cyan-500/90 text-black font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-[0_0_20px_cyan] hover:scale-105 transition"
          >
            Contact Me
          </a>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide mb-8">
          Not to Brag, But These Are Worth a Look
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.div
            className="backdrop-blur-md bg-white/5 rounded-xl px-6 py-4 shadow-lg hover:bg-white/10 transition"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="https://iaquaaquatics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 text-lg sm:text-xl md:text-2xl font-semibold"
            >
              iAqua Aquatics
            </a>
          </motion.div>

          <span className="text-white text-xl font-semibold">&</span>

          <motion.div
            className="backdrop-blur-md bg-white/5 rounded-xl px-6 py-4 shadow-lg hover:bg-white/10 transition"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="https://gmgtransportation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 text-lg sm:text-xl md:text-2xl font-semibold"
            >
              GMG Transportation
            </a>
          </motion.div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide mb-6">
            Currently Working on
          </h2>
          <a
            href="#two-touch"
            className="text-cyan-400 hover:text-white transition text-xl sm:text-2xl font-semibold"
          >
            Two Touch
          </a>

          <div className="mt-8">
            <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium">
              Coming Spring 2026
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;
