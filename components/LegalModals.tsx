import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Lock, Cookie } from 'lucide-react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'privacy' | 'terms' | 'cookies' | null;
}

const LegalModals: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
    if (!isOpen || !type) return null;

    const content = {
        privacy: {
            title: "Privacy Policy",
            icon: Lock,
            text: (
                <div className="space-y-4 text-navy/80">
                    <p><strong>Last Updated: December 2025</strong></p>
                    <p>At Oxford 365 Recovery, we are committed to protecting your privacy and security. This policy explains how we collect and use your information.</p>
                    <h4 className="font-bold text-navy">1. Information We Collect</h4>
                    <p>We collect information necessary to provide roadside assistance, including your name, phone number, vehicle details, and precise location. This data is used solely for the purpose of rescue and recovery.</p>
                    <h4 className="font-bold text-navy">2. How We Use Your Data</h4>
                    <p>Your data is used to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Dispatch a recovery vehicle to your location.</li>
                        <li>Process payments for services rendered.</li>
                        <li>Communicate updates about your recovery status.</li>
                    </ul>
                    <h4 className="font-bold text-navy">3. Data Sharing</h4>
                    <p>We do not sell your data. We may share your details with insurance providers or partner garages only if explicitly requested by you to facilitate repairs.</p>
                    <h4 className="font-bold text-navy">4. Your Rights</h4>
                    <p>You have the right to request a copy of the data we hold about you or request its deletion after the service is complete, subject to legal record-keeping requirements.</p>
                </div>
            )
        },
        terms: {
            title: "Terms of Service",
            icon: FileText,
            text: (
                <div className="space-y-4 text-navy/80">
                    <p><strong>Effective Date: December 2025</strong></p>
                    <p>By using Oxford 365 Recovery services, you agree to the following terms and conditions.</p>
                    <h4 className="font-bold text-navy">1. Service Availability</h4>
                    <p>We strive for 24/7 availability but cannot guarantee specific arrival times due to traffic, weather, or demand. Estimated arrival times are best-effort predictions.</p>
                    <h4 className="font-bold text-navy">2. Payment</h4>
                    <p>Payment is due upon completion of the service unless otherwise agreed (e.g., direct billing to insurance). We accept all major cards and cash.</p>
                    <h4 className="font-bold text-navy">3. Liability</h4>
                    <p>While we take every care with your vehicle, Oxford 365 Recovery is not liable for existing damage or mechanical failures not caused by our towing process. Customers must ensure their vehicle is legal to transport (no illegal goods).</p>
                    <h4 className="font-bold text-navy">4. Cancellation</h4>
                    <p>Cancellations made after a driver has been dispatched may incur a call-out fee.</p>
                </div>
            )
        },
        cookies: {
            title: "Cookie Policy",
            icon: Cookie,
            text: (
                <div className="space-y-4 text-navy/80">
                    <p><strong>What are cookies?</strong></p>
                    <p>Cookies are small text files stored on your device that help us improve your experience.</p>
                    <h4 className="font-bold text-navy">1. Essential Cookies</h4>
                    <p>Required for the website to function, such as remembering your consent preferences.</p>
                    <h4 className="font-bold text-navy">2. Analytics Cookies</h4>
                    <p>We use anonymous analytics to understand which local areas request the most recovery services, helping us position our fleet more effectively.</p>
                    <h4 className="font-bold text-navy">3. Managing Cookies</h4>
                    <p>You can control or delete cookies through your browser settings at any time.</p>
                </div>
            )
        }
    };

    const currentContent = content[type];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-navy/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85dvh] sm:max-h-[80vh] z-[1001]"
                    >
                        {/* Header */}
                        <div className="p-4 sm:p-6 bg-navy text-white flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/10 p-2 rounded-lg text-amber">
                                    <currentContent.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold">{currentContent.title}</h3>
                            </div>
                            <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-2" aria-label="Close modal">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="p-4 sm:p-8 overflow-y-auto custom-scrollbar overscroll-contain">
                            {currentContent.text}
                        </div>

                        {/* Footer */}
                        <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50 flex justify-end shrink-0">
                            <button
                                onClick={onClose}
                                className="w-full sm:w-auto bg-navy text-white px-6 py-3 sm:py-2 rounded-lg font-bold hover:bg-navy-light transition-colors active:scale-95 transform"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LegalModals;
