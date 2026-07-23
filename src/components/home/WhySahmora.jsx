import React from 'react';
import { motion } from 'framer-motion';

/* ── Custom SVG icons matching the reference image style ── */

const UAEExpertiseIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    {/* Globe / UAE map pin icon */}
    <circle cx="22" cy="22" r="14" stroke="#C9A467" strokeWidth="1.2" />
    <ellipse cx="22" cy="22" rx="8" ry="14" stroke="#C9A467" strokeWidth="1" />
    <path d="M8 22H36" stroke="#C9A467" strokeWidth="1" />
    <path d="M10 15H34" stroke="#C9A467" strokeWidth="0.8" />
    <path d="M10 29H34" stroke="#C9A467" strokeWidth="0.8" />
  </svg>
);

const StrategicDevIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    {/* Connected people — strategic development */}
    <circle cx="22" cy="10" r="4" stroke="#C9A467" strokeWidth="1.2" />
    <circle cx="12" cy="30" r="4" stroke="#C9A467" strokeWidth="1.2" />
    <circle cx="32" cy="30" r="4" stroke="#C9A467" strokeWidth="1.2" />
    <circle cx="22" cy="26" r="3" stroke="#C9A467" strokeWidth="1" />
    <line x1="22" y1="14" x2="22" y2="23" stroke="#C9A467" strokeWidth="1.1" />
    <line x1="14" y1="27" x2="19.5" y2="25" stroke="#C9A467" strokeWidth="1" />
    <line x1="30" y1="27" x2="24.5" y2="25" stroke="#C9A467" strokeWidth="1" />
  </svg>
);

const NetworkIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    {/* Diamond / gem — strong network */}
    <path d="M22 6L36 18L22 38L8 18L22 6Z" stroke="#C9A467" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M8 18H36" stroke="#C9A467" strokeWidth="1.1" />
    <path d="M15 18L22 6L29 18" stroke="#C9A467" strokeWidth="1" />
    <path d="M15 18L22 38L29 18" stroke="#C9A467" strokeWidth="1" />
  </svg>
);

const ValueCreationIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    {/* Lightbulb with glow — value creation / innovation */}
    <path d="M22 8C17 8 13 12 13 17C13 20.5 15 23 17 25V29H27V25C29 23 31 20.5 31 17C31 12 27 8 22 8Z" stroke="#C9A467" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M17 32H27" stroke="#C9A467" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M18 35H26" stroke="#C9A467" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M22 8V5" stroke="#C9A467" strokeWidth="1" strokeLinecap="round" />
    <path d="M32 17H35" stroke="#C9A467" strokeWidth="1" strokeLinecap="round" />
    <path d="M9 17H12" stroke="#C9A467" strokeWidth="1" strokeLinecap="round" />
    <path d="M29 10L31 8" stroke="#C9A467" strokeWidth="1" strokeLinecap="round" />
    <path d="M15 10L13 8" stroke="#C9A467" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const reasons = [
  {
    Icon: UAEExpertiseIcon,
    title: 'UAE Market Expertise',
    desc: 'Deep understanding of the UAE & GCC market dynamics and opportunities.',
  },
  {
    Icon: StrategicDevIcon,
    title: 'Strategic Business Development',
    desc: 'Hands-on approach to build, scale and transform businesses.',
  },
  {
    Icon: NetworkIcon,
    title: 'Strong Commercial Network',
    desc: 'Extensive network that opens doors to growth and partnerships.',
  },
  {
    Icon: ValueCreationIcon,
    title: 'Long-Term Value Creation',
    desc: 'Focused on sustainable growth and enduring business value.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const WhySahmora = () => {
  return (
    <section className="bg-[#F5F0E7] py-14 md:py-20 border-t border-[#C9A467]/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-5 mb-14"
        >
          <div className="h-[1px] w-14 bg-[#C9A467]/50" />
          <span className="text-[#1A1A1A] text-[11px] font-body tracking-[0.3em] font-bold uppercase">
            Why Sahmora
          </span>
          <div className="h-[1px] w-14 bg-[#C9A467]/50" />
        </motion.div>

        {/* 4 columns with vertical gold dividers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0"
        >
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`flex items-start gap-4 px-5 lg:px-7 py-5 md:py-0 group ${
                idx > 0 ? 'md:border-l md:border-[#C9A467]/20' : ''
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
                <item.Icon />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h4 className="text-[#111] font-body font-bold text-[13.5px] leading-[1.3] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-[#6A6A6A] text-[12px] leading-[1.65] font-body font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhySahmora;
