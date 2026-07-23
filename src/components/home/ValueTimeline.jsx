import React from 'react';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════════════
   Custom SVG icons — gold outlines on dark circles, matching reference
   ═══════════════════════════════════════════════════════════════════════ */

/* 1. Binoculars — Identify Opportunities */
const IdentifyIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
    {/* Left lens */}
    <circle cx="13" cy="16" r="5.5" stroke="#C9A467" strokeWidth="1.3" />
    <circle cx="13" cy="16" r="2" stroke="#C9A467" strokeWidth="0.8" opacity="0.6" />
    {/* Right lens */}
    <circle cx="27" cy="16" r="5.5" stroke="#C9A467" strokeWidth="1.3" />
    <circle cx="27" cy="16" r="2" stroke="#C9A467" strokeWidth="0.8" opacity="0.6" />
    {/* Bridge */}
    <path d="M18.5 14C19 12 21 12 21.5 14" stroke="#C9A467" strokeWidth="1.2" strokeLinecap="round" />
    {/* Left barrel */}
    <path d="M9 21.5V28" stroke="#C9A467" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 21.5V28" stroke="#C9A467" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 28H17" stroke="#C9A467" strokeWidth="1.2" strokeLinecap="round" />
    {/* Right barrel */}
    <path d="M23 21.5V28" stroke="#C9A467" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M31 21.5V28" stroke="#C9A467" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M23 28H31" stroke="#C9A467" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/* 2. Magnifying glass with crosshair — Evaluate Potential */
const EvaluateIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
    {/* Lens */}
    <circle cx="17" cy="17" r="9" stroke="#C9A467" strokeWidth="1.3" />
    {/* Handle */}
    <line x1="24" y1="24" x2="33" y2="33" stroke="#C9A467" strokeWidth="2" strokeLinecap="round" />
    {/* Crosshair / target inside */}
    <circle cx="17" cy="17" r="4.5" stroke="#C9A467" strokeWidth="0.9" opacity="0.6" />
    <line x1="17" y1="11" x2="17" y2="14" stroke="#C9A467" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="17" y1="20" x2="17" y2="23" stroke="#C9A467" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="11" y1="17" x2="14" y2="17" stroke="#C9A467" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="20" y1="17" x2="23" y2="17" stroke="#C9A467" strokeWidth="0.9" strokeLinecap="round" />
  </svg>
);

/* 3. Handshake — Strategic Investment */
const InvestmentIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
    {/* Left hand */}
    <path d="M4 20L10 14L16 18" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Right hand */}
    <path d="M36 20L30 14L24 18" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Handshake clasp */}
    <path d="M16 18L20 22L24 18" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Lower handshake continuation */}
    <path d="M14 22L18 26L22 24L26 22" stroke="#C9A467" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Radiating lines — trust/impact */}
    <line x1="17" y1="8" x2="17" y2="11" stroke="#C9A467" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
    <line x1="23" y1="8" x2="23" y2="11" stroke="#C9A467" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
    <line x1="20" y1="6" x2="20" y2="10" stroke="#C9A467" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
    {/* Side sparkle lines */}
    <line x1="11" y1="10" x2="13" y2="12" stroke="#C9A467" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    <line x1="29" y1="10" x2="27" y2="12" stroke="#C9A467" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
  </svg>
);

/* 4. Gear with sparkle — Operational Excellence */
const OperationalIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
    {/* Main gear */}
    <circle cx="20" cy="21" r="7" stroke="#C9A467" strokeWidth="1.3" />
    <circle cx="20" cy="21" r="3" stroke="#C9A467" strokeWidth="1" />
    {/* Gear teeth */}
    <path d="M20 12V14.5" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M20 27.5V30" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M11 21H13.5" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M26.5 21H29" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M13.6 14.6L15.4 16.4" stroke="#C9A467" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M24.6 25.6L26.4 27.4" stroke="#C9A467" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M26.4 14.6L24.6 16.4" stroke="#C9A467" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M15.4 25.6L13.6 27.4" stroke="#C9A467" strokeWidth="1.1" strokeLinecap="round" />
    {/* Sparkle top-right */}
    <path d="M30 8L31 5L32 8L35 9L32 10L31 13L30 10L27 9Z" stroke="#C9A467" strokeWidth="0.9" fill="none" opacity="0.8" />
    {/* Small sparkle */}
    <circle cx="34" cy="5" r="1" fill="#C9A467" opacity="0.5" />
  </svg>
);

/* 5. Bar chart trending up — Business Growth */
const GrowthIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
    {/* Bars */}
    <rect x="6" y="24" width="5" height="10" rx="0.5" stroke="#C9A467" strokeWidth="1.2" />
    <rect x="14" y="18" width="5" height="16" rx="0.5" stroke="#C9A467" strokeWidth="1.2" />
    <rect x="22" y="12" width="5" height="22" rx="0.5" stroke="#C9A467" strokeWidth="1.2" />
    <rect x="30" y="8" width="5" height="26" rx="0.5" stroke="#C9A467" strokeWidth="1.2" />
    {/* Upward arrow */}
    <path d="M8 20L16 13L24 9L33 5" stroke="#C9A467" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    <path d="M30 4H34V8" stroke="#C9A467" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
  </svg>
);

/* 6. Trophy — Long-Term Success */
const SuccessIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
    {/* Cup body */}
    <path d="M13 8H27V18C27 22 23 25 20 25C17 25 13 22 13 18V8Z" stroke="#C9A467" strokeWidth="1.3" strokeLinejoin="round" />
    {/* Left handle */}
    <path d="M13 11H9C9 15.5 11 17 13 16.5" stroke="#C9A467" strokeWidth="1.2" strokeLinecap="round" />
    {/* Right handle */}
    <path d="M27 11H31C31 15.5 29 17 27 16.5" stroke="#C9A467" strokeWidth="1.2" strokeLinecap="round" />
    {/* Stem */}
    <line x1="20" y1="25" x2="20" y2="29" stroke="#C9A467" strokeWidth="1.3" />
    {/* Base */}
    <path d="M14 29H26" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M12 32H28" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" />
    {/* Star on cup */}
    <path d="M20 12L21 14.5H23.5L21.5 16L22.5 18.5L20 17L17.5 18.5L18.5 16L16.5 14.5H19Z" fill="#C9A467" opacity="0.5" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════════ */

const steps = [
  { Icon: IdentifyIcon, title: 'Identify', subtitle: 'Opportunities' },
  { Icon: EvaluateIcon, title: 'Evaluate', subtitle: 'Potential' },
  { Icon: InvestmentIcon, title: 'Strategic', subtitle: 'Investment' },
  { Icon: OperationalIcon, title: 'Operational', subtitle: 'Excellence' },
  { Icon: GrowthIcon, title: 'Business', subtitle: 'Growth' },
  { Icon: SuccessIcon, title: 'Long-Term', subtitle: 'Success' },
];

/* ── Chevron connector between steps ── */
const ChevronConnector = () => (
  <div className="hidden md:flex items-center mx-[-2px]">
    {/* Gold line segment with small > chevron */}
    <div className="flex items-center gap-0">
      <div className="w-6 lg:w-8 h-[1px] bg-[#C9A467]/50" />
      <svg viewBox="0 0 10 14" fill="none" className="w-2.5 h-3.5 flex-shrink-0">
        <path d="M1 1L7 7L1 13" stroke="#C9A467" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
      <div className="w-6 lg:w-8 h-[1px] bg-[#C9A467]/50" />
    </div>
  </div>
);

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
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const ValueTimeline = () => {
  return (
    <section className="bg-[#F5F0E7] py-14 md:py-20 border-t border-[#C9A467]/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          <div className="h-[1px] w-14 bg-[#C9A467]/60" />
          <span className="text-[#1A1A1A] text-[11px] font-body tracking-[0.3em] font-bold uppercase">
            How We Create Value
          </span>
          <div className="h-[1px] w-14 bg-[#C9A467]/60" />
        </motion.div>

        {/* Steps Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0"
        >
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                {/* Dark circle with gold icon */}
                <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] bg-[#0D0D0D] rounded-full flex items-center justify-center mb-4 border border-[#C9A467]/25 group-hover:border-[#C9A467]/60 transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(201,164,103,0.15)]">
                  <step.Icon />
                </div>
                {/* Two-line label */}
                <span className="text-[#1A1A1A] text-[10px] md:text-[11px] font-body font-bold tracking-[0.06em] leading-[1.35] block">
                  {step.title}
                </span>
                <span className="text-[#1A1A1A] text-[10px] md:text-[11px] font-body font-bold tracking-[0.06em] leading-[1.35] block">
                  {step.subtitle}
                </span>
              </motion.div>

              {/* Chevron connector (not after last step) */}
              {idx < steps.length - 1 && <ChevronConnector />}
            </React.Fragment>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ValueTimeline;
