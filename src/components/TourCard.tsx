import React from 'react';
import { ArrowRight, Clock, MapPin, Sparkles, Star } from 'lucide-react';
import { TourPackage } from '../data/toursData';
import { Currency, formatPrice } from '../utils/currency';

interface TourCardProps {
  tour: TourPackage;
  currency: Currency;
  onSelect: (tour: TourPackage) => void;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, currency, onSelect }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col group text-left h-full">
      {/* Image Banner */}
      <div className="relative h-64 overflow-hidden shrink-0">
        <img
          src={tour.coverImage}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#003f87] text-[11px] font-bold uppercase tracking-wider shadow-sm">
            {tour.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#003f87]/90 backdrop-blur-md text-white text-[11px] font-semibold shadow-sm">
            {tour.durationDays} Days / {tour.durationNights} Nights
          </span>
        </div>

        {/* Bottom overlay Route */}
        <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
          <p className="text-[11px] font-medium text-gray-200 flex items-center gap-1 truncate">
            <MapPin className="w-3.5 h-3.5 text-[#ffdcc4] shrink-0" />
            <span className="truncate">{tour.route}</span>
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900 mb-2 group-hover:text-[#003f87] transition-colors leading-snug">
            {tour.title}
          </h3>
          <p className="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed">
            {tour.description}
          </p>

          {/* Quick Highlights list */}
          <div className="space-y-1.5 mb-5">
            {tour.highlights.slice(0, 3).map((hl, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a48] mt-1.5 shrink-0" />
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Action */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider block">All-inclusive from</span>
            <span className="text-lg font-extrabold text-[#003f87]">
              {formatPrice(tour.pricePerPersonUSD, currency)}
              <span className="text-xs font-normal text-gray-500"> /person</span>
            </span>
          </div>

          <button
            onClick={() => onSelect(tour)}
            className="inline-flex items-center gap-1.5 bg-blue-50 text-[#003f87] group-hover:bg-[#003f87] group-hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm"
          >
            <span>View Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
