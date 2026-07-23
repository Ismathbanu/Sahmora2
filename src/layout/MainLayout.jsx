import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import CTAFooter from '../components/home/CTAFooter';
import ScrollToTop from '../components/common/ScrollToTop';
import ScrollToTopButton from '../components/common/ScrollToTopButton';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <CTAFooter />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;

