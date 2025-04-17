import logo from './logo.svg';
import './App.css';
import Header from './pages/homepage/components/Header';
import AboutSection from './pages/homepage/components/About';
import ServicesSection from './pages/homepage/components/Services';
import WorkGallery from './pages/homepage/components/WorkGallery';

//import * as url from "url";

function App() {
  return (

    <div className="App">
      <Header/>

      <AboutSection/>


      <ServicesSection/>


      <WorkGallery/>

      <section class="text-center bg-light testimonials" id='testimonials'>
        <div class="container p-5" style={{ background: 'var(--bs-body-bg)'}}>
            <div class="row mb-5">
                <div class="col-md-8 col-xl-6 text-center mx-auto">
                    <h2>Testimonials</h2>
                </div>
            </div>
            <div class="row gy-4 justify-content-center">
                <div class="col-lg-3">
                    <div class="text-start"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-quote" style={{ fontSize: "94px" }}>
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"></path>
                        </svg>
                        <h4>All reviews from platforms included</h4>
                        <p class="text-start">Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit class dapibus.</p>
                    </div>
                    <div class="text-start"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-linkedin me-2">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"></path>
                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-link me-2" style={{ fontSize: "17px" }}>
                            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"></path>
                            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6z"></path>
                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-bag-fill me-2" style={{fontSize: "16px"}}>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"></path>
                        </svg></div>
                </div>
                <div class="col-sm-auto col-md-9 col-lg-9">
                    <div class="carousel slide carousel-dark pointer-event" data-bs-ride="false" data-bs-wrap="false" id="carousel-2">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row gy-4 mb-5 pb-3 mx-3">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="card card-light border-0 my-3">
                                            <div class="card-body p-4">
                                                <p class="text-start card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                                <h5 class="text-end card-title">Lorem Ipsum</h5>
                                                <p class="mb-2 small text-end" >From LinkedIn</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card dark-card my-3">
                                            <div class="card-body p-4">
                                                <p class="text-start card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                                <h5 class="text-end card-title">Lorem Ipsum</h5>
                                                <p class="mb-2 small card-source-text text-end">From LinkedIn</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row gy-4 mb-5 pb-3 mx-3">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="card dark-card border-0 my-3">
                                            <div class="card-body p-4">
                                                <p class="text-start card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                                <h5 class="text-end card-title">Lorem Ipsum</h5>
                                                <p class="mb-2 small card-source-text text-end">From LinkedIn</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card my-3 card-light">
                                            <div class="card-body p-4" data-bs-theme="dark">
                                                <p class="text-start card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                                <h5 class="text-end card-title">Lorem Ipsum</h5>
                                                <p class="mb-2 small card-source-text text-end">From LinkedIn</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-indicators"><button type="button" data-bs-target="#carousel-2" data-bs-slide-to="0" class="active" fdprocessedid="7wmcae" aria-current="true"></button> <button type="button" data-bs-target="#carousel-2" data-bs-slide-to="1" fdprocessedid="mf1fgxk" class=""></button></div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    </div>




  );
}

export default App;
