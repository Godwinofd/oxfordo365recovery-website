import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Shield, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-navy">
      {/* Background Video with Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/60 z-10" />

        {/* Custom tow truck video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/IMG_1412.jpeg"
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* SEO-focused hidden content */}
      <div className="sr-only">
        <h2>Emergency Car Recovery & Tow Truck Oxford</h2>
        <p>Reliable breakdown recovery, vehicle transport, and roadside assistance throughout Oxfordshire including M40 and A34.</p>
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-center">

        <div className="max-w-3xl">
          {/* Badge */}
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="inline-flex items-center gap-2 bg-amber/20 backdrop-blur-sm border border-amber/30 rounded-full px-4 py-2"
            >
              <Clock className="w-4 h-4 text-amber" />
              <span className="text-amber font-semibold tracking-wider uppercase text-xs sm:text-sm">
                24/7 Emergency Assistance
              </span>
            </motion.div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                24/7 Vehicle <span className="text-amber">Recovery</span>
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block text-white/90"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                In Oxford & Oxfordshire
              </motion.span>
            </div>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl leading-relaxed"
          >
            Professional, calm, and reliable vehicle recovery.
            We turn a stressful situation into a managed solution.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="tel:07415535213"
              className="group relative flex items-center justify-center gap-3 bg-amber hover:bg-amber/90 text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-amber/30 hover:shadow-amber/50 hover:scale-105 min-h-[44px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <Phone className="w-5 h-5 fill-current relative z-10" />
              <span className="relative z-10">Call For Rescue</span>
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-white border-2 border-white/30 hover:border-amber hover:bg-white/10 backdrop-blur-sm transition-all duration-300 min-h-[44px] group"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="flex flex-wrap gap-6 sm:gap-8"
          >
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5 text-amber" />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-5 h-5 text-amber" />
              <span className="text-sm font-medium">5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-5 h-5 rounded-full bg-amber flex items-center justify-center">
                <span className="text-navy text-xs font-bold">✓</span>
              </div>
              <span className="text-sm font-medium">Family Run</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;