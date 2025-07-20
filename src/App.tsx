import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Omnichannel from './components/Omnichannel';
import UserInsights from './components/UserInsights';
import BrandShowcase from './components/BrandShowcase';
import IntegrationsCarousel from './components/IntegrationsCarousel';
import Footer from './components/Footer';
import BookDemo from './components/BookDemo';
import './App.css';

function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Omnichannel />
      <UserInsights />
      <BrandShowcase />
      <IntegrationsCarousel />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/book-demo" element={<BookDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
