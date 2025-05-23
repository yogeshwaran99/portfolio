import React from 'react';
import CTA from './CTA';
import { FaLocationDot } from "react-icons/fa6";
import './profile.css';

const Home = () => {
  return (
    <section id="home">
      <div className="container home__container">        
        <h1>Yogeshwaran</h1>
        <h3 className="text-light">Software Developer</h3>
        <h4>
            <FaLocationDot style={{ marginRight: '0.5rem', fontSize: '0.7rem' }} />
            <a 
                href="https://www.google.com/maps/place/chennai" 
                target="_blank" 
                rel="noopener noreferrer"                
            >
                Chennai, Tamil Nadu, India.
            </a>
        </h4>
        <CTA />       
      </div>
    </section>
  );
};

export default Home;
