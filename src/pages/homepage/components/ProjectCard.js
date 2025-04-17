import React from 'react';

const ProjectCard = ({ image, tags, title }) => (
  <div className="col item flip-card mb-4">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img className="img-fluid image-gallery" src={image} alt={title} />
        <div className="my-2 tags text-start">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="badge rounded-pill me-2"
              style={{ backgroundColor: tag.color }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
      <div className="flip-card-back">
        <a className="text-decoration-none" data-bs-target="#modal-1" data-bs-toggle="modal">
          <div 
            className="flip-card-back-body image-gallery"
            style={{ background: 'url("/background-card.png") center/cover no-repeat' }}
          >
            <h2 style={{ 
              textShadow: '-2px 1px 4px rgba(0, 0, 0, 0.44)', 
              color: 'rgb(58, 58, 58)', 
              letterSpacing: '4px' 
            }}>
              {title}
            </h2>
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;