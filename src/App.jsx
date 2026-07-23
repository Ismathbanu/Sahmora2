import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhatWeDo from './pages/WhatWeDo';
import IndustriesWeServe from './pages/IndustriesWeServe';
import ContactUs from './pages/ContactUs';
import Ventures from './pages/ventures/Ventures';
import Talbar from './pages/ventures/Talbar';
import IgradeGoods from './pages/ventures/IgradeGoods';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="what-we-do" element={<WhatWeDo />} />
            <Route path="industries" element={<IndustriesWeServe />} />
            <Route path="ventures" element={<Ventures />} />
            <Route path="ventures/talbar" element={<Talbar />} />
            <Route path="ventures/igrade" element={<IgradeGoods />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
