import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Omnichannel from './components/Omnichannel';
import UserInsights from './components/UserInsights';
import BrandShowcase from './components/BrandShowcase';
import IntegrationsCarousel from './components/IntegrationsCarousel';
import Footer from './components/Footer';

function App() {
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
