import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Aquí se podría integrar con un servicio de email marketing
      console.log('Newsletter subscription:', email);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Newsletter Section */}
        <div className="footer__newsletter" data-aos="fade-up">
          <div className="footer__newsletter-content">
            <h3>Stay Updated with APPicasso</h3>
            <p>Get the latest insights on omnichannel commerce and exclusive updates.</p>
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="footer__newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            ) : (
              <div className="footer__newsletter-success">
                <span>✅ Thank you for subscribing!</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer__main">
          {/* Company Info */}
          <div className="footer__section footer__company">
            <div className="footer__logo">
              <img src="/newlogo.png" alt="APPicasso Logo" />
            </div>
            <p className="footer__company-desc">
              Empowering businesses with seamless omnichannel commerce solutions. 
              Connect, sell, and grow across all channels.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="LinkedIn" className="footer__social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="footer__social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="footer__social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer__section">
            <h4>Product</h4>
            <ul className="footer__links">
              <li><a href="#features">Features</a></li>
              <li><a href="#integrations">Integrations</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#demo">Request Demo</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer__section">
            <h4>Company</h4>
            <ul className="footer__links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer__section">
            <h4>Support</h4>
            <ul className="footer__links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#status">System Status</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h4>Contact</h4>
            <div className="footer__contact">
              <p>📧 info@appicasso.com</p>
              <p>📞 +1 234 567 890</p>
              <p>📍 123 Commerce St, Suite 100<br />New York, NY 10001</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <span>© {new Date().getFullYear()} APPicasso. All rights reserved.</span>
            <div className="footer__legal">
              <a href="#terms">Terms & Conditions</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 