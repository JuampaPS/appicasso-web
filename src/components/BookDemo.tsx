import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './BookDemo.css';
import bookImg from '../../public/book.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    quote: "The demo made it clear how easy it is to engage our customers and track loyalty.",
    author: "Sarah M., Café Owner"
  },
  {
    quote: "After the demo, we knew APPicasso was the right choice for our business.",
    author: "James T., Restaurant Manager"
  },
  {
    quote: "The personalized walkthrough helped us understand the analytics and marketing tools.",
    author: "Linda R., Retail Director"
  }
];

export default function BookDemo() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
    // Aquí podrías enviar los datos a un backend o servicio externo
  };

  return (
    <>
      <Header />
      <main className="bookdemo">
        <div className="bookdemo__backhome">
          <Link to="/" className="bookdemo__backhome-btn">← Back to Home</Link>
        </div>
        <section className="bookdemo__header">
          <h1>Book a Free Demo</h1>
          <h2>See how APPicasso can transform your customer loyalty experience.</h2>
          <p className="bookdemo__desc">
            Get a personalized demonstration of how our all-in-one loyalty app can boost your sales, improve customer engagement, and provide valuable data insights.
          </p>
        </section>
        <section className="bookdemo__form-img-row">
          <div className="bookdemo__form-section">
            <form className="bookdemo__form" onSubmit={handleSubmit}>
              <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Name (Full Name) *" />
              <input type="text" name="business" value={form.business} onChange={handleChange} placeholder="Business Name (Optional)" />
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email Address *" />
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number (Optional)" />
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Questions or Notes (Optional)" />
              {error && <div className="bookdemo__error">{error}</div>}
              {!submitted ? (
                <>
                  <button className="bookdemo__cta" type="submit">Get started</button>
                  <div className="bookdemo__privacy">
                    By entering your email address, you consent to our <a href="#">Privacy Policy</a>
                  </div>
                </>
              ) : (
                <div className="bookdemo__success">Thank you! We will contact you soon to confirm your demo.</div>
              )}
            </form>
          </div>
          <div className="bookdemo__img-section">
            <img src={bookImg} alt="Book a demo preview" className="bookdemo__img" />
          </div>
        </section>
        <section className="bookdemo__testimonials">
          <h3>What our clients say</h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            className="bookdemo__testimonials-swiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <blockquote className="bookdemo__testimonial">
                  <p>“{t.quote}”</p>
                  <footer>- {t.author}</footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className="bookdemo__benefits">
          <h3>Benefits for your business</h3>
          <p>
            See how our customizable loyalty programs, omnichannel engagement, automated marketing, and detailed analytics can support your business growth.
          </p>
          <a href="#" className="bookdemo__secondary-cta">Get Started Today</a>
        </section>
      </main>
      <Footer />
    </>
  );
} 