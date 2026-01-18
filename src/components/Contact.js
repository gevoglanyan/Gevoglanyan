import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xqaqrjlq");

  return (
    <section
      id="contact"
      className="flex flex-col justify-start items-center px-6 md:px-12 lg:px-24 py-20 text-center bg-transparent relative"
    >
      <div className="max-w-2xl w-full z-10 space-y-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          CONTACT
        </h2>

        <div className="social-icons flex justify-center space-x-10">
          <a
            href="https://www.instagram.com/hgevoglanyan"
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
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.8 0 184.8 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.8-1.7 67.6-9.9 93.9-36.1s34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
          </a>

          <a 
            href="https://www.tiktok.com/@hgevoglanyan" 
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
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
            </svg>
          </a>
        </div>

        <br /> <br />

        <div className="text-white/80 text-lg md:text-xl leading-relaxed space-y-6">
          <p className="text-white text-lg font-medium">
            Hit me up — even my spam folder is excited.
          </p>
          <p className="text-white text-lg font-medium">
            Don’t worry, I read all messages — even the ones without semicolons.
          </p>
        </div>

        <br /> <br />

        {state.succeeded ? (
          <p className="text-white text-xl font-medium py-12">
            Thanks for reaching out! I'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-white text-sm font-semibold">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Harry Gevoglanyan"
                className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-white text-sm font-semibold">
                Your Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="info@gevoglanyan.com"
                className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-white text-sm font-semibold">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Write your message like it's your best commit message."
                className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <br />

            <div className="text-center pt-5">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-cyan-500/90 text-black font-semibold
                  px-8 py-2 rounded-xl shadow-lg
                  hover:shadow-[0_0_20px_cyan] hover:scale-105
                  transition"
              >
                {state.submitting ? "Sending..." : "Submit Form"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
