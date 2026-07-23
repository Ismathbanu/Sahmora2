import React from 'react';
import { motion } from 'framer-motion';

// Import generated images
import strategicImg from '../../assets/images/strategic-investments.png';
import growthImg from '../../assets/images/growth-capital.png';
import acquisitionsImg from '../../assets/images/business-acquisitions.png';
import retailImg from '../../assets/images/retail-expansion.png';
import marketImg from '../../assets/images/market-entry.png';
import distributionImg from '../../assets/images/distribution-dev.png';
import brandImg from '../../assets/images/brand-scaling.png';
import transformImg from '../../assets/images/business-transform.png';

const services = [
  { title: 'Strategic\nInvestments', img: strategicImg },
  { title: 'Growth\nCapital', img: growthImg },
  { title: 'Business\nAcquisitions', img: acquisitionsImg },
  { title: 'Retail\nExpansion', img: retailImg },
  { title: 'Market Entry\nStrategy', img: marketImg },
  { title: 'Distribution\nDevelopment', img: distributionImg },
  { title: 'Brand\nScaling', img: brandImg },
  { title: 'Business\nTransformation', img: transformImg },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const WhatWeDo = () => {
  return (
    <section className="bg-[#F5F0E7] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-5 mb-14"
        >
          <div className="h-[1px] w-14 bg-[#C9A467]/60" />
          <span className="text-[#1A1A1A] text-[11px] font-body tracking-[0.3em] font-bold uppercase">
            What We Do
          </span>
          <div className="h-[1px] w-14 bg-[#C9A467]/60" />
        </motion.div>

        {/* Cards Grid — 2 rows of 4 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative h-44 md:h-[200px] lg:h-[220px] overflow-hidden group cursor-pointer bg-[#0D0D0D] rounded-[4px]"
            >
              {/* Background Image */}
              <img 
                src={svc.img} 
                alt={svc.title.replace('\n', ' ')}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-85"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A467]/30 rounded-[4px] transition-colors duration-300" />

              {/* Title */}
              <div className="absolute bottom-5 left-5 pr-4 z-10">
                <h4 className="text-white font-body font-semibold text-[13px] md:text-[14px] leading-[1.35] whitespace-pre-line">
                  {svc.title}
                </h4>
                <div className="w-8 h-[2px] bg-[#C9A467] mt-2.5 transition-all duration-300 group-hover:w-14" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default WhatWeDo;
