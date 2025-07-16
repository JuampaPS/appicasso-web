import './Features.css';

const features = [
  {
    title: 'Online shop inside the app',
    desc: 'Your online shop is built right into the app, making it easy for customers to browse, place orders, choose pick-up or delivery and pay while earning and using loyalty rewards along the way.',
    img: '/oshop.jpg'
  },
  {
    title: 'Cash-back, points & tiers',
    desc: 'Give customers a percentage back on every purchase as cashback stored in their wallet and let them collect points that unlock different tier levels based on total spend.',
    img: '/cash.jpg'
  },
  {
    title: 'Games',
    desc: 'Use gamification features like scratch cards and quizzes to engage customers and reward them for interacting with your brand.',
    img: '/games.jpg'
  },
  {
    title: 'Offers & campaigns',
    desc: 'Create and send personalised offers and campaigns based on customer behaviour, segments or spend.',
    img: '/offers.jpg'
  },
  {
    title: 'Push-notifications',
    desc: 'Send push notifications directly to your customers’ phones even when locked. Share offers, event invites, and keep them engaged.',
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
        <div className="features-grid__card" key={i}>
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