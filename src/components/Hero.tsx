import './Hero.css';

const Hero = () => (
  <section className="hero" data-aos="fade-up">
    <div className="hero__content">
      <h1 className="hero__title hero__title--main">Get a fully customized</h1>
      <div className="hero__subtitle">all-in-one app</div>
      <p className="hero__desc">
        Take control of your <span className="hero__desc--bold">sales</span> and <span className="hero__desc--bold">customer loyalty</span> with a fully tailored digital experience for restaurants and retail businesses, featuring loyalty programs, omnichannel engagement, seamless ordering, automated marketing, and data-driven insights.
      </p>
      <button className="hero__cta">Book a demo <span className="cta-icon" role="img" aria-label="calendar">📅</span></button>
    </div>
    <div className="hero__image">
      <img src="/herotest.png" alt="Appicasso Hero" />
    </div>
  </section>
);

export default Hero; 