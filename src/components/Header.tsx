import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <img src="/newlogo.png" alt="APPicasso Logo" height={80} />
    </div>
    <button className="header__cta">Book a Demo</button>
  </header>
);

export default Header; 