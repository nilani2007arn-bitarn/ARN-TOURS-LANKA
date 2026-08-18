import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import arnLogoImg from '../assets/images/arn_tours_logo_1787042363655.jpg';

interface FooterProps {
  onNavClick: (sec: string) => void;
  onOpenPlanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenPlanner }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-blue-400/40 bg-white p-0.5 shadow-md shrink-0">
                <img
                  src={arnLogoImg}
                  alt="ARN Tours Lanka Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight block leading-tight">
                  ARN TOURS LANKA
                </span>
                <span className="text-[10px] font-semibold text-[#ffdcc4] uppercase tracking-[0.2em]">
                  Sri Lanka's Premium Concierge
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Crafting bespoke luxury journeys, Ayurvedic wellness sanctuaries, private tea estate escapes, and wildlife safaris across the Pearl of the Indian Ocean.
            </p>


            <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                SLTDA Licensed
              </span>
              <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                100% Carbon Neutral
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore & Tours
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavClick('tours')} className="hover:text-[#ffdcc4] transition-colors cursor-pointer">
                  Featured Tour Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('destinations')} className="hover:text-[#ffdcc4] transition-colors cursor-pointer">
                  Destinations & Regions
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('wellness')} className="hover:text-[#ffdcc4] transition-colors cursor-pointer">
                  Wellness & Ayurveda
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-[#ffdcc4] transition-colors cursor-pointer">
                  Luxury Fleet & Concierge
                </button>
              </li>
              <li>
                <button onClick={onOpenPlanner} className="hover:text-[#ffdcc4] font-bold text-[#ffdcc4] transition-colors cursor-pointer">
                  Custom Trip Builder &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Values */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-[#ffdcc4] transition-colors cursor-pointer">
                  About Us & Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('sustainability')} className="hover:text-[#ffdcc4] transition-colors cursor-pointer">
                  Sustainable Travel Pledge
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('gallery')} className="hover:text-[#ffdcc4] transition-colors cursor-pointer">
                  Visual Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('contact')} className="hover:text-[#ffdcc4] transition-colors cursor-pointer">
                  FAQ & Support
                </button>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Colombo,+Sri+Lanka" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffdcc4] transition-colors">
                  Colombo Headquarters Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: 24/7 Concierge Hotline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              24/7 Operations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ffdcc4] shrink-0" />
                <a href="tel:+940729601551" className="hover:text-white font-semibold">
                  +94 072 960 1551
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/94729601551" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp: +94 072 960 1551
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ffdcc4] shrink-0" />
                <a href="mailto:info@arntourslanka.com" className="hover:text-white">
                  info@arntourslanka.com
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#ffdcc4] shrink-0 mt-0.5" />
                <span>Colombo 03, Western Province, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} ARN TOURS LANKA. All rights reserved. Sri Lanka's Premium Concierge.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                alert('ARN Tours Lanka Privacy Policy: We never sell or share client data. All bookings are strictly protected under confidentiality.');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                alert('ARN Tours Lanka Terms of Service: Private chauffeur-guided tours with flexible change policies and full licensing.');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#ffdcc4] hover:underline cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
