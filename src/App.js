import React from 'react';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className="App">
        <br />
        <br />
        <header className="App-Header">
          <img src="Harold.jpg" alt="Harold" />
          <br />
          <p>Coming Soon!</p>
          <br />
          <p>
            Visit <a href="https://iaquaaquatics.com" target="_blank" rel="noopener noreferrer">iAqua Aquatics</a>
          </p>
        </header>

        <div className="footer">
          <p>&copy; 2025 Gevoglanyan. All Rights Reserved.</p>
        </div>
      </div>

      <Analytics />
    </>
  );
}

export default App;
