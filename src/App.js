import React, { useState } from 'react';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [activeSection, setActiveSection] = useState(() => {
    return window.innerWidth <= 768 ? "personal" : null;
  });

  const handleToggle = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section); 
    }
  };

  return (
    <>
      <div className="App">
        <div className="ImageWrapper">
          <img src="Harold.jpg" alt="Harold" className="Image" />
          <br />
          <p className="WelcomeText">Greetings</p>
          <p className="Text">Explore Both Sides</p>
        </div>

        <br />

        <div className="container">
          <div className={`side personal-side ${activeSection === 'personal' ? 'expanded' : ''}`}>
            <button className="toggle-btn" onClick={() => handleToggle('personal')}>
              {activeSection === 'personal' ? 'Harut' : 'Harut'}
            </button>

              {activeSection === 'personal' && (
                <div className="content fade-in">
                  <p className="Text">Full Stack Developer</p>
                  <br /><br />
                  <p className="Text">Personal Links</p>
                  <br />
                  <div className="social-icons">
                    <a href="https://github.com/gevoglanyan" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 496 512" fill="white">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                      </svg>
                    </a>

                    <a href="https://www.instagram.com/hgevoglanyan/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 448 512" fill="white">
                         <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                      </svg>
                    </a>

                    <a href="https://letterboxd.com/harutyun/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 448 512" fill="white">
                        <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM105.1 187C66.4 187 35 218.3 35 257s31.4 70 70.1 70c24.8 0 46.5-12.8 59-32.2l.5-.7-.4-.6c-6.5-10.6-10.2-23.1-10.2-36.5c0-13.6 3.9-26.3 10.6-37.1c-12.4-19.8-34.4-32.9-59.5-32.9zM224 187c-24.8 0-46.5 12.8-59 32.2l-.5 .7 .4 .6c6.5 10.6 10.2 23.1 10.2 36.5c0 13.6-3.9 26.3-10.6 37.1C176.9 313.8 198.9 327 224 327c24.8 0 46.5-12.8 59-32.2l.5-.7-.4-.6c-6.5-10.6-10.2-23.1-10.2-36.5c0-13.6 3.9-26.3 10.6-37.1C271.1 200.2 249.1 187 224 187zm118.9 0c-24.8 0-46.5 12.8-59 32.2l-.5 .7 .4 .6c6.5 10.6 10.2 23.1 10.2 36.5c0 13.6-3.9 26.3-10.6 37.1c12.4 19.8 34.4 32.9 59.5 32.9c38.7 0 70.1-31.3 70.1-70s-31.4-70-70.1-70z"/>
                      </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/hgevoglanyan/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 448 512" fill="white">
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                      </svg>
                    </a>

                    <a href="https://open.spotify.com/user/rjc0uhx8l8dutjlpix1bx1zhm" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 496 512" fill="white">
                        <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
                      </svg>
                    </a>

                    <a href="https://www.tiktok.com/@hgevoglanyan" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 448 512" fill="white">
                        <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                      </svg>
                    </a>
                  </div>
                  <br /><br />
                  <p className="Text">Project</p>
                  <p className="Text"><a href="https://www.iaquaaquatics.com">iAqua Aquatics</a></p>
                </div>
              )}
          </div>

          <div className={`side gaming-side ${activeSection === 'gaming' ? 'expanded' : ''}`}>
            <button className="toggle-btn" onClick={() => handleToggle('gaming')}>
              {activeSection === 'gaming' ? 'Harold' : 'Harold'}
            </button>
              {activeSection === 'gaming' && (
                <div className="content fade-in">
                  <p className="Text">Part Time Gamer</p>
                  <br /><br />
                  <p className="Text">Gaming Links</p>
                  <br />
                  <div className="social-icons">
                    <a href="https://steamcommunity.com/id/haroldfps/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 496 512" fill="white">
                        <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.8 52.8 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3 .1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/>
                      </svg>
                    </a>

                    <a href="https://www.twitch.tv/haroldfps" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 512 512" fill="white">
                        <path d="M391.2 103.5H352.5v109.7h38.6zM285 103H246.4V212.8H285zM120.8 0 24.3 91.4V420.6H140.1V512l96.5-91.4h77.3L487.7 256V0zM449.1 237.8l-77.2 73.1H294.6l-67.6 64v-64H140.1V36.6H449.1z"/>
                      </svg>
                    </a>

                    <a href="https://x.com/haroldfps" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 512 512" fill="white">
                        <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/>
                      </svg>
                    </a>
                  </div>
                  <br /><br />
                  <p className="Text">Mainly Play</p>
                  <p className="Text"><a href="https://www.bungie.net/7/en/Destiny">Destiny 2</a></p>
                </div>
              )}
          </div>
        </div>

        <div className="contact">
          <p className="WelcomeText">Keep in Touch</p>
          <br /><br /><br />
          <form
            action="https://formsubmit.co/gevoglanyan.harutyun@gmail.com"
            method="POST"
            onSubmit={() => {
              setTimeout(() => {
                setEmail("");
                setMessage("");
              }, 100);
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Send</button>
          </form>

        </div>

        <div className="Footer">
          <p>&copy; 2025 Gevoglanyan. All Rights Reserved.</p>
        </div>
      </div>

      <Analytics />
    </>
  );
}

export default App;
