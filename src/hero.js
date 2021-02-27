import React, { useState } from 'react';
import HeroImage from './images/yoga-hero-img.jpg';

const Hero = () => {

  return (
      <section className="hero-container">
        <img className="hero-image" src={HeroImage} alt="yoga image" />
      </section>
    )
}

export default Hero;
