import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/images/sahmora-logo.png';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'What We Do', path: '/what-we-do' },
  { title: 'Industries We Serve', path: '/industries' },
  { title: 'Ventures', path: '/ventures' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(201,164,103,0.08)]'
          : 'bg-transparent'
      }`}
      style={{ height: isScrolled ? '80px' : '100px' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full h-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-sm overflow-hidden border border-[#C9A467]/40 flex items-center justify-center bg-[#0D0D0D]/60 group-hover:border-[#C9A467] transition-colors duration-300">
            <img src={logoImg} alt="Sahmora Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-white font-body font-medium tracking-[0.2em] text-[18px] leading-none mb-0.5" style={{ letterSpacing: '0.2em' }}>
              SAHMORA
            </div>
            <div className="text-[#C9A467]/80 font-body text-[8px] tracking-[0.35em] uppercase font-medium">
              Investment LLC
            </div>
          </div>
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex items-center space-x-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[11.5px] font-semibold font-body tracking-[0.12em] uppercase transition-colors duration-300 pb-1 ${
                  isActive
                    ? 'text-[#C9A467]'
                    : 'text-white/85 hover:text-[#C9A467]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.title}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9A467]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}


        </nav>

        {/* Contact CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="border border-[#C9A467]/60 text-[#C9A467] font-semibold text-[10.5px] tracking-[0.18em] uppercase px-7 py-3 hover:bg-[#C9A467] hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,164,103,0.25)]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white hover:text-[#C9A467] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-[#C9A467]/10 overflow-hidden"
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[13px] font-semibold tracking-[0.12em] uppercase transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#C9A467]'
                      : 'text-white/80 hover:text-[#C9A467]'
                  }`}
                >
                  {link.title}
                </Link>
              ))}

              <Link
                to="/contact"
                className="mt-4 border border-[#C9A467]/60 text-[#C9A467] font-semibold text-[11px] tracking-[0.15em] uppercase px-6 py-3 text-center hover:bg-[#C9A467] hover:text-black transition-all duration-300"
              >
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
