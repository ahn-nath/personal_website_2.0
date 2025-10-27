import React from 'react';

const ServiceCard = ({ iconPath, title, description, link, type, showIcon = true }) => (
  <div className="col">
    <div className="text-center d-flex flex-column align-items-center align-items-xl-center border border-white p-3 py-4">

      {showIcon &&
      <div className="bs-icon-lg bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="1em" 
          height="1em" 
          fill="currentColor"
          viewBox="0 0 16 16" 
          className="bi fs-3"
        >
          <path d={iconPath} />
        </svg>
      </div>
      }

      <div className="mx-1  text-with-linebreaks">
        <h4 className="mt-2">{title}</h4>
        <p>{description}</p>
        <a href={link} className='accent-color'>{type}</a>
      </div>
    </div>
  </div>
);

export default ServiceCard;