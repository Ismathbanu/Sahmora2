import fs from 'fs';
import path from 'path';

const components = {
  'PrimaryButton.jsx': `import React from 'react';
import { motion } from 'framer-motion';

const PrimaryButton = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={\`bg-[var(--color-brand-accent)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-accent-hover)] px-8 py-3 rounded-[var(--radius-button)] font-medium transition-colors duration-300 \${className}\`}
    >
      {children}
    </motion.button>
  );
};

export default PrimaryButton;
`,
  'SecondaryButton.jsx': `import React from 'react';
import { motion } from 'framer-motion';

const SecondaryButton = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={\`bg-transparent border border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)] hover:text-[var(--color-brand-primary)] px-8 py-3 rounded-[var(--radius-button)] font-medium transition-colors duration-300 \${className}\`}
    >
      {children}
    </motion.button>
  );
};

export default SecondaryButton;
`,
  'SectionTitle.jsx': `import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <div className={\`mb-12 \${centered ? 'text-center flex flex-col items-center' : ''}\`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--color-brand-accent)] font-medium uppercase tracking-wider text-sm mb-4 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)]"
      >
        {title}
      </motion.h2>
      {centered && <div className="luxury-divider w-24 mt-8" />}
    </div>
  );
};

export default SectionTitle;
`,
  'ImageCard.jsx': `import React from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({ imageSrc, title, description, className = '' }) => {
  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={\`bg-[var(--color-text-white)] border border-[var(--color-border-default)] rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-subtle)] group \${className}\`}
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
`,
  'ServiceCard.jsx': `import React from 'react';
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
`,
  'IndustryCard.jsx': `import React from 'react';
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
`,
  'PageBanner.jsx': `import React from 'react';
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
`,
  'CTASection.jsx': `import React from 'react';
import PrimaryButton from './PrimaryButton';

const CTASection = () => {
  return (
    <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section-tablet)] lg:py-[var(--spacing-section-desktop)] bg-[var(--color-brand-primary)] text-[var(--color-text-white)]">
      <div className="content-width text-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Ready to Partner With Us?</h2>
        <p className="text-[var(--color-brand-secondary)] opacity-80 max-w-2xl mx-auto mb-10 text-lg">
          Discover how Sahmora Investment LLC can elevate your business strategy and deliver sustainable growth.
        </p>
        <PrimaryButton>Contact Us Today</PrimaryButton>
      </div>
    </section>
  );
};

export default CTASection;
`
};

Object.entries(components).forEach(([filename, content]) => {
  fs.writeFileSync(path.join('src/components/common', filename), content);
});

console.log('Components created.');
