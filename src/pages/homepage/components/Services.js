import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = ({title, services = [], showIcon = true}) => {

  return (
    <section id="services">
      <div className="container py-5 py-xl-5 text-white px-5" style={{ background: '#222222' }}>
        <div id="services-inner-wrapper" className="py-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2 className="text-uppercase">{title}</h2>
              <p className="w-lg-50">How can I help you? I design and implement APIs, build pragmatic web MVPs, and create small automation tools to reduce repetitive work and improve delivery.</p>
            </div>
          </div>
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                iconPath={service.iconPath}
                showIcon={showIcon}
                title={service.title}
                description={service.description}
                link={service.link}
                type={service.type}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;