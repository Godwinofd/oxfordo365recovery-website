import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X } from 'lucide-react';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem('oxford365_cookie_consent');
        if (!consent) {
            // Show details after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('oxford365_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('oxford365_cookie_consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-4 left-4 right-4 md:left-8 md:bottom-8 md:max-w-md z-[100]"
                >
                    <div className="bg-navy/95 backdrop-blur shadow-2xl rounded-2xl p-6 border border-white/10 text-white relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="flex items-start gap-4 mb-4 relative z-10">
                            <div className="bg-white/10 p-2 rounded-lg text-amber shrink-0">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Your Privacy Matters</h4>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    We use cookies to ensure you get the best and fastest breakdown assistance experience.
                                    Are you happy for us to use them?
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 relative z-10">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-amber text-navy font-bold py-2.5 rounded-lg hover:bg-amber-light transition-colors text-sm"
                            >
                                Accept All
                            </button>
                            <button
                                onClick={handleDecline}
                                className="flex-1 bg-white/10 text-white font-medium py-2.5 rounded-lg hover:bg-white/20 transition-colors text-sm"
                            >
                                Decline
                            </button>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                            aria-label="Close cookie banner"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
