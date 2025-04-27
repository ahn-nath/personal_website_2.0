import logo from './logo.svg';
import './App.css';
import Header from './pages/homepage/components/Header';
import AboutSection from './pages/homepage/components/About';
import ServicesSection from './pages/homepage/components/Services';
import WorkGallery from './pages/homepage/components/WorkGallery';
import TestimonialsSection from './pages/homepage/components/Testimonials';

//import * as url from "url";

function App() {
    return (

        <div className="App">
            <Header />

            <AboutSection />


            <ServicesSection />


            <WorkGallery />


            <TestimonialsSection />

        </div>




    );
}

export default App;
