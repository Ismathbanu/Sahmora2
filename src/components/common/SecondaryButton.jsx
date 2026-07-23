import React from 'react';
import { motion } from 'framer-motion';

const SecondaryButton = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-transparent border border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)] hover:text-[var(--color-brand-primary)] px-8 py-3 rounded-[var(--radius-button)] font-medium transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default SecondaryButton;
