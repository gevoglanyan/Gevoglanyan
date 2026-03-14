import React, { useState, useEffect, useRef } from "react";

const titles = [
  "SOFTWARE ENGINEER",
  "FULL STACK DEVELOPER",
  "WEB DEVELOPER",
  "GAMER",
  "EMPLOYED",
];

const Landing = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
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
      ref={heroRef}
      className="relative min-h-screen px-8 md:px-16 lg:px-24 overflow-hidden bg-[#080808]"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full min-h-screen flex flex-col justify-center py-28">
      <div
        className={`relative z-10 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 text-xs tracking-[0.3em] font-medium uppercase">
            Portfolio
          </span>
        </div>

        <h1
          className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter text-white mb-6"
          style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
        >
          Harry
          <br />
          <span className="text-stroke">Gevoglanyan</span>
        </h1>

        <div className="flex items-center gap-4 mb-12">
          <p
            className="text-[clamp(0.9rem,2.5vw,1.4rem)] text-cyan-400 tracking-[0.2em] font-mono font-medium min-h-[1.6em]"
          >
            {displayedText}
            <span className="animate-pulse text-white">_</span>
          </p>
        </div>

        <p className="text-white/90 text-base md:text-lg max-w-md leading-relaxed mb-14 font-light">
          Full Stack Developer from Los Angeles. Building clean, fast, and 
          purposeful web experiences across the entire stack.
        </p>

        <div className="flex flex-wrap gap-4 mb-20">
          <a
            href="#about"
            className="group relative px-8 py-3 bg-cyan-400 text-black text-sm font-bold tracking-[0.1em] uppercase overflow-hidden transition-all duration-300 hover:bg-white"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="group px-8 py-3 border border-white/20 text-white text-sm font-medium tracking-[0.1em] uppercase hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="border-t border-white/90 pt-8">
      
          <br /> 

          <p className="text-white/90 text-xs tracking-[0.2em] uppercase mb-5">
            Selected Work
          </p>

          <br /> 
          
          <div className="flex flex-wrap gap-6 items-center">
            {[
              { label: "iAqua Aquatics", href: "https://iaquaaquatics.com" },
              { label: "GMG Transportation", href: "https://gmgtransportation.com" },
              { label: "Fiori Finti Cupcakes", href: "https://fiori-finti.vercel.app/" },
              { label: "Two Touch ↗", href: "https://twotouchgame.com", badge: "In Development" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors duration-200"
              >
                {item.label}
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 rounded-sm tracking-wide">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>

      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-30">
        <span className="text-white text-[10px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white"
            style={{
              height: "40%",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .text-stroke {
          -webkit-text-stroke: 2px rgba(255,255,255,0.15);
          color: transparent;
        }
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
};

export default Landing;