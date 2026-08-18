import React, { useState } from 'react';
import { Sparkles, Car, MapPin, Plane, HeartHandshake, Wifi, Gift, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import { SERVICES_DATA, ConciergeService } from '../data/servicesData';

interface ServicesSectionProps {
  onOpenPlanner: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenPlanner }) => {
  const [selectedService, setSelectedService] = useState<ConciergeService>(SERVICES_DATA[0]);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#003f87] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#003f87]" />
            <span>Sri Lanka's Premium Concierge Standard</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight mb-4">
            Elevated Ground & Concierge Services
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            True luxury lies in the unseen details. Our dedicated ground operations team ensures seamless arrivals, flawless transfers, and 24/7 personal care throughout your stay.
          </p>
        </div>

        {/* 4 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES_DATA.map((srv) => {
            const isSelected = selectedService.id === srv.id;
            return (
              <div
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between text-left ${
                  isSelected
                    ? 'border-[#003f87] bg-blue-50/40 shadow-lg ring-1 ring-[#003f87]'
                    : 'border-gray-200 bg-gray-50/50 hover:bg-white hover:shadow-md'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                      isSelected ? 'bg-[#003f87] text-white' : 'bg-white text-[#003f87] shadow-sm'
                    }`}
                  >
                    {srv.icon === 'MapPin' && <MapPin className="w-6 h-6" />}
                    {srv.icon === 'Car' && <Car className="w-6 h-6" />}
                    {srv.icon === 'Plane' && <Plane className="w-6 h-6" />}
                    {srv.icon === 'HeartHandshake' && <HeartHandshake className="w-6 h-6" />}
                  </div>

                  <span className="text-[10px] font-bold text-[#683400] uppercase tracking-wider block mb-1">
                    {srv.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#003f87]">
                    {isSelected ? 'Currently Viewing' : 'Explore Details &rarr;'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service In-Depth Feature Panel */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200 mb-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#003f87] text-xs font-bold uppercase tracking-wider border border-gray-200">
                <span>Featured Concierge Service</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900">
                {selectedService.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Service Features Checklist */}
              <div className="space-y-2.5 pt-2">
                {selectedService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenPlanner}
                  className="bg-[#003f87] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-[#0056b3] transition-all shadow-md cursor-pointer"
                >
                  Book with Custom Trip
                </button>
                <a
                  href="tel:+940729601551"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#003f87]" />
                  <span>Call Concierge: +94 072 960 1551</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* The ARN Experience Bento Grid */}
        <div className="text-left">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#683400] block mb-1">
              The Extra Mile
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900">
              The Signature ARN Experience
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Complimentary inclusions standard on all our bespoke journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1 */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
                  <Gift className="w-5 h-5 text-[#683400]" />
                </div>
                <h4 className="font-heading font-bold text-base text-gray-900 mb-1">
                  Ceylon Welcome Box
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Artisanal Ceylon Single Estate Black Tea, organic cinnamon quills, and handwritten travel journal upon arrival.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-[#2d6a48]">
                ✓ Included for all guests
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-4">
                  <Wifi className="w-5 h-5 text-[#003f87]" />
                </div>
                <h4 className="font-heading font-bold text-base text-gray-900 mb-1">
                  Seamless 5G Connectivity
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Pre-activated local Tourist SIM cards with high-speed data & onboard vehicle Wi-Fi so you never miss a beat.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-[#2d6a48]">
                ✓ Handed over at airport
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="font-heading font-bold text-base text-gray-900 mb-1">
                  24/7 Ground Assistance
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Direct mobile hotline to senior management in Colombo for spontaneous table bookings, medical aid, or route tweaks.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-[#2d6a48]">
                ✓ 24/7 dedicated support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
