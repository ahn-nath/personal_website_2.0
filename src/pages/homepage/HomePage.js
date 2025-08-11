import React from 'react';
import Header from './components/Header';
import AboutSection from './components/About';
import ServicesSection from './components/Services';
import WorkGallery from './components/WorkGallery';
import TestimonialsSection from './components/Testimonials';

const HomePage = () => {

  const projects = [
    {
      image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
      tags: [
        { label: "API", color: "#0ACF83" },
        { label: "2024", color: "#0d6efd" }
      ],
      title: "Lorem Ipsum"
    },
    {
      image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
      tags: [
        { label: "WEB INTEGRATION", color: "#BB0087" },
        { label: "2024", color: "#0d6efd" }
      ],
      title: "Lorem Ipsum"
    },
    {
      image: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
      tags: [
        { label: "AUTOMATION", color: "#0ACF83" },
        { label: "2024", color: "#0d6efd" }
      ],
      title: "Lorem Ipsum"
    }
  ];
  
  return (
    <div className="homepage-content">
      <Header />
      <AboutSection />
      <ServicesSection />
      <WorkGallery projects={projects} />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;