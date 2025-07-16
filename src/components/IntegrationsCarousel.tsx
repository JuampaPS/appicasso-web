import './IntegrationsCarousel.css';

const integrations = [
  'OnlinePOS.webp',
  'Navipartner.webp',
  'Ajour.webp',
  'BakerPOS.webp',
  'Meta.webp',
  'Shopify.webp',
  'Shopify-plus.webp',
  'Customer-1st.png',
  'Adobe-for-Business-Magento-1.webp',
  'Microsoft.webp',
  'Oracle.webp',
  'Klaviyo-1.webp',
  'Resolution.webp',
  'Crunchorder.webp',
  'Mailchimp.webp',
  'Flexybox.webp'
];

const IntegrationsCarousel = () => (
  <section className="integrations">
    <h2 className="integrations__title">Integrations</h2>
    <p className="integrations__desc">Plug into your existing setup.</p>
    <div className="integrations__scroll">
      {integrations.map((src, i) => (
        <div className="integrations__logo" key={i}>
          <img src={`/integrationspics/${src}`} alt={src.replace(/[-_.]/g, ' ').replace(/\..+$/, '')} />
        </div>
      ))}
    </div>
  </section>
);

export default IntegrationsCarousel; 