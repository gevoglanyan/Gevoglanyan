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

        <div className="space-y-4">
          <p className="text-white text-lg font-medium">
            Hit me up — even my spam folder is excited.
          </p>
          <p className="text-white text-lg font-medium">
            Don’t worry, I read all messages — even the ones without semicolons.
          </p>
        </div>

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
                placeholder="Harutyun Gevoglanyan"
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
                placeholder="gevoglanyan.harutyun@gmail.com"
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

            <div className="text-center pt-5">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-8 rounded-lg transition duration-300"
              >
                {state.submitting ? 'Sending...' : 'Submit Form'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
