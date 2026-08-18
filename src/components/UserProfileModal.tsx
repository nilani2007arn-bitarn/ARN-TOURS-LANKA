import React, { useState, useRef } from 'react';
import { 
  X, Calendar, MapPin, Sparkles, Check, Heart, Shield, Settings, 
  MessageSquare, Phone, User, Edit3, Save, Camera, Upload, 
  CheckCircle2, RefreshCw, Star, Award, Car
} from 'lucide-react';
import arnLogoImg from '../assets/images/arn_tours_logo_1787042363655.jpg';
import travelerPicImg from '../assets/images/traveler_profile_pic_1787042383555.jpg';
import guidePicImg from '../assets/images/guide_profile_pic_1787042398103.jpg';

export interface UserProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl: string;
  nationality: string;
  passportLast4: string;
  dietaryTags: string[];
  retreatInterests: string[];
}

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTourModal: (tourId: string) => void;
  profileData: UserProfileData;
  onUpdateProfile: (updated: Partial<UserProfileData>) => void;
}

export const PRESET_AVATARS = [
  {
    id: 'traveler-chic',
    label: 'VIP Traveler',
    subtitle: 'Eleanor Vance',
    url: travelerPicImg,
  },
  {
    id: 'arn-emblem',
    label: 'ARN Official Emblem',
    subtitle: 'Ceylon Royal Crest',
    url: arnLogoImg,
  },
  {
    id: 'ceylon-adventurer',
    label: 'Island Explorer',
    subtitle: 'Tea & Safari Focus',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'wellness-guest',
    label: 'Wellness Devotee',
    subtitle: 'Ayurveda & Spa',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
];

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  onOpenTourModal,
  profileData,
  onUpdateProfile,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'journeys' | 'profile' | 'wellness' | 'settings'>('journeys');
  const [formData, setFormData] = useState<UserProfileData>({ ...profileData });
  const [newTagInput, setNewTagInput] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const resultUrl = uploadEvent.target?.result as string;
        if (resultUrl) {
          setFormData((prev) => ({ ...prev, avatarUrl: resultUrl }));
          onUpdateProfile({ avatarUrl: resultUrl });
          setIsUploading(false);
          setSavedSuccess(true);
          setTimeout(() => setSavedSuccess(false), 3000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectPresetAvatar = (url: string) => {
    setFormData((prev) => ({ ...prev, avatarUrl: url }));
    onUpdateProfile({ avatarUrl: url });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleAddDietary = () => {
    if (newTagInput.trim()) {
      const updatedTags = [...formData.dietaryTags, newTagInput.trim()];
      setFormData((prev) => ({ ...prev, dietaryTags: updatedTags }));
      onUpdateProfile({ dietaryTags: updatedTags });
      setNewTagInput('');
    }
  };

  const handleRemoveDietary = (tag: string) => {
    const updatedTags = formData.dietaryTags.filter((t) => t !== tag);
    setFormData((prev) => ({ ...prev, dietaryTags: updatedTags }));
    onUpdateProfile({ dietaryTags: updatedTags });
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-auto border border-gray-200 flex flex-col max-h-[90vh] animate-in fade-in duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Active Profile Preview */}
        <div className="px-6 py-5 bg-[#003f87] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-[#ffdcc4] shadow-md bg-white/20 shrink-0">
                <img
                  src={formData.avatarUrl || travelerPicImg}
                  alt={`${formData.firstName} ${formData.lastName}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => {
                  setActiveTab('profile');
                  fileInputRef.current?.click();
                }}
                className="absolute -bottom-1 -right-1 bg-[#683400] text-white p-1.5 rounded-full shadow-md hover:bg-[#87490e] transition-transform hover:scale-110 cursor-pointer"
                title="Change profile picture"
              >
                <Camera className="w-3 h-3 text-[#ffdcc4]" />
              </button>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-[#ffdcc4] uppercase tracking-wider block">
                  ARN VIP Traveler Portal
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  SLTDA Verified
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                {formData.firstName} {formData.lastName}
              </h3>
              <p className="text-xs text-blue-200/80">Ref: #ARN-2026-8819 • Sri Lanka Exclusive Guest</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-2 px-6 py-3 bg-gray-50 border-b border-gray-200 shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('journeys')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'journeys' ? 'bg-[#003f87] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200/60'
            }`}
          >
            My Journeys (1 Upcoming)
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'profile' ? 'bg-[#003f87] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200/60'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            Profile Picture & Identity
          </button>
          <button
            onClick={() => setActiveTab('wellness')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'wellness' ? 'bg-[#003f87] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200/60'
            }`}
          >
            Wellness & Diet Preferences
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'settings' ? 'bg-[#003f87] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200/60'
            }`}
          >
            Account Details
          </button>
        </div>

        {/* Hidden File Input for Custom Avatar Upload */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleAvatarFileChange}
          accept="image/*"
          className="hidden"
        />

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow">
          {/* TAB 1: MY JOURNEYS */}
          {activeTab === 'journeys' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-lg text-gray-900">Upcoming Sri Lankan Journeys</h4>
                  <p className="text-xs text-gray-500">Your ground operations, chauffeur briefing, and hotel confirmations.</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                  Confirmed & Ready
                </span>
              </div>

              {/* Upcoming Journey Card */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col md:flex-row group">
                <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden shrink-0">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AP1WRLuWOquRX_y3A_Dz6hgq1WTBrA9oKoaMJGcRKraZ5tWHhBo-fpY0fPTeTZiUjop39EisuICmSFfK_Bx-Wm5b41SxjJG3s42T03j4dknkix3qSXfKm1GfeCsChLz9jENaG0ZDSOlPO7Fv-KsSLxvBcH01XLdakV3AX_N8JLfIkXBEFm7wy92IPRcNQZNPjVBTNLrow1ChLWoZ35X0TSiMaEtgw3MgUaSyPHaqb4Ckr85iNExa2dPpblGiBw"
                    alt="Nuwara Eliya Tea Terraces"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#003f87] shadow-sm flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Departs in 14 Days</span>
                  </div>
                </div>

                <div className="p-6 md:w-3/5 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-[#683400] uppercase tracking-wider block mb-1">
                      Hill Country & Heritage Circuit
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-gray-900 mb-2">
                      The Ceylon Tea Heritage & Mountain Tour
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                      A 5-day immersive experience through the central highlands, featuring private working estate visits, 1st Class observation rail car, and luxury colonial bungalow stays.
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <div><strong>Chauffeur:</strong> Mr. Samantha Perera</div>
                      <div><strong>Vehicle:</strong> Toyota KDH VIP Van</div>
                      <div><strong>Lead Hotel:</strong> The Grand Hotel 1891</div>
                      <div><strong>Luggage:</strong> 3 Bags + Carry-on</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                    <button
                      onClick={() => onOpenTourModal('hill-country-adventure')}
                      className="bg-[#003f87] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#0056b3] transition-all cursor-pointer"
                    >
                      View Live Itinerary
                    </button>
                    <a
                      href="https://wa.me/94729601551?text=Hello%20Concierge,%20this%20is%20Eleanor%20regarding%20my%20Ceylon%20Tea%20Tour."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-emerald-600 text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-all flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat with Chauffeur</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Dedicated Chauffeur Guide Card with Photo */}
              <div className="bg-gradient-to-r from-blue-50/70 to-indigo-50/50 p-5 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={guidePicImg}
                      alt="Samantha Perera - ARN Lead Chauffeur Guide"
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#003f87] shadow-md shrink-0"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" title="Active on duty" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="font-heading font-bold text-base text-gray-900">Mr. Samantha Perera</h5>
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        4.98 (120+ VIP Tours)
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">Senior Chauffeur-Guide & Naturalist • SLTDA Lic #CG-4891</p>
                    <p className="text-xs text-gray-500 mt-0.5">Languages: English, French, Sinhala</p>
                  </div>
                </div>

                <a
                  href="tel:+940729601551"
                  className="bg-[#003f87] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#0056b3] transition-colors flex items-center gap-2 shrink-0 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Chauffeur</span>
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: PROFILE PICTURE & IDENTITY */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-bold text-lg text-gray-900 mb-1">
                  Profile Picture & Traveler Avatar
                </h4>
                <p className="text-xs text-gray-600">
                  Your photo is synced with your airport arrival chauffeur board, hotel check-in registration, and ARN VIP Concierge desk.
                </p>
              </div>

              {/* Main Avatar Display & Upload Actions */}
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
                <div className="relative group">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#003f87] shadow-xl bg-white shrink-0">
                    <img
                      src={formData.avatarUrl || travelerPicImg}
                      alt={`${formData.firstName} ${formData.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 bg-black/40 rounded-full flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <Camera className="w-6 h-6 mb-1 text-[#ffdcc4]" />
                    <span className="text-[10px] font-bold">Update</span>
                  </button>
                </div>

                <div className="space-y-3 text-center sm:text-left flex-grow">
                  <div>
                    <h5 className="font-heading font-bold text-base text-gray-900">
                      {formData.firstName} {formData.lastName}
                    </h5>
                    <p className="text-xs text-gray-500">
                      Format: JPG, PNG, WEBP or SVG (Recommended: 400x400px square)
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploading}
                      className="bg-[#003f87] text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-[#0056b3] transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                    >
                      <Upload className="w-4 h-4 text-[#ffdcc4]" />
                      <span>{isUploading ? 'Uploading...' : 'Upload Picture'}</span>
                    </button>

                    <button
                      onClick={() => handleSelectPresetAvatar(travelerPicImg)}
                      className="bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-xl text-xs font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reset to Default</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Choose from Curated Profile Avatars */}
              <div>
                <h5 className="font-heading font-bold text-sm text-gray-900 mb-3">
                  Or Choose from Curated Brand Avatars
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {PRESET_AVATARS.map((preset) => {
                    const isSelected = formData.avatarUrl === preset.url;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => handleSelectPresetAvatar(preset.url)}
                        className={`p-3 rounded-2xl border transition-all text-center flex flex-col items-center gap-2 cursor-pointer ${
                          isSelected
                            ? 'border-[#003f87] bg-blue-50/80 shadow-md ring-2 ring-[#003f87]/30'
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm relative">
                          <img
                            src={preset.url}
                            alt={preset.label}
                            className="w-full h-full object-cover"
                          />
                          {isSelected && (
                            <div className="absolute inset-0 bg-[#003f87]/40 flex items-center justify-center">
                              <Check className="w-5 h-5 text-white font-bold" />
                            </div>
                          )}
                        </div>
                        <div>
                          <span className="font-bold text-xs text-gray-900 block">{preset.label}</span>
                          <span className="text-[10px] text-gray-500">{preset.subtitle}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Airport & Hotel Verification Badge Preview */}
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500 shrink-0">
                  <img
                    src={formData.avatarUrl || travelerPicImg}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-emerald-950">Bandaranaike International Airport (CMB) Fast-Track Badge</span>
                    <span className="bg-emerald-200 text-emerald-900 text-[9px] font-extrabold px-1.5 py-0.5 rounded">ACTIVE</span>
                  </div>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    Your chauffeur will hold a digital iPad greeting tablet displaying your name and profile picture at Arrivals.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: WELLNESS & DIETARY */}
          {activeTab === 'wellness' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-bold text-lg text-gray-900 mb-1">
                  Wellness & Lifestyle Preferences
                </h4>
                <p className="text-xs text-gray-600">
                  We pre-brief your luxury retreat chefs and spa practitioners so your meals and treatments are tailored from the moment you arrive.
                </p>
              </div>

              {/* Dietary Requirements */}
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200">
                <h5 className="font-heading font-bold text-sm text-gray-900 mb-2">
                  Dietary Requirements & Allergies
                </h5>
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.dietaryTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-emerald-100 text-emerald-900 border border-emerald-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5"
                    >
                      <span>{tag}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveDietary(tag)}
                        className="hover:text-red-600 cursor-pointer"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTagInput}
                    onChange={(e) => setNewTagInput(e.target.value)}
                    placeholder="Add dietary note (e.g. Nut allergy, lactose-free)..."
                    className="flex-grow bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#003f87] outline-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddDietary();
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleAddDietary}
                    className="bg-[#003f87] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#0056b3] transition-colors cursor-pointer shrink-0"
                  >
                    Add Requirement
                  </button>
                </div>
              </div>

              {/* Spa & Retreat Focus */}
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200">
                <h5 className="font-heading font-bold text-sm text-gray-900 mb-2">
                  Preferred Wellness Focus
                </h5>
                <div className="flex flex-wrap gap-2">
                  {formData.retreatInterests.map((item) => (
                    <span
                      key={item}
                      className="bg-blue-100 text-blue-900 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All dietary requirements automatically synchronized with hotel culinary teams.</span>
              </div>
            </div>
          )}

          {/* TAB 4: ACCOUNT SETTINGS */}
          {activeTab === 'settings' && (
            <form onSubmit={handleSaveSettings} className="space-y-4 max-w-xl">
              <div>
                <h4 className="font-heading font-bold text-lg text-gray-900 mb-1">
                  Traveler Contact Details
                </h4>
                <p className="text-xs text-gray-600 mb-4">
                  Used for flight tracking, visa support, and chauffeur greeting signage.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Nationality</label>
                  <input
                    type="text"
                    value={formData.nationality}
                    onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                    placeholder="e.g. British / American / Australian"
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Passport Last 4 Digits</label>
                  <input
                    type="text"
                    value={formData.passportLast4}
                    onChange={(e) => setFormData({ ...formData, passportLast4: e.target.value })}
                    placeholder="e.g. 7891"
                    maxLength={4}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Mobile / WhatsApp Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#003f87] outline-none"
                />
              </div>

              {savedSuccess && (
                <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Profile updates saved successfully!</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#003f87] text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-[#0056b3] transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Profile Changes</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <img
              src={arnLogoImg}
              alt="ARN Tours Lanka"
              className="w-6 h-6 rounded-full object-cover border border-gray-200"
            />
            <span className="text-xs text-gray-500">
              Concierge 24/7 Hotline: <strong className="text-gray-800">+94 072 960 1551</strong>
            </span>
          </div>
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
};

