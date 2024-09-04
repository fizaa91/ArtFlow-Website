import React from 'react';
import { FaShoppingCart, FaMoon, FaSun, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ isDarkMode }) => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleToggleDarkMode = () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>ArtFlow</h1>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li>
            <a href="/" onClick={() => handleScroll('home')}>Home</a>
          </li>
          <li className="collection" onClick={handleDropdownToggle}>
            <a href="#collection">Collection <FaChevronDown className="dropdown-icon" /></a>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li><a href="/WildlifePage" onClick={() => handleScroll('wildlife')}>Wildlife</a></li>
                <li><a href="/CitiesPage" onClick={() => handleScroll('cities')}>Cities</a></li>
                <li><a href="/PortraitsPage" onClick={() => handleScroll('portraits')}>Portraits</a></li>
                <li><a href="/NaturePage" onClick={() => handleScroll('nature')}>Nature</a></li>
              </ul>
            )}
          </li>
          <li>
            <a href="#about" onClick={() => handleScroll('about')}>About Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-icons">
        <FaShoppingCart className="icon" />
        {isDarkMode ? (
          <FaSun className="icon" onClick={handleToggleDarkMode} />
        ) : (
          <FaMoon className="icon" onClick={handleToggleDarkMode} />
        )}
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </nav>
  );
};

export default Navbar;
