import Header from './components/Header';
import AboutSection from './components/About';
import ServicesSection from './components/Services';
import WorkGallery from './components/WorkGallery';
import TestimonialsSection from './components/Testimonials';
import creditUsImg from '../../media/credit-us.jpg';
import csrSchedulerImg from '../../media/calendar.jpg';
import researchImbalancesImg from '../../media/translation.png';
import { useLanguage } from '../../context/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();

  const serviceIcons = ['bi bi-easel2', 'bi bi-fast-forward', 'bi bi-graph-up-arrow'];
  const serviceItems = t('home.services.items') || [];
  const services = serviceItems.map((item, index) => ({
    iconPath: serviceIcons[index],
    title: item.title,
    description: item.description,
    link: '#',
    type: item.type,
  }));

  const projects = [
    {
      id: 'credit-repair-system',
      image: creditUsImg,
      tags: [
        { label: 'API', color: '#0ACF83' },
        { label: '2024', color: '#0d6efd' },
      ],
      title: t('home.gallery.projects.credit-repair-system'),
    },
    {
      id: 'csr-scheduler',
      image: csrSchedulerImg,
      tags: [
        { label: 'WEB', color: '#BB0087' },
        { label: '2024', color: '#0d6efd' },
      ],
      title: t('home.gallery.projects.csr-scheduler'),
    },
    {
      id: 'research-imbalances-on-wikipedia',
      image: researchImbalancesImg,
      tags: [
        { label: 'TOOLS & SCRIPTING', color: '#0ACF83' },
        { label: '2024', color: '#0d6efd' },
      ],
      title: t('home.gallery.projects.research-imbalances-on-wikipedia'),
    },
  ];

  return (
    <div className="homepage-content">
      <Header />
      <AboutSection />
      <ServicesSection
        title={t('home.services.title')}
        services={services}
        showIcon={true}
        description={t('home.services.description')}
      />
      <WorkGallery
        title={t('home.gallery.title')}
        projects={projects}
        openModalOnClick={false}
        description={t('home.gallery.description')}
      />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
