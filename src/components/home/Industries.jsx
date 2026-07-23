import React from 'react';
import { motion } from 'framer-motion';

/* ── Local image imports ── */
import luxuryImg from '../../assets/images/ind-luxury-new.png';
import fmcgImg from '../../assets/images/ind-fmcg-new.png';
import retailImg from '../../assets/images/retail-expansion.png';
import distImg from '../../assets/images/ind-dist.png';
import hospImg from '../../assets/images/ind-hosp.png';
import emergeImg from '../../assets/images/ind-emerge.png';

const industries = [
  { title: 'Luxury &\nJewellery', img: luxuryImg },
  { title: 'FMCG', img: fmcgImg },
  { title: 'Retail', img: retailImg },
  { title: 'Distribution', img: distImg },
  { title: 'Hospitality &\nHORECA', img: hospImg },
  { title: 'Emerging\nBusinesses', img: emergeImg },
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

const Industries = () => {
  return (
    <section className="bg-[#0D0D0D] py-14 md:py-20 border-t border-[#C9A467]/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-5 mb-12"
        >
          <div className="h-[1px] w-14 bg-[#C9A467]/50" />
          <span className="text-white text-[11px] font-body tracking-[0.3em] font-bold uppercase">
            Industries We Serve
          </span>
          <div className="h-[1px] w-14 bg-[#C9A467]/50" />
        </motion.div>

        {/* Cards Grid — 6 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image container */}
              <div className="relative h-44 md:h-48 lg:h-52 overflow-hidden rounded-lg bg-[#111]">
                <img
                  src={ind.img}
                  alt={ind.title.replace('\n', ' ')}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 rounded-lg" />
                {/* Gold border on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A467]/30 rounded-lg transition-colors duration-300" />
              </div>

              {/* Title below the image */}
              <h4 className="text-white font-body font-semibold text-[12px] md:text-[13px] leading-[1.35] whitespace-pre-line mt-3 pl-1">
                {ind.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Industries;
