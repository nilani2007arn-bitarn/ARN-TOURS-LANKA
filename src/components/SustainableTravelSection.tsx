import React, { useState } from 'react';
import { Leaf, Droplets, Trees, Heart, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface SustainableTravelSectionProps {
  onOpenPlanner: () => void;
}

export const SustainableTravelSection: React.FC<SustainableTravelSectionProps> = ({ onOpenPlanner }) => {
  const [distanceKm, setDistanceKm] = useState<number>(850); // average Sri Lanka tour km
  const [passengers, setPassengers] = useState<number>(2);

  // Carbon calculation: ~0.15 kg CO2 per km for executive hybrid vehicle
  const co2Kg = Math.round(distanceKm * 0.14 * (passengers / 2));
  const treesPlantedEquivalent = Math.max(1, Math.round(co2Kg / 22)); // 1 tree absorbs ~22kg CO2/year

  return (
    <section id="sustainability" className="py-20 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#2d6a48] text-xs font-bold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-[#2d6a48]" />
            <span>Preserving Paradise</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight mb-4">
            Travel with Purpose: Our Sri Lanka Pledge
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            Discovering Sri Lanka’s wonders comes with an unwavering responsibility to protect its delicate ecosystems, ancient monuments, and village communities.
          </p>
        </div>

        {/* 3 Core Pillars (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-200/70 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2d6a48] text-white flex items-center justify-center mb-6 shadow-md">
                <Trees className="w-6 h-6 text-[#b0f1c7]" />
              </div>
              <span className="text-[10px] font-bold text-[#2d6a48] uppercase tracking-wider block mb-1">
                Pillar 1 • Environment
              </span>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                100% Carbon Neutral Transport
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                For every kilometer our vehicles travel across Sri Lanka, we fund endemic rainforest reforestation projects in the Sinharaja buffer zone.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200/60 text-xs font-bold text-[#2d6a48]">
              ✓ Monitored & Audited Annually
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-200/70 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#003f87] text-white flex items-center justify-center mb-6 shadow-md">
                <Droplets className="w-6 h-6 text-[#bbd0ff]" />
              </div>
              <span className="text-[10px] font-bold text-[#003f87] uppercase tracking-wider block mb-1">
                Pillar 2 • Plastic-Free
              </span>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Zero Single-Use Plastic Pledge
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Every traveler receives an insulated stainless steel flask with chilled spring water dispensers inside vehicles, eliminating over 45,000 plastic bottles per year.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-200/60 text-xs font-bold text-[#003f87]">
              ✓ Reusable Kits for All Guests
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-amber-50/50 border border-amber-200/70 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#683400] text-white flex items-center justify-center mb-6 shadow-md">
                <Heart className="w-6 h-6 text-[#ffdcc4]" />
              </div>
              <span className="text-[10px] font-bold text-[#683400] uppercase tracking-wider block mb-1">
                Pillar 3 • Community
              </span>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Empowering Local Guides & Artisans
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We hire exclusively local resident naturalist trackers, patronize family-run boutique properties, and direct 5% of company profits into rural school libraries.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-200/60 text-xs font-bold text-[#683400]">
              ✓ 100% Fair Wage Certified
            </div>
          </div>
        </div>

        {/* Interactive Carbon Offset Calculator */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-inner max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#2d6a48] uppercase tracking-wider block">
                Interactive Green Calculator
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-gray-900">
                Calculate Your Sri Lanka Journey’s Carbon Offset
              </h3>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold shrink-0">
              Zero Extra Cost To You
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                Estimated Itinerary Distance: <span className="text-[#003f87] font-extrabold">{distanceKm} km</span>
              </label>
              <input
                type="range"
                min={300}
                max={2000}
                step={50}
                value={distanceKm}
                onChange={(e) => setDistanceKm(Number(e.target.value))}
                className="w-full accent-[#2d6a48] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                <span>300 km (Short)</span>
                <span>850 km (Standard 7-Day)</span>
                <span>2,000 km (Island Circuit)</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                Number of Travelers: <span className="text-[#003f87] font-extrabold">{passengers} Guests</span>
              </label>
              <input
                type="range"
                min={1}
                max={8}
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="w-full accent-[#2d6a48] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                <span>1 Solo</span>
                <span>2 Pair</span>
                <span>4 Family</span>
                <span>8 Group</span>
              </div>
            </div>
          </div>

          {/* Result Metric */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center items-center">
            <div>
              <span className="text-[10px] text-gray-500 uppercase block font-semibold">Total Est. Carbon Footprint</span>
              <span className="text-xl font-extrabold text-gray-900">{co2Kg} kg CO₂</span>
            </div>
            <div className="border-y sm:border-y-0 sm:border-x border-gray-100 py-2 sm:py-0">
              <span className="text-[10px] text-emerald-800 uppercase block font-semibold">Trees Planted by ARN Tours</span>
              <span className="text-2xl font-extrabold text-[#2d6a48]">{treesPlantedEquivalent} Native Trees 🌳</span>
            </div>
            <div>
              <span className="text-[10px] text-blue-800 uppercase block font-semibold">Your Net Carbon Impact</span>
              <span className="text-xl font-extrabold text-emerald-600">100% Neutral ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
