import React from 'react';
import Section from './ui/Section';
import { Compass, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import CoverageMap from './CoverageMap';

const LocalCoverage: React.FC = () => {
  return (
    <Section id="local" className="bg-gray-50 border-t border-gray-200 overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left: Text Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-2 mb-6"
          >
            <Compass className="w-4 h-4 text-navy" />
            <span className="text-navy font-semibold uppercase text-xs tracking-wider">
              Coverage Area
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight"
          >
            Local to Oxford.<br />
            <span className="text-amber">Faster to you.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
          >
            We know every shortcut, traffic pattern, and back road in Oxfordshire.
            While national services dispatch from miles away, we are likely just around the corner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {["Oxford City Centre", "M40 Corridor", "A34", "A40", "Ring Road"].map((loc, i) => (
              <span key={loc} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-navy shadow-sm hover:border-amber hover:text-amber transition-colors cursor-default">
                {loc}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-sm text-gray-500 mb-2">Need immediate assistance?</p>
            <a
              href="tel:07415535213"
              className="inline-flex items-center gap-2 font-bold text-lg text-navy hover:text-amber transition-colors group"
            >
              <span className="border-b-2 border-amber">Call 07415535213</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right: Map Visualization */}
        <div className="relative h-[450px] w-full rounded-2xl shadow-xl border border-gray-200 overflow-hidden group">
          <CoverageMap className="w-full h-full" />
        </div>

      </div>
    </Section>
  );
};

export default LocalCoverage;