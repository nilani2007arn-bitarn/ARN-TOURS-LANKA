import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, HelpCircle, ChevronDown, Clock, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Bespoke Tour Planning');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need a visa to travel to Sri Lanka?',
      a: 'Yes, most international travelers can easily obtain an Electronic Travel Authorization (ETA / eVisa) online before departure via the official Sri Lanka immigration portal. Our concierge team assists all booked guests with smooth visa guidance.'
    },
    {
      q: 'Are your tours fully private and customizable?',
      a: 'Yes, 100%. Every single itinerary booked with ARN TOURS LANKA includes a dedicated private vehicle and English-speaking chauffeur-guide exclusively for your travel party. You have complete freedom to adjust daily start times and pacing.'
    },
    {
      q: 'What is the best time of year to visit Sri Lanka?',
      a: 'Sri Lanka is truly a year-round destination thanks to its dual-monsoon microclimates. The South and West Coast + Hill Country are glorious from November to April, while the East Coast (Trincomalee) and North (Jaffna) are sun-drenched from May to October.'
    },
    {
      q: 'How does payment and booking security work?',
      a: 'We require a 20% advance deposit to secure your boutique hotel rooms and first-class railway tickets. The remaining balance can be settled prior to arrival via secure international bank wire or major credit cards. All client funds are protected.'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `ARN-MSG-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryId(id);
    setIsSent(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#003f87] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-[#003f87]" />
            <span>Connect with our Concierge</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight mb-4">
            Get in Touch with ARN TOURS LANKA
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            Whether you are ready to book a bespoke journey, inquire about Ayurvedic retreats, or need advice on the ideal season, our Colombo team is at your service.
          </p>
        </div>

        {/* 2-Column Form & Direct Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs text-gray-600 mb-6">
              Complete the form below. We typically respond within 2 to 4 hours with detailed proposals.
            </p>

            {!isSent ? (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="e.g. John"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] focus:bg-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="e.g. Doe"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] focus:bg-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] focus:bg-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 7123 456789"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] focus:bg-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Subject / Area of Interest
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] focus:bg-white outline-none cursor-pointer"
                  >
                    <option value="Bespoke Tour Planning">Bespoke Tour Planning</option>
                    <option value="Ayurveda & Wellness Retreats">Ayurveda & Wellness Retreats</option>
                    <option value="Private Chauffeur & Vehicle Hire">Private Chauffeur & Vehicle Hire</option>
                    <option value="Corporate / Honeymoon Special">Corporate / Honeymoon Special</option>
                    <option value="General Question / Advice">General Question / Advice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Your Message / Travel Vision *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your dream Sri Lanka journey, estimated travel dates, number of guests, and any specific preferences..."
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#003f87] focus:bg-white outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#683400] hover:bg-[#87490e] text-white py-4 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Concierge</span>
                  </button>
                  <p className="text-[11px] text-gray-500 text-center mt-2">
                    🔒 Direct line to Colombo headquarters. We respect your privacy and never share your data.
                  </p>
                </div>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-heading font-bold text-2xl text-gray-900">
                  Message Dispatched!
                </h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-gray-900">{firstName}</span>. Your inquiry has been assigned tracking ID{' '}
                  <span className="font-mono font-bold text-[#003f87] bg-blue-50 px-2 py-0.5 rounded">{inquiryId}</span>.
                </p>
                <p className="text-xs text-gray-500">
                  A senior travel designer will respond to <strong>{email}</strong> within 4 hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/94729601551?text=Hello%20ARN%20Tours%20Lanka,%20I%20just%20sent%20inquiry%20${inquiryId}%20and%20wanted%20to%20connect.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Continue on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setIsSent(false)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-xs font-bold transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Direct Contact Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-[#003f87] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden text-left">
              <div className="absolute -right-8 -top-8 opacity-10 pointer-events-none">
                <MapPin className="w-48 h-48 text-white" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl mb-6 relative z-10">
                Direct Concierge Contacts
              </h3>

              <div className="space-y-5 relative z-10 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#ffdcc4]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-200 uppercase block">Phone / 24/7 Hotline</span>
                    <a href="tel:+940729601551" className="text-base font-bold text-white hover:text-[#ffdcc4] transition-colors">
                      +94 072 960 1551
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#b0f1c7]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-200 uppercase block">Official WhatsApp Support</span>
                    <a
                      href="https://wa.me/94729601551"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-[#b0f1c7] transition-colors"
                    >
                      +94 072 960 1551 (Instant Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#ffdcc4]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-200 uppercase block">Email Concierge</span>
                    <a href="mailto:info@arntourslanka.com" className="text-base font-bold text-white hover:text-[#ffdcc4] transition-colors">
                      info@arntourslanka.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#ffdcc4]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-200 uppercase block">Headquarters</span>
                    <p className="text-white font-medium">
                      Colombo 03, Western Province, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#ffdcc4]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-200 uppercase block">Operating Hours</span>
                    <p className="text-white font-medium">
                      Mon – Sun: 24/7 Live Ground Operations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colombo Map Card */}
            <div className="bg-white rounded-3xl p-4 border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX4JsNeCavGd36cncVRzIf5W5NpyGcSOuFMG4Aoyc12RVdShV7rM4jdfD18fYUlti0pmYntprBhM4eLAmHJq5JMqmYvaw5AiakOhi2bOXZnHBRFFPq6drar-6-gkMq7ZHGmRW8cA1_h37RdLpyG3jxGoKIZXV_OmAg5F1T6D8u3osmSG85eCrKuA2J0sjzR4cFSI3DktnSnVnDYJOH2c3SXGFJ5WsPUANfn3At1mX6DmgvwL9Obc0r"
                  alt="Colombo Sri Lanka Skyline"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#003f87]/20 mix-blend-multiply" />
                <a
                  href="https://maps.google.com/?q=Colombo,+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 text-[#003f87] px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center gap-1.5 hover:bg-white transition-all cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#683400]" />
                  <span>Open Colombo HQ on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#003f87] uppercase tracking-wider block mb-1">
              Frequently Asked Questions
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900">
              Everything You Need to Know Before Traveling
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-gray-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transform transition-transform ${
                        isOpen ? 'rotate-180 text-[#003f87]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
