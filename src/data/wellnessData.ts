export interface DoshaProfile {
  name: 'Vata' | 'Pitta' | 'Kapha';
  element: string;
  characteristics: string;
  balancedBy: string;
  recommendedHerbs: string[];
  idealTreatments: string[];
  dietAdvice: string;
}

export const DOSHA_PROFILES: Record<string, DoshaProfile> = {
  Vata: {
    name: 'Vata',
    element: 'Space & Air',
    characteristics: 'Creative, quick-minded, energetic, but prone to anxiety, dry skin, and fatigue when out of balance.',
    balancedBy: 'Warmth, grounding oils, soothing rhythms, nourishing cooked foods, and stillness.',
    recommendedHerbs: ['Ashwagandha', 'Bala', 'Brahmi', 'Sesame oil'],
    idealTreatments: ['Warm Abhyanga Full-Body Massage', 'Shirodhara oil stream', 'Herbal steam baths'],
    dietAdvice: 'Warm, cooked, soothing soups, ghee, sweet fruits, whole grains, and ginger tea.'
  },
  Pitta: {
    name: 'Pitta',
    element: 'Fire & Water',
    characteristics: 'Intelligent, passionate, focused leaders, but prone to inflammation, heat, and impatience when elevated.',
    balancedBy: 'Cooling therapies, moderation, floral aromas, peaceful nature walks, and sweet calming foods.',
    recommendedHerbs: ['Shatavari', 'Amalaki (Amla)', 'Neem', 'Coconut oil', 'Sandalwood'],
    idealTreatments: ['Takradhara (buttermilk pour)', 'Cooling herbal body wraps', 'Lotus petal baths'],
    dietAdvice: 'Cooling fresh juices, coconut water, coriander, leafy greens, cucumber, and sweet melons.'
  },
  Kapha: {
    name: 'Kapha',
    element: 'Earth & Water',
    characteristics: 'Loving, grounded, strong endurance, but prone to lethargy, congestion, and slow metabolism when sluggish.',
    balancedBy: 'Stimulating herbs, invigorating dry massages, brisk mountain hikes, and warming spices.',
    recommendedHerbs: ['Triphala', 'Guggulu', 'Ceylon Cinnamon', 'Black pepper', 'Mustard oil'],
    idealTreatments: ['Udvartana dry herbal powder scrub', 'Puvattu hot herbal bolus', 'Vigorous lymphatic drainage'],
    dietAdvice: 'Light warm soups, steamed vegetables, ginger, turmeric, bitter greens, and honey in warm water.'
  }
};

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    dosha: 'Vata' | 'Pitta' | 'Kapha';
  }[];
}

export const DOSHA_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: 'How would you describe your natural physical build?',
    options: [
      { text: 'Slender, light-boned, quick movement, difficulty gaining weight', dosha: 'Vata' },
      { text: 'Medium athletic build, good muscle tone, maintains weight easily', dosha: 'Pitta' },
      { text: 'Solid, broad frame, sturdy bones, gains weight easily', dosha: 'Kapha' }
    ]
  },
  {
    id: 2,
    question: 'How does your mind respond when under stress?',
    options: [
      { text: 'Restless, racing thoughts, worry, feeling overwhelmed', dosha: 'Vata' },
      { text: 'Impatient, irritable, critical, wanting to take immediate control', dosha: 'Pitta' },
      { text: 'Withdrawn, slow to react, procrastinating, seeking comfort food', dosha: 'Kapha' }
    ]
  },
  {
    id: 3,
    question: 'What is your preferred climate and weather?',
    options: [
      { text: 'I love warm, sunny, tropical climates; I easily feel cold', dosha: 'Vata' },
      { text: 'I prefer cool, well-ventilated spaces; I easily overheat', dosha: 'Pitta' },
      { text: 'I prefer dry, warm weather; damp cold weather makes me lethargic', dosha: 'Kapha' }
    ]
  },
  {
    id: 4,
    question: 'How is your typical sleep pattern?',
    options: [
      { text: 'Light, interrupted, often wake up thinking during the night', dosha: 'Vata' },
      { text: 'Moderate, restful (6-7 hrs), can wake up alert quickly', dosha: 'Pitta' },
      { text: 'Deep, heavy, hard to wake up early in the morning', dosha: 'Kapha' }
    ]
  }
];

export interface PackingItem {
  id: string;
  category: 'Attire' | 'Wellness' | 'Practical' | 'Temple Etiquette';
  title: string;
  detail: string;
  iconName: string;
  recommended: boolean;
}

export const PACKING_GUIDE: PackingItem[] = [
  // Attire
  {
    id: 'pack-1',
    category: 'Attire',
    title: 'Lightweight linen & cotton clothing',
    detail: 'Breathable, natural fabrics in white or earth tones for maximum comfort in tropical humidity.',
    iconName: 'check',
    recommended: true
  },
  {
    id: 'pack-2',
    category: 'Attire',
    title: 'Loose-fitting yoga & meditation wear',
    detail: 'Non-restrictive natural pants and tops for daily morning Pranayama and stretching.',
    iconName: 'check',
    recommended: true
  },
  {
    id: 'pack-3',
    category: 'Attire',
    title: 'Light evening shawl or cardigan',
    detail: 'Ideal for misty hill country evenings in Nuwara Eliya and air-conditioned transfers.',
    iconName: 'check',
    recommended: true
  },
  {
    id: 'pack-4',
    category: 'Attire',
    title: 'Comfortable slip-on walking shoes',
    detail: 'Easy to remove when entering temples, plus sturdy runners for estate walks.',
    iconName: 'check',
    recommended: true
  },
  // Wellness
  {
    id: 'pack-5',
    category: 'Wellness',
    title: 'Personal reflection journal & pen',
    detail: 'Document your insights, physician recommendations, and mental shifts during retreat.',
    iconName: 'check',
    recommended: true
  },
  {
    id: 'pack-6',
    category: 'Wellness',
    title: 'Reef-safe sunscreen & botanical bug spray',
    detail: 'Eco-friendly natural citronella and mineral sun protection preserving marine life.',
    iconName: 'check',
    recommended: true
  },
  {
    id: 'pack-7',
    category: 'Wellness',
    title: 'Insulated stainless steel water bottle',
    detail: 'We provide filtered herbal detox infusions and chilled spring water refills daily.',
    iconName: 'check',
    recommended: true
  },
  // Temple Etiquette
  {
    id: 'pack-8',
    category: 'Temple Etiquette',
    title: 'White or cream shoulder-covering tops',
    detail: 'Sacred Buddhist and Hindu shrines require shoulders and knees to be fully covered.',
    iconName: 'check',
    recommended: true
  },
  {
    id: 'pack-9',
    category: 'Temple Etiquette',
    title: 'Long sarong or modest maxi skirt/pants',
    detail: 'Easily wrapped for instant respectful coverage before stepping into temple grounds.',
    iconName: 'check',
    recommended: true
  },
  // Practical
  {
    id: 'pack-10',
    category: 'Practical',
    title: 'Type D / G universal plug adapter',
    detail: 'Sri Lanka uses primarily UK 3-pin (Type G) and round 3-pin (Type D) outlets.',
    iconName: 'check',
    recommended: true
  },
  {
    id: 'pack-11',
    category: 'Practical',
    title: 'Waterproof pouch or dry bag',
    detail: 'Protects valuables during boat cruises, water blessing ceremonies, or rain showers.',
    iconName: 'check',
    recommended: false
  }
];

export const LEAVE_BEHIND_LIST = [
  'Heavy laptops and work gadgets (embrace digital detox)',
  'Synthetic non-breathable polyester garments',
  'Strong artificial perfumes (competes with healing herbal oils)',
  'Single-use disposable plastics (ARN Tours provides reusable kits)'
];
