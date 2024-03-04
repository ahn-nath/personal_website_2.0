import logo from './logo.svg';
import './App.css';
//import * as url from "url";

function App() {
  return (

    <div className="App">


      <section className="about">
        <div className="container-fluid p-0" style={{ maxWidth: '1200px'}}>
          <div className="row g-0 justify-content-center mt-5">
            <div className="col-lg-6 col-xl-4 text-white mx-auto order-lg-2 showcase-img"
            style={{
              backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg" + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            >
            </div>

            <div className="col-lg-6 order-lg-1 p-5">
              <h2 className="text-uppercase text-center mb-4">About</h2>
              <p className="lead mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. <br /> <br />Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.&nbsp;&nbsp;<span style={{color: '#000'}}>Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                    ut labore et dolore magnam aliquam quaerat voluptatem.&nbsp;</span></p>

              <div className="mt-5"><a className="me-4" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"
                     className="bi bi-handbag-fill fs-4" style={{color: '#03911a'}}>
                  <path
                      d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"></path>
                </svg>
                &nbsp;Profile on Upwork</a><a className="me-4" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"
                     className="bi bi-linkedin fs-4" style={{color: 'rgb(3,77,157)'}}>
                  <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"></path>
                </svg>
                &nbsp;Profile on LinkedIn</a></div>
            </div>
          </div>

        </div>
      </section>


      <section id="services">
        <div className="container py-5 py-xl-5 text-white px-5" style={{background: '#222222'}}>
          <div id="services-inner-wrapper" className="py-5">
            <div className="row mb-5">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2 className="text-uppercase">How can I help you?</h2>
                <p className="w-lg-50">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra
                  nunc. Vestibulum dui eget ultrices.</p>
              </div>
            </div>
            <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
              <div className="col">
                <div
                    className="text-center d-flex flex-column align-items-center align-items-xl-center border border-white p-3 py-4">
                  <div
                      className="bs-icon-lg bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                         viewBox="0 0 16 16" className="bi bi-bell fs-3">
                      <path
                          d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path>
                    </svg>
                  </div>
                  <div className="px-3">
                    <h4 className="mt-2">Sed ut perspiciatis</h4>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem.</p><a href="#">Learn more&nbsp;</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                    className="text-center d-flex flex-column align-items-center align-items-xl-center border border-white p-3 py-4">
                  <div
                      className="bs-icon-lg bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                         viewBox="0 0 16 16" className="bi bi-bezier fs-3">
                      <path fillRule="evenodd"
                            d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></path>
                      <path
                          d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
                    </svg>
                  </div>
                  <div className="px-3">
                    <h4 className="mt-2">Lorem ipsum dolor</h4>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem.</p><a href="#">Learn more&nbsp;</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                    className="text-center d-flex flex-column align-items-center align-items-xl-center border border-white p-3 py-4">
                  <div
                      className="bs-icon-lg bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                         viewBox="0 0 16 16" className="bi bi-flag fs-3">
                      <path
                          d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"></path>
                    </svg>
                  </div>
                  <div className="px-3">
                    <h4 className="mt-2">Nemo enim ipsam</h4>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem.</p><a href="#">Learn more&nbsp;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="work-gallery" className="photo-gallery py-5 py-xl-5">
        <div className="container"style={{ background: 'url("/background-container-work-gallery.png") bottom/contain' }}>
          <div className="row my-4">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2 className="text-uppercase">My work</h2>
              <p className="w-lg-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore</p>
            </div>
          </div>

          <div className="row gx-5 gy-5 row-cols-1 row-cols-md-2 row-cols-xl-3 photos" data-bss-baguettebox="">

            <div className="col item flip-card mb-4">
              <div className="flip-card-inner">
                <div className="flip-card-front"><img className="img-fluid image-gallery"
                                                      src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/>
                  <div className="my-2 tags text-start">
                    <span className="badge rounded-pill bg-success tag-project-type me-2">API</span>
                    <span className="badge rounded-pill bg-primary me-2">2024</span>
                   </div>
                </div>
                <div className="flip-card-back"><a className="text-decoration-none"
                                                   href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                  <div className="flip-card-back-body image-gallery"
                        style={{ background: 'url("/background-card.png") center/cover no-repeat' }}>
                    <h2 style={{ textShadow: '-2px 1px 4px rgba(0, 0, 0, 0.44)', color: 'rgb(58, 58, 58)', letterSpacing: '4px' }}>Lorem
                      Ipsum</h2>
                  </div>
                </a></div>
              </div>
            </div>

            <div className="col item flip-card mb-4">
              <div className="flip-card-inner">
                <div className="flip-card-front"><img className="img-fluid image-gallery"
                                                      src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/>
                  <div className="my-2 tags text-start">
                    <span className="badge rounded-pill tag-project-type me-2" style={{background: '#BB0087'}}>WEB INTEGRATION</span>
                    <span className="badge rounded-pill bg-primary me-2">2024</span>
                   </div>
                </div>
                <div className="flip-card-back"><a className="text-decoration-none"
                                                   href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                  <div className="flip-card-back-body image-gallery"
                        style={{ background: 'url("/background-card.png") center/cover no-repeat' }}>
                    <h2 style={{ textShadow: '-2px 1px 4px rgba(0, 0, 0, 0.44)', color: 'rgb(58, 58, 58)', letterSpacing: '4px' }}>Lorem
                      Ipsum</h2>
                  </div>
                </a></div>
              </div>
            </div>


              <div className="col item flip-card mb-4">
              <div className="flip-card-inner">
                <div className="flip-card-front"><img className="img-fluid image-gallery"
                                                      src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/>
                  <div className="my-2 tags text-start">
                    <span className="badge rounded-pill tag-project-type me-2" style={{background: '#0ACF83'}}>AUTOMATION</span>
                    <span className="badge rounded-pill bg-primary me-2">2024</span>
                   </div>
                </div>
                <div className="flip-card-back"><a className="text-decoration-none"
                                                   href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                  <div className="flip-card-back-body image-gallery"
                        style={{ background: 'url("/background-card.png") center/cover no-repeat' }}>
                    <h2 style={{ textShadow: '-2px 1px 4px rgba(0, 0, 0, 0.44)', color: 'rgb(58, 58, 58)', letterSpacing: '4px' }}>Lorem
                      Ipsum</h2>
                  </div>
                </a></div>
              </div>
            </div>

                 <div className="col item flip-card mb-4">
              <div className="flip-card-inner">
                <div className="flip-card-front"><img className="img-fluid image-gallery"
                                                      src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/>
                  <div className="my-2 tags text-start">
                    <span className="badge rounded-pill bg-success tag-project-type me-2">API</span>
                    <span className="badge rounded-pill bg-primary me-2">2024</span>
                   </div>
                </div>
                <div className="flip-card-back"><a className="text-decoration-none"
                                                   href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                  <div className="flip-card-back-body image-gallery"
                        style={{ background: 'url("/background-card.png") center/cover no-repeat' }}>
                    <h2 style={{ textShadow: '-2px 1px 4px rgba(0, 0, 0, 0.44)', color: 'rgb(58, 58, 58)', letterSpacing: '4px' }}>Lorem
                      Ipsum</h2>
                  </div>
                </a></div>
              </div>
            </div>

            <div className="col item flip-card mb-4">
              <div className="flip-card-inner">
                <div className="flip-card-front"><img className="img-fluid image-gallery"
                                                      src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/>
                  <div className="my-2 tags text-start">
                    <span className="badge rounded-pill tag-project-type me-2" style={{background: '#BB0087'}}>WEB INTEGRATION</span>
                    <span className="badge rounded-pill bg-primary me-2">2024</span>
                   </div>
                </div>
                <div className="flip-card-back"><a className="text-decoration-none"
                                                   href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                  <div className="flip-card-back-body image-gallery"
                        style={{ background: 'url("/background-card.png") center/cover no-repeat' }}>
                    <h2 style={{ textShadow: '-2px 1px 4px rgba(0, 0, 0, 0.44)', color: 'rgb(58, 58, 58)', letterSpacing: '4px' }}>Lorem
                      Ipsum</h2>
                  </div>
                </a></div>
              </div>
            </div>


              <div className="col item flip-card mb-4">
              <div className="flip-card-inner">
                <div className="flip-card-front"><img className="img-fluid image-gallery"
                                                      src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/>
                  <div className="my-2 tags text-start">
                    <span className="badge rounded-pill tag-project-type me-2" style={{background: '#0ACF83'}}>AUTOMATION</span>
                    <span className="badge rounded-pill bg-primary me-2">2024</span>
                   </div>
                </div>
                <div className="flip-card-back"><a className="text-decoration-none"
                                                   href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                  <div className="flip-card-back-body image-gallery"
                        style={{ background: 'url("/background-card.png") center/cover no-repeat' }}>
                    <h2 style={{ textShadow: '-2px 1px 4px rgba(0, 0, 0, 0.44)', color: 'rgb(58, 58, 58)', letterSpacing: '4px' }}>Lorem
                      Ipsum</h2>
                  </div>
                </a></div>
              </div>
            </div>

                 <div className="col item flip-card mb-4">
              <div className="flip-card-inner">
                <div className="flip-card-front"><img className="img-fluid image-gallery"
                                                      src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/>
                  <div className="my-2 tags text-start">
                    <span className="badge rounded-pill bg-success tag-project-type me-2">API</span>
                    <span className="badge rounded-pill bg-primary me-2">2024</span>
                   </div>
                </div>
                <div className="flip-card-back"><a className="text-decoration-none"
                                                   href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                  <div className="flip-card-back-body image-gallery"
                        style={{ background: 'url("/background-card.png") center/cover no-repeat' }}>
                    <h2 style={{ textShadow: '-2px 1px 4px rgba(0, 0, 0, 0.44)', color: 'rgb(58, 58, 58)', letterSpacing: '4px' }}>Lorem
                      Ipsum</h2>
                  </div>
                </a></div>
              </div>
            </div>

            <div className="col item flip-card mb-4">
              <div className="flip-card-inner">
                <div className="flip-card-front"><img className="img-fluid image-gallery"
                                                      src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/>
                  <div className="my-2 tags text-start">
                    <span className="badge rounded-pill tag-project-type me-2" style={{background: '#BB0087'}}>WEB INTEGRATION</span>
                    <span className="badge rounded-pill bg-primary me-2">2024</span>
                   </div>
                </div>
                <div className="flip-card-back"><a className="text-decoration-none"
                                                   href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                  <div className="flip-card-back-body image-gallery"
                        style={{ background: 'url("/background-card.png") center/cover no-repeat' }}>
                    <h2 style={{ textShadow: '-2px 1px 4px rgba(0, 0, 0, 0.44)', color: 'rgb(58, 58, 58)', letterSpacing: '4px' }}>Lorem
                      Ipsum</h2>
                  </div>
                </a></div>
              </div>
            </div>


              <div className="col item flip-card mb-4">
              <div className="flip-card-inner">
                <div className="flip-card-front"><img className="img-fluid image-gallery"
                                                      src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"/>
                  <div className="my-2 tags text-start">
                    <span className="badge rounded-pill tag-project-type me-2" style={{background: '#0ACF83'}}>AUTOMATION</span>
                    <span className="badge rounded-pill bg-primary me-2">2024</span>
                   </div>
                </div>
                <div className="flip-card-back"><a className="text-decoration-none"
                                                   href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                  <div className="flip-card-back-body image-gallery"
                        style={{ background: 'url("/background-card.png") center/cover no-repeat' }}>
                    <h2 style={{ textShadow: '-2px 1px 4px rgba(0, 0, 0, 0.44)', color: 'rgb(58, 58, 58)', letterSpacing: '4px' }}>Lorem
                      Ipsum</h2>
                  </div>
                </a></div>
              </div>
            </div>





          </div>


          <div className="row my-5">
            <div className="col">
              <nav>
                <ul className="pagination pagination-lg justify-content-center">
                  <li className="page-item"><a className="page-link" aria-label="Previous" href="#"><span
                      aria-hidden="true">«</span></a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" aria-label="Next" href="#"><span
                      aria-hidden="true">»</span></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>


    </div>




  );
}

export default App;
