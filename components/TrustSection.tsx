import React from 'react';
import Section from './ui/Section';
import { ShieldCheck, MapPin, Users, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustSection: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Family Run",
      description: "Personal care and accountability. We treat every vehicle as if it were our own."
    },
    {
      icon: Clock,
      title: "5+ Years Experience",
      description: "Thousands of successful recoveries. We have seen it all and solved it all."
    },
    {
      icon: MapPin,
      title: "Oxfordshire Based",
      description: "Local knowledge means faster routes. We don't rely on generic GPS."
    },
    {
      icon: ShieldCheck,
      title: "Fully Insured",
      description: "Complete professional indemnity and public liability for your peace of mind."
    }
  ];

  return (
    <Section id="trust">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">

        {/* Left: Content */}
        <div>
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-amber fill-amber" />
              <span className="text-amber font-semibold uppercase text-xs tracking-wider">
                Why Choose Us
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6 leading-tight"
          >
            Not just a tow truck.<br />
            <span className="text-amber">A safety net.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed"
          >
            When you are stranded, you don't need a call center. You need a solution.
            Oxford 365 Recovery is built on the principle of calm competence.
            We arrive, we assess, and we resolve.
          </motion.p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Icon Circle */}
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-amber/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-navy to-navy/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-amber" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-amber transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden group">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/safety.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/20"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber fill-amber" />
              ))}
            </div>
            <p className="text-navy font-medium text-base mb-3 leading-relaxed">
              "Arrived within 20 minutes and got me home safely. The calmness was exactly what I needed."
            </p>
            <p className="text-amber text-sm font-bold uppercase tracking-wider">
              — Sarah T., Jericho
            </p>
          </motion.div>
        </div>

      </div>
    </Section>
  );
};

export default TrustSection;