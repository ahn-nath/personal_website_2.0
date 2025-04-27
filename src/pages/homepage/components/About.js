import React from 'react';
import SocialLink from '../../../components/SocialLink';

const AboutSection = () => {
  const socialLinks = [
    {
      href: "#",
      color: '#03911a',
      dPath: "M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z",
      text: "Profile on Upwork"
    },
    {
      href: "#",
      color: '#034d9d',
      dPath: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4",
      text: "Profile on LinkedIn"
    }
  ];

  return (
    <section className="about">
      <div className="container-fluid p-0" style={{ maxWidth: '1200px' }}>
        <div className="row g-0 justify-content-center mt-5">

          <div
            className="col-lg-6 col-xl-4 text-white mx-auto order-lg-2 showcase-img"
            style={{
              backgroundImage: "url(https://images.pexels.com/photos/34153/pexels-photo.jpg)",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />

          <div className="col-lg-6 order-lg-1 p-5">
            <h2 className="text-uppercase text-center mb-4">About</h2>
            <p className="lead mb-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              <br /><br />
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              &nbsp;&nbsp;
              <span style={{ color: '#000' }}>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                ut labore et dolore magnam aliquam quaerat voluptatem.
              </span>
            </p>

            <div className="mt-5">
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  color={link.color}
                  dPath={link.dPath}
                >
                  &nbsp;{link.text}
                </SocialLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;