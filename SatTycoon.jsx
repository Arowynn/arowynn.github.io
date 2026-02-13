import { useState, useEffect } from 'react';
import './Home.css';
import ReactDOM from 'react-dom/client';

const SatTycoon = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Close lightbox on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && lightboxImage) {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

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

      {/* SAT-TYCOON TITLE SECTION */}
      <section className="sat-tycoon-page-hero">
        <h1>SAT-TYCOON</h1>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="sat-tycoon-overview-section">
        <div className="sat-tycoon-overview-content">
          <div className="sat-tycoon-overview-text">
            <h2>Overview of Sat-Tycoon</h2>
            <p>The market of mega-constellations providing internet services is rising. As in any new market, there are more competitors than what is sustainable. The challenge is to predict who will be successful and driven by which factors. Proliferated satellite systems are also creating new space logistics challenges across several disciplines.</p>
            <p>Sat-Tycoon, a multi-player strategy simulation game in which players act as satellite constellation operators who must compete to acquire customers and revenue.</p>
          </div>
          <div className="sat-tycoon-overview-image">
            <img
              src="/assets/Sat-Tycoon_Poster.PNG"
              alt="Sat-Tycoon Poster"
              onClick={() => openLightbox('/assets/Sat-Tycoon_Poster.PNG')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </section>

      {/* FELLOWSHIP 2022-2023 SECTION */}
      <section className="sat-tycoon-fellowship-section">
        <h2 className="sat-tycoon-fellowship-title">UNDERGRADUATE RESEARCH FELLOW 2022-2023</h2>
        <div className="sat-tycoon-fellowship-content">
          <div className="sat-tycoon-fellowship-image">
            <img
              src="/assets/Sat-Tycoon_Undergraduate_Fellowship_Poster_22_23.JPG"
              alt="Undergraduate Fellowship Poster 2022-2023"
              onClick={() => openLightbox('/assets/Sat-Tycoon_Undergraduate_Fellowship_Poster_22_23.JPG')}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="sat-tycoon-fellowship-text">
            <h3>Implementing a Flexible Event Pipeline to Improve User Experience in Sat-Tycoon</h3>
            <p>The event pipeline presents opportunities for creating a more immersive experience in Sat-Tycoon as players are presented with unique obstacles to overcome. Without random events, the gameplay was often repetitive and predictable, lacking the replayability that attracts players to games. Random events keep players actively considering their strategies and constantly adapting how they utilize their resources to overcome challenges. The event pipeline has added realism and complexity to the game, making the game more enjoyable for players.</p>
            <div className="sat-tycoon-fellowship-link">
              <a href="https://bpb-us-e2.wpmucdn.com/wordpress.auburn.edu/dist/a/151/files/2024/02/AUJUS-Final-1-108285964bbd256c.pdf" target="_blank" rel="noopener noreferrer">Auburn University Journal of Undergraduate Scholarship</a>
            </div>
          </div>
        </div>
      </section>

      {/* FELLOWSHIP 2023-2024 SECTION */}
      <section className="sat-tycoon-fellowship-section">
        <h2 className="sat-tycoon-fellowship-title">UNDERGRADUATE RESEARCH FELLOW 2023-2024</h2>
        <div className="sat-tycoon-fellowship-content">
          <div className="sat-tycoon-fellowship-text">
            <h3>A Centralized User Interface to Display Satellite Mega-Constellations in a Gamified System</h3>
            <p>The implementation of a centralized user interface for satellite data has significantly enhanced players' capacity to focus on strategic decision-making. This improvement was driven by three objectives: streamline the process of building and launching satellites, introduce an intuitive orbital plane visualization to communicate the effects of stochastic events, and integrate a notification system to keep players aware of the evolving game environment.</p>
            <div className="sat-tycoon-fellowship-link">
              <a href="https://bpb-us-e2.wpmucdn.com/wordpress.auburn.edu/dist/a/151/files/2025/04/Final-2024-AUJUS.pdf" target="_blank" rel="noopener noreferrer">Auburn University Journal of Undergraduate Scholarship</a>
            </div>
          </div>
          <div className="sat-tycoon-fellowship-image">
            <img
              src="/assets/Sat-Tycoon_Undergraduate_Fellowship_Poster_23_24.JPG"
              alt="Undergraduate Fellowship Poster 2023-2024"
              onClick={() => openLightbox('/assets/Sat-Tycoon_Undergraduate_Fellowship_Poster_23_24.JPG')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </section>

      {/* RESEARCH SYMPOSIUM 2024 SECTION */}
      <section className="sat-tycoon-fellowship-section">
        <div className="sat-tycoon-fellowship-content">
          <div className="sat-tycoon-fellowship-image">
            <img src="/assets/Undergraduate Research.HEIC" alt="Undergraduate Research Symposium 2024" />
          </div>
          <div className="sat-tycoon-fellowship-text">
            <h3>2024 Engineering Undergraduate Poster Presentation Winner</h3>
            <p>After three years of research I was so happy that I could end the journey by sharing what I had learned at the Auburn Research Symposium. It was an honor to be formally recognized for all the hard work I had put into my project and presentation.</p>
            <div className="sat-tycoon-fellowship-link">
              <a href="https://eng.auburn.edu/news/2024/04/engineering-students-among-the-winners-at-research-symposium" target="_blank" rel="noopener noreferrer">2024 Auburn Research Symposium</a>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={lightboxImage} alt="Full size poster" />
          </div>
        </div>
      )}

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

export default SatTycoon;

ReactDOM.createRoot(document.getElementById('root')).render(<SatTycoon />);
