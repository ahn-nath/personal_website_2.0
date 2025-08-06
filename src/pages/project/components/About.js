import React from 'react';
import SocialLink from '../../../components/SocialLink';

const AboutSection = () => {

  return (
    <section className="about">
      <div className="container py-xl-5 px-xl-5" style={{ maxWidth: '1200px' }}>
        <div className="row g-0 justify-content-center mt-md-5">


          <div className="col-xl-11 order-xl-1 p-5">
            <h2 className="text-uppercase text-center mb-4">DESCRIPTION</h2>
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

          </div>

          <div className="col-xl-11 order-xl-2 p-5">
            <table class="table table-bordered table-hover">
              <thead class="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" colspan="2">First</th>
                  <th scope="col">Last</th>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td colspan="2">Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td colspan="2">Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry</td>
                  <td>the Bird</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;