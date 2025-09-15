import React from 'react';
import SocialLink from '../../../components/SocialLink';

const AboutSection = ({ description, general_details }) => {

  return (
    <section className="about">
      <div className="container py-xl-5 px-xl-5 text-with-linebreaks" style={{ maxWidth: '1200px' }}>
        <div className="row g-0 justify-content-center mt-md-5">


          <div className="col-xl-11 order-xl-1 px-5">
            <h2 className="text-uppercase text-center mb-4">DESCRIPTION</h2>
            <p className="lead mb-0">
              {description}
            </p>

          </div>

          <div className="col-xl-11 order-xl-2 p-5">
            <table class="table table-bordered table-hover">


              <tbody>
                {general_details && general_details.map((detail, index) => (

                  <tr key={index}>
                    <td style={{ width: '5%' }}><i className="bi bi-check-circle-fill text-primary"></i></td>
                    <th style={{ width: '20%' }} scope="row">{detail.label}</th>
                    <td>
                      {typeof detail.value === "object"
                        ? <a href={detail.value.url} target="_blank" rel="noopener noreferrer">{detail.value.text}</a>
                        : detail.value}
                    </td>
                  </tr>



                ))}

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;