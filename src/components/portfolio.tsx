import React from 'react';
import portrait1 from '../pictures/1.jpg';
import portrait2 from '../pictures/2.jpg';
import portrait3 from '../pictures/3.jpg';
import portrait4 from '../pictures/4.jpg';

const Portfolio: React.FC = () => (
    <section id="portfolio" className="section">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
      <div className="portfolio-item">
        <img src={portrait1} alt="Portrait 1" />
      </div>
      <div className="portfolio-item">
        <img src={portrait2} alt="Portrait 2" />
      </div>
      <div className="portfolio-item">
        <img src={portrait3} alt="Portrait 3" />
      </div>
      <div className="portfolio-item">
        <img src={portrait4} alt="Portrait 4" />
      </div>
      </div>
    </section>
  );

export default Portfolio