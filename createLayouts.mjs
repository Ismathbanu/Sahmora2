import fs from 'fs';
import path from 'path';

const layoutFiles = {
  'MainLayout.jsx': `import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CTASection from '../components/common/CTASection';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <CTASection />
      <Footer />
    </div>
  );
};

export default MainLayout;
`,
  'Navbar.jsx': `import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'What We Do', path: '/what-we-do' },
  { title: 'Industries We Serve', path: '/industries' },
];

const ventureLinks = [
  { title: 'Talbar', path: '/ventures/talbar' },
  { title: 'Igrade Goods LLC', path: '/ventures/igrade' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [venturesOpen, setVenturesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setVenturesOpen(false);
  }, [location]);

  return (
    <header className={\`fixed top-0 w-full z-50 transition-all duration-300 \${isScrolled ? 'bg-[var(--color-brand-primary)]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}\`}>
      <div className="container-width flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading text-[var(--color-brand-accent)] tracking-wider">
          SAHMORA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => \`text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-brand-accent)] \${isActive ? 'text-[var(--color-brand-accent)]' : (isScrolled ? 'text-white' : 'text-[var(--color-text-primary)]')}\`}
            >
              {link.title}
            </NavLink>
          ))}
          
          <div 
            className="relative group"
            onMouseEnter={() => setVenturesOpen(true)}
            onMouseLeave={() => setVenturesOpen(false)}
          >
            <button className={\`flex items-center text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-brand-accent)] \${location.pathname.includes('/ventures') ? 'text-[var(--color-brand-accent)]' : (isScrolled ? 'text-white' : 'text-[var(--color-text-primary)]')}\`}>
              Ventures <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {venturesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 w-56 bg-white border border-[var(--color-border-default)] shadow-xl rounded-md overflow-hidden"
                >
                  <Link to="/ventures" className="block px-6 py-3 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-brand-secondary)] hover:text-[var(--color-brand-accent)] border-b border-[var(--color-border-default)]">All Ventures</Link>
                  {ventureLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="block px-6 py-3 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-brand-secondary)] hover:text-[var(--color-brand-accent)]">
                      {link.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) => \`text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-brand-accent)] \${isActive ? 'text-[var(--color-brand-accent)]' : (isScrolled ? 'text-white' : 'text-[var(--color-text-primary)]')}\`}
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className={\`lg:hidden \${isScrolled ? 'text-white' : 'text-[var(--color-text-primary)]'}\`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[var(--color-brand-primary)] overflow-hidden"
          >
            <div className="container-width py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-white text-lg tracking-wide hover:text-[var(--color-brand-accent)]">
                  {link.title}
                </Link>
              ))}
              <div>
                <button onClick={() => setVenturesOpen(!venturesOpen)} className="flex items-center text-white text-lg tracking-wide hover:text-[var(--color-brand-accent)] w-full text-left">
                  Ventures <ChevronDown className={\`ml-2 w-5 h-5 transition-transform \${venturesOpen ? 'rotate-180' : ''}\`} />
                </button>
                <AnimatePresence>
                  {venturesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 flex flex-col space-y-3 border-l border-[var(--color-divider)] ml-2"
                    >
                      <Link to="/ventures" className="text-white/80 hover:text-[var(--color-brand-accent)]">All Ventures</Link>
                      {ventureLinks.map((link) => (
                        <Link key={link.path} to={link.path} className="text-white/80 hover:text-[var(--color-brand-accent)]">
                          {link.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/contact" className="text-[var(--color-brand-accent)] text-lg tracking-wide mt-4">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
`,
  'Footer.jsx': `import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 border-t border-[#222]">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-heading text-[var(--color-brand-accent)] tracking-wider mb-6">SAHMORA</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              A premium corporate investment firm dedicated to strategic growth and visionary business ventures across diverse industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-[var(--color-brand-accent)] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[var(--color-brand-accent)] transition-colors">About Us</Link></li>
              <li><Link to="/what-we-do" className="hover:text-[var(--color-brand-accent)] transition-colors">What We Do</Link></li>
              <li><Link to="/industries" className="hover:text-[var(--color-brand-accent)] transition-colors">Industries</Link></li>
              <li><Link to="/ventures" className="hover:text-[var(--color-brand-accent)] transition-colors">Ventures</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-brand-accent)] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading mb-6">Our Ventures</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/ventures/talbar" className="hover:text-[var(--color-brand-accent)] transition-colors">Talbar</Link></li>
              <li><Link to="/ventures/igrade" className="hover:text-[var(--color-brand-accent)] transition-colors">Igrade Goods LLC</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading mb-6">Company Information</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin size={20} className="text-[var(--color-brand-accent)] mr-3 mt-1 flex-shrink-0" />
                <span>123 Luxury Avenue, Business District, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-[var(--color-brand-accent)] mr-3 flex-shrink-0" />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-[var(--color-brand-accent)] mr-3 flex-shrink-0" />
                <span>contact@sahmora.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Sahmora Investment LLC. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="#" className="hover:text-[var(--color-brand-accent)] transition-colors">Privacy Policy</Link>
            <span className="mx-4">|</span>
            <Link to="#" className="hover:text-[var(--color-brand-accent)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`
};

Object.entries(layoutFiles).forEach(([filename, content]) => {
  fs.writeFileSync(path.join('src/layout', filename), content);
});

console.log('Layout components created.');
