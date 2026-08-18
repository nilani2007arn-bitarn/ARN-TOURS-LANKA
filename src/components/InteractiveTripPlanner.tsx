import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, Send, CheckCircle2, ShieldCheck, HeartHandshake, Phone, FileText } from 'lucide-react';
import { Currency, formatPrice } from '../utils/currency';
import confetti from 'canvas-confetti';

interface InteractiveTripPlannerProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
}

export const InteractiveTripPlanner: React.FC<InteractiveTripPlannerProps> = ({
  isOpen,
  onClose,
  currency,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<number>(1);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([
    'Cultural Triangle (Sigiriya & Dambulla)',
    'Hill Country (Kandy, Nuwara Eliya & Ella)',
    'Southern Beaches (Mirissa & Galle)',
  ]);
  const [interests, setInterests] = useState<string[]>([
    'Heritage & UNESCO Citadels',
    'Scenic Train Journeys',
    'Ceylon Tea & High Tea',
  ]);
  const [durationDays, setDurationDays] = useState<number>(7);
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [hotelTier, setHotelTier] = useState<'4-star' | '5-star' | 'private-villa'>('4-star');
  const [transportTier, setTransportTier] = useState<'sedan' | 'luxury-van' | 'mercedes'>('luxury-van');
  const [includeAyurveda, setIncludeAyurveda] = useState<boolean>(true);
  const [includeTrainTickets, setIncludeTrainTickets] = useState<boolean>(true);

  // Client Details
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  const regionOptions = [
    { id: 'cultural', name: 'Cultural Triangle (Sigiriya & Dambulla)', desc: 'Lion Rock fortress, cave temples, ancient royal cities' },
    { id: 'highlands', name: 'Hill Country (Kandy, Nuwara Eliya & Ella)', desc: 'Misty tea terraces, waterfalls, Nine Arches Bridge' },
    { id: 'south-coast', name: 'Southern Beaches (Mirissa & Galle)', desc: 'Whale watching, Galle Dutch Fort, golden sandy coves' },
    { id: 'safari', name: 'Wildlife & Safari (Yala & Udawalawe)', desc: 'Leopards, elephants, sloth bears, private 4x4 game drives' },
    { id: 'north', name: 'Northern Peninsula (Jaffna & Islands)', desc: 'Golden Nallur Kovil, unique Dravidian culture, pristine beaches' },
    { id: 'east', name: 'Eastern Coast (Trincomalee & Pigeon Island)', desc: 'Snorkeling coral reefs, calm summer seas, sacred cliff temples' },
  ];

  const interestOptions = [
    'Heritage & UNESCO Citadels',
    'Scenic Train Journeys',
    'Ayurveda & Spa Wellness',
    'Wildlife Game Safaris',
    'Beaches & Whale Watching',
    'Culinary & Ceylon Tea',
    'Hiking & Nature Trails',
  ];

  const toggleRegion = (rName: string) => {
    if (selectedRegions.includes(rName)) {
      if (selectedRegions.length > 1) {
        setSelectedRegions(selectedRegions.filter((r) => r !== rName));
      }
    } else {
      setSelectedRegions([...selectedRegions, rName]);
    }
  };

  const toggleInterest = (iName: string) => {
    if (interests.includes(iName)) {
      setInterests(interests.filter((i) => i !== iName));
    } else {
      setInterests([...interests, iName]);
    }
  };

  // Base price calculation algorithm
  const calculateEstimate = () => {
    let dailyRatePerPerson = 120; // base 4-star private tour
    if (hotelTier === '5-star') dailyRatePerPerson = 180;
    if (hotelTier === 'private-villa') dailyRatePerPerson = 260;

    let transportSurcharge = 0;
    if (transportTier === 'luxury-van') transportSurcharge = 30;
    if (transportTier === 'mercedes') transportSurcharge = 70;

    let extras = 0;
    if (includeAyurveda) extras += 120;
    if (includeTrainTickets) extras += 45;

    const basePerPerson = (dailyRatePerPerson + transportSurcharge) * durationDays + extras;
    const groupDiscount = travelersCount >= 4 ? 0.9 : 1.0;
    const totalEstimateUSD = Math.round(basePerPerson * travelersCount * groupDiscount);
    const perPersonUSD = Math.round(totalEstimateUSD / travelersCount);

    return { totalEstimateUSD, perPersonUSD };
  };

  const { totalEstimateUSD, perPersonUSD } = calculateEstimate();

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `ARN-PLAN-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteReference(ref);
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-auto border border-gray-200 flex flex-col max-h-[92vh] animate-in fade-in duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#003f87] text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-bold text-[#ffdcc4] uppercase tracking-wider block mb-0.5">
              ARN TOURS LANKA • Bespoke Journey Builder
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Design Your Custom Sri Lanka Itinerary
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {!isSubmitted && (
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2 sm:gap-4 text-xs font-semibold text-gray-700">
              <span className={`px-2.5 py-1 rounded-full ${step === 1 ? 'bg-[#003f87] text-white' : 'bg-gray-200'}`}>
                1. Destinations
              </span>
              <span className="text-gray-300">&rarr;</span>
              <span className={`px-2.5 py-1 rounded-full ${step === 2 ? 'bg-[#003f87] text-white' : 'bg-gray-200'}`}>
                2. Style & Stays
              </span>
              <span className="text-gray-300">&rarr;</span>
              <span className={`px-2.5 py-1 rounded-full ${step === 3 ? 'bg-[#003f87] text-white' : 'bg-gray-200'}`}>
                3. Quote & Proposal
              </span>
            </div>

            <div className="hidden sm:block text-xs font-bold text-[#003f87]">
              Live Estimate: {formatPrice(totalEstimateUSD, currency)}
            </div>
          </div>
        )}

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow">
          {/* STEP 1: DESTINATIONS & INTERESTS */}
          {step === 1 && !isSubmitted && (
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">
                  Step 1: Choose Regions You Wish to Visit
                </h3>
                <p className="text-xs text-gray-600">
                  Select one or more regions. We seamlessly interconnect your chosen destinations with private ground transfers.
                </p>
              </div>

              {/* Regions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {regionOptions.map((reg) => {
                  const isChecked = selectedRegions.includes(reg.name);
                  return (
                    <div
                      key={reg.id}
                      onClick={() => toggleRegion(reg.name)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? 'border-[#003f87] bg-blue-50/50 shadow-sm ring-1 ring-[#003f87]'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0 ${
                          isChecked ? 'bg-[#003f87] text-white' : 'border border-gray-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-gray-900">{reg.name}</h4>
                        <p className="text-xs text-gray-600 mt-0.5 leading-snug">{reg.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Special Travel Interests */}
              <div>
                <h4 className="font-heading font-bold text-sm text-gray-900 mb-2">
                  Special Travel Interests & Vibes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((int) => {
                    const isSelected = interests.includes(int);
                    return (
                      <button
                        key={int}
                        type="button"
                        onClick={() => toggleInterest(int)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#2d6a48] text-white shadow-sm'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {isSelected ? `✓ ${int}` : `+ ${int}`}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Duration & Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Trip Duration (Days): <span className="font-bold text-[#003f87]">{durationDays} Days</span>
                  </label>
                  <input
                    type="range"
                    min={4}
                    max={21}
                    value={durationDays}
                    onChange={(e) => setDurationDays(Number(e.target.value))}
                    className="w-full accent-[#003f87] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>4 Days (Mini Break)</span>
                    <span>7 Days (Classic)</span>
                    <span>14 Days (Grand)</span>
                    <span>21 Days (Full Island)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={travelersCount}
                    onChange={(e) => setTravelersCount(Number(e.target.value))}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                  >
                    <option value={1}>1 Solo Explorer</option>
                    <option value={2}>2 Couple / Pair</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Small Group / Family (10% Group Discount)</option>
                    <option value={6}>6+ Private Charter (10% Group Discount)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: STYLE & STAYS */}
          {step === 2 && !isSubmitted && (
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">
                  Step 2: Choose Accommodation & Transport Tier
                </h3>
                <p className="text-xs text-gray-600">
                  Select your preferred level of luxury. All tiers include private chauffeur-guide and VIP airport handling.
                </p>
              </div>

              {/* Accommodation Tiers */}
              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                  Accommodation Standard
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div
                    onClick={() => setHotelTier('4-star')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      hotelTier === '4-star'
                        ? 'border-[#003f87] bg-blue-50/50 shadow-sm ring-1 ring-[#003f87]'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xs font-bold text-[#003f87] block mb-1">Premier 4-Star Boutique</span>
                    <p className="text-xs text-gray-600">Aliya Resort, Earl's Regency, Jetwing Jaffna, curated colonial manors.</p>
                  </div>

                  <div
                    onClick={() => setHotelTier('5-star')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      hotelTier === '5-star'
                        ? 'border-[#003f87] bg-blue-50/50 shadow-sm ring-1 ring-[#003f87]'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xs font-bold text-[#003f87] block mb-1">Luxury 5-Star & Resorts</span>
                    <p className="text-xs text-gray-600">Heritance Kandalama, 98 Acres Ella, Weligama Marriott, The Grand Hotel.</p>
                  </div>

                  <div
                    onClick={() => setHotelTier('private-villa')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      hotelTier === 'private-villa'
                        ? 'border-[#003f87] bg-blue-50/50 shadow-sm ring-1 ring-[#003f87]'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xs font-bold text-[#003f87] block mb-1">Ultra-Luxury Villas & Relais</span>
                    <p className="text-xs text-gray-600">Ceylon Tea Trails, Cape Weligama, Santani Wellness, private island villas.</p>
                  </div>
                </div>
              </div>

              {/* Transport Tiers */}
              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                  Private Vehicle Standard
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div
                    onClick={() => setTransportTier('sedan')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      transportTier === 'sedan'
                        ? 'border-[#003f87] bg-blue-50/50 shadow-sm ring-1 ring-[#003f87]'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xs font-bold text-[#003f87] block mb-1">Executive Sedan</span>
                    <p className="text-xs text-gray-600">Toyota Premio / Prius Hybrid, A/C, ideal for couples.</p>
                  </div>

                  <div
                    onClick={() => setTransportTier('luxury-van')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      transportTier === 'luxury-van'
                        ? 'border-[#003f87] bg-blue-50/50 shadow-sm ring-1 ring-[#003f87]'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xs font-bold text-[#003f87] block mb-1">Toyota KDH Luxury VIP Van</span>
                    <p className="text-xs text-gray-600">Reclining captain chairs, spacious panoramic windows, high luggage capacity.</p>
                  </div>

                  <div
                    onClick={() => setTransportTier('mercedes')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      transportTier === 'mercedes'
                        ? 'border-[#003f87] bg-blue-50/50 shadow-sm ring-1 ring-[#003f87]'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xs font-bold text-[#003f87] block mb-1">Mercedes-Benz E-Class / Alphard</span>
                    <p className="text-xs text-gray-600">Ultimate executive luxury with chilled onboard refreshments.</p>
                  </div>
                </div>
              </div>

              {/* Add-on inclusions */}
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-3">
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider">
                  Recommended Signature Add-ons
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeAyurveda}
                      onChange={(e) => setIncludeAyurveda(e.target.checked)}
                      className="rounded text-[#003f87] focus:ring-[#003f87] w-4 h-4"
                    />
                    <span>Include Daily Ayurvedic Spa & Shirodhara Session</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeTrainTickets}
                      onChange={(e) => setIncludeTrainTickets(e.target.checked)}
                      className="rounded text-[#003f87] focus:ring-[#003f87] w-4 h-4"
                    />
                    <span>Include 1st Class Scenic Mountain Train Observation Ticket</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PROPOSAL SUMMARY & SUBMIT */}
          {step === 3 && !isSubmitted && (
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              <div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">
                  Step 3: Review Your Custom Estimate & Request Itinerary
                </h3>
                <p className="text-xs text-gray-600">
                  Our Colombo concierge will draft your day-by-day routing with hotel availability within 4 hours.
                </p>
              </div>

              {/* Estimate Summary Box */}
              <div className="bg-gradient-to-r from-blue-900 to-[#003f87] rounded-2xl p-6 text-white text-left shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-white/20">
                  <div>
                    <span className="text-[10px] text-blue-200 uppercase tracking-wider block">Duration</span>
                    <span className="text-base font-bold text-white">{durationDays} Days / {durationDays - 1} Nights</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-200 uppercase tracking-wider block">Guests</span>
                    <span className="text-base font-bold text-white">{travelersCount} Travelers</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-200 uppercase tracking-wider block">Total Estimated Cost</span>
                    <span className="text-2xl font-extrabold text-[#ffdcc4]">
                      {formatPrice(totalEstimateUSD, currency)}
                    </span>
                    <span className="text-[10px] text-blue-200 block">({formatPrice(perPersonUSD, currency)} / person)</span>
                  </div>
                </div>

                <div className="pt-3 text-xs text-blue-100 space-y-1">
                  <p><strong>Selected Regions:</strong> {selectedRegions.join(' • ')}</p>
                  <p><strong>Tier:</strong> {hotelTier.toUpperCase()} Stays & {transportTier.toUpperCase()} Private Chauffeur</p>
                  <p><strong>Includes:</strong> VIP Airport Fast-Track, all breakfasts & dinners, entrance fees & taxes.</p>
                </div>
              </div>

              {/* Contact Form Details */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="eleanor@example.com"
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+44 7123 456789"
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Special Preferences / Diet / Dates</label>
                    <input
                      type="text"
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      placeholder="e.g. Traveling in Nov, vegetarian meals, anniversary celebration"
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#683400] hover:bg-[#87490e] text-white py-4 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Custom Proposal Request (No Obligation)</span>
                </button>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  🔒 Zero commitment. Our senior concierge will review your preferences and craft your custom itinerary PDF.
                </p>
              </div>
            </form>
          )}

          {/* SUBMITTED SUCCESS STATE */}
          {isSubmitted && (
            <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-gray-900">
                Custom Proposal Request Received!
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you, <span className="font-bold text-gray-900">{clientName || 'Valued Traveler'}</span>. We have generated proposal reference{' '}
                <span className="bg-blue-50 text-[#003f87] px-2.5 py-1 rounded font-mono font-bold">{quoteReference}</span>.
              </p>

              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 max-w-md mx-auto text-xs text-gray-700 space-y-1.5 text-left">
                <p><strong>Duration:</strong> {durationDays} Days ({durationDays - 1} Nights)</p>
                <p><strong>Party Size:</strong> {travelersCount} Guests</p>
                <p><strong>Regions:</strong> {selectedRegions.join(', ')}</p>
                <p><strong>Estimated Total:</strong> {formatPrice(totalEstimateUSD, currency)}</p>
                <p><strong>Concierge SLA:</strong> Personal itinerary PDF sent within 4 hours</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                <a
                  href={`https://wa.me/94729601551?text=Hello%20ARN%20Tours%20Lanka,%20I%20just%20submitted%20custom%20trip%20request%20${quoteReference}%20for%20${durationDays}%20days%20(${travelersCount}%20guests).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Connect Directly on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full text-xs font-bold transition-all"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Navigation */}
        {!isSubmitted && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between shrink-0">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <span className="text-xs text-gray-500">Step 1 of 3</span>
            )}

            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-1.5 bg-[#003f87] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#0056b3] transition-all cursor-pointer shadow-md"
              >
                <span>Continue to Step {step + 1}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <span className="text-xs text-emerald-700 font-semibold">Ready to Submit</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
