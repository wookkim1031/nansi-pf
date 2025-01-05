import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// Components
const Header: React.FC = () => (
  <header className="header">
    <h1>My Photography Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const About: React.FC = () => (
  <section id="about" className="section">
    <h2>About Me</h2>
    <p>
      Hi! I’m a passionate photographer specializing in portrait and architectural photography.
      My work blends technical precision with creative flair to capture moments and spaces in their best light.
    </p>
  </section>
);

const Portfolio: React.FC = () => (
  <section id="portfolio" className="section">
    <h2>Portfolio</h2>
    <div className="portfolio-grid">
      {/* Replace with dynamic images */}
      <div className="portfolio-item"><img src="/path/to/image1.jpg" alt="Portrait 1" /></div>
      <div className="portfolio-item"><img src="/path/to/image2.jpg" alt="Architecture 1" /></div>
      <div className="portfolio-item"><img src="/path/to/image3.jpg" alt="Portrait 2" /></div>
      <div className="portfolio-item"><img src="/path/to/image4.jpg" alt="Architecture 2" /></div>
    </div>
  </section>
);

const Contact: React.FC = () => (
  <section id="contact" className="section">
    <h2>Contact Me</h2>
    <form className="contact-form">
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Message:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
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
      <Contact />
    </main>
    <Footer />
  </div>
);

// Render the application

export default App;