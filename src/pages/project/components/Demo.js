 import React from 'react';
 import './Demo.css';

const DemoSection = () => {

   const socialMediaPills = [
        { name: 'GitHub', url: '#', icon: 'bi bi-github'},
        { name: 'Demo video', url: '#', icon: 'bi bi-camera-reels-fill'},
        { name: 'Live demo', url: '#', icon: 'bi bi-laptop-fill' },
        { name: 'Marketplace', url: '#', icon: 'bi bi-bag-dash-fill' },
   ]
 
   return (
     <header className="demo-header d-flex flex-column py-5">
 
       {/* Main Content */}
       <div className="container flex-grow-1 d-flex flex-column justify-content-center text-center text-md-start">
         <h1 className="display-2 fw-bold mb-4 gradient-text text-center">
           Code + Live Previews
         </h1>
 
         {/* Media Links */}
         <div className="tech-stack d-flex flex-column gap-3 mt-3">
           <div className="d-flex flex-wrap gap-5 justify-content-center">
           
                {socialMediaPills.map((pill, i) => (
                    <a key={i} href={pill.url} className="btn btn-outline-light tech-pill">
                        <i className={pill.icon}></i> {pill.name}
                    </a>
                ))}
           </div>
         </div>
       </div>
     </header>
   );
 };

 

export default DemoSection;