import React, { useState } from 'react';
import { MapPin, Sun, Calendar, Sparkles, Compass, ArrowRight } from 'lucide-react';
import { DESTINATIONS_DATA, Destination } from '../data/destinationsData';

interface DestinationsSectionProps {
  onSelectDestination: (dest: Destination) => void;
  onOpenPlanner: () => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
  onOpenPlanner,
}) => {
  const [activeRegion, setActiveRegion] = useState<string>('All');

  const regions = [
    'All',
    'Cultural Triangle',
    'Hill Country',
    'Southern Coast',
    'Northern Province',
    'Wildlife Savannas',
    'Eastern Coast',
  ];

  const filteredDestinations = DESTINATIONS_DATA.filter((d) => {
    if (activeRegion === 'All') return true;
    return d.region === activeRegion;
  });

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#2d6a48] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#2d6a48]" />
            <span>Discover the Emerald Isle</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight mb-4">
            Iconic Regions of Sri Lanka
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            From the mist-cloaked peaks of the central highlands to the sun-kissed shores of the Indian Ocean, explore Sri Lanka’s distinct geographical marvels.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setActiveRegion(reg)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeRegion === reg
                  ? 'bg-[#2d6a48] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {reg === 'All' ? 'All Regions (6)' : reg}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col group text-left"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden shrink-0">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Region Pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#003f87] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {dest.region}
                  </span>
                </div>

                {/* Climate & Season badges */}
                <div className="absolute bottom-3 left-3.5 right-3.5 text-white flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    <Sun className="w-3.5 h-3.5 text-amber-300" />
                    <span>{dest.climate.split(' ')[0]}</span>
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-blue-200" />
                    <span className="truncate max-w-[120px]">{dest.bestMonths.split(',')[0]}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-1 group-hover:text-[#003f87] transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#683400] mb-3">
                    {dest.tagline}
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
                      Must-See Attractions:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {dest.highlights.map((hl, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Signature Experience Callout */}
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 mb-4">
                    <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider block mb-0.5">
                      🌟 Signature Concierge Moment:
                    </span>
                    <p className="text-xs text-amber-950 font-medium">
                      {dest.signatureExperience}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-500">
                    Custom tours available
                  </span>
                  <button
                    onClick={onOpenPlanner}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#003f87] hover:text-[#0056b3] transition-colors cursor-pointer"
                  >
                    <span>Plan Journey Here</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
