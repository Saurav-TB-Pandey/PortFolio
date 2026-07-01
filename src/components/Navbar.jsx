import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // 🔐 Secret Easter Egg: double-click logo to toggle
  const [secretActive, setSecretActive] = useState(() => {
    return localStorage.getItem('sk_secret_theme') === 'true';
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLogoDoubleClick = () => {
    if (isTransitioning) return; // Prevent spam clicking during transition
    setIsTransitioning(true);

    // Switch theme halfway through the flash animation (400ms)
    setTimeout(() => {
      const newState = !secretActive;
      setSecretActive(newState);
      localStorage.setItem('sk_secret_theme', newState ? 'true' : 'false');

      if (newState) {
        document.documentElement.setAttribute('data-theme', 'secret');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    }, 400);

    // Remove overlay after animation completes (800ms)
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Apply secret theme on mount if previously activated
  useEffect(() => {
    if (secretActive) {
      document.documentElement.setAttribute('data-theme', 'secret');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section on scroll
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (sectionId) => {
    setIsOpen(false);
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${secretActive ? 'secret-mode' : ''}`}>
        <div className="container nav-container">
          <a
            href="#home"
            className={`nav-logo ${secretActive ? 'secret-logo' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
            onDoubleClick={handleLogoDoubleClick}
          >
            <Terminal size={22} />
            <span>Saurav</span>.dev
            {secretActive && <span className="secret-indicator">◉</span>}
          </a>

          <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <li>
              <a
                href="#home"
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('skills'); }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('experience'); }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('projects'); }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-cta">
            <a href="#contact" className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }} onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}>
              Let's Talk <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </nav>

      {/* Cyberpunk Scanline Transition Overlay */}
      {isTransitioning && <div className="theme-transition-overlay"></div>}
    </>
  );
};

export default Navbar;
