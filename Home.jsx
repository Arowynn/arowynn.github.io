import { useState, useEffect } from 'react';
import './Home.css';
import ReactDOM from 'react-dom/client';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ['SOFTWARE ENGINEER', 'DESIGNER', 'PHOTOGRAPHER'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 20000); // Change every 20 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="home">
      {/* HEADER SECTION */}
      <header className="header">
        <div className="logo">
          <img src="/assets/Emily_Morgan.svg" alt="Emily Morgan Logo" />
        </div>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="about.html" onClick={() => setMenuOpen(false)}>ABOUT</a>
          <a href="projects.html" onClick={() => setMenuOpen(false)}>PROJECTS</a>
          <a href="photography.html" onClick={() => setMenuOpen(false)}>PHOTOGRAPHY</a>
        </nav>

        <div className="header-right">
          <div className="header-icons">
            {/* Resume Link */}
            <a href="/assets/Emily Morgan Resume 2026.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </a>

            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/emily-morgan-89b299221/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 key={titleIndex} className="animated-title">{titles[titleIndex]}</h1>
          <div className="hero-logo">
            <img src="/assets/Emily_Morgan.svg" alt="Emily Morgan" />
          </div>
        </div>
      </section>

      {/* SAT-TYCOON SECTION */}
      <section className="sat-tycoon-section">
        <div className="sat-tycoon-content">
          <div className="sat-tycoon-image">
            <img src="/assets/Sat-Tycoon.JPG" alt="Sat-Tycoon" />
          </div>
          <div className="sat-tycoon-text">
            <h2>MY TIME AT AUBURN</h2>
            <h3>SAT-TYCOON</h3>
            <p>
              During my sophomore year, I was accepted into Auburn's Undergraduate Research Fellowship to expand the capabilities of Sat-Tycoon: a gamified, educational model of the satellite internet industry funded by the Air Force Research Laboratory. My first fellowship focused on implementing stochastic events in a Python game server to simulate challenges to the satellite industry. My second fellowship centered on redesigning user interface (UI) elements (using REACT) to teach players about orbital dynamics, costs, and constellation coverage. These improvements enabled players to develop more complex strategies and learn industry concepts through gameplay. Over the course of the project, I presented my work at three research symposiums and earned 1st Place for Undergraduate Engineering at the 2024 Auburn Student Research Symposium.
            </p>
            <div className="sat-tycoon-link">
              <a href="sat-tycoon.html">MORE ABOUT SAT-TYCOON</a>
            </div>
          </div>
        </div>
      </section>

      {/* AUBURN HACKS SECTION */}
      <section className="auburn-hacks-section">
        <div className="auburn-hacks-content">
          <h2>AUBURN HACKS</h2>
          <p className="auburn-hacks-description">
            Auburn Hacks is an event that encourages students to innovate and build together. During the hack-a-thon students have opportunities to meet with industry partners, attend workshop and collaborate to build out of this world projects. The partners, MLH, call it an "invention marathon"
          </p>
          <div className="auburn-hacks-bottom">
            <div className="auburn-hacks-left">
              <p className="auburn-hacks-roles">
                Marketing Director 2022-2024 Responsible for delegating tasks, collaborating with other team leads, and coordinating digital content to create an enriching and memorable experience for participants.
              </p>
              <p className="auburn-hacks-roles">
                Marketing Team Member 2020-2021 Responsible for creating digital content for social media, merchandising, and general advertising of the event.
              </p>
              <div className="auburn-hacks-link">
                <a href="auburn-hacks.html">MORE ABOUT AUBURN HACKS</a>
              </div>
            </div>
            <div className="auburn-hacks-image">
              <img src="/assets/Hackathon.JPG" alt="Auburn Hacks" />
            </div>
          </div>
        </div>
      </section>

      {/* PODCAST SECTION */}
      <section className="podcast-section">
        <div className="podcast-content">
          <div className="podcast-icon">
            <img src="/assets/podcast.svg" alt="Podcast" />
          </div>
          <div className="podcast-text">
            <h2>Want to hear more about my time at Auburn?</h2>
            <p>I had the opportunity to talk about everything Auburn on the Just Ginning Podcast</p>
            <div className="podcast-link">
              <a href="https://eng.auburn.edu/news/2024/03/ginning-podcast-emily-kimbrell" target="_blank" rel="noopener noreferrer">JUST GINNING PODCAST</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="site-footer">
        <p className="footer-tagline">Want to see more of what I am working on?</p>
        <hr className="footer-divider" />
        <div className="footer-content">
          <div className="footer-logo">
            <a href="index.html">
              <img src="/assets/Emily_Morgan.svg" alt="Emily Morgan Logo" />
            </a>
          </div>
          <nav className="footer-nav">
            <a href="about.html">ABOUT</a>
            <a href="projects.html">PROJECTS</a>
            <a href="photography.html">PHOTOGRAPHY</a>
          </nav>
          <div className="footer-icons">
            <a href="/assets/Emily Morgan Resume 2026.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/emily-morgan-89b299221/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
