import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/hero-dubai-skyline.png';

const Hero = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#060606]"
    >
      {/* Full-width background image - positioned to the right */}
      <div className="absolute inset-0 w-full h-full">
        {/* Hero image covering right portion and blending on left */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Dubai Skyline with Gold Sculpture"
            className="w-full h-full object-cover object-center"
            style={{
              maskImage: 'linear-gradient(to right, transparent 5%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,1) 55%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 5%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,1) 55%)',
            }}
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/80 to-transparent" style={{ width: '55%' }} />
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#060606] via-[#060606]/60 to-transparent" />
        
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#060606]/40 to-transparent" />

        {/* Subtle gold ambient glow on right side */}
        <div 
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #C9A467 0%, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-12 gap-8 items-center pt-[100px] pb-16">
          {/* Left Column - Text Content (spans ~5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 z-10"
          >
            {/* Headline */}
            <h1 className="mb-6 font-heading font-normal" style={{ lineHeight: 1.05 }}>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{ fontStyle: 'italic' }}
              >
                Building
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="block text-white text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{ fontStyle: 'italic' }}
              >
                Businesses.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{
                  fontStyle: 'italic',
                  lineHeight: 1.05,
                  background: 'linear-gradient(135deg, #C9A467 0%, #E8D5A8 40%, #C9A467 60%, #A88B4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Creating Value.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="block text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
                style={{
                  fontStyle: 'italic',
                  lineHeight: 1.05,
                  background: 'linear-gradient(135deg, #C9A467 0%, #E8D5A8 40%, #C9A467 60%, #A88B4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Growing Futures.
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/70 text-[14.5px] font-body font-light max-w-[440px] mb-10 leading-[1.75]"
            >
              Sahmora Investment LLC is a UAE-based investment and business development company focused on identifying, investing in, and scaling high-potential businesses across the UAE and GCC.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/about"
                className="group relative bg-gradient-to-r from-[#C9A467] to-[#B08D4F] text-black font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 flex items-center gap-3 hover:from-[#D9BE8B] hover:to-[#C9A467] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,164,103,0.3)]"
              >
                Explore Sahmora
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group border border-white/25 text-white font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 flex items-center gap-3 hover:border-[#C9A467]/60 hover:text-[#C9A467] transition-all duration-300 bg-white/[0.02] backdrop-blur-sm"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Spacer for image (image is positioned via absolute background) */}
          <div className="lg:col-span-7 hidden lg:block" />
        </div>
      </div>

      {/* Decorative Gold divider line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A467]/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
