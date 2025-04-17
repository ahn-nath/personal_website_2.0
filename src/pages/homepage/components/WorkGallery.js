// components/WorkGallery.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import Pagination from './Pagination';

const WorkGallery = () => {
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
    <section id="work-gallery" className="photo-gallery py-5 py-xl-5">
      <div className="container" style={{ background: 'url("/background-container-work-gallery.png") bottom/contain' }}>
        <div className="row my-4">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="text-uppercase">My work</h2>
            <p className="w-lg-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>

        <div className="row gx-5 gy-5 row-cols-1 row-cols-md-2 row-cols-xl-3 photos">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              tags={project.tags}
              title={project.title}
            />
          ))}
        </div>

        <div className="row my-5">
          <div className="col">
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;