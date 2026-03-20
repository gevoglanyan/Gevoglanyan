import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] px-8 md:px-16 lg:px-24 py-8 bg-[#060606]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#landing"
          className="text-white/90 hover:text-cyan-400 font-black tracking-tighter text-base transition-colors duration-200"
          style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
        >
          H G
        </a>
        <p className="text-white/90 text-xs tracking-[0.15em]">
          © {new Date().getFullYear()} Gevoglanyan. All Rights Reserved.
        </p>
        
        <a
          href="#landing"
          className="mt-3 sm:mt-0 text-white/90 hover:text-white text-[8px] sm:text-xs tracking-[0.15em] uppercase transition-colors duration-200"
        >
          Back to top ↑
        </a>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </footer>
  );
};

export default Footer;