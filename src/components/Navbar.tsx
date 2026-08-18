import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Globe, Sparkles } from 'lucide-react';
import { Currency, CURRENCY_RATES } from '../utils/currency';
import arnLogoImg from '../assets/images/arn_tours_logo_1787042363655.jpg';
import travelerPicImg from '../assets/images/traveler_profile_pic_1787042383555.jpg';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  onOpenPlanner: () => void;
  onOpenProfile: () => void;
  userAvatarUrl?: string;
  userName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  currency,
  setCurrency,
  onOpenPlanner,
  onOpenProfile,
  userAvatarUrl,
  userName = 'Eleanor',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'tours', label: 'Tours' },
    { id: 'services', label: 'Services' },
    { id: 'wellness', label: 'Wellness & Ayurveda' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-gray-200/60'
          : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand with Official ARN Elephant Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-3 group text-left shrink-0"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform border border-blue-200/60 bg-white">
            <img
              src={arnLogoImg}
              alt="ARN Tours Lanka Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#003f87] tracking-tight block leading-tight">
              ARN TOURS LANKA
            </span>
            <span className="text-[10px] font-semibold text-[#683400] uppercase tracking-[0.2em] hidden sm:block">
              Sri Lanka's Premium Concierge
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
          {navLinks.slice(0, 7).map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeSection === item.id
                  ? 'bg-[#003f87] text-white shadow-sm'
                  : 'text-gray-700 hover:text-[#003f87] hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('about')}
            className={`px-3 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeSection === 'about'
                ? 'bg-[#003f87] text-white shadow-sm'
                : 'text-gray-700 hover:text-[#003f87] hover:bg-gray-100'
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeSection === 'contact'
                ? 'bg-[#003f87] text-white shadow-sm'
                : 'text-gray-700 hover:text-[#003f87] hover:bg-gray-100'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right Actions: Currency Selector, Profile, CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors cursor-pointer"
              title="Change Currency"
            >
              <Globe className="w-3.5 h-3.5 text-[#003f87]" />
              <span>{currency}</span>
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-200 py-1.5 z-50">
                {(Object.keys(CURRENCY_RATES) as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-blue-50 transition-colors flex items-center justify-between cursor-pointer ${
                      currency === curr ? 'text-[#003f87] font-bold bg-blue-50/50' : 'text-gray-700'
                    }`}
                  >
                    <span>{CURRENCY_RATES[curr].label}</span>
                    <span>{CURRENCY_RATES[curr].symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* User Profile Button with Real Avatar */}
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full text-xs font-semibold text-gray-700 hover:bg-blue-50 hover:text-[#003f87] border border-gray-200 transition-all cursor-pointer group"
            title="My VIP Traveler Portal & Profile Photo"
          >
            <div className="relative">
              <div className="w-7 h-7 rounded-full overflow-hidden border border-[#003f87]/40 shadow-xs bg-gray-100">
                <img
                  src={userAvatarUrl || travelerPicImg}
                  alt={userName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white" />
            </div>
            <span className="hidden sm:inline font-bold text-gray-800 group-hover:text-[#003f87]">{userName}</span>
          </button>

          {/* Plan Your Trip Button */}
          <button
            onClick={onOpenPlanner}
            className="hidden md:inline-flex items-center gap-2 bg-[#003f87] text-white px-5 py-2.5 rounded-full text-xs lg:text-sm font-semibold hover:bg-[#0056b3] transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-95 shrink-0"
          >
            <Sparkles className="w-4 h-4 text-[#ffdcc4]" />
            <span>Plan Your Trip</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-gray-100">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-[#003f87] text-white font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProfile();
              }}
              className="w-full flex items-center justify-center gap-2 bg-blue-50 text-[#003f87] border border-blue-200 py-2.5 rounded-xl font-semibold text-sm cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <img
                  src={userAvatarUrl || travelerPicImg}
                  alt={userName}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>VIP Traveler Profile ({userName})</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#003f87] text-white py-3 rounded-xl font-semibold text-sm shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#ffdcc4]" />
              Plan Your Bespoke Trip
            </button>
            <a
              href="tel:+940729601551"
              className="w-full flex items-center justify-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 py-2.5 rounded-xl font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              Hotline: +94 072 960 1551
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

