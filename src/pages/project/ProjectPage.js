import projects from '../../data/projectsData';
import HeroHeader from './components/HeroHeader';
import AboutSection from './components/About';
import ArchitectureDesignSection from './components/ArchitectureDesign';
import DemoSection from './components/Demo';
import WorkGallery from '../homepage/components/WorkGallery';
import ServicesSection from '../homepage/components/Services';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  return (
    <div className="homepage-content">
      <HeroHeader />
      <AboutSection />
      <ServicesSection title={"Features"} services={project ? project.features : []} />
      <ArchitectureDesignSection />
      <WorkGallery title={"Gallery"} projects={project ? project.gallery_items : []} />
      <DemoSection />
    </div>
  );
};

export default ProjectPage;