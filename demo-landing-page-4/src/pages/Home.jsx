import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FeaturesGallery from '../components/FeaturesGallery';
import Banner from '../components/Banner';
import Solutions from '../components/Solutions';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturesGallery />
      <Banner />
      <Solutions />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
