import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EmpathySection from './components/EmpathySection';
import TrustSection from './components/TrustSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import LocalCoverage from './components/LocalCoverage';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import LegalModals from './components/LegalModals';

const App: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = React.useState(false);
  const [legalModalType, setLegalModalType] = React.useState<'privacy' | 'terms' | 'cookies' | null>(null);

  const openLegalModal = (type: 'privacy' | 'terms' | 'cookies') => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };

  // Smooth scroll fix for some browsers/devices
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="antialiased font-sans text-navy bg-offwhite overflow-x-hidden selection:bg-amber selection:text-navy">
      <Navbar />
      <main>
        <Hero />
        <EmpathySection />
        <TrustSection />
        <ServicesSection />
        <GallerySection />
        <LocalCoverage />
        <TestimonialsSection />
      </main>
      <Footer onOpenLegal={openLegalModal} />
      <CookieBanner />
      <LegalModals
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        type={legalModalType}
      />
    </div>
  );
};

export default App;