import React from 'react';
import './App.css';
import Portfolio from './components/portfolio';

// Components
const Header: React.FC = () => (
  <header className="header">
    <h1>My Photography Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
    </nav>
  </header>
);

const About: React.FC = () => (
  <section id="about" className="section">
    <h2>Nansi Grotseva</h2>
    <p>
      Hi! I’m a passionate photographer specializing in portrait and architectural photography.
      My work blends technical precision with creative flair to capture moments and spaces in their best light.
    </p>
  </section>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <p>&copy; 2025 My Photography Portfolio. All rights reserved.</p>
    <p>Follow me on <a href="https://instagram.com/yourphotography">Instagram</a>.</p>
  </footer>
);

const App: React.FC = () => (
  <div className="app">
    <Header />
    <main>
      <About />
      <Portfolio />
    </main>
    <Footer />
  </div>
);

// Render the application

export default App;