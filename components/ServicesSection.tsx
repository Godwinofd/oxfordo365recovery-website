import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { ArrowRight, Key, Battery, Car, Truck, Wrench } from 'lucide-react';
import { ServiceItem } from '../types';

const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'breakdown',
      title: 'Roadside Repair',
      description: 'Minor issues fixed on the spot so you can finish your journey.',
      icon: Car
    },
    {
      id: 'recovery',
      title: 'Vehicle Recovery',
      description: 'Safe transport for your vehicle to a garage or your home.',
      icon: Truck
    },
    {
      id: 'battery',
      title: 'Battery Jump Start',
      description: 'Professional power restoration to get your engine running instantly.',
      icon: Battery
    },
    {
      id: 'access',
      title: 'Lockout Assistance',
      description: 'Regain access to your vehicle without damage.',
      icon: Key
    }
  ];

  return (
    <Section id="services" dark className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mb-12 md:mb-16 lg:mb-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6"
        >
          <Wrench className="w-4 h-4 text-amber" />
          <span className="text-amber font-semibold uppercase text-xs tracking-wider">
            Our Solutions
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Restoring your control.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
        >
          We don't just offer services; we solve the problem that is keeping you from your destination.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber/50 rounded-2xl transition-all duration-300 hover:bg-white/[0.07]"
          >
            <div className="flex flex-col h-full justify-between gap-6">
              <div className="flex justify-between items-start">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-4 bg-white/10 rounded-xl text-amber group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-amber group-hover:border-amber transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-navy -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber transition-colors duration-300">{service.title}</h3>
                <p className="text-white/60 text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;