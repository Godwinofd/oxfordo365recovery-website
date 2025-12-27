import React, { useState } from 'react';
import Section from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How fast can you reach a breakdown in Oxford?",
        answer: "Typically, we aim to be with you within 30-45 minutes for Oxford city centre and the Ring Road. On the M40 and A34 corridors, our response time is usually under 60 minutes depending on traffic conditions."
    },
    {
        question: "Do you offer 24/7 recovery on Sundays and Bank Holidays?",
        answer: "Yes, we are a true 365-day service. We operate every single day of the year, including late nights, Sundays, and public holidays, to ensure you're never stranded."
    },
    {
        question: "Which areas of Oxfordshire do you cover?",
        answer: "We cover the entire Oxfordshire county, including Oxford, Abingdon, Bicester, Witney, Didcot, Kidlington, and the primary motorway networks (M40, A34, A40)."
    },
    {
        question: "Can you recover larger vehicles like vans or motorbikes?",
        answer: "Absolutely. Our fleet is equipped to handle everything from motorbikes and standard family cars to large commercial vans. We also offer specialized transport for classic vehicles."
    },
    {
        question: "What happens if you can't fix my car at the roadside?",
        answer: "If a roadside repair isn't possible, we provide seamless vehicle recovery. We can transport you and your vehicle to any local garage of your choice, your home address, or our secure storage facility."
    }
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section id="faq" className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-2 mb-6"
                    >
                        <HelpCircle className="w-4 h-4 text-navy" />
                        <span className="text-navy font-semibold uppercase text-xs tracking-wider">
                            Common Questions
                        </span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">You ask. We answer.</h2>
                    <p className="text-gray-500 text-lg">Everything you need to know about our recovery service.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-white rounded-xl shadow-sm border transition-all duration-300 ${isOpen ? 'border-amber shadow-md' : 'border-gray-100 hover:border-amber/30'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className="font-bold text-navy text-lg pr-8">{faq.question}</span>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-amber text-navy' : 'bg-gray-100 text-gray-400'}`}>
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default FAQSection;
