import React from 'react';
import HeroHeader from './components/HeroHeader';
import AboutSection from './components/About';
import ArchitectureDesignSection from './components/ArchitectureDesign';
import DemoSection from './components/Demo';
import WorkGallery from '../homepage/components/WorkGallery';
import ServicesSection from '../homepage/components/Services';

const ProjectPage = () => {
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
        
      <HeroHeader />
      <AboutSection />
      {/*TODO 1: Update the card to be flexible with data, as the style and structure is the same */}
      <ServicesSection />
      <ArchitectureDesignSection />
      <WorkGallery projects={projects} />
      <DemoSection />
      
    </div>
  );
};

export default ProjectPage;