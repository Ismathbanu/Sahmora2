import React from 'react';
import { motion } from 'framer-motion';

const PrimaryButton = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-[var(--color-brand-accent)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-accent-hover)] px-8 py-3 rounded-[var(--radius-button)] font-medium transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default PrimaryButton;
