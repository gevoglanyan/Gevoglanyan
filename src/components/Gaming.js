import React from 'react';

const Gaming = () => {
  return (
    <section
      id="gaming"
      className="flex flex-col justify-start items-center px-6 md:px-12 lg:px-24 py-20 text-center bg-transparent relative"
    >
      <div className="max-w-4xl w-full z-10 space-y-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          GAMING
        </h2>

        <div className="flex justify-center">
          <img
            src="/pictures/Harold.jpg"
            alt="Harold"
            className="w-48 h-48 rounded-full border-4 border-cyan-400 shadow-lg object-cover transform transition duration-300 hover:scale-105 hover:shadow-cyan-400/50"
          />
        </div>

        <div className="text-white/80 text-lg md:text-xl leading-relaxed space-y-6">
          <p>
            I don’t play a lot of different games — just one consistently:{' '}
            <span className="text-white font-semibold">Destiny 2</span>.
          </p>
          <p>
            No long list of favorite titles — just Destiny 2, and that’s enough.
          </p>
        </div>

        <div className="social-icons flex justify-center space-x-10">
          <a
            href="https://steamcommunity.com/id/haroldfps/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white hover:text-cyan-400 transition"
              viewBox="0 0 496 512"
              fill="currentColor"
            >
              <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.8 52.8 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3 .1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z" />
            </svg>
          </a>

          <a
            href="https://www.twitch.tv/haroldfps"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-white hover:text-purple-400 transition"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M391.2 103.5H352.5v109.7h38.6zM285 103H246.4V212.8H285zM120.8 0 24.3 91.4V420.6H140.1V512l96.5-91.4h77.3L487.7 256V0zM449.1 237.8l-77.2 73.1H294.6l-67.6 64v-64H140.1V36.6H449.1z"/>
            </svg>
          </a>

          <a
            href="https://x.com/haroldfps"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white hover:text-cyan-400 transition"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
        </div>

        <div>
          <span className="block text-3xl md:text-2xl font-semibold text-white text-center">
            I will add more Gaming related information!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Gaming;
