import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          📚 ScholarVault
        </Link>
        
        <button 
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              🏠 Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              ℹ️ About
            </Link>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link"
              onClick={() => scrollToSection('books')}
            >
              📚 Subjects
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link"
              onClick={() => scrollToSection('technical-books')}
            >
              📖 Books
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link"
              onClick={() => scrollToSection('technical-articles')}
            >
              📄 Articles
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link"
              onClick={() => scrollToSection('news')}
            >
              📰 News
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
