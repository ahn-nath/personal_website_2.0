import TabContentSection from "./TabContentSection";


const ArchitectureDesignSection = () => {
  return (
    <section>
      <div className="container mt-5 bg-light p-4 rounded shadow-sm">
        {/* Tabs */}
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content p-4 bg-white border border-top-0 rounded-bottom" id="myTabContent">

          {/* Home Tab  */}
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

            <TabContentSection
              title="Real-time Anomaly Detection"
              texts={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit...",
              ]}
              highlight="60% Reduced False Positives"
            />
            
          </div>


          {/* Profile Tab */}
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

            <TabContentSection
              title="Profile Section"
              texts={[
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
              ]}
              highlight="Learn More"
            />
          </div>

          {/* Contact Tab */}
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

            <TabContentSection
              title="Contact Section"
              texts={[
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              ]}
              highlight="Get in Touch"
            />

          </div>


        </div>
      </div>
    </section>
  );
};

export default ArchitectureDesignSection;
