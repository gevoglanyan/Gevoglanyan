import React from "react";
import Active from "./Active";

const sections = ["landing", "about", "skills", "client-work", "projects", "gaming", "contact"];

const Dots = () => {
  const active = Active();

  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-5 items-center">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={`Go to ${id}`}
          className="group relative flex items-center justify-end gap-2"
        >
          <span className="absolute right-5 text-[10px] tracking-[0.15em] uppercase text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {id === "client-work" ? "Client Work" : id.charAt(0).toUpperCase() + id.slice(1)}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? "w-1.5 h-4 bg-cyan-400"
                : "w-1 h-1 bg-white/20 group-hover:bg-white/50"
            }`}
          />
        </a>
      ))}
    </div>
  );
};

export default Dots;