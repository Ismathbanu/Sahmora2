import React from 'react';
import { motion } from 'framer-motion';

const IndustryCard = ({ imageSrc, title }) => {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      className="relative rounded-[var(--radius-card)] overflow-hidden group h-80"
    >
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary)] to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <h3 className="text-[var(--color-text-white)] text-3xl">{title}</h3>
        <div className="luxury-divider mt-4 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </motion.div>
  );
};

export default IndustryCard;
