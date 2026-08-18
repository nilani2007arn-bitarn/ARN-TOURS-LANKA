/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ToursSection } from './components/ToursSection';
import { TourModal } from './components/TourModal';
import { InteractiveTripPlanner } from './components/InteractiveTripPlanner';
import { DestinationsSection } from './components/DestinationsSection';
import { ServicesSection } from './components/ServicesSection';
import { WellnessSection } from './components/WellnessSection';
import { SustainableTravelSection } from './components/SustainableTravelSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { UserProfileModal, UserProfileData } from './components/UserProfileModal';
import { Footer } from './components/Footer';
import { TOURS_DATA, TourPackage } from './data/toursData';
import { DESTINATIONS_DATA, Destination } from './data/destinationsData';
import { Currency } from './utils/currency';
import { MessageSquare, Phone, Sparkles } from 'lucide-react';
import travelerPicImg from './assets/images/traveler_profile_pic_1787042383555.jpg';

const DEFAULT_PROFILE: UserProfileData = {
  firstName: 'Eleanor',
  lastName: 'Vance',
  email: 'eleanor.vance@example.com',
  phone: '+44 20 7123 4567',
  avatarUrl: travelerPicImg,
  nationality: 'British',
  passportLast4: '8819',
  dietaryTags: [
    'Vegetarian (Sattvic)',
    'Gluten-Free Priority',
    'Low Sugar / Fresh Herbs'
  ],
  retreatInterests: [
    'Ayurvedic Shirodhara Spa',
    'Guided Morning Meditation',
    'High Tea Estate Walks'
  ]
};

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [isPlannerOpen, setIsPlannerOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [tourFilterCategory, setTourFilterCategory] = useState<string>('All');

  // User Profile state with localStorage persistence
  const [profileData, setProfileData] = useState<UserProfileData>(() => {
    try {
      const saved = localStorage.getItem('arn_vip_profile');
      if (saved) {
        return { ...DEFAULT_PROFILE, ...JSON.parse(saved) };
      }
    } catch {
      // ignore JSON error
    }
    return DEFAULT_PROFILE;
  });

  const handleUpdateProfile = (updated: Partial<UserProfileData>) => {
    setProfileData((prev) => {
      const next = { ...prev, ...updated };
      try {
        localStorage.setItem('arn_vip_profile', JSON.stringify(next));
      } catch {
        // ignore quota error
      }
      return next;
    });
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScrollObserver = () => {
      const sections = ['home', 'destinations', 'tours', 'services', 'wellness', 'sustainability', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sec of sections) {
        const elem = document.getElementById(sec);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver);
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const handleHeroSearch = (destinationId: string, duration: string, _guests: number) => {
    // Scroll to tours and filter appropriately
    const toursElem = document.getElementById('tours');
    if (toursElem) {
      toursElem.scrollIntoView({ behavior: 'smooth' });
    }

    if (destinationId === 'jaffna-northern-heritage') {
      setTourFilterCategory('Heritage');
    } else if (destinationId === 'mirissa-galle-coast' || destinationId === 'trincomalee-nilaveli') {
      setTourFilterCategory('Coastal');
    } else if (destinationId === 'yala-udawalawe-wildlife') {
      setTourFilterCategory('Wildlife');
    } else if (destinationId === 'nuwara-eliya-ella') {
      setTourFilterCategory('Adventure');
    } else {
      setTourFilterCategory('All');
    }
  };

  const handleSelectTourById = (tourId: string) => {
    const found = TOURS_DATA.find((t) => t.id === tourId);
    if (found) {
      setSelectedTour(found);
    }
  };

  const handleSelectDestination = (_dest: Destination) => {
    setIsPlannerOpen(true);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#191c1d] relative antialiased selection:bg-[#bbd0ff] selection:text-[#003f87]">
      {/* Top Fixed Luxury Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={handleNavClick}
        currency={currency}
        setCurrency={setCurrency}
        onOpenPlanner={() => setIsPlannerOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        userAvatarUrl={profileData.avatarUrl}
        userName={profileData.firstName}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onSearchTours={handleHeroSearch}
          onOpenPlanner={() => setIsPlannerOpen(true)}
        />

        {/* 2. Destinations Explorer */}
        <DestinationsSection
          onSelectDestination={handleSelectDestination}
          onOpenPlanner={() => setIsPlannerOpen(true)}
        />

        {/* 3. Tour Packages Showcase */}
        <ToursSection
          currency={currency}
          onSelectTour={(tour) => setSelectedTour(tour)}
          onOpenPlanner={() => setIsPlannerOpen(true)}
          filterCategory={tourFilterCategory}
        />

        {/* 4. Ground & VIP Concierge Services */}
        <ServicesSection
          onOpenPlanner={() => setIsPlannerOpen(true)}
        />

        {/* 5. Wellness & Ayurveda with Interactive Dosha Quiz & Packing Guide */}
        <WellnessSection
          onOpenTourModal={handleSelectTourById}
        />

        {/* 6. Sustainable Travel Commitment & Green Calculator */}
        <SustainableTravelSection
          onOpenPlanner={() => setIsPlannerOpen(true)}
        />

        {/* 7. High-Res Visual Gallery & Lightbox */}
        <GallerySection />

        {/* 8. About Us & Colombo Team */}
        <AboutSection />

        {/* 9. Contact Us, WhatsApp & FAQ */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavClick={handleNavClick}
        onOpenPlanner={() => setIsPlannerOpen(true)}
      />

      {/* Floating Action Button (Quick WhatsApp & Trip Builder) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        <button
          onClick={() => setIsPlannerOpen(true)}
          className="bg-[#683400] text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-xl hover:bg-[#87490e] transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
          title="Build Custom Trip"
        >
          <Sparkles className="w-4 h-4 text-[#ffdcc4]" />
          <span className="hidden sm:inline">Trip Builder</span>
        </button>

        <a
          href="https://wa.me/94729601551?text=Hello%20ARN%20Tours%20Lanka,%20I%20would%20like%20to%20plan%20a%20trip%20to%20Sri%20Lanka."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer border-2 border-white"
          aria-label="Chat on WhatsApp"
          title="Chat with Concierge on WhatsApp (+94 072 960 1551)"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>

      {/* Tour Detail & Booking Modal */}
      <TourModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        currency={currency}
        onOpenInquiry={(_tourTitle) => {
          setSelectedTour(null);
          handleNavClick('contact');
        }}
      />

      {/* Interactive Trip Planner Modal */}
      <InteractiveTripPlanner
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        currency={currency}
      />

      {/* User Portal / Profile Modal */}
      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onOpenTourModal={(tourId) => {
          setIsProfileOpen(false);
          handleSelectTourById(tourId);
        }}
        profileData={profileData}
        onUpdateProfile={handleUpdateProfile}
      />
    </div>
  );
}

