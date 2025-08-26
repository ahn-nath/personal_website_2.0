// components/WorkGallery.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import Pagination from './Pagination';

const WorkGallery = ({title, projects = []}) => {

  return (
    <section id="work-gallery" className="photo-gallery py-5 py-xl-5">
      <div className="container py-5" style={{ background: 'url("/background-container-work-gallery.png") bottom/contain' }}>
        <div className="row">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="text-uppercase">{title}</h2>
            <p className="w-lg-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>

        <div className="row gx-5 gy-5 row-cols-1 row-cols-md-2 row-cols-xl-3 photos my-2">
          {projects.map((project, index) => (
            
            <ProjectCard
              key={index}
              id = {project.id}
              image={project.image}
              tags={project.tags}
              title={project.title}
            />
            
          ))}
        </div>

      {/* Pagination Section NOTE: to be implemented in future releases
        <div className="row my-5">
          <div className="col">
            <Pagination />
          </div>
        </div>
        */}
      </div>

    </section>
  );
};

export default WorkGallery;