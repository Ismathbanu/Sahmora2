import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      className="bg-[var(--color-text-white)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-subtle)]"
    >
      {Icon && <Icon className="text-[var(--color-brand-accent)] w-12 h-12 mb-6" strokeWidth={1} />}
      <h3 className="text-2xl mb-4">{title}</h3>
      <p className="text-[var(--color-text-secondary)] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
