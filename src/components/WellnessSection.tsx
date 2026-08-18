import React, { useState } from 'react';
import { Sparkles, Heart, Check, HelpCircle, ArrowRight, Download, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { DOSHA_PROFILES, DOSHA_QUIZ, PACKING_GUIDE, LEAVE_BEHIND_LIST, DoshaProfile } from '../data/wellnessData';

interface WellnessSectionProps {
  onOpenTourModal: (tourId: string) => void;
}

export const WellnessSection: React.FC<WellnessSectionProps> = ({ onOpenTourModal }) => {
  // Dosha Quiz State
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<('Vata' | 'Pitta' | 'Kapha')[]>([]);
  const [quizResult, setQuizResult] = useState<DoshaProfile | null>(null);

  // Packing Checklist State
  const [activePackingCategory, setActivePackingCategory] = useState<string>('All');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'pack-1': true,
    'pack-2': true,
    'pack-5': true,
    'pack-8': true,
  });

  const handleAnswerOption = (dosha: 'Vata' | 'Pitta' | 'Kapha') => {
    const updated = [...quizAnswers, dosha];
    setQuizAnswers(updated);

    if (currentQuizQuestion + 1 < DOSHA_QUIZ.length) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      // Calculate dominant dosha
      const counts: Record<string, number> = { Vata: 0, Pitta: 0, Kapha: 0 };
      updated.forEach((d) => {
        counts[d] = (counts[d] || 0) + 1;
      });

      let dominant: 'Vata' | 'Pitta' | 'Kapha' = 'Vata';
      if (counts.Pitta > counts.Vata && counts.Pitta >= counts.Kapha) dominant = 'Pitta';
      if (counts.Kapha > counts.Vata && counts.Kapha > counts.Pitta) dominant = 'Kapha';

      setQuizResult(DOSHA_PROFILES[dominant]);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizQuestion(0);
    setQuizAnswers([]);
    setQuizResult(null);
  };

  const togglePackingItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const packingCategories = ['All', 'Attire', 'Wellness', 'Temple Etiquette', 'Practical'];

  const filteredPackingItems = PACKING_GUIDE.filter((item) => {
    if (activePackingCategory === 'All') return true;
    return item.category === activePackingCategory;
  });

  const totalPacked = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((totalPacked / PACKING_GUIDE.length) * 100);

  return (
    <section id="wellness" className="py-20 bg-gray-50 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#2d6a48] text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-[#2d6a48]" />
            <span>Indigenous Healing Heritage</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight mb-4">
            Wellness & Ayurveda: Rejuvenate Your Soul
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            Immerse yourself in over 3,000 years of indigenous Ayurvedic science. Discover your natural body constitution and prepare with our curated packing guide.
          </p>
        </div>

        {/* 2-Column Overview: Ancient Art + Sanctuary Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-[#683400] uppercase tracking-wider">
              The Science of Longevity
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900">
              The Ancient Art of Sri Lankan Ayurveda
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Rooted in deep herbal wisdom and Buddhist mindfulness, Sri Lankan Ayurveda addresses the root causes of physical and emotional imbalances. Our certified physician retreats harmonize the three biological humors—<strong>Vata, Pitta, and Kapha</strong>—through personalized herbal decoctions, warm oil stream therapies (Shirodhara), and Sattvic organic nutrition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <span className="font-bold text-[#003f87] text-sm block mb-1">🌿 Herbal Purity</span>
                <p className="text-xs text-gray-600">Fresh island-grown medicinal flora, cold-pressed black sesame oils, and organic Ceylon cinnamon.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <span className="font-bold text-[#2d6a48] text-sm block mb-1">🧘 Dosha Harmony</span>
                <p className="text-xs text-gray-600">Customized therapeutic massage, daily sunrise yoga, and physician pulse diagnostics.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenTourModal('wellness-ayurveda-retreat')}
                className="bg-[#2d6a48] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-[#1e4a32] transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>View 7-Day Ayurveda Retreat Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp7uxweQcbMbhMOalHHY2SKlYPnFQOsiRTeWuWEq1EQG6cFwFWE-boGFO26X4ruSysg3sfUQx0cndu6eFe4lxZEtRW3I24dQ2J8ybWe5EjYZ-vOaVhU7YkwUcZGWFGdFuibqpCtYFq53c3tqu63ALTkrB_UIGKXAzx8qbyb4R_LQd5s1j_sqeuhzlsD17EL49HrV8bvPD7lr444E9LhCEK7oxYl3rHZTW3ZS1UiPgl8ihvKe4gZB9K"
              alt="Traditional Ayurvedic Herbal Preparations in Sri Lanka"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60 text-xs text-gray-800">
              <span className="font-bold text-[#003f87] block mb-0.5">Ayurvedic Master Sanctuary</span>
              Supervised under the care of experienced Ayurvedic doctors in the misty mountain valleys.
            </div>
          </div>
        </div>

        {/* INTERACTIVE DOSHA QUIZ CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-md mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold text-[#003f87] uppercase tracking-wider block">
                  Interactive Self-Discovery
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-gray-900">
                  Discover Your Ayurvedic Dosha (Mind-Body Type)
                </h3>
              </div>

              {quizResult && (
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-1 text-xs font-bold text-[#003f87] hover:underline cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              )}
            </div>

            {!quizResult ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>Question {currentQuizQuestion + 1} of {DOSHA_QUIZ.length}</span>
                  <span>{Math.round(((currentQuizQuestion) / DOSHA_QUIZ.length) * 100)}% Complete</span>
                </div>

                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#003f87] h-full transition-all duration-300"
                    style={{ width: `${((currentQuizQuestion) / DOSHA_QUIZ.length) * 100}%` }}
                  />
                </div>

                <h4 className="font-heading font-bold text-lg text-gray-900">
                  {DOSHA_QUIZ[currentQuizQuestion].question}
                </h4>

                <div className="space-y-3">
                  {DOSHA_QUIZ[currentQuizQuestion].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswerOption(opt.dosha)}
                      className="w-full p-4 rounded-2xl border border-gray-200 hover:border-[#003f87] hover:bg-blue-50/40 text-left transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span className="text-sm text-gray-800 group-hover:text-[#003f87] font-medium">
                        {opt.text}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#003f87] shrink-0 ml-3" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="bg-gradient-to-r from-emerald-900 to-[#2d6a48] text-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#ffdcc4] text-[#683400] text-xs font-bold uppercase">
                      Your Dominant Constitution
                    </span>
                    <span className="text-xs text-emerald-200">Element: {quizResult.element}</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-3xl text-white mb-2">
                    {quizResult.name} Constitution
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed mb-4">
                    {quizResult.characteristics}
                  </p>
                  <p className="text-xs text-white/90 border-t border-white/20 pt-3">
                    <strong>How to stay balanced:</strong> {quizResult.balancedBy}
                  </p>
                </div>

                {/* Recommended Treatments & Herbs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                    <span className="font-bold text-[#003f87] uppercase tracking-wider block mb-1">
                      Recommended Therapies
                    </span>
                    <ul className="space-y-1 text-gray-700">
                      {quizResult.idealTreatments.map((t, i) => (
                        <li key={i}>• {t}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                    <span className="font-bold text-[#003f87] uppercase tracking-wider block mb-1">
                      Nutritional Guidance
                    </span>
                    <p className="text-gray-700 leading-relaxed">{quizResult.dietAdvice}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    onClick={() => onOpenTourModal('wellness-ayurveda-retreat')}
                    className="bg-[#003f87] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-[#0056b3] transition-all shadow-md cursor-pointer"
                  >
                    Explore Ayurvedic Retreat for {quizResult.name} Dosha
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="text-xs font-semibold text-gray-600 hover:text-gray-900 underline"
                  >
                    Retake Dosha Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* WELLNESS PACKING GUIDE & CHECKLIST */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#683400] block mb-1">
                Travel Preparation
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900">
                Interactive Wellness & Temple Packing Guide
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Check off items as you pack for your retreat and sacred site excursions.
              </p>
            </div>

            {/* Packing Progress */}
            <div className="bg-white p-3.5 rounded-2xl border border-gray-200 shadow-sm shrink-0 flex items-center gap-4">
              <div>
                <span className="text-[10px] text-gray-500 font-bold uppercase block">Packing Progress</span>
                <span className="text-sm font-extrabold text-[#003f87]">{totalPacked} / {PACKING_GUIDE.length} Items Packed</span>
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-600 flex items-center justify-center text-xs font-bold text-emerald-800">
                {progressPercent}%
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {packingCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActivePackingCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activePackingCategory === cat
                    ? 'bg-[#003f87] text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Checklist Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {filteredPackingItems.map((item) => {
              const isChecked = Boolean(checkedItems[item.id]);
              return (
                <div
                  key={item.id}
                  onClick={() => togglePackingItem(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-emerald-50/40 border-emerald-300/80 shadow-sm'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0 transition-all ${
                      isChecked ? 'bg-emerald-600 text-white' : 'border border-gray-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        {item.category}
                      </span>
                    </div>
                    <h4
                      className={`font-heading font-bold text-sm leading-snug ${
                        isChecked ? 'text-emerald-950 line-through opacity-85' : 'text-gray-900'
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* What to Leave Behind Notice */}
          <div className="bg-amber-50/70 rounded-2xl p-6 border border-amber-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                What to Leave Behind
              </span>
              <p className="text-xs text-amber-950">
                To truly embrace Ayurveda and mindfulness: leave behind heavy work electronics, synthetic polyester fabrics, artificial perfumes, and stress.
              </p>
            </div>
            <button
              onClick={() => {
                alert('Packing Guide checklist saved to your offline profile summary!');
              }}
              className="bg-white hover:bg-amber-100 text-amber-950 border border-amber-300 px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              Export Checklist (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
