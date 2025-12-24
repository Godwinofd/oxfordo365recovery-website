import React from 'react';
import { motion } from 'framer-motion';
import { CarFront, BatteryWarning, AlertTriangle, Truck } from 'lucide-react';
import { EmpathyCardProps } from '../types';

const EmpathyCard: React.FC<EmpathyCardProps> = ({ icon: Icon, title, delay }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative bg-white p-6 sm:p-8 rounded-lg border-2 border-gray-100 hover:border-amber transition-all duration-300 flex flex-col items-center text-center gap-4"
    >
      {/* Icon with gradient background */}
      <div className="relative">
        <div className="absolute inset-0 bg-amber/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <div className="relative p-4 bg-gradient-to-br from-navy to-navy/80 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7" strokeWidth={2} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-navy group-hover:text-amber transition-colors duration-300">
        {title}
      </h3>

      {/* Accent line */}
      <div className="w-12 h-1 bg-amber/30 group-hover:w-full group-hover:bg-amber transition-all duration-300 rounded-full"></div>
    </motion.div>
  );
};

const EmpathySection: React.FC = () => {
  return (
    <div className="py-16 md:py-20 bg-gradient-to-b from-offwhite to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block">
            <p className="text-xs sm:text-sm font-bold text-amber uppercase tracking-widest mb-3">
              24/7 Emergency Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
              Immediate Response For
            </h2>
            <div className="h-1 w-24 bg-amber mx-auto rounded-full"></div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <EmpathyCard icon={AlertTriangle} title="Breakdown" delay={0} />
          <EmpathyCard icon={BatteryWarning} title="Flat Battery" delay={0.1} />
          <EmpathyCard icon={CarFront} title="Accident Recovery" delay={0.2} />
          <EmpathyCard icon={Truck} title="Transport" delay={0.3} />
        </motion.div>
      </div>
    </div>
  );
};

export default EmpathySection;