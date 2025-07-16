import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__main">
      <div className="footer__logo">
        <img src="/newlogo.png" alt="APPicasso Logo" height={80} />
      </div>
      <div className="footer__sections">
        <div className="footer__section">
          <h4>Contact</h4>
          <p>info@appicasso.com</p>
          <p>+1 234 567 890</p>
        </div>
        <div className="footer__section">
          <h4>Follow</h4>
          <div className="footer__socials">
            <span className="footer__icon">🔗</span>
            <span className="footer__icon">🐦</span>
            <span className="footer__icon">📸</span>
          </div>
        </div>
        <div className="footer__section">
          <h4>Legal</h4>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <span>© {new Date().getFullYear()} APPicasso</span>
    </div>
  </footer>
);

export default Footer; 