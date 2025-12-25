import React from 'react';
import { Phone, Mail } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'cookies') => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Main CTA Block */}
        <div className="bg-navy-light rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border border-white/5">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready when you need us.</h2>
            <p className="text-white/60">Save our number. You never know when you might need a hand.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="tel:07415535213"
              className="flex items-center justify-center gap-3 bg-amber hover:bg-amber-light text-navy px-8 py-4 rounded font-bold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>07415535213</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo.png"
                alt="Oxford 365 Recovery"
                width="160"
                height="54"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
              Providing professional, reliable vehicle recovery services across Oxfordshire.
              Licensed, insured, and dedicated to getting you home safely.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber" />
                <a href="tel:07415535213" className="hover:text-white transition-colors" aria-label="Call 07415535213">07415535213</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors text-left py-2 md:py-0 block w-full md:w-auto">Privacy Policy</button></li>
              <li><button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors text-left py-2 md:py-0 block w-full md:w-auto">Terms of Service</button></li>
              <li><button onClick={() => onOpenLegal('cookies')} className="hover:text-white transition-colors text-left py-2 md:py-0 block w-full md:w-auto">Cookie Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Oxford 365 Recovery Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;