import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false); // Close dropdown when toggling main menu
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-icon">📚</span>
          <span className="logo-text">ScholarVault</span>
        </Link>
        
        <button 
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div className={`nav-menu-wrapper ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-overlay" onClick={closeMenu}></div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">ℹ️</span>
                <span className="nav-text">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('books')}
              >
                <span className="nav-icon">📚</span>
                <span className="nav-text">Subjects</span>
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('technical-books')}
              >
                <span className="nav-icon">📖</span>
                <span className="nav-text">Books</span>
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('technical-articles')}
              >
                <span className="nav-icon">📄</span>
                <span className="nav-text">Articles</span>
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('news')}
              >
                <span className="nav-icon">📰</span>
                <span className="nav-text">News</span>
              </button>
            </li>
            <li className="nav-item dropdown">
              <button 
                className={`nav-link dropdown-toggle ${isDropdownOpen ? 'active' : ''}`}
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                <span className="nav-icon">📂</span>
                <span className="nav-text">More Resources</span>
                <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              <div className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
                <button 
                  className="dropdown-item"
                  onClick={() => scrollToSection('additional-resources')}
                >
                  <span className="dropdown-icon">🎯</span>
                  <span className="dropdown-text">All Resources</span>
                </button>
                <Link 
                  to="/notes" 
                  className={`dropdown-item ${location.pathname === '/notes' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="dropdown-icon">📝</span>
                  <span className="dropdown-text">Study Notes</span>
                </Link>
                <Link 
                  to="/competitive-exams" 
                  className={`dropdown-item ${location.pathname === '/competitive-exams' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="dropdown-icon">🎯</span>
                  <span className="dropdown-text">Competitive Exams</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
