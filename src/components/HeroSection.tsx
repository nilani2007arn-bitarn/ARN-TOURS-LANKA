import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, ShieldCheck, Award, Leaf, Star, Sparkles, MessageSquare } from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/destinationsData';

interface HeroSectionProps {
  onSearchTours: (destination: string, duration: string, guests: number) => void;
  onOpenPlanner: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearchTours, onOpenPlanner }) => {
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [guestsCount, setGuestsCount] = useState(2);
  const [selectedMonth, setSelectedMonth] = useState('November - April (Peak Season)');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchTours(selectedDestination, selectedDuration, guestsCount);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Depth Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf3ROpo6eOUkkJjDF7ONA_t78ZPDLu4zu0cSOkRM7NZ6-19COgA3WM6G-obUJ2NLW9K_oYrOiZ0wM3OapoznvigIJO1ChapF-rWZ-J2Db0PRm5TPiA5sT3O79z5QSUlvrbhDflfOx-Xh3OMEaYFyXaxh6QRxOX-goBVeLlhkhp3w-vxWGMf0CR8LEM024hky7UN7-27_rQkMOtKi2QFptHUg3dArijdLfKBss5CfGwgm0b_QuJncNX"
          alt="Lush Tea Hills in Sri Lanka"
          className="w-full h-full object-cover object-center scale-105 transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 text-left text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#ffdcc4] text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#ffdcc4]" />
              <span>Sri Lanka's Premier Luxury Concierge</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15] mb-6">
              Discover the <span className="text-[#ffdcc4] font-serif italic">Extraordinary</span> Wonders of Sri Lanka
            </h1>

            <p className="font-body text-base sm:text-lg text-gray-200/90 max-w-2xl mb-8 leading-relaxed">
              Experience handcrafted journeys through royal UNESCO citadels, misty Ceylon tea hills, sacred Northern kovils, and pristine coastal waters with private chauffeurs and 24/7 dedicated ground concierge.
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onOpenPlanner}
                className="bg-[#683400] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#87490e] transition-all shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-[#ffdcc4]" />
                <span>Build Custom Itinerary</span>
              </button>

              <a
                href="https://wa.me/94729601551?text=Hello%20ARN%20Tours%20Lanka,%20I%20would%20like%20to%20inquire%20about%20a%20tour%20in%20Sri%20Lanka."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600/90 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-full font-semibold text-sm backdrop-blur-md border border-emerald-400/30 transition-all flex items-center gap-2 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Accolades & Social Proof */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/20 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SLTDA Certified Operator</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-300 shrink-0" />
                <span>24/7 VIP Concierge</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Carbon Neutral</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-bold text-white">4.98/5</span>
              </div>
            </div>
          </div>

          {/* Search / Filter Widget (Glassmorphism Luxury Card) */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/40 text-left">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#003f87] block mb-1">
                  Plan Your Escape
                </span>
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  Find Your Perfect Tour
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Filter curated itineraries or request a personalized proposal instantly.
                </p>
              </div>

              <form onSubmit={handleSearchSubmit} className="space-y-4">
                {/* Destination Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                    Destination / Region
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-800 focus:ring-2 focus:ring-[#003f87] focus:border-transparent outline-none shadow-sm cursor-pointer"
                    >
                      <option value="all">All of Sri Lanka (Grand Circuit)</option>
                      {DESTINATIONS_DATA.map((dest) => (
                        <option key={dest.id} value={dest.id}>
                          {dest.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Duration & Guests Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                      Duration
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <select
                        value={selectedDuration}
                        onChange={(e) => setSelectedDuration(e.target.value)}
                        className="w-full bg-white border border-gray-300 rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-gray-800 focus:ring-2 focus:ring-[#003f87] outline-none shadow-sm cursor-pointer"
                      >
                        <option value="all">Any Duration</option>
                        <option value="4-5">4 - 5 Days</option>
                        <option value="6-7">6 - 7 Days</option>
                        <option value="8+">8+ Days (Custom)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                      Travelers
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <select
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(Number(e.target.value))}
                        className="w-full bg-white border border-gray-300 rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-gray-800 focus:ring-2 focus:ring-[#003f87] outline-none shadow-sm cursor-pointer"
                      >
                        <option value={1}>1 Solo Explorer</option>
                        <option value={2}>2 Couple / Pair</option>
                        <option value={3}>3 Guests</option>
                        <option value={4}>4 Small Family (4)</option>
                        <option value={6}>6+ Private Group</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Preferred Travel Period */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                    Target Travel Period
                  </label>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 focus:ring-2 focus:ring-[#003f87] outline-none shadow-sm cursor-pointer"
                  >
                    <option value="Nov-Apr">November - April (South & West Coast + Highlands)</option>
                    <option value="May-Oct">May - October (East Coast & North Jaffna Season)</option>
                    <option value="Flexible">Flexible / Within next 6 months</option>
                  </select>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="w-full bg-[#003f87] hover:bg-[#0056b3] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Tour Packages</span>
                </button>
              </form>

              {/* Direct Link to Bespoke Wizard */}
              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <button
                  onClick={onOpenPlanner}
                  className="text-xs font-semibold text-[#683400] hover:text-[#87490e] inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>Need a completely custom private itinerary?</span>
                  <span className="font-bold">Open Trip Builder &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
