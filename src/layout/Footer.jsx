import React from 'react';
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
