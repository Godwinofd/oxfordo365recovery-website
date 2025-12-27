import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Users, Award } from 'lucide-react';

const ExpertiseSection: React.FC = () => {
    return (
        <Section id="expertise" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Content and SEO-Heavy Text */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-2 mb-6"
                    >
                        <ShieldCheck className="w-4 h-4 text-navy" />
                        <span className="text-navy font-semibold uppercase text-xs tracking-wider">
                            Professional Standards
                        </span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                        The Science of <br /><span className="text-amber">Safe Car Recovery.</span>
                    </h2>

                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        <p>
                            When you search for <strong>car recovery in Oxford</strong>, you deserve more than just a tow; you need a professional service that understands the technical complexities of modern vehicles. Our team is fully insured and operates a fleet of state-of-the-art recovery trucks equipped for every scenario.
                        </p>

                        <p>
                            From <strong>low-clearance car parks in Oxford city centre</strong> to rapid responses on the <strong>M40 and A34</strong>, our technicians use specialized lifting equipment to ensure zero damage to your vehicle's transmission, suspension, or bodywork. We are Oxford's trusted specialists for luxury, electric (EV), and classic car transport.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center text-amber">
                                    <Truck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy">Modern Fleet</h4>
                                    <p className="text-sm">Specialist tilt-and-slide beds for all car types.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center text-amber">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy">Fully Insured</h4>
                                    <p className="text-sm">Comprehensive goods-in-transit and public liability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Expertise Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 bg-offwhite border border-gray-100 rounded-2xl shadow-sm"
                    >
                        <h3 className="font-bold text-navy mb-2">Motorway Specialist</h3>
                        <p className="text-sm text-gray-500">Rapid extraction from M40, A34, and A40. We know every junction and safe-zone in Oxfordshire.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 bg-navy text-white rounded-2xl shadow-lg border border-navy-light"
                    >
                        <h3 className="font-bold text-amber mb-2">24/7 Availability</h3>
                        <p className="text-sm text-white/60">Rain, snow, or bank holidays. Oxford 365 is the only recovery service that never sleeps.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 bg-offwhite border border-gray-100 rounded-2xl shadow-sm"
                    >
                        <h3 className="font-bold text-navy mb-2">EV Recovery</h3>
                        <p className="text-sm text-gray-500">Specialized equipment for safe electric vehicle recovery and battery jump-start services.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 bg-offwhite border border-gray-100 rounded-2xl shadow-sm"
                    >
                        <h3 className="font-bold text-navy mb-2">Fair Pricing</h3>
                        <p className="text-sm text-gray-500">Transparent, competitive rates for Oxford car recovery with no hidden midnight surcharges.</p>
                    </motion.div>
                </div>

            </div>
        </Section>
    );
};

export default ExpertiseSection;
