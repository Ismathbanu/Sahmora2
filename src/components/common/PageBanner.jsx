import React from 'react';
import { motion } from 'framer-motion';

const PageBanner = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {imageSrc && (
        <>
          <div className="absolute inset-0">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-[var(--color-brand-primary)] opacity-60" />
        </>
      )}
      <div className="relative z-10 container-width text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[var(--color-brand-accent)] uppercase tracking-[0.2em] text-sm mb-4 block"
        >
          {subtitle}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl text-[var(--color-text-white)]"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
};

export default PageBanner;
