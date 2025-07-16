import { useEffect } from 'react';
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
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

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

export default App;
