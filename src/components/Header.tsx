import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <img src="/newlogo.png" alt="APPicasso Logo" height={80} />
    </div>
    <button className="header__cta">Book a Demo <span className="cta-icon" role="img" aria-label="calendar">📅</span></button>
  </header>
);

export default Header; 