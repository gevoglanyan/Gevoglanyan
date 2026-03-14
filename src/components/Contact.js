import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xqaqrjlq");

  return (
    <section
      id="contact"
      className="relative py-28 px-8 md:px-16 lg:px-24 bg-[#060606]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 text-xs tracking-[0.3em] font-medium uppercase">
            Contact
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
          <div>
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tighter text-white mb-8"
              style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
            >
              Let's
              <br />
              <span className="text-white/20">Talk</span>
            </h2>

            <br /> <br />

            <p className="text-white/90 text-base leading-relaxed max-w-sm mb-12">
              Have a project in mind? Want to collaborate? Or just want to say hello?
              Drop a message — I read everything, even the ones without semicolons.
            </p>

            <p className="text-white/90 text-base leading-relaxed max-w-sm mb-12">
              Have a project in mind? Want to collaborate? Or just want to say hello?
              Drop a message — I read everything, even the ones without semicolons.
            </p>

            <p className="text-white/90 text-base leading-relaxed max-w-sm mb-12">
              Have a project in mind? Want to collaborate? Or just want to say hello?
              Drop a message — I read everything, even the ones without semicolons.
            </p>

            <p className="text-white/90 text-base leading-relaxed max-w-sm mb-12">
              LOL
            </p>

            <br /> <br />

            <div className="space-y-4">
              <p className="text-white/90 text-xs tracking-[0.2em] uppercase">Find me on</p>
              <div className="flex gap-5">
                {[
                  {
                    href: "https://www.instagram.com/hgevoglanyan",
                    label: "Instagram",
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 496 512" fill="currentColor">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.8 0 184.8 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.8-1.7 67.6-9.9 93.9-36.1s34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.tiktok.com/@hgevoglanyan",
                    label: "TikTok",
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 496 512" fill="currentColor">
                        <path d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors duration-200"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            {state.succeeded ? (
              <div className="border-t border-white/[0.06] pt-10">
                <div className="w-6 h-px bg-cyan-400 mb-4" />
                <p className="text-white text-xl font-medium tracking-tight">
                  Message received.
                </p>
                <p className="text-white/90 text-sm mt-2">
                  I'll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {[
                    { id: "name", label: "Your Name", type: "text", placeholder: "Harry Gevoglanyan", prefix: "Name", field: "name" },
                    { id: "email", label: "Email Address", type: "email", placeholder: "harry@gevoglanyan.com", prefix: "Email", field: "email" },
                  ].map((input) => (
                    <div key={input.id} className="space-y-2">
                      <label htmlFor={input.id} className="block text-white/90 text-xs tracking-[0.2em] uppercase">
                        {input.label}
                      </label>
                      <input
                        id={input.id}
                        type={input.type}
                        name={input.field}
                        required
                        placeholder={input.placeholder}
                        className="w-full bg-transparent border-b border-white/20 focus:border-cyan-400 text-white placeholder-white/35 py-3 text-sm outline-none transition-colors duration-200"
                      />
                      <ValidationError prefix={input.prefix} field={input.field} errors={state.errors} className="text-red-400 text-xs" />
                    </div>
                  ))}

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-white/90 text-xs tracking-[0.2em] uppercase">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="1"
                      placeholder="Write your message like it's your best commit message."
                      className="w-full bg-transparent border-b border-white/20 focus:border-cyan-400 text-white placeholder-white/35 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs" />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="group relative px-8 py-3 bg-cyan-400 text-black text-xs font-bold tracking-[0.15em] uppercase hover:bg-white transition-colors duration-300 disabled:opacity-40"
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>

                <br /> <br />

                <div className="mt-12 flex justify-left">
                  <div className="relative">
                    <img
                      src="/pictures/Nadeshot.jpeg"
                      alt="Nadeshot"
                      className="w-48 h-48 md:w-64 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  );
};

export default Contact;