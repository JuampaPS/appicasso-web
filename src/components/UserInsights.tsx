import './UserInsights.css';

const UserInsights = () => (
  <section className="userinsights">
    <h2 className="userinsights__title">User insights</h2>
    <h3 className="userinsights__subtitle">Data and customer analytics that grow your business</h3>
    <p className="userinsights__desc">
      Access your own customer analytics dashboard and gain a complete view of the customer journey across POS, webshop, app, and in-store. Monitor KPIs like customer activity, retention rates and enrolment trends over time. Identify loyal segments, spot patterns, and turn data into personalized marketing. Fully GDPR compliant.
    </p>
    <div className="userinsights__img-wrapper">
      <img src="/insights.avif" alt="User Insights" className="userinsights__img" />
    </div>
  </section>
);

export default UserInsights; 