import React from 'react';
import Header from './components/Header';
import AboutSection from './components/About';
import ServicesSection from './components/Services';
import WorkGallery from './components/WorkGallery';
import TestimonialsSection from './components/Testimonials';

const HomePage = () => {
  return (
    <div className="homepage-content">
      <Header />
      <AboutSection />
      <ServicesSection />
      <WorkGallery />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;