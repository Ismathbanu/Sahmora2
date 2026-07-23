import React from 'react';
import { motion } from 'framer-motion';

/* Custom SVG icons matching the reference image style — minimal gold outlines */
const StrategicInvestmentsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    {/* Target/Crosshair icon */}
    <circle cx="24" cy="24" r="18" stroke="#C9A467" strokeWidth="1.2" />
    <circle cx="24" cy="24" r="12" stroke="#C9A467" strokeWidth="1.2" />
    <circle cx="24" cy="24" r="5" stroke="#C9A467" strokeWidth="1.2" />
    <line x1="24" y1="2" x2="24" y2="10" stroke="#C9A467" strokeWidth="1.2" />
    <line x1="24" y1="38" x2="24" y2="46" stroke="#C9A467" strokeWidth="1.2" />
    <line x1="2" y1="24" x2="10" y2="24" stroke="#C9A467" strokeWidth="1.2" />
    <line x1="38" y1="24" x2="46" y2="24" stroke="#C9A467" strokeWidth="1.2" />
  </svg>
);

const BusinessGrowthIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    {/* Bar chart with upward trend */}
    <rect x="6" y="30" width="7" height="14" rx="1" stroke="#C9A467" strokeWidth="1.2" />
    <rect x="17" y="22" width="7" height="22" rx="1" stroke="#C9A467" strokeWidth="1.2" />
    <rect x="28" y="14" width="7" height="30" rx="1" stroke="#C9A467" strokeWidth="1.2" />
    {/* Arrow trending up */}
    <path d="M8 18L20 10L32 14L42 4" stroke="#C9A467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 4H42V10" stroke="#C9A467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MarketExpansionIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    {/* Globe */}
    <circle cx="24" cy="24" r="18" stroke="#C9A467" strokeWidth="1.2" />
    <ellipse cx="24" cy="24" rx="10" ry="18" stroke="#C9A467" strokeWidth="1.2" />
    <line x1="6" y1="24" x2="42" y2="24" stroke="#C9A467" strokeWidth="1.2" />
    <path d="M8 14C12 14 16 13 24 13C32 13 36 14 40 14" stroke="#C9A467" strokeWidth="1.2" />
    <path d="M8 34C12 34 16 35 24 35C32 35 36 34 40 34" stroke="#C9A467" strokeWidth="1.2" />
  </svg>
);

const BusinessTransformationIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    {/* Refresh/Transformation arrows */}
    <path d="M38 16C35.5 10.5 30.2 7 24 7C15.7 7 9 13.7 9 22" stroke="#C9A467" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M10 32C12.5 37.5 17.8 41 24 41C32.3 41 39 34.3 39 26" stroke="#C9A467" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M34 16H40V10" stroke="#C9A467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 32H8V38" stroke="#C9A467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const features = [
  {
    icon: StrategicInvestmentsIcon,
    title: 'Strategic',
    subtitle: 'Investments',
  },
  {
    icon: BusinessGrowthIcon,
    title: 'Business',
    subtitle: 'Growth',
  },
  {
    icon: MarketExpansionIcon,
    title: 'Market',
    subtitle: 'Expansion',
  },
  {
    icon: BusinessTransformationIcon,
    title: 'Business',
    subtitle: 'Transformation',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const FeatureStrip = () => {
  return (
    <section className="relative bg-[#060606] py-14 md:py-16">
      {/* Top gold divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A467]/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-[11px] md:text-[12px] font-body font-semibold uppercase mb-12 md:mb-14"
          style={{
            letterSpacing: '0.3em',
            background: 'linear-gradient(90deg, #C9A467 0%, #E8D5A8 50%, #C9A467 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Building Sustainable Businesses Across The UAE & GCC
        </motion.h3>

        {/* Feature Cards Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-2 md:grid-cols-4 relative"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative flex flex-col items-center text-center px-4 md:px-6 py-6 md:py-4"
            >
              {/* Vertical divider line between cards (not before first) */}
              {idx > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-gradient-to-b from-transparent via-[#C9A467]/25 to-transparent" />
              )}

              {/* Icon */}
              <div className="mb-5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(201,164,103,0.3)]">
                <feature.icon />
              </div>

              {/* Title */}
              <div className="transition-all duration-300 group-hover:-translate-y-0.5">
                <span className="block text-white text-[11px] md:text-[12px] font-bold uppercase tracking-[0.18em] leading-[1.5] font-body">
                  {feature.title}
                </span>
                <span className="block text-white text-[11px] md:text-[12px] font-bold uppercase tracking-[0.18em] leading-[1.5] font-body">
                  {feature.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom subtle border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.04]" />
    </section>
  );
};

export default FeatureStrip;
