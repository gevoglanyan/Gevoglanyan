import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xqaqrjlq");

  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-20 text-center bg-transparent relative"
    >
      <div className="max-w-2xl w-full z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-md mb-10">
          CONTACT
        </h2>

        {state.succeeded ? (
          <p className="text-green-400 text-xl font-medium">Thanks for reaching out! I'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <br />
              <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Harutyun Gevoglanyan"
                className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="gevoglanyan.harutyun@gmail.com"
                className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Message"
                className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <br />

            <div className="text-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                {state.submitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
