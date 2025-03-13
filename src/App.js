import React from 'react';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-Header">
          <img src="Harold.jpg" alt="Harold" />
          <br />
          <p>Gevoglanyan</p>
          <br />
          <p>Coming Soon!</p>
        </header>
      </div>

      <Analytics />
    </>
  );
}

export default App;
