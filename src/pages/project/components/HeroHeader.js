import './HeroHeader.css';

const HeroHeader = () => {
  const techStack1 = ['React', 'TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB'];
  const techStack2 = ['Docker', 'Kubernetes', 'Prometheus', 'Grafana'];

  return (
    <header className="hero-header d-flex flex-column py-5">

      {/* Main Content */}
      <div className="container flex-grow-1 d-flex flex-column justify-content-center text-center text-md-start">
        <h1 className="display-2 fw-bold mb-4 gradient-text">
          AI-Powered Predictive Maintenance System<br/>
          for Industrial Robotics
        </h1>
        <p className="fs-4 mb-5 text-light-emphasis">
          Leveraging machine learning to predict equipment failures and optimize maintenance schedules for industrial automation.
        </p>

        {/* Tech Stack Pills */}
        <div className="tech-stack d-flex flex-column gap-3">
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
            {techStack1.map((tech, i) => (
              <span key={i} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
            {techStack2.map((tech, i) => (
              <span key={i} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
