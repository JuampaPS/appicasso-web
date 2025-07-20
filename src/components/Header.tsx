import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <img src="/newlogo.png" alt="APPicasso Logo" height={80} />
    </div>
    <Link to="/book-demo" className="header__cta">
      Book a Demo <span className="cta-icon" role="img" aria-label="calendar">📅</span>
    </Link>
  </header>
);

export default Header; 