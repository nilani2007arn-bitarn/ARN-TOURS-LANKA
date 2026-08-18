import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, ArrowRight, Check } from 'lucide-react';
import { TOURS_DATA, TourPackage } from '../data/toursData';
import { TourCard } from './TourCard';
import { Currency } from '../utils/currency';

interface ToursSectionProps {
  currency: Currency;
  onSelectTour: (tour: TourPackage) => void;
  onOpenPlanner: () => void;
  filterCategory?: string;
}

export const ToursSection: React.FC<ToursSectionProps> = ({
  currency,
  onSelectTour,
  onOpenPlanner,
  filterCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(filterCategory || 'All');

  const categories = ['All', 'Highlights', 'Wellness', 'Heritage', 'Adventure', 'Coastal', 'Wildlife'];

  const filteredTours = TOURS_DATA.filter((tour) => {
    if (selectedCategory === 'All') return true;
    return tour.category === selectedCategory;
  });

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#003f87] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#003f87]" />
            <span>Curated Signature Journeys</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight mb-4">
            Handcrafted Sri Lanka Tour Packages
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            Each itinerary is an artisanal journey designed with private luxury transport, premier boutique stays, VIP airport fast-track, and authentic cultural immersion.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#003f87] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat === 'All' ? 'All Packages (6)' : cat}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              currency={currency}
              onSelect={onSelectTour}
            />
          ))}
        </div>

        {/* Custom Itinerary Builder Banner */}
        <div className="bg-gradient-to-r from-[#003f87] to-[#0056b3] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-left relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
            <Sparkles className="w-96 h-96 text-white" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-[#ffdcc4] text-[#683400] text-xs font-bold uppercase tracking-wider inline-block mb-3">
              100% Tailor-Made Travel
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Looking for a Bespoke Route or Multi-Week Expedition?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 mb-6 leading-relaxed">
              Combine whale watching with Ayurvedic hill retreats, add seaplane transfers, or design an exclusive family holiday. Our interactive planner calculates instant estimates.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPlanner}
                className="bg-[#ffdcc4] text-[#683400] hover:bg-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Launch Interactive Trip Builder</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3.5 rounded-full font-semibold text-sm backdrop-blur-sm transition-all"
              >
                Speak with a Travel Specialist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
