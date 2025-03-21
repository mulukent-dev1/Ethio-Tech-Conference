import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <img 
          src="/images/photo_5_2025-03-21_17-54-20.jpg" 
          alt="Ethio-Tech Conference Banner" 
          className="banner-image" 
        />
        <div className="banner-text">
          <h1>Ethio-Tech Conference 2025</h1>
          <p>Discover New Tech Opportunities</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;