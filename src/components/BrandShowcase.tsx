import './BrandShowcase.css';

const BrandShowcase = () => (
  <section className="brandshowcase">
    <h2 className="brandshowcase__title">Your brand, your app!</h2>
    <p className="brandshowcase__desc">Customize your own white-label app. Tap a logo to see how brands make it their own!</p>
    <div className="brandshowcase__img-wrapper">
      <img src="/yourbrand.png" alt="Your brand app" className="brandshowcase__img" />
    </div>
  </section>
);

export default BrandShowcase; 