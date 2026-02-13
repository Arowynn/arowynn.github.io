import { useState } from 'react';
import './Home.css';
import ReactDOM from 'react-dom/client';

const Photography = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const alaskaPhotos = [
    'Alaska 2025-11_websize.jpg',
    'Alaska 2025-142_websize.jpg',
    'Alaska 2025-156_websize.jpg',
    'Alaska 2025-197_websize.jpg',
    'Alaska 2025-211_websize.jpg',
    'Alaska 2025-261_websize.jpg',
    'Alaska 2025-264_websize.jpg',
    'Alaska 2025-269_websize.jpg',
    'Alaska 2025-291_websize.jpg',
    'Alaska 2025-48_websize.jpg',
    'Alaska 2025-53_websize.jpg',
    'Alaska 2025-65_websize.jpg',
    'Alaska 2025-6_websize.jpg',
    'Alaska 2025-89_websize.jpg',
  ];

  const filmPhotos = [
    '000114010010_websize.jpg',
    '000114010011_websize.jpg',
    '000114010012_websize.jpg',
    '000114010014_websize.jpg',
    '000114010016_websize.jpg',
    '000114010018_websize.jpg',
    '000114010022_websize.jpg',
    '000114010023_websize.jpg',
    '000114010024_websize.jpg',
    '000114010029_websize.jpg',
    '000114010032_websize.jpg',
  ];

  const aquariumPhotos = [
    '000114010033_websize.jpg',
    'Alaska 2025-321_websize.jpg',
    'Alaska 2025-332_websize.jpg',
    'Alaska 2025-336_websize.jpg',
    'Alaska 2025-342_websize.jpg',
    'Alaska 2025-361_websize.jpg',
    'Alaska 2025-374_websize.jpg',
    'Alaska 2025-376_websize.jpg',
    'Alaska 2025-384_websize.jpg',
    'Alaska 2025-391_websize.jpg',
    'Alaska 2025-395_websize.jpg',
    'Alaska 2025-406_websize.jpg',
    'Alaska 2025-415_websize.jpg',
    'Alaska 2025-425_websize.jpg',
    'Alaska 2025-433_websize.jpg',
  ];

  // Duplicate film photos for looping effect
  const loopedFilmPhotos = [...filmPhotos, ...filmPhotos, ...filmPhotos];

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

      {/* PHOTOGRAPHY SECTION */}
      <section className="photography-main">
        <div className="photography-title">
          <img src="/assets/Photography_Title.svg" alt="Photography" />
        </div>
        <div className="photography-text">
          <p>
            I enjoy creating portraits for family and friends.<br />
            But here I want to highlight some unforgettable moments from a trip to Alaska...
          </p>
        </div>
      </section>

      {/* ALASKA GALLERY SECTION */}
      <section className="alaska-gallery">
        <div className="alaska-title">
          <h2 className="gallery-title-text">Alaska</h2>
        </div>
        <div className="alaska-grid-container">
          <div className="alaska-grid">
            {alaskaPhotos.map((photo, index) => (
              <img key={index} src={`/assets/Alaska_Digitals/${photo}`} alt={`Alaska ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="film-title">
          <h2 className="gallery-title-text">Alaska On Film</h2>
        </div>
      </section>

      {/* FILM CAROUSEL SECTION */}
      <section className="film-carousel-section">
        <div className="film-carousel">
          {loopedFilmPhotos.map((photo, index) => (
            <div key={index} className="film-carousel-item">
              <img src={`/assets/Alaska_on_Film/${photo}`} alt={`Alaska Film ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* VANCOUVER AQUARIUM SECTION */}
      <section className="aquarium-gallery">
        <div className="aquarium-title">
          <h2 className="gallery-title-text">Vancouver Aquarium</h2>
        </div>
        <div className="aquarium-grid-container">
          <div className="aquarium-grid">
            {aquariumPhotos.map((photo, index) => (
              <img key={index} src={`/assets/Aqua/${photo}`} alt={`Aquarium ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* MORE FILM SECTION */}
      <section className="more-film-section">
        <div className="more-film-content">
          <p className="more-film-text">My New Years Resolution is to capture more moments on film</p>
          <h2 className="gallery-title-text">More Film Coming Soon!</h2>
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

export default Photography;

ReactDOM.createRoot(document.getElementById('root')).render(<Photography />);
