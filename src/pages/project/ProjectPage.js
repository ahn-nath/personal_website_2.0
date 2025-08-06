import React from 'react';
import HeroHeader from './components/HeroHeader';
import AboutSection from './components/About';
import FeaturesSection from './components/Features';
import ArchitectureDesignSection from './components/ArchitectureDesign';
import GallerySection from './components/Gallery';
import DemoSection from './components/Demo';

const ProjectPage = () => {
  return (
    <div className="homepage-content">
        
      <HeroHeader />
      <AboutSection />
      <FeaturesSection />
      <ArchitectureDesignSection />
      <GallerySection />
      <DemoSection />
      
    </div>
  );
};

export default ProjectPage;