import React from "react";

const Gaming = () => {
  return (
    <section
      id="gaming"
      className="relative py-28 px-8 md:px-16 lg:px-24 bg-[#080808]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 text-xs tracking-[0.3em] font-medium uppercase">
            Gaming
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-start">
          <div>
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter text-white mb-10"
              style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
            >
              Harold
              <br />
              <span className="text-white/20">FPS</span>
            </h2>

            <br />

            <div className="space-y-4 text-white/90 text-base leading-relaxed font-light max-w-lg mb-12">
              <p>
                I don't play a lot of different games. Just one consistently:{" "}
                <a
                  href="https://www.bungie.net/7/en/Destiny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-bold hover:underline"
                >
                  Destiny 2
                </a>.
              </p>

              <p>
                No long list of favorites — just Destiny 2, and that's enough.
              </p>

              <br />

              <p>
                Okay, I lied. I also play{" "}
                <a
                  href="https://www.callofduty.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 font-bold hover:underline"
                >
                  Call of Duty
                </a>{" "}
                from time to time.
              </p>

              <br />

              <p>
                Oh, and also this new game{" "}
                <a
                  href="https://www.marathonthegame.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-bold hover:underline"
                >
                  Marathon
                </a>.
              </p>
            </div>

            <br /> <br />

            <div className="flex gap-6 flex-wrap">
              {[
                {
                  href: "https://steamcommunity.com/id/haroldfps/",
                  label: "Steam",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 496 512" fill="currentColor">
                      <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.8 52.8 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.twitch.tv/haroldfps",
                  label: "Twitch",
                  hoverColor: "hover:text-purple-400",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M391.2 103.5H352.5v109.7h38.6zM285 103H246.4V212.8H285zM120.8 0 24.3 91.4V420.6H140.1V512l96.5-91.4h77.3L487.7 256V0zM449.1 237.8l-77.2 73.1H294.6l-67.6 64v-64H140.1V36.6H449.1z"/>
                    </svg>
                  ),
                },
                {
                  href: "https://x.com/haroldfps",
                  label: "X / Twitter",
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-white/50 ${social.hoverColor || "hover:text-white"} transition-colors duration-200 text-sm`}
                >
                  {social.icon}
                  <span className="text-xs tracking-[0.1em] uppercase">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="relative">
              <img
                src="/pictures/Harold.jpg"
                alt="Harold"
                className="w-48 h-48 md:w-64 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <br /> <br />

            <div className="relative">
              <img
                src="/pictures/Titan.jpg"
                alt="Titan"
                className="w-48 h-48 md:w-64 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/[0.06] pt-8">
        <br />
          <p className="text-white/90 text-xs tracking-[0.2em] uppercase">
            More gaming accolades coming soon.
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  );
};

export default Gaming;