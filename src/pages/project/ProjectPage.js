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
      <HeroHeader title={project ? project.title : "Project Title"} subtitle={project ? project.subtitle : "Project Subtitle"} technologies={project ? project.technologies : []} />
      <AboutSection description={project ? project.description : "Project description..."} general_details={project ? project.general_details : []} />
      <ServicesSection title={"Features"} services={project ? project.features : []} />
      <ArchitectureDesignSection />
      <WorkGallery title={"Gallery"} projects={project ? project.gallery_items : []} openModalOnClick={true} />
      <DemoSection project_links={project ? project.project_links : []} />
    </div>
  );
};

export default ProjectPage;