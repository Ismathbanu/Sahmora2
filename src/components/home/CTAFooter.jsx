import React from 'react';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../../assets/images/sahmora-logo.png';

const CTAFooter = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      
      {/* CTA Section */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-14">
            
            {/* Left — Logo & Tagline */}
            <div className="lg:w-[35%]">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-11 h-11 rounded-sm overflow-hidden border border-[#C9A467]/30 flex items-center justify-center bg-[#0D0D0D]">
                  <img src={logoImg} alt="Sahmora Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-white font-body font-medium tracking-[0.2em] text-[17px] leading-none mb-0.5">
                    SAHMORA
                  </div>
                  <div className="text-[#C9A467]/70 font-body text-[8px] tracking-[0.35em] uppercase font-medium">
                    Investment LLC
                  </div>
                </div>
              </Link>
              <p className="text-white/40 text-[13px] font-light leading-[1.75] max-w-[300px]">
                Building businesses. Creating value. Growing futures. Partnering for sustainable growth and enduring impact across the UAE & GCC.
              </p>
            </div>

            {/* Right — CTA */}
            <div className="lg:w-[60%] flex flex-col lg:items-end">
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] mb-5 text-left lg:text-right font-heading font-normal leading-[1.1]">
                Let's Build the Next{' '}
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #C9A467, #E8D5A8, #C9A467)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Growth Story.
                </span>
              </h2>
              <p className="text-white/40 text-[13.5px] font-light max-w-lg text-left lg:text-right mb-8 leading-[1.75]">
                Whether you're an entrepreneur seeking strategic investment, an established company planning regional expansion, or an investor looking for meaningful opportunities — Sahmora is ready to create sustainable value together.
              </p>
              <div className="flex flex-wrap gap-4 justify-start lg:justify-end w-full">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-[#C9A467] to-[#B08D4F] text-black font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 hover:from-[#D9BE8B] hover:to-[#C9A467] transition-all duration-300 flex items-center gap-3 hover:shadow-[0_0_25px_rgba(201,164,103,0.25)]"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="group border border-white/20 text-white font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 hover:border-[#C9A467]/50 hover:text-[#C9A467] transition-all duration-300 flex items-center gap-3"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-14">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Quick Links */}
          <div>
            <div className="text-[#C9A467] text-[10px] font-bold uppercase tracking-[0.25em] mb-7">Quick Links</div>
            <div className="grid grid-cols-2 gap-y-3.5 gap-x-6">
              <Link to="/" className="text-[13px] font-light text-white/70 hover:text-[#C9A467] transition-colors">Home</Link>
              <Link to="/about" className="text-[13px] font-light text-white/50 hover:text-[#C9A467] transition-colors">About Us</Link>
              <Link to="/what-we-do" className="text-[13px] font-light text-white/50 hover:text-[#C9A467] transition-colors">What We Do</Link>
              <Link to="/industries" className="text-[13px] font-light text-white/50 hover:text-[#C9A467] transition-colors">Industries We Serve</Link>
              <Link to="/ventures" className="text-[13px] font-light text-white/50 hover:text-[#C9A467] transition-colors">Ventures</Link>
              <Link to="/contact" className="text-[13px] font-light text-white/50 hover:text-[#C9A467] transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <div className="text-[#C9A467] text-[10px] font-bold uppercase tracking-[0.25em] mb-7">Contact Us</div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 text-[13px] font-light text-white/50 leading-[1.7]">
                <MapPin className="text-[#C9A467]/70 w-[18px] h-[18px] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>DIFC Complex, WS-E.5<br />Dubai Investment Park 2<br />Dubai, United Arab Emirates</span>
              </div>
              <div className="flex flex-col gap-4 text-[13px] font-light text-white/50">
                <div className="flex items-center gap-4">
                  <Phone className="text-[#C9A467]/70 w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.5} />
                  <span>+971 4 276 6331 &nbsp;&nbsp; +971 4 880 5504</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-[#C9A467]/70 w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.5} />
                  <span>info@sahmorainvestment.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-light text-white/30">
          <p>© 2024 Sahmora Investment LLC. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white/60 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default CTAFooter;
