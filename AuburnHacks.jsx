import { useState } from 'react';
import './Home.css';
import ReactDOM from 'react-dom/client';

const AuburnHacks = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">
      {/* HEADER SECTION */}
      <header className="header">
        <div className="logo">
          <a href="index.html">
            <img src="/assets/Emily_Morgan.svg" alt="Emily Morgan Logo" />
          </a>
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

      {/* AUBURN HACKS HERO SECTION */}
      <section className="auburn-hacks-hero">
        <h1>AUBURN HACKS</h1>
      </section>

      {/* CAMPING CONTENT SECTION */}
      <section className="computer-2020-section">
        <div className="computer-2020-image">
          <img src="/assets/Auburn Hacks 2021.jpg" alt="Auburn Hacks 2021" />
        </div>
        <div className="computer-2020-text">
          <h2>AUBURN HACKS 2021</h2>
          <h3>Marketing Team Member</h3>
          <p>The team put on the first completely virtual Hackathon in Auburn's history hosting 137 attendees. The weekend celebrated the intersection of technology and community.</p>
          <a href="https://auburnhacks.devpost.com/project-gallery" target="_blank" rel="noopener noreferrer" className="section-button">SEE MORE ABOUT AUBURN HACKS 2021</a>
        </div>
      </section>

      {/* CAMPING 2022 SECTION */}
      <section className="camping-2022-section">
        <div className="camping-2022-content">
          <div className="camping-2022-text">
            <h2>AUBURN HACKS 2022</h2>
            <h3>Marketing Director</h3>
            <p>This was the first themed Hackathon at Auburn. We had a blast camping out on campus and coding the night away!</p>
            <a href="https://auburnhacks2022.devpost.com/project-gallery" target="_blank" rel="noopener noreferrer" className="section-button">SEE MORE ABOUT AUBURN HACKS 2022</a>
          </div>
          <div className="camping-2022-image">
            <img src="/assets/Hackathon 2022.jpg" alt="Auburn Hacks 2022" />
          </div>
        </div>
        <img src="/assets/Camp Border.svg" alt="" className="camp-border-svg" />
      </section>

      {/* BEACH 2023 SECTION */}
      <section className="beach-2023-section">
        <div className="beach-2023-content">
          <div className="beach-2023-image">
            <img src="/assets/Auburn Hacks 2023.JPG" alt="Auburn Hacks 2023" />
          </div>
          <div className="beach-2023-text">
            <h2>AUBURN HACKS 2023</h2>
            <h3>Marketing Director</h3>
            <p>Wanting to escape the cold the team put on a weekend in paradise. This hackathon was designed to put the fun in function. The team hosted tech talks, workshop and plenty of team building events to break up the event.</p>
            <a href="https://auburnhacks-2023.devpost.com/participants" target="_blank" rel="noopener noreferrer" className="section-button">SEE MORE ABOUT AUBURN HACKS 2023</a>
          </div>
        </div>
        <img src="/assets/Beach Border.svg" alt="" className="beach-border-svg" />
      </section>

      {/* SPACE 2024 SECTION */}
      <section className="space-2024-section">
        <img src="/assets/stars.svg" alt="" className="space-stars-svg" />
        <div className="space-2024-content">
          <div className="space-2024-text">
            <h2>AUBURN HACKS 2024</h2>
            <h3>Marketing Director</h3>
            <p>Creating a hackathon that was out of this world was a lot of work. The team spent countless hours planning every detail of the experience from the swag bag to the final announcements. This weekend hosted a record breaking 275 attendees!</p>
            <a href="https://auburnhacks-2024.devpost.com/project-gallery" target="_blank" rel="noopener noreferrer" className="section-button">SEE MORE ABOUT AUBURN HACKS 2024</a>
          </div>
          <div className="space-2024-image">
            <img src="/assets/Auburn Hacks 2024.jpg" alt="Auburn Hacks 2024" />
          </div>
        </div>
        <img src="/assets/Space Border.svg" alt="" className="space-border-svg" />
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

export default AuburnHacks;

ReactDOM.createRoot(document.getElementById('root')).render(<AuburnHacks />);
