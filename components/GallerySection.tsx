import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';

const images = [
  "/images/IMG_1412.jpeg",
  "/images/IMG_1413.jpeg",
  "/images/IMG_1414.jpeg",
  "/images/IMG_1415.jpeg"
];

const GallerySection: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-navy mb-2">Real Recoveries</h2>
          <p className="text-gray-500">Oxfordshire, everyday.</p>
        </div>
        <div className="h-[1px] bg-gray-200 flex-grow ml-8 mb-2 hidden md:block" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 relative group shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={src}
              alt={`Vehicle recovery scene ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default GallerySection;