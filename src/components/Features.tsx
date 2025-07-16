import './Features.css';

const features = [
  {
    title: 'Integrated online store within the app',
    desc: 'Your store is seamlessly integrated into the app, allowing customers to easily explore products, place orders, select between pick-up or delivery, and make payments—all while earning and redeeming loyalty rewards.',
    img: '/oshop.jpg'
  },
  {
    title: 'Cash-back, points & tiers',
    desc: 'Reward customers with a percentage back on each purchase as cashback in their wallet, and allow them to accumulate points that unlock various tier levels based on their total spending.',
    img: '/cash.jpg'
  },
  {
    title: 'Gamification',
    desc: 'Incorporate interactive features like scratch cards and quizzes to engage customers and offer rewards for their interaction with your brand.',
    img: '/games.jpg'
  },
  {
    title: 'Promotions & Campaigns',
    desc: 'Design and deliver personalized offers and campaigns tailored to customer behavior, segments, or spending patterns.',
    img: '/offers.jpg'
  },
  {
    title: 'Push-notifications',
    desc: 'Deliver push notifications directly to your customers devices, even when their screen is locked. Keep them engaged by sharing offers, event invitations, and updates.',
    img: '/push.jpg'
  },
  {
    title: 'And so much more!',
    desc: 'We can build custom features and experiences tailored to your business needs. Just tell us what you want, and we make it happen!',
    img: '/more.jpg'
  }
];

const Features = () => (
  <section className="features-grid">
    <h2 className="features-grid__title">Features that make a difference</h2>
    <div className="features-grid__container">
      {features.map((f, i) => (
        <div className="features-grid__card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
          <div className="features-grid__text">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
          <div className="features-grid__img">
            <img src={f.img} alt={f.title} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Features; 