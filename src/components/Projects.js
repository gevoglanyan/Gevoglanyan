import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-start items-center px-6 md:px-12 lg:px-24 py-12 text-center bg-transparent relative overflow-x-hidden"
    >
      <div className="max-w-5xl w-full z-10 space-y-24">

        <br />

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-md mb-6">
          PROJECTS
        </h2>

        <div className="text-white/80 text-lg leading-relaxed text-center space-y-8">
          <h3 className="text-2xl font-bold text-white">GMG Transportation</h3>
          <p>
            <span className="font-semibold text-white">GMG Transportation</span> is a high-end vehicle booking platform built for a private transportation company.
          </p>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Tools:</h4>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Next.js</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">React</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Tailwind CSS</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Stripe API</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Google Maps API</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Vercel</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Features:</h4>
            <ul className="list-none text-white/90 text-base leading-relaxed px-4 text-center space-y-2">
              <li>Google Maps routing, fare estimation, and location autocomplete</li>
              <li>Stripe Checkout with secure payment integration</li>
              <li>Dynamic booking flow with multi-step navigation</li>
              <li>Filterable vehicle carousels and real-time pricing</li>
              <li>Fully deployed with SEO and mobile-first UX</li>
            </ul>
          </div>
        </div>

        <div className="text-white/80 text-lg leading-relaxed text-center space-y-8">
          <h3 className="text-2xl font-bold text-white">iAqua Aquatics</h3>
          <p>
            <span className="font-semibold text-white">iAqua Aquatics</span> is an e-commerce site tailored for aquarium enthusiasts.
          </p>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Tools:</h4>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">React</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Tailwind CSS</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">PayPal Checkout</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Vite</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Netlify</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Features:</h4>
            <ul className="list-none text-white/90 text-base leading-relaxed px-4 text-center space-y-2">
              <li>Category-based product filtering (e.g., Betta, Sword Plants)</li>
              <li>Custom cart with localStorage and state handling</li>
              <li>PayPal Checkout for seamless transactions</li>
              <li>Optimized for mobile-first and accessible UX</li>
              <li>Clean, modern UI with minimal gradients</li>
            </ul>
          </div>
        </div>

        <div className="text-white/80 text-lg leading-relaxed text-center space-y-8">
          <h3 className="text-2xl font-bold text-white">Sasna Tsrer</h3>
          <p>
            <span className="font-semibold text-white">Sasna Tsrer</span> is a multilingual cultural celebration site focused on promoting Armenian heritage.
          </p>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Tools:</h4>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">React</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Next.js</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Tailwind CSS</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Vercel</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">i18n (planned)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Features:</h4>
            <ul className="list-none text-white/90 text-base leading-relaxed px-4 text-center space-y-2">
              <li>Static generation with Next.js for speed and SEO</li>
              <li>Lazy-loaded assets and responsive font scaling</li>
              <li>Modular components with Tailwind utility classes</li>
              <li>Vercel deployment with fast commits-to-live</li>
              <li>Localization-ready structure for multilingual content</li>
            </ul>
          </div>
        </div>

        <div className="text-white/80 text-lg leading-relaxed text-center space-y-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Techmetrica</h3>
          <p>
            <span className="font-semibold text-white">Techmetrica</span> is a psychology-based web platform that explores decision-making and self-reflection through interactive games.
          </p>

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
        </div>

        <div className="text-white/80 text-lg leading-relaxed text-center space-y-8 mt-20">
          <h3 className="text-2xl font-semibold text-white mb-4">Binary Bros Hotel</h3>

          <p>
            A full-featured hotel management system designed for both guest and admin users.
          </p>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Tools:</h4>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">Java</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">JavaFX</li>
              <li className="bg-cyan-400 text-black px-4 py-2 rounded-lg">MySQL</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Features:</h4>
             <ul className="list-none text-white/90 text-base leading-relaxed px-4 text-center space-y-2">
              <li>Guest Login & Session Resume</li>
              <li>Admin Dashboard with Filters</li>
              <li>User Booking & History View</li>
              <li>Dynamic Check-In & Survey Forms</li>
            </ul>
          </div>
        </div>

        <div>
          <span className="block text-3xl md:text-2xl font-semibold text-white text-center pt-4">
            I will add more Projects!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
