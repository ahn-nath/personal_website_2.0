import Header from './components/Header';
import AboutSection from './components/About';
import ServicesSection from './components/Services';
import WorkGallery from './components/WorkGallery';
import TestimonialsSection from './components/Testimonials';
import creditUsImg from "../../media/credit-us.jpg";
import csrSchedulerImg from "../../media/calendar.jpg";
import researchImbalancesImg from "../../media/translation.png";


const HomePage = () => {

  const services = [
    {
      iconPath: "bi bi-easel2",
      title: "CLOUD ARCHITECTURE & DEVELOPMENT",
      description: "End-to-end design, deployment, and scaling of cloud-native applications. I architect robust, fault-tolerant software that guarantee high availability and system reliability for local and global markets.",
      link: "#",
      type: "Tag name: Architecture design, Software engineering"
    },
     {
      iconPath: "bi bi-fast-forward",
      title: "ENTERPRISE WORKFLOW AUTOMATION",
      description: "Eliminating manual bottlenecks through programmatic solutions. I engineer custom data pipelines, system integrations, and scripts that drastically reduce operational overhead and accelerate business delivery.",
      link: "#",
      type: "Tag name: Tools & Scripting"
    },
    {
      iconPath: "bi bi-graph-up-arrow",
      title: "Consultancy",
      description: "Strategic advisory: Expert software architecture design to help businesses build and scale reliable cloud systems, OR high-leverage performance frameworks to guide independent professionals across any industry in optimizing and scaling their freelance operations.",
      link: "#",
      type: "Tag name: Mentorship"
    }
  ];

  // TODO: This has to come from the central projects object
  const projects = [
    {
      id: "credit-repair-system",
      image: creditUsImg,
      tags: [
        { label: "API", color: "#0ACF83" },
        { label: "2024", color: "#0d6efd" }
      ],
      title: "Credit Repair System"
    },
    
    {
      id: "csr-scheduler",
      image: csrSchedulerImg,
      tags: [
        { label: "WEB", color: "#BB0087" },
        { label: "2024", color: "#0d6efd" }
      ],
      title: "CSR Scheduler Application"
    },
    
    {
      id: "research-imbalances-on-wikipedia",
      image: researchImbalancesImg,
      tags: [
        { label: "TOOLS & SCRIPTING", color: "#0ACF83" },
        { label: "2024", color: "#0d6efd" }
      ],
      title: "Research imbalances on Wikipedia"
    }
  ];
  
  return (
    <div className="homepage-content">
      <Header />
      <AboutSection />
      <ServicesSection title={"Core Services"} services={services} showIcon={true} description={"How can I help you? I design and implement APIs, build pragmatic web MVPs, and create small automation tools to reduce repetitive work and improve delivery."} />
      <WorkGallery title={"Work Gallery"} projects={projects} openModalOnClick={false} description={"Selected, relevant projects. Click a card to read a detailed case page describing the problem, approach and outcome."} />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;