import { useState } from 'react';
import './Home.css';
import ReactDOM from 'react-dom/client';

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [revealedCards, setRevealedCards] = useState([false, false, false]);

  const gameCards = [
    {
      question: "Videos of me are on promotional videos at the Space & Rocket Center in Huntsville",
      answer: "THIS IS TRUE - to this day I occasionally get messages letting me know that videos of young me are still being used"
    },
    {
      question: "My whole family got Scuba certified in Honduras on a family vacation",
      answer: "THIS IS TRUE - We were not swim tested until the 3rd day of training"
    },
    {
      question: "I got married at the Train Depot that hosted my High School Prom",
      answer: "THIS IS THE LIE - though we did consider it we decided to get married on Monte Sano overlooking the Huntsville Rocket"
    }
  ];

  const handleCardClick = (index) => {
    const newRevealed = [...revealedCards];
    newRevealed[index] = !newRevealed[index];
    setRevealedCards(newRevealed);
  };

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

      {/* ABOUT ME SECTION */}
      <section className="about">
        <div className="about-content">
          <h2>ABOUT ME</h2>
          <div className="about-logo">
            <img src="/assets/Emily_Morgan.svg" alt="Emily Morgan" />
          </div>
          <p>
            I live to create whether that is building software applications that improve people's day to day lives or capturing photos that last a lifetime and beyond.
          </p>
          <p>
            I was born in Texas and moved in Alabama after my Dad retired from the military. I loved growing up in Huntsville surrounded by innovation. I am so grateful to the Space and Rocket center for inviting me to attend Cyber Camp and changing my life. Before that experience, I never saw myself as a future engineer the math was intimidating but after that week I saw the beauty of coding. Coding is like any other kind of art; there are many ways to achieve the same result but it is up to you as the artist to create the path.
          </p>
        </div>
      </section>

      {/* THESE DAYS SECTION */}
      <section className="these-days">
        <div className="these-days-content">
          <div className="these-days-text">
            <h2>THESE DAYS</h2>
            <p>
              After graduating from Auburn University in May 2024, I started working in the industry and working on projects that are constantly being improved to fit customer needs.
            </p>
            <p>
              In February of 2026, I moved to Denver, CO. I huge move for my husband and I, but one we couldn't be more excited about.
            </p>
            <p>
              When I am not programming, I am probably editing photos, attending American Sign Language events or enjoying the beautiful scenery of Colorado.
            </p>
          </div>
          <div className="these-days-image">
            <img src="/assets/Ski-ing_In_Colorado.JPG" alt="Skiing in Colorado" />
          </div>
        </div>
      </section>

      {/* TWO TRUTHS & A LIE SECTION */}
      <section className="game-section">
        <h2>TWO TRUTHS & A LIE</h2>
        <div className="game-cards">
          {gameCards.map((card, index) => (
            <div
              key={index}
              className="game-card"
              onClick={() => handleCardClick(index)}
            >
              <div className="card-shadow"></div>
              <div className="card-content">
                <p>{revealedCards[index] ? card.answer : card.question}</p>
              </div>
            </div>
          ))}
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

export default About;

ReactDOM.createRoot(document.getElementById('root')).render(<About />);
