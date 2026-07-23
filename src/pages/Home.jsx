import React from 'react';
import { Helmet } from 'react-helmet-async';

import Hero from '../components/home/Hero';
import FeatureStrip from '../components/home/FeatureStrip';
import AboutSection from '../components/home/AboutSection';
import WhatWeDo from '../components/home/WhatWeDo';
import ValueTimeline from '../components/home/ValueTimeline';
import Industries from '../components/home/Industries';
import WhySahmora from '../components/home/WhySahmora';
import VisionMission from '../components/home/VisionMission';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sahmora Investment LLC | Building Businesses, Creating Value.</title>
      </Helmet>
      
      <div className="font-body text-graytext bg-black min-h-screen">
        <Hero />
        <FeatureStrip />
        <AboutSection />
        <WhatWeDo />
        <ValueTimeline />
        <Industries />
        <WhySahmora />
        <VisionMission />
      </div>
    </>
  );
};

export default Home;
