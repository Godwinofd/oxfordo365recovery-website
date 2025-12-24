import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, dark = false }) => {
  return (
    <section
      id={id}
      className={`py-12 md:py-20 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden relative ${dark ? 'bg-navy text-white' : 'bg-offwhite text-navy'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;