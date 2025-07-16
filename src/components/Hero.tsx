import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero__content">
      <h1 className="hero__title">Get a custom branded all-in-one app</h1>
      <p className="hero__desc">Take control of your sales and customer loyalty with a fully tailored digital experience for restaurants and retail businesses, featuring loyalty, omnichannel engagement, seamless ordering, automated marketing, and data-driven insights.</p>
      <button className="hero__cta">Book a Demo</button>
    </div>
    <div className="hero__image">
      <img src="/herotest.png" alt="Appicasso Hero" />
    </div>
  </section>
);

export default Hero; 