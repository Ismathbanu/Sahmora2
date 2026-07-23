import React from 'react';
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
