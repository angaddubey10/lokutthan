import { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo - 1.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Lok Utthan Foundation Logo" className="logo-image" />
          <h1>Lok Utthan Foundation</h1>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
          <li><a href="#programs" onClick={() => setIsMenuOpen(false)}>Our Programs</a></li>
          <li><a href="#impact" onClick={() => setIsMenuOpen(false)}>Impact</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          <li><a href="#donate" className="donate-btn" onClick={() => setIsMenuOpen(false)}>Donate</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
