import './Hero.css';

const Hero = () => (
  <section className="hero" data-aos="fade-up">
    <div className="hero__content">
      <h1 className="hero__title">Get a fully customized all-in-one app</h1>
      <p className="hero__desc">Take control of your sales and customer loyalty with a fully tailored digital experience for restaurants and retail businesses, featuring loyalty programs, omnichannel engagement, seamless ordering, automated marketing, and data-driven insights.</p>
      <button className="hero__cta">Book a Demo <span className="cta-icon" role="img" aria-label="calendar">📅</span></button>
    </div>
    <div className="hero__image">
      <img src="/herotest.png" alt="Appicasso Hero" />
    </div>
  </section>
);

export default Hero; 