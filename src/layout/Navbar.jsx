import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/images/sahmora-logo.png';

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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(201,164,103,0.08)]'
          : 'bg-[#0a0a0a]/90 backdrop-blur-md'
      }`}
      style={{ height: isScrolled ? '72px' : '80px' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full h-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-sm overflow-hidden border border-[#C9A467]/40 flex items-center justify-center bg-[#0D0D0D]/60 group-hover:border-[#C9A467] transition-colors duration-300">
            <img src={logoImg} alt="Sahmora Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-white font-body font-medium tracking-[0.2em] text-[16px] leading-none mb-0.5">
              SAHMORA
            </div>
            <div className="text-[#C9A467]/80 font-body text-[7px] tracking-[0.35em] uppercase font-medium">
              Investment LLC
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[11px] font-semibold font-body tracking-[0.12em] uppercase transition-colors duration-300 ${
                  isActive
                    ? 'text-[#C9A467]'
                    : 'text-white/80 hover:text-[#C9A467]'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
          
          <div 
            className="relative group"
            onMouseEnter={() => setVenturesOpen(true)}
            onMouseLeave={() => setVenturesOpen(false)}
          >
            <button className={`flex items-center text-[11px] font-semibold font-body tracking-[0.12em] uppercase transition-colors duration-300 ${location.pathname.includes('/ventures') ? 'text-[#C9A467]' : 'text-white/80 hover:text-[#C9A467]'}`}>
              Ventures <ChevronDown className="ml-1 w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {venturesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-[#111111]/95 backdrop-blur-xl border border-[#C9A467]/15 shadow-2xl overflow-hidden"
                >
                  <Link to="/ventures" className="block px-5 py-3 text-[11px] tracking-[0.1em] uppercase text-white/70 hover:bg-[#C9A467]/10 hover:text-[#C9A467] transition-colors border-b border-white/5">All Ventures</Link>
                  {ventureLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="block px-5 py-3 text-[11px] tracking-[0.1em] uppercase text-white/70 hover:bg-[#C9A467]/10 hover:text-[#C9A467] transition-colors">
                      {link.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Contact CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="border border-[#C9A467]/60 text-[#C9A467] font-semibold text-[10px] tracking-[0.18em] uppercase px-6 py-2.5 hover:bg-[#C9A467] hover:text-black transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white hover:text-[#C9A467] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
            className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-xl overflow-hidden border-t border-[#C9A467]/10"
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-white/80 text-[12px] tracking-[0.12em] uppercase font-semibold hover:text-[#C9A467] transition-colors">
                  {link.title}
                </Link>
              ))}
              <div>
                <button onClick={() => setVenturesOpen(!venturesOpen)} className="flex items-center text-white/80 text-[12px] tracking-[0.12em] uppercase font-semibold hover:text-[#C9A467] w-full text-left">
                  Ventures <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${venturesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {venturesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 flex flex-col space-y-3 border-l border-[#C9A467]/20 ml-1"
                    >
                      <Link to="/ventures" className="text-white/60 text-[11px] tracking-[0.1em] uppercase hover:text-[#C9A467]">All Ventures</Link>
                      {ventureLinks.map((link) => (
                        <Link key={link.path} to={link.path} className="text-white/60 text-[11px] tracking-[0.1em] uppercase hover:text-[#C9A467]">
                          {link.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/contact" className="mt-4 border border-[#C9A467]/60 text-[#C9A467] font-semibold text-[10px] tracking-[0.15em] uppercase px-6 py-2.5 text-center hover:bg-[#C9A467] hover:text-black transition-all">
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
