import React from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({ imageSrc, title, description, className = '' }) => {
  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`bg-[var(--color-text-white)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-subtle)] group ${className}`}
    >
      <div className="overflow-hidden h-64">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl mb-4">{title}</h3>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ImageCard;
