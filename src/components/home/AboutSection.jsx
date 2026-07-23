import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aboutImg from '../../assets/images/about-dubai.png';

/* Custom SVG icons matching the reference — refined gold outlines */
const StrategicInvestmentIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    {/* Trophy / Strategy icon */}
    <path d="M14 6H26V16C26 19.3 23.3 22 20 22C16.7 22 14 19.3 14 16V6Z" stroke="#C9A467" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M14 10H8C8 14 10 16 14 16" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M26 10H32C32 14 30 16 26 16" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="20" y1="22" x2="20" y2="28" stroke="#C9A467" strokeWidth="1.3" />
    <path d="M14 28H26" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="20" cy="13" r="2" stroke="#C9A467" strokeWidth="1" />
  </svg>
);

const BusinessDevIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    {/* Gear / Settings icon */}
    <circle cx="20" cy="20" r="6" stroke="#C9A467" strokeWidth="1.3" />
    <circle cx="20" cy="20" r="2.5" stroke="#C9A467" strokeWidth="1" />
    <path d="M20 4V8M20 32V36M4 20H8M32 20H36" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M8.7 8.7L11.5 11.5M28.5 28.5L31.3 31.3M31.3 8.7L28.5 11.5M11.5 28.5L8.7 31.3" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const LongTermIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    {/* Leaf / Growth icon */}
    <path d="M10 30C10 30 12 16 26 8C26 8 28 22 14 30" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 30C14 26 18 22 26 8" stroke="#C9A467" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    <path d="M18 24C16 28 12 32 8 34" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const miniFeatures = [
  { icon: StrategicInvestmentIcon, label: 'Strategic\nInvestment' },
  { icon: BusinessDevIcon, label: 'Business\nDevelopment' },
  { icon: LongTermIcon, label: 'Long-Term\nPartnerships' },
];

const AboutSection = () => {
  return (
    <section className="bg-[#F5F0E7] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[650px] overflow-hidden group"
        >
          <img 
            src={aboutImg}
            alt="Dubai Skyline from Premium Terrace" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col justify-center max-w-xl"
        >
          {/* Eyebrow */}
          <span className="text-[#C9A467] text-[10px] font-body tracking-[0.3em] uppercase font-semibold mb-5 block">
            About Sahmora
          </span>

          {/* Heading */}
          <h2 className="text-[#1A1A1A] text-[36px] md:text-[42px] lg:text-[48px] leading-[1.1] mb-6 font-heading font-normal">
            More Than Capital.<br />We Build Businesses.
          </h2>

          {/* Description */}
          <p className="text-[#4A4A4A] text-[14px] font-body font-light mb-10 leading-[1.8] max-w-[480px]">
            At Sahmora, we go beyond capital. We partner with entrepreneurs and business owners by providing strategic direction, operational expertise, market access, and scalable growth frameworks to build enduring businesses and lasting impact.
          </p>
          
          {/* Mini Features Row */}
          <div className="flex flex-row items-start gap-8 md:gap-10 mb-10 pt-8 border-t border-[#1A1A1A]/10">
            {miniFeatures.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group/feat">
                <div className="mb-4 transition-transform duration-300 group-hover/feat:scale-110">
                  <feat.icon />
                </div>
                <span className="text-[#1A1A1A] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] leading-[1.5] whitespace-pre-line">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 bg-[#0D0D0D] text-white font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#1A1A1A] transition-all duration-300 hover:shadow-lg"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
