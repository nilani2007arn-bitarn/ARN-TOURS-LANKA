import React, { useState } from 'react';
import { X, Calendar, Clock, Check, ShieldCheck, Heart, Share2, Send, CheckCircle2, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import { TourPackage } from '../data/toursData';
import { Currency, formatPrice } from '../utils/currency';
import confetti from 'canvas-confetti';

interface TourModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  currency: Currency;
  onOpenInquiry: (tourTitle: string) => void;
}

export const TourModal: React.FC<TourModalProps> = ({ tour, onClose, currency, onOpenInquiry }) => {
  if (!tour) return null;

  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'gallery' | 'book'>('itinerary');
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [travelDate, setTravelDate] = useState<string>('');
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const totalPrice = tour.pricePerPersonUSD * guestCount;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `ARN-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setBookingSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div
        className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden my-auto border border-gray-200 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
          <img
            src={tour.coverImage}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full backdrop-blur-md transition-all shadow-md z-10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Quick Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white text-left">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#ffdcc4] text-[#683400] text-xs font-bold uppercase tracking-wider">
                {tour.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                {tour.durationDays} Days / {tour.durationNights} Nights
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                Rating: {tour.physicalRating}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mb-1">
              {tour.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 flex items-center gap-1.5">
              <span>Route:</span>
              <span className="font-semibold text-white">{tour.route}</span>
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between px-6 border-b border-gray-200 bg-gray-50/70 shrink-0 overflow-x-auto">
          <div className="flex space-x-2 py-3">
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'itinerary'
                  ? 'bg-[#003f87] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
              }`}
            >
              Day-by-Day Itinerary ({tour.itinerary.length} Days)
            </button>
            <button
              onClick={() => setActiveTab('inclusions')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'inclusions'
                  ? 'bg-[#003f87] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
              }`}
            >
              Inclusions & Details
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'gallery'
                  ? 'bg-[#003f87] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
              }`}
            >
              Tour Gallery
            </button>
            <button
              onClick={() => setActiveTab('book')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'book'
                  ? 'bg-[#683400] text-white shadow-sm'
                  : 'text-[#683400] hover:bg-amber-100/50'
              }`}
            >
              Book / Customize
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Price From</span>
              <span className="text-lg font-extrabold text-[#003f87]">
                {formatPrice(tour.pricePerPersonUSD, currency)}
                <span className="text-xs font-normal text-gray-500">/person</span>
              </span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-grow text-left">
          {/* TAB 1: DAY BY DAY ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-gray-900 text-sm">
                    {tour.tagline}
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Every day is fully private with your dedicated English-speaking chauffeur-guide and luxury vehicle.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs bg-white px-3 py-1 rounded-full border border-gray-200 font-medium text-gray-700">
                    Best Season: {tour.bestSeason}
                  </span>
                </div>
              </div>

              {/* Days Accordion / List */}
              <div className="space-y-4">
                {tour.itinerary.map((dayItem) => {
                  const isOpen = selectedDay === dayItem.day;
                  return (
                    <div
                      key={dayItem.day}
                      className={`border rounded-2xl overflow-hidden transition-all ${
                        isOpen ? 'border-[#003f87] bg-white shadow-md' : 'border-gray-200 bg-gray-50/40 hover:bg-gray-50'
                      }`}
                    >
                      <button
                        onClick={() => setSelectedDay(isOpen ? 0 : dayItem.day)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                              isOpen ? 'bg-[#003f87] text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            D{dayItem.day}
                          </div>
                          <div>
                            <h4 className="font-heading font-bold text-gray-900 text-sm sm:text-base">
                              Day {dayItem.day}: {dayItem.title}
                            </h4>
                            <span className="text-xs text-gray-500">{dayItem.location}</span>
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 text-gray-400 transform transition-transform ${
                            isOpen ? 'rotate-90 text-[#003f87]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-2 border-t border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-in fade-in duration-150">
                          <div className="md:col-span-7 space-y-3">
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {dayItem.description}
                            </p>
                            <div>
                              <span className="text-xs font-bold text-[#003f87] uppercase tracking-wider block mb-1">
                                Day Highlights
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {dayItem.highlights.map((hl, i) => (
                                  <span
                                    key={i}
                                    className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-2.5 py-1 rounded-md font-medium"
                                  >
                                    ✓ {hl}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-gray-600 border-t border-gray-100">
                              <div>
                                <span className="font-semibold text-gray-800">Meals: </span>
                                {dayItem.meals}
                              </div>
                              <div>
                                <span className="font-semibold text-gray-800">Stay: </span>
                                {dayItem.stay}
                              </div>
                            </div>
                          </div>
                          <div className="md:col-span-5 h-44 rounded-xl overflow-hidden shadow-inner">
                            <img
                              src={dayItem.image}
                              alt={dayItem.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: INCLUSIONS & EXCLUSIONS */}
          {activeTab === 'inclusions' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200/60">
                  <h4 className="font-heading font-bold text-emerald-900 text-lg mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Included in This Package</span>
                  </h4>
                  <ul className="space-y-2.5 text-sm text-emerald-950">
                    {tour.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-rose-50/40 p-6 rounded-2xl border border-rose-200/60">
                  <h4 className="font-heading font-bold text-rose-900 text-lg mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-rose-600" />
                    <span>Exclusions</span>
                  </h4>
                  <ul className="space-y-2.5 text-sm text-rose-950">
                    {tour.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Special Features Box */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h4 className="font-heading font-bold text-gray-900 text-base mb-3">
                  Why Book With ARN TOURS LANKA?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-700">
                  <div className="p-3 bg-white rounded-xl border border-gray-200">
                    <span className="font-bold text-[#003f87] block mb-1">100% Tailorable</span>
                    You can add extra nights, upgrade to private villas, or adjust destinations at zero penalty.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-gray-200">
                    <span className="font-bold text-[#003f87] block mb-1">Guaranteed First Class Rail</span>
                    We secure rare observation carriage train seats in advance directly through our railway liaison.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-gray-200">
                    <span className="font-bold text-[#003f87] block mb-1">Private Ground Support</span>
                    Direct WhatsApp channel to your personal concierge for real-time adjustments and recommendations.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GALLERY */}
          {activeTab === 'gallery' && (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.gallery.map((imgUrl, i) => (
                  <div key={i} className="h-60 rounded-2xl overflow-hidden shadow-sm group relative">
                    <img
                      src={imgUrl}
                      alt={`${tour.title} Gallery photo ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs font-semibold">
                      <span>{tour.title} - Sri Lanka</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: BOOK OR CUSTOMIZE */}
          {activeTab === 'book' && (
            <div className="max-w-2xl mx-auto">
              {!bookingSubmitted ? (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-amber-800 font-semibold block">Instant Estimate</span>
                      <h4 className="font-heading font-bold text-gray-900 text-lg">
                        {tour.title} ({guestCount} {guestCount === 1 ? 'Guest' : 'Guests'})
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-[#003f87]">
                        {formatPrice(totalPrice, currency)}
                      </span>
                      <span className="text-[10px] text-gray-500 block">Includes all taxes & transfers</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="e.g. Dr. Eleanor Vance"
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        placeholder="eleanor@example.com"
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Number of Travelers</label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                      >
                        <option value={1}>1 Traveler (Solo)</option>
                        <option value={2}>2 Travelers (Pair/Couple)</option>
                        <option value={3}>3 Travelers</option>
                        <option value={4}>4 Travelers (Family)</option>
                        <option value={6}>6+ Group</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Preferred Start Date</label>
                      <input
                        type="date"
                        required
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        placeholder="+44 7123 456789"
                        className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Custom Requests / Dietary / Upgrades</label>
                    <textarea
                      rows={3}
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      placeholder="e.g. Vegetarian diet, preference for private pool villa in Ella, private tea picking session..."
                      className="w-full bg-white border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#003f87] outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#683400] hover:bg-[#87490e] text-white py-4 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Booking Inquiry (No Payment Required Now)</span>
                    </button>
                    <p className="text-[11px] text-gray-500 text-center mt-2">
                      🔒 Our Colombo concierge team will verify availability and reply within 4 hours with your complete itinerary PDF.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-gray-900">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-gray-900">{guestName || 'Valued Guest'}</span>. Your booking inquiry for{' '}
                    <span className="font-bold text-[#003f87]">{tour.title}</span> has been assigned reference{' '}
                    <span className="bg-gray-100 px-2 py-0.5 rounded font-mono font-bold text-[#683400]">{bookingRef}</span>.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 max-w-md mx-auto text-xs text-gray-700 space-y-1">
                    <p><strong>Travelers:</strong> {guestCount} Guests</p>
                    {travelDate && <p><strong>Target Date:</strong> {travelDate}</p>}
                    <p><strong>Estimated Total:</strong> {formatPrice(totalPrice, currency)}</p>
                    <p><strong>Status:</strong> Concierge Review Pending (Under 4 hours)</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <a
                      href={`https://wa.me/94729601551?text=Hello%20ARN%20Tours%20Lanka,%20I%20just%20submitted%20inquiry%20${bookingRef}%20for%20${encodeURIComponent(tour.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Confirm Faster via WhatsApp</span>
                    </a>
                    <button
                      onClick={onClose}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full text-xs font-bold transition-all"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              SLTDA Licensed & Insured
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">100% Customisable</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                setActiveTab('book');
              }}
              className="flex-1 sm:flex-none bg-[#003f87] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#0056b3] transition-all cursor-pointer"
            >
              Book This Tour ({formatPrice(tour.pricePerPersonUSD, currency)})
            </button>
            <button
              onClick={onClose}
              className="border border-gray-300 text-gray-700 px-4 py-2.5 rounded-full text-xs font-semibold hover:bg-gray-100 transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
