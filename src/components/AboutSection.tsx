import React from 'react';
import { Sparkles, Diamond, Compass, Leaf, Users, CheckCircle2, ShieldCheck, Heart, Award } from 'lucide-react';
import arnLogoImg from '../assets/images/arn_tours_logo_1787042363655.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#003f87] text-xs font-bold uppercase tracking-wider mb-3">
            <Diamond className="w-3.5 h-3.5 text-[#003f87]" />
            <span>Our Heritage & Purpose</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight mb-4">
            The Story Behind ARN TOURS LANKA
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            Founded with a singular passion: to elevate the art of Sri Lankan travel through uncompromising personal concierge standards, local intimacy, and deep cultural reverence.
          </p>
        </div>

        {/* 2-Column Story + Sunlit Office Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 h-80 sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbgISYDIvuT8Z4s9LuEGkk5riD1IfDkz12akhI_AUWb0bSJjcITfjfA1588JC-hgpOYmWDB41MSDhlAXUwxtyLmtZwObFmcgQW5ARGZiQ27TRVjsLZbCvqQe052reP98Z6BywZz8w053CV9mjiNNcBhIFQAbKRj1vnuzO7KSvzIfR4R-_FU63ZOGRttSjtXpVnboA2Ej6uTDy7smNG0aTNb39_7Fs02FGrwXPwTd__ZpGMxq32AmNc"
              alt="ARN Tours Lanka Concierge Team in Colombo"
              className="w-full h-full object-cover"
            />
            {/* Overlay Official Seal */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl border border-gray-200 flex items-center gap-3 shadow-lg">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-blue-200">
                <img
                  src={arnLogoImg}
                  alt="ARN Tours Official Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left pr-2">
                <span className="text-[9px] font-bold text-[#683400] uppercase tracking-wider block">Official Brand Emblem</span>
                <span className="font-bold text-xs text-[#003f87] block">ARN TOURS LANKA</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-200 text-xs text-gray-800">
              <span className="font-bold text-[#003f87] block mb-0.5">Headquarters: Colombo, Sri Lanka</span>
              Our multilingual team of travel planners, naturalists, and transport coordinators.
            </div>
          </div>


          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-[#683400] uppercase tracking-wider">
              Local Mastery • Global Standards
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900 leading-snug">
              Crafting Unforgettable Journeys with Heart & Precision
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              At ARN TOURS LANKA, we believe travel is transformative when it connects people with the living soul of an island. Born in Sri Lanka and rooted in generations of island hospitality, our team bypasses tourist clichés to unlock rare privileges: quiet dawn access to ancient UNESCO citadels, private tea tastings with master pluckers, and silent electric boat safaris through mangrove sanctuaries.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Every guest is assigned a senior personal concierge from our Colombo headquarters, alongside a licensed, English-speaking chauffeur-guide trained in cultural history, wildlife tracking, and defensive safety.
            </p>

            {/* Credibility Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-900 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Fully Licensed by the Sri Lanka Tourism Development Authority (SLTDA)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-900 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>24/7 Real-Time Ground Assistance & Chauffeur Liaison</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-900 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Zero Hidden Fees with 100% Price & Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#003f87] flex items-center justify-center mb-6">
              <Diamond className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">
              Personalized Concierge
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every detail is meticulously calibrated to your preferences, ensuring a seamless, deeply personal, and stress-free island holiday.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#2d6a48] flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">
              Authentic Local Soul
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              We connect you with the raw vibrancy of Sri Lanka—connecting you with local artisans, Buddhist monks, and village chefs.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#683400] flex items-center justify-center mb-6">
              <Leaf className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">
              Responsible Stewardship
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our operations fund local rainforest conservation, support fair-wage community guides, and maintain a 100% carbon-neutral vehicle fleet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
