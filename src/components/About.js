import React, { useState, useEffect } from "react";

const About = () => {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showResume ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showResume]);

  return (
    <section
      id="about"
      className="relative py-28 px-8 md:px-16 lg:px-24 bg-[#080808]"
    >
      <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-8 h-px bg-cyan-400" />
        <span className="text-cyan-400 text-xs tracking-[0.3em] font-medium uppercase">
          About
        </span>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
        <div className="flex flex-col items-start gap-8">
          <div className="relative">
            <img
              src="/pictures/Harut.png"
              alt="Harry Gevoglanyan"
              className="w-52 h-52 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => { e.target.src = "https://via.placeholder.com/208"; }}
            />
          </div>

          <div className="flex gap-5">
            <a
              href="https://github.com/gevoglanyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors duration-900"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 496 512" fill="currentColor">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/hgevoglanyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 496 512" fill="currentColor">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
          </div>

          <br />

          <button
            onClick={() => setShowResume(true)}
            className="text-xs tracking-[0.2em] uppercase text-white/90 hover:text-cyan-400 transition-colors duration-200 border-b border-white/10 hover:border-cyan-400 pb-1"
          >
            Request Resume
          </button>
        </div>

        <div className="space-y-10">
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter text-white"
            style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
          >
            Los Angeles–Based
            <br />
            <span className="text-white/20">Full Stack Developer</span>
          </h2>

          <div className="space-y-5 text-white/90 text-base leading-relaxed font-light max-w-xl">
            <p>
              I'm <span className="text-white font-medium">Harry Gevoglanyan</span>, a full-stack developer who enjoys building clean, reliable web experiences. I work across the whole stack—from designing intuitive front-end interfaces to building backend systems and working with databases.
            </p>

            <p>
              My main stack includes <span className="text-white/80">React, Next.js, Node.js, and Express</span>, with
              experience in <span className="text-white/80">JavaScript, TypeScript, Java, and Python</span>. I’ve worked with
              databases like <span className="text-white/80">MySQL, PostgreSQL, and MongoDB</span>, and use tools such as
              <span className="text-white/80"> Git, Docker, AWS, and Figma</span> throughout development and deployment.
            </p>

            <p>
              I’ve built projects ranging from e-commerce platforms to research tools, often integrating APIs
              like <span className="text-white/80">Stripe, PayPal, and Google Maps</span>. My focus is always on
              usability, performance, and writing code that’s built to last.
            </p>
          </div>
        </div>
      </div>

      {showResume && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center px-6"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative bg-[#0d0d0d] border border-white/10 p-10 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="w-6 h-px bg-cyan-400 mb-6" />
            <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">
              Available Upon Request
            </h3>
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              I'm happy to share a copy of my resume. Reach out via the contact section
              and I'll send it over.
            </p>
            <a
              href="#contact"
              onClick={() => setShowResume(false)}
              className="inline-block text-xs tracking-[0.2em] uppercase text-cyan-400 border-b border-cyan-400/40 hover:border-cyan-400 pb-1 transition-colors"
            >
              Go to Contact →
            </a>
          </div>
        </div>
      )}

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  );
};

export default About;