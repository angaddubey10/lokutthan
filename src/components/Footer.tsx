import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="donate" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Lok Utthan Foundation</h3>
            <p>
              Empowering communities through health education, legal advocacy, 
              and sustainable development for a just and equitable society.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Our Programs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Work</h4>
            <ul>
              <li><a href="#programs">Health Education</a></li>
              <li><a href="#programs">Legal Aid</a></li>
              <li><a href="#programs">Women Empowerment</a></li>
              <li><a href="#programs">Child Welfare</a></li>
              <li><a href="#programs">Rural Development</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support Us</h4>
            <p className="donate-text">
              Your contribution helps us create lasting change in communities. 
              Every donation makes a difference.
            </p>
            <button className="footer-donate-btn">Donate Now</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Lok Utthan Foundation. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
