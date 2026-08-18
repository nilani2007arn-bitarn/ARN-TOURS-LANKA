export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  meals: string;
  stay: string;
  image: string;
}

export interface TourPackage {
  id: string;
  title: string;
  tagline: string;
  durationDays: number;
  durationNights: number;
  pricePerPersonUSD: number;
  category: 'Highlights' | 'Wellness' | 'Heritage' | 'Adventure' | 'Coastal' | 'Wildlife';
  route: string;
  coverImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  physicalRating: 'Easy' | 'Moderate' | 'Active';
  bestSeason: string;
  itinerary: ItineraryDay[];
}

export const TOURS_DATA: TourPackage[] = [
  {
    id: 'sri-lanka-highlights',
    title: 'Sri Lanka Highlights Tour',
    tagline: 'The classic grand circuit across heritage, high tea estates, and wild leopard sanctuaries',
    durationDays: 7,
    durationNights: 6,
    pricePerPersonUSD: 899,
    category: 'Highlights',
    route: 'Colombo • Kandy • Ella • Yala • Galle',
    coverImage: 'https://lh3.googleusercontent.com/aida/AP1WRLsYsVVCjrdGAwwWG2W1LeRZHOd_-gLryjAz4p2AIoxNuhGhO-zo9Fh6n36hVLpTnF99466vPZV8HQ-GOi3RItfGDeq3X-Z3CtbFDQLfI8YrS69coQsFfIgtOxwMcobR8W4pJpxvR60Dh1jLDjBFzCRSgQgAYqhDQIkQ6a8wwP4GYAaFKVOaaGDtr2j9i7fTjCz9SPMvh08GihDSxMboUVj5KNDSt0RDNJZns2j07q89dMPwVrS51OcOWaA',
    gallery: [
      'https://lh3.googleusercontent.com/aida/AP1WRLsYsVVCjrdGAwwWG2W1LeRZHOd_-gLryjAz4p2AIoxNuhGhO-zo9Fh6n36hVLpTnF99466vPZV8HQ-GOi3RItfGDeq3X-Z3CtbFDQLfI8YrS69coQsFfIgtOxwMcobR8W4pJpxvR60Dh1jLDjBFzCRSgQgAYqhDQIkQ6a8wwP4GYAaFKVOaaGDtr2j9i7fTjCz9SPMvh08GihDSxMboUVj5KNDSt0RDNJZns2j07q89dMPwVrS51OcOWaA',
      'https://lh3.googleusercontent.com/aida/AP1WRLuWOquRX_y3A_Dz6hgq1WTBrA9oKoaMJGcRKraZ5tWHhBo-fpY0fPTeTZiUjop39EisuICmSFfK_Bx-Wm5b41SxjJG3s42T03j4dknkix3qSXfKm1GfeCsChLz9jENaG0ZDSOlPO7Fv-KsSLxvBcH01XLdakV3AX_N8JLfIkXBEFm7wy92IPRcNQZNPjVBTNLrow1ChLWoZ35X0TSiMaEtgw3MgUaSyPHaqb4Ckr85iNExa2dPpblGiBw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbHiNSUs7CNHBr1xuo0D2TBdvD9eVBXtYUBLZOmGUDukvIZvcj3TLXWoTNaXmiChFvzMRxU00tRKCgSHH2GYqOznVIgcU4B5oZAdgor49vhwPoHsVI4sBUZPUfys0FBJpfyTYfAvrjkM6f6pt8UpDrl06zaUsednUdkYdC-gKP3l28RC3RujgVv6Z7E8Cs5EVIrTheajHhoOxgmnNFUglTLmF9MCVaxYR9JdX618VD_OStmB8LdsO',
      'https://lh3.googleusercontent.com/aida/AP1WRLsPfwJYHdA74mSoohGhKtrmBeiJ38DY9w45NS0-u6ZT-NnytT80ZhUrJ4Kqw2oXrXuBalUiYKEH_h_OzdpODpT2R3lJ-SzCvbkFIGHENBZzteYGbkcZsEeqbuDvF6UCmpcUVAaiWvEbqcjVJxbyxmxLDBfgT2DrVizNp9CIqoboh-R9uREyWb7whZN3y_J4v_8Xec8KckHMKHlLx9upquC4TraQ9kJJvJhnvpSiYOR86ZLgOfIpsy6Czr0'
    ],
    description: 'Experience the quintessential Sri Lankan adventure. Ascend the ancient rock fortress of Sigiriya, travel by iconic blue train through emerald highland mist, spot wild leopards and elephants in Yala, and unwind in colonial Galle Fort.',
    highlights: [
      'Climb the 5th-century UNESCO Sigiriya Rock Fortress at sunrise',
      'Scenic First Class Train journey from Kandy through Ella Gap',
      'Private 4x4 Jeep Safari in Yala National Park with expert tracker',
      'Sunset stroll along the ramparts of UNESCO Galle Dutch Fort',
      'Private Ceylon tea tasting at a heritage colonial tea factory'
    ],
    inclusions: [
      '6 nights accommodation in curated 4-star boutique hotels & eco-lodges',
      'Daily gourmet breakfast & 3-course dinners',
      'Private luxury air-conditioned vehicle with English-speaking chauffeur-guide',
      'Reserved 1st Class scenic train tickets (Kandy to Ella)',
      'All entrance fees to UNESCO heritage sites & national parks',
      'Private 4x4 safari jeep with government wildlife ranger',
      'Airport VIP Meet & Greet with local SIM & 4G connectivity',
      'All local taxes and 24/7 ground concierge hotline'
    ],
    exclusions: [
      'International airfares and entry visas',
      'Lunches and personal alcoholic beverages',
      'Camera fees at sacred religious monuments',
      'Gratuities for chauffeur-guide and safari trackers'
    ],
    physicalRating: 'Moderate',
    bestSeason: 'Year-round (Best Nov - April)',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Colombo & Transfer to Cultural Triangle',
        location: 'Colombo • Sigiriya',
        description: 'VIP airport greeting by your dedicated chauffeur guide. Enjoy a refreshing scenic drive through coconut plantations to your luxury eco-resort in Sigiriya.',
        highlights: ['VIP airport arrival', 'Fresh King Coconut welcome', 'Evening village walk'],
        meals: 'Dinner included',
        stay: 'Aliya Resort & Spa / Cinnamon Lodge',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLsYsVVCjrdGAwwWG2W1LeRZHOd_-gLryjAz4p2AIoxNuhGhO-zo9Fh6n36hVLpTnF99466vPZV8HQ-GOi3RItfGDeq3X-Z3CtbFDQLfI8YrS69coQsFfIgtOxwMcobR8W4pJpxvR60Dh1jLDjBFzCRSgQgAYqhDQIkQ6a8wwP4GYAaFKVOaaGDtr2j9i7fTjCz9SPMvh08GihDSxMboUVj5KNDSt0RDNJZns2j07q89dMPwVrS51OcOWaA'
      },
      {
        day: 2,
        title: 'Sigiriya Rock Fortress & Dambulla Cave Temples',
        location: 'Sigiriya • Dambulla',
        description: 'Early morning ascent of Sigiriya to marvel at the ancient frescoes and lion paws. In the afternoon, visit the golden cave monasteries of Dambulla containing over 150 Buddha statues.',
        highlights: ['UNESCO Sigiriya Lion Rock', 'Mirror Wall & Frescoes', 'Dambulla Golden Cave Temple'],
        meals: 'Breakfast & Dinner',
        stay: 'Aliya Resort & Spa',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgM2tWAznNU8tbM6h1RquX3Ro8CnZqv91lE-ybHbT3aGlogI8oNBtOBPoKVoTSx2sgjrC08Yv8tLf9A3okbwTX40qFlKArdm_UuuBnD4UvkzxCwDVUUtrKyurTLtOOw08qd64JM8EIVCTa5uwFqIXyW4zIF57PcV0DIcsYQaMWVjOm3dfdIRi0PBb-mcjKZ4p0iCGxpW6cMLbAa1lhDynUpr0UxfT6J_FF5TWtleIhHO9vK2Xc5rt6'
      },
      {
        day: 3,
        title: 'Spice Gardens of Matale & The Royal City of Kandy',
        location: 'Matale • Kandy',
        description: 'Journey south into the hill kingdom. Stop at an organic spice garden to learn about Ceylon cinnamon and cardamom. Evening visit to the Temple of the Sacred Tooth Relic and traditional dance show.',
        highlights: ['Organic spice garden tour', 'Temple of the Sacred Tooth Relic', 'Kandy Lake promenade'],
        meals: 'Breakfast & Dinner',
        stay: 'Earl\'s Regency / The Grand Kandyan',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXsjMB0yOLA9DOpUxuY90JRpZ_szM3vNkA-8hCdO6kvDRhi06UhKqSTkFQ7fmLOvEM_PvbXgoTN8mczKiT9Q7hHEDK1GhhwKOsij5JmGDWXh0rtolHBsYz_k1ZKfIltstrhiFN1cF26eviTqAd608fBvj6SWLIdT6rhClpWda9ySpEebGC5zNZbUwGIwc98fegN-7vJPN-1xrONQWybfQBeoDgA92sZD7YSx5WPYTU_GJDYOjddLEh'
      },
      {
        day: 4,
        title: 'The Blue Mountain Train to Ella & Nine Arches Bridge',
        location: 'Nuwara Eliya • Ella',
        description: 'Board the world-famous blue train winding through misty tea hills and cascading waterfalls. Arrive in Ella, hike to the iconic Nine Arches Bridge, and watch the evening express cross.',
        highlights: ['Scenic First Class Train ride', 'Nine Arches Bridge sunset', 'Little Adam\'s Peak hike'],
        meals: 'Breakfast & Dinner',
        stay: '98 Acres Resort & Spa / EKHO Ella',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-datpaWoSHG_r-yZrIvH5Sm00FkoFDfGk6o4mnIjOlfPq0B8SOVy_YSbcKS6wKnjBD3asA6kG3tikRfN5yrZOsifA3ziXiZ29o0UVN2vYi8PMbqAzRHw6rSeZIe9JXrp1mek_8JOOZ40V4VJu7dpc3m0Idj1LWFj88BPMYv_jCI6urN9CKRbzVcTsk_MoRQWG8QGPvTLe29ifGR24tQ5UDCU8xC7Ofw8-KCAGWK33TSx5INOD1Gir'
      },
      {
        day: 5,
        title: 'Ravana Falls & Big Game Safari in Yala National Park',
        location: 'Ella • Yala',
        description: 'Descend to the dry-zone savannas past Ravana Falls. Embark on a private sunset 4x4 game drive in Yala, home to the highest density of leopards in the world, along with wild elephants, sloth bears, and crocodiles.',
        highlights: ['Ravana Falls waterfall view', 'Yala National Park Game Drive', 'Leopard & Elephant tracking'],
        meals: 'Breakfast & Safari Bush Dinner',
        stay: 'Cinnamon Wild Yala / Jetwing Yala',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbHiNSUs7CNHBr1xuo0D2TBdvD9eVBXtYUBLZOmGUDukvIZvcj3TLXWoTNaXmiChFvzMRxU00tRKCgSHH2GYqOznVIgcU4B5oZAdgor49vhwPoHsVI4sBUZPUfys0FBJpfyTYfAvrjkM6f6pt8UpDrl06zaUsednUdkYdC-gKP3l28RC3RujgVv6Z7E8Cs5EVIrTheajHhoOxgmnNFUglTLmF9MCVaxYR9JdX618VD_OStmB8LdsO'
      },
      {
        day: 6,
        title: 'Southern Coastlines & UNESCO Galle Dutch Fort',
        location: 'Mirissa • Galle',
        description: 'Drive along the golden southern coastline. Discover the colonial cobblestone streets, antique stores, lighthouse, and oceanfront ramparts of 17th-century Galle Fort.',
        highlights: ['Stilt fishermen watching in Weligama', 'Galle Fort ramparts sunset', 'Artisan boutiques & high tea'],
        meals: 'Breakfast & Dinner',
        stay: 'Le Grand Galle / Fort Bazaar',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLsPfwJYHdA74mSoohGhKtrmBeiJ38DY9w45NS0-u6ZT-NnytT80ZhUrJ4Kqw2oXrXuBalUiYKEH_h_OzdpODpT2R3lJ-SzCvbkFIGHENBZzteYGbkcZsEeqbuDvF6UCmpcUVAaiWvEbqcjVJxbyxmxLDBfgT2DrVizNp9CIqoboh-R9uREyWb7whZN3y_J4v_8Xec8KckHMKHlLx9upquC4TraQ9kJJvJhnvpSiYOR86ZLgOfIpsy6Czr0'
      },
      {
        day: 7,
        title: 'Colombo City Tour & Departure',
        location: 'Galle • Colombo • Airport',
        description: 'Enjoy a scenic highway drive to Colombo. Explore Independence Square, Gangaramaya Temple, and luxury shopping at Dutch Hospital before a smooth VIP transfer to Bandaranaike International Airport.',
        highlights: ['Colombo Dutch Hospital precinct', 'Gangaramaya Buddhist Temple', 'VIP departure farewell'],
        meals: 'Breakfast',
        stay: 'Departure Transfer',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX4JsNeCavGd36cncVRzIf5W5NpyGcSOuFMG4Aoyc12RVdShV7rM4jdfD18fYUlti0pmYntprBhM4eLAmHJq5JMqmYvaw5AiakOhi2bOXZnHBRFFPq6drar-6-gkMq7ZHGmRW8cA1_h37RdLpyG3jxGoKIZXV_OmAg5F1T6D8u3osmSG85eCrKuA2J0sjzR4cFSI3DktnSnVnDYJOH2c3SXGFJ5WsPUANfn3At1mX6DmgvwL9Obc0r'
      }
    ]
  },
  {
    id: 'wellness-ayurveda-retreat',
    title: '7-Day Wellness & Ayurveda Rejuvenation',
    tagline: 'Deep holistic detoxification, herbal therapies, and sunrise meditation in a mountain sanctuary',
    durationDays: 7,
    durationNights: 6,
    pricePerPersonUSD: 980,
    category: 'Wellness',
    route: 'Nuwara Eliya • Kandy • Central Highlands Sanctuary',
    coverImage: 'https://lh3.googleusercontent.com/aida/AP1WRLuWOquRX_y3A_Dz6hgq1WTBrA9oKoaMJGcRKraZ5tWHhBo-fpY0fPTeTZiUjop39EisuICmSFfK_Bx-Wm5b41SxjJG3s42T03j4dknkix3qSXfKm1GfeCsChLz9jENaG0ZDSOlPO7Fv-KsSLxvBcH01XLdakV3AX_N8JLfIkXBEFm7wy92IPRcNQZNPjVBTNLrow1ChLWoZ35X0TSiMaEtgw3MgUaSyPHaqb4Ckr85iNExa2dPpblGiBw',
    gallery: [
      'https://lh3.googleusercontent.com/aida/AP1WRLuWOquRX_y3A_Dz6hgq1WTBrA9oKoaMJGcRKraZ5tWHhBo-fpY0fPTeTZiUjop39EisuICmSFfK_Bx-Wm5b41SxjJG3s42T03j4dknkix3qSXfKm1GfeCsChLz9jENaG0ZDSOlPO7Fv-KsSLxvBcH01XLdakV3AX_N8JLfIkXBEFm7wy92IPRcNQZNPjVBTNLrow1ChLWoZ35X0TSiMaEtgw3MgUaSyPHaqb4Ckr85iNExa2dPpblGiBw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCp7uxweQcbMbhMOalHHY2SKlYPnFQOsiRTeWuWEq1EQG6cFwFWE-boGFO26X4ruSysg3sfUQx0cndu6eFe4lxZEtRW3I24dQ2J8ybWe5EjYZ-vOaVhU7YkwUcZGWFGdFuibqpCtYFq53c3tqu63ALTkrB_UIGKXAzx8qbyb4R_LQd5s1j_sqeuhzlsD17EL49HrV8bvPD7lr444E9LhCEK7oxYl3rHZTW3ZS1UiPgl8ihvKe4gZB9K',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqc5t6Y7NOyYWe7TvCcF8ga9DKcFpnEYcZeXUh7PwVFFx9luWDNJsjhdDQCaGB9XcHJj-RW2i_IQOTJ4cUixZDjAYZslk7SbimVyv3_xNjXjwCXGdqcI16Dy6cMM0ph9-CWIqx-68qwKha7dweazgCxJIZZ0XFT2AIkk1rkGI6190ODWmBHarzcLF8A9I6LmkX8-RhiPhoR1xbo2cwUIlL-2e6BiPZia0v0bp-lhZwftt7wAGg1CEQ'
    ],
    description: 'Restore vitality and quiet the mind through 3,000 years of traditional Ayurvedic science. Supervised by resident Ayurvedic doctors, with daily Shirodhara, herbal steam baths, organic Sattvic dining, and mountain yoga.',
    highlights: [
      'In-depth Dosha diagnosis by certified Ayurvedic doctor',
      'Daily 2-hour customized body massages & Shirodhara therapies',
      'Sunrise Hatha Yoga and guided evening mindfulness meditation',
      'Personalized organic Sattvic meals and herbal detox decoctions',
      'Herbal bath and floral cleansing ceremony overlooking tea hills'
    ],
    inclusions: [
      '6 nights in a dedicated luxury eco-wellness sanctuary',
      'All 3 daily Ayurvedic vegetarian/vegan organic meals tailored to your dosha',
      'Daily consultations with Resident Ayurvedic Doctor',
      'All prescribed treatments, warm herbal oils, and herbal medications',
      'Twice daily yoga & meditation sessions with certified instructors',
      'Chauffeured luxury hybrid transfers to and from Colombo/Kandy',
      'Complimentary linen retreat wardrobe and herbal gift set'
    ],
    exclusions: [
      'International flights & travel insurance',
      'Specialized deep medical procedures outside retreat scope',
      'Personal laundry & non-prescribed beverages'
    ],
    physicalRating: 'Easy',
    bestSeason: 'Year-round sanctuary climate',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Initial Ayurvedic Consultation',
        location: 'Central Highlands',
        description: 'Private transfer to our mountain wellness estate. Settle into your quiet pavilion and meet your resident Ayurvedic doctor for your comprehensive pulse and dosha diagnostic (Prakriti). Evening light Abhyanga oil massage.',
        highlights: ['Private arrival transfer', 'Doctor consultation', 'Abhyanga introductory therapy'],
        meals: 'Sattvic Dinner',
        stay: 'Santani Wellness Sanctuary / Heritance Ayurveda',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp7uxweQcbMbhMOalHHY2SKlYPnFQOsiRTeWuWEq1EQG6cFwFWE-boGFO26X4ruSysg3sfUQx0cndu6eFe4lxZEtRW3I24dQ2J8ybWe5EjYZ-vOaVhU7YkwUcZGWFGdFuibqpCtYFq53c3tqu63ALTkrB_UIGKXAzx8qbyb4R_LQd5s1j_sqeuhzlsD17EL49HrV8bvPD7lr444E9LhCEK7oxYl3rHZTW3ZS1UiPgl8ihvKe4gZB9K'
      },
      {
        day: 2,
        title: 'Cellular Detoxification & Forest Bathing',
        location: 'Central Highlands',
        description: 'Morning herbal detox tea followed by sunrise Pranayama breathing. Full body herbal steam bath and customized herbal paste application to open channels.',
        highlights: ['Sunrise yoga', 'Herbal steam therapy', 'Forest walking meditation'],
        meals: 'Organic Ayurvedic Trio',
        stay: 'Santani Wellness Sanctuary',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqc5t6Y7NOyYWe7TvCcF8ga9DKcFpnEYcZeXUh7PwVFFx9luWDNJsjhdDQCaGB9XcHJj-RW2i_IQOTJ4cUixZDjAYZslk7SbimVyv3_xNjXjwCXGdqcI16Dy6cMM0ph9-CWIqx-68qwKha7dweazgCxJIZZ0XFT2AIkk1rkGI6190ODWmBHarzcLF8A9I6LmkX8-RhiPhoR1xbo2cwUIlL-2e6BiPZia0v0bp-lhZwftt7wAGg1CEQ'
      },
      {
        day: 3,
        title: 'Shirodhara & Deep Mental Restoration',
        location: 'Central Highlands',
        description: 'Experience the renowned Shirodhara treatment: a warm stream of medicated herbal oil continuously poured over the third eye center to eliminate mental fatigue and stress.',
        highlights: ['60-minute Shirodhara', 'Sound bowl relaxation', 'Nutritional masterclass'],
        meals: 'Organic Ayurvedic Trio',
        stay: 'Santani Wellness Sanctuary',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLuWOquRX_y3A_Dz6hgq1WTBrA9oKoaMJGcRKraZ5tWHhBo-fpY0fPTeTZiUjop39EisuICmSFfK_Bx-Wm5b41SxjJG3s42T03j4dknkix3qSXfKm1GfeCsChLz9jENaG0ZDSOlPO7Fv-KsSLxvBcH01XLdakV3AX_N8JLfIkXBEFm7wy92IPRcNQZNPjVBTNLrow1ChLWoZ35X0TSiMaEtgw3MgUaSyPHaqb4Ckr85iNExa2dPpblGiBw'
      },
      {
        day: 4,
        title: 'Organic Herbal Medicine Garden Tour & Puvattu',
        location: 'Central Highlands',
        description: 'Walk with the master botanist through the retreat’s medicinal plants. Receive a traditional warm herbal pouch massage (Puvattu/Kizhi) to invigorate joints.',
        highlights: ['Medicinal plant foraging', 'Puvattu pouch therapy', 'Sunset Yin Yoga'],
        meals: 'Organic Ayurvedic Trio',
        stay: 'Santani Wellness Sanctuary',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXsjMB0yOLA9DOpUxuY90JRpZ_szM3vNkA-8hCdO6kvDRhi06UhKqSTkFQ7fmLOvEM_PvbXgoTN8mczKiT9Q7hHEDK1GhhwKOsij5JmGDWXh0rtolHBsYz_k1ZKfIltstrhiFN1cF26eviTqAd608fBvj6SWLIdT6rhClpWda9ySpEebGC5zNZbUwGIwc98fegN-7vJPN-1xrONQWybfQBeoDgA92sZD7YSx5WPYTU_GJDYOjddLEh'
      },
      {
        day: 5,
        title: 'Udvartana Scrub & Floral Rejuvenation Bath',
        location: 'Central Highlands',
        description: 'Exfoliating Udvartana dry herbal scrub for skin purification, followed by an open-air bath infused with wild jasmine and lotus petals.',
        highlights: ['Udvartana herbal scrub', 'Open-air floral water bath', 'Candlelit herbal elixir dinner'],
        meals: 'Organic Ayurvedic Trio',
        stay: 'Santani Wellness Sanctuary',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRxcdev8JT4oouWf7gHWQFM4I2E9q0b0VIA7t7je4nTRkYgml_G2GlS6A4DP14NzM83wFF1nxwDFxhHeCcJ5KvCykj6XKKBxvxD6WMyx6THchRxjX2Bte3tPlQrIKQXzCZ0jIYX7rmQQlB57OI9LVl6DXKA27YntUYogBQl1phSv-MboNHw_wXJR_iAAPT-REhu3SAbCEzKdnxV-n072zAPUrTcE8wqkDTYrGeC_oP_jGtIhcoUgm-'
      },
      {
        day: 6,
        title: 'Ayurvedic Culinary Cooking Class & Energy Balance',
        location: 'Central Highlands',
        description: 'Learn the six tastes (Shad Rasa) in cooking. Interactive culinary session with our Ayurvedic chef. Evening private sound bath ceremony.',
        highlights: ['Cooking masterclass with spices', 'Final full-body Marma massage', 'Traditional Sri Lankan high tea'],
        meals: 'Organic Ayurvedic Trio',
        stay: 'Santani Wellness Sanctuary',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTPqRlli42zDwrLG5-HDtPx-O-grhPWxHW-U72Dj0hUziDA_bl9BICz7rS4GRN0zQFrUiKYXKTB5UYay3rUxDR1dUYq55YL8AFB8BhWuxO6LggjDXWg9OqgLq0gPidw6Vd6uWGDf7B-IYlzQ2jFbfjKJeSj1UFBJi8i08ZIdRlYLioS9mpU3AgiqaatV7kRRPVzzDHSn4Sp_IOGaXcPVMVzGkzvtNRaNzkUcLDNATh-7N9_Q0kjh9j'
      },
      {
        day: 7,
        title: 'Physician Exit Assessment & Return Journey',
        location: 'Central Highlands • Colombo / Airport',
        description: 'Receive your personalized lifestyle & diet take-home manual from the doctor, along with a custom herbal tea and medicine kit. Private chauffeur transfer to your onward flight.',
        highlights: ['Doctor exit consultation', 'Custom herbal take-home pack', 'Departure transfer'],
        meals: 'Breakfast & Herbal Refreshments',
        stay: 'Departure Transfer',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjjudaLfQ5qYJzlczNSOg37i__t71D66w00P-OqZ3-itTNcUk-98p0oi104Z_IXbhicWnGZvGnrVJFT8epxjK3MUhjKOiESodoXwPHmD568Hkjv3YbsPiJswDteo_yS7rXDEyelfADpk2_iqdiJozIgZ3RXdFz2sE5kx4LJzbbl09TETYGofFySpR67GyY5dBNCXqR4QyYAvqUt1zgWKZ0R8gcKIcbJBdUFhthpm1qv5I-St22Txue'
      }
    ]
  },
  {
    id: 'northern-discovery-tour',
    title: 'Northern Discovery & Coastal Heritage',
    tagline: 'Uncover the vibrant Dravidian temples of Jaffna, untouched Nilaveli beaches, and ancient ruins',
    durationDays: 6,
    durationNights: 5,
    pricePerPersonUSD: 780,
    category: 'Heritage',
    route: 'Anuradhapura • Jaffna • Trincomalee • Nilaveli',
    coverImage: 'https://lh3.googleusercontent.com/aida/AP1WRLu2VC7xXMumXOOG3SpfDU3JH9CdwLljc8NnzF7oYodk0qUiVyeVy7z2b4lJi_NQw-iY5KLbMYGHt4rq3swU1hai4xyU-Gvpf7eoWj2jfW8WWyVXIFeojTHcTyrEizSVXMOMwcscWGvWSyoycutjTFGmLNSLAsc2kB26Rpwe2Cq_8-xh2cqzSn8DqdD3rW3KnyxUb-1OUO9g92P5d8e8JAImSoHD59SsDTOSOtVky2U80RxhS7oESAaP2Kw',
    gallery: [
      'https://lh3.googleusercontent.com/aida/AP1WRLu2VC7xXMumXOOG3SpfDU3JH9CdwLljc8NnzF7oYodk0qUiVyeVy7z2b4lJi_NQw-iY5KLbMYGHt4rq3swU1hai4xyU-Gvpf7eoWj2jfW8WWyVXIFeojTHcTyrEizSVXMOMwcscWGvWSyoycutjTFGmLNSLAsc2kB26Rpwe2Cq_8-xh2cqzSn8DqdD3rW3KnyxUb-1OUO9g92P5d8e8JAImSoHD59SsDTOSOtVky2U80RxhS7oESAaP2Kw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZnwZgFHUNg5pg92gQlLeRRbVKtxRN52BlJO5w1_8cekgHgKVGybFBCfrSraVNXRZSF1lb_IedBOt0iAiUSmy0P7hItpltS2u-FLq6u8MuE0vhG-mKE-mKBA8W7xqdWbragpJF_YIKXxVDy6UMqLHYDUruLsA7Cqqgs5IVFwd4sVN9rZiNj_TJOcUJcu6ru5D8y2cr4M8RFJDeaaV-zPKt42iVM1ptK1yXHqlAzQU5S28py-hviyzy',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCC2Ifd4QHj3yW6-PjplA0MzAFBMPUAMqqR9wRMUSjWm_fn7V0i9xt6j03ff1jTj4HNZQ7qSeQODNCOHAfWCbEfJegFl8y5TFlkYC9mvlIylnohbTUoY5zgRLQT3kFyOMoteUKe6xgfxr23uNfFGPI4EC1_HZcj-25XenV9hT_9nO6zFOP6NqICSDp1WtNTaQNQ2mf8JDvxJ6KKdRot_vlPcPhA8ANSQj5lcqsNCceyYFTLsKBQnk1f'
    ],
    description: 'Venture into the soul-stirring northern and eastern provinces. Marvel at the soaring golden gopurams of Nallur Kandaswamy Kovil in Jaffna, cruise to Nainativu Island, and relax on the white sands of Nilaveli.',
    highlights: [
      'Nallur Kandaswamy Kovil golden temple ceremony in Jaffna',
      'Boat excursion across Palk Strait to Nainativu Island',
      'Historical Jaffna Fort, Dutch Library, and authentic Jaffna crab curry feast',
      'Koneswaram Temple perched atop Swami Rock cliff in Trincomalee',
      'Snorkeling at Pigeon Island National Park'
    ],
    inclusions: [
      '5 nights luxury 4-star boutique hotel accommodation',
      'Breakfast and authentic regional dinners daily (including seafood specialties)',
      'Private air-conditioned vehicle with dedicated expert cultural chauffeur-guide',
      'All boat transfer fees to Nainativu & Pigeon Island',
      'All entry passes and temple donations',
      'Airport VIP pick-up and drop-off'
    ],
    exclusions: ['Snorkeling gear rental at Pigeon Island', 'Personal expenses', 'Tips'],
    physicalRating: 'Moderate',
    bestSeason: 'March to October (East & North dry season)',
    itinerary: [
      {
        day: 1,
        title: 'Sacred City of Anuradhapura & Journey North',
        location: 'Colombo • Anuradhapura • Jaffna',
        description: 'Morning departure north. Stop at the ancient capital of Anuradhapura to pay homage at the sacred Jaya Sri Maha Bodhi (the world\'s oldest historically recorded tree). Continue across Elephant Pass to Jaffna.',
        highlights: ['Anuradhapura stupas', 'Elephant Pass causeway', 'Welcome Jaffna dinner'],
        meals: 'Dinner',
        stay: 'Jetwing Jaffna / Fox Resort Jaffna',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC2Ifd4QHj3yW6-PjplA0MzAFBMPUAMqqR9wRMUSjWm_fn7V0i9xt6j03ff1jTj4HNZQ7qSeQODNCOHAfWCbEfJegFl8y5TFlkYC9mvlIylnohbTUoY5zgRLQT3kFyOMoteUKe6xgfxr23uNfFGPI4EC1_HZcj-25XenV9hT_9nO6zFOP6NqICSDp1WtNTaQNQ2mf8JDvxJ6KKdRot_vlPcPhA8ANSQj5lcqsNCceyYFTLsKBQnk1f'
      },
      {
        day: 2,
        title: 'Nallur Kovil Majesty & Jaffna Peninsula',
        location: 'Jaffna',
        description: 'Morning puja at Nallur Kandaswamy Kovil with its grand golden gopuram. Explore the star-shaped Dutch Jaffna Fort, Jaffna Public Library, and savor a traditional banana-leaf crab lunch.',
        highlights: ['Nallur Kandaswamy Kovil', 'Jaffna Fort', 'Rio Ice Cream & Jaffna market'],
        meals: 'Breakfast & Dinner',
        stay: 'Jetwing Jaffna',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLu2VC7xXMumXOOG3SpfDU3JH9CdwLljc8NnzF7oYodk0qUiVyeVy7z2b4lJi_NQw-iY5KLbMYGHt4rq3swU1hai4xyU-Gvpf7eoWj2jfW8WWyVXIFeojTHcTyrEizSVXMOMwcscWGvWSyoycutjTFGmLNSLAsc2kB26Rpwe2Cq_8-xh2cqzSn8DqdD3rW3KnyxUb-1OUO9g92P5d8e8JAImSoHD59SsDTOSOtVky2U80RxhS7oESAaP2Kw'
      },
      {
        day: 3,
        title: 'Island Boat Cruise to Nainativu & Delft Island',
        location: 'Jaffna Islands',
        description: 'Board a scenic ferry to Nainativu Island to visit the ancient Nagapooshani Amman Kovil and Nagadeepa Vihara, coexisting in peaceful harmony.',
        highlights: ['Island ferry crossing', 'Nagapooshani Kovil', 'Point Pedro northernmost tip'],
        meals: 'Breakfast & Dinner',
        stay: 'Jetwing Jaffna',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYgAvfh5YM6l7TFuQMXsm1A_-HO-QGhtp-dlGoAVsKjI8bD1_Llx9YzCMV3RWeS0vG27Q9Gn-oJ6-RPzDn6WZxTbmfXDR4CvNOLCLr-pVeL1IkUkGRZDn4f2Mhqfqda3Bthfh_XJIVuho0Cd1YTQnp9b5TJ6X4eCvnF7xVA4Rc-MP8hHjhlonOrJvcMGkzO0x6s4X2aP1VmjyyEFbBpBIp_9HDOHctkZUPLXHKyU-krGaDEnbIAGFl'
      },
      {
        day: 4,
        title: 'Scenic Eastern Coast Drive to Trincomalee',
        location: 'Jaffna • Trincomalee',
        description: 'Drive along the tranquil north-eastern coast to the natural harbour city of Trincomalee. Visit Fort Frederick and the sacred cliffside Koneswaram Temple overlooking the deep blue sea.',
        highlights: ['Swami Rock cliff', 'Koneswaram Temple', 'Deer wandering Fort Frederick'],
        meals: 'Breakfast & Dinner',
        stay: 'Trinco Blu by Cinnamon / Jungle Beach Resort',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZnwZgFHUNg5pg92gQlLeRRbVKtxRN52BlJO5w1_8cekgHgKVGybFBCfrSraVNXRZSF1lb_IedBOt0iAiUSmy0P7hItpltS2u-FLq6u8MuE0vhG-mKE-mKBA8W7xqdWbragpJF_YIKXxVDy6UMqLHYDUruLsA7Cqqgs5IVFwd4sVN9rZiNj_TJOcUJcu6ru5D8y2cr4M8RFJDeaaV-zPKt42iVM1ptK1yXHqlAzQU5S28py-hviyzy'
      },
      {
        day: 5,
        title: 'Pigeon Island Marine Sanctuary & Nilaveli Beach',
        location: 'Nilaveli • Pigeon Island',
        description: 'Morning boat excursion to Pigeon Island National Park for world-class snorkeling with sea turtles and harmless blacktip reef sharks. Afternoon relaxing on Nilaveli’s pristine white sand.',
        highlights: ['Pigeon Island snorkeling', 'Nilaveli turquoise beach', 'Beachfront sunset seafood dinner'],
        meals: 'Breakfast & Seafood Dinner',
        stay: 'Jungle Beach by Uga Escapes',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLsPfwJYHdA74mSoohGhKtrmBeiJ38DY9w45NS0-u6ZT-NnytT80ZhUrJ4Kqw2oXrXuBalUiYKEH_h_OzdpODpT2R3lJ-SzCvbkFIGHENBZzteYGbkcZsEeqbuDvF6UCmpcUVAaiWvEbqcjVJxbyxmxLDBfgT2DrVizNp9CIqoboh-R9uREyWb7whZN3y_J4v_8Xec8KckHMKHlLx9upquC4TraQ9kJJvJhnvpSiYOR86ZLgOfIpsy6Czr0'
      },
      {
        day: 6,
        title: 'Hot Springs of Kanniya & Return Transfer',
        location: 'Trincomalee • Colombo',
        description: 'Stop at the mysterious seven hot water wells of Kanniya before a comfortable highway transfer back to Colombo or Bandaranaike International Airport.',
        highlights: ['Kanniya Hot Springs', 'Scenic cross-country drive', 'Airport departure'],
        meals: 'Breakfast',
        stay: 'Departure Transfer',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjjudaLfQ5qYJzlczNSOg37i__t71D66w00P-OqZ3-itTNcUk-98p0oi104Z_IXbhicWnGZvGnrVJFT8epxjK3MUhjKOiESodoXwPHmD568Hkjv3YbsPiJswDteo_yS7rXDEyelfADpk2_iqdiJozIgZ3RXdFz2sE5kx4LJzbbl09TETYGofFySpR67GyY5dBNCXqR4QyYAvqUt1zgWKZ0R8gcKIcbJBdUFhthpm1qv5I-St22Txue'
      }
    ]
  },
  {
    id: 'hill-country-adventure',
    title: 'Hill Country Adventure: Misty Peaks & Emerald Valleys',
    tagline: '5-day trek through high tea plantations, Horton Plains World\'s End, and colonial bungalows',
    durationDays: 5,
    durationNights: 4,
    pricePerPersonUSD: 690,
    category: 'Adventure',
    route: 'Kandy • Nuwara Eliya • Horton Plains • Ella',
    coverImage: 'https://lh3.googleusercontent.com/aida/AP1WRLuWOquRX_y3A_Dz6hgq1WTBrA9oKoaMJGcRKraZ5tWHhBo-fpY0fPTeTZiUjop39EisuICmSFfK_Bx-Wm5b41SxjJG3s42T03j4dknkix3qSXfKm1GfeCsChLz9jENaG0ZDSOlPO7Fv-KsSLxvBcH01XLdakV3AX_N8JLfIkXBEFm7wy92IPRcNQZNPjVBTNLrow1ChLWoZ35X0TSiMaEtgw3MgUaSyPHaqb4Ckr85iNExa2dPpblGiBw',
    gallery: [
      'https://lh3.googleusercontent.com/aida/AP1WRLuWOquRX_y3A_Dz6hgq1WTBrA9oKoaMJGcRKraZ5tWHhBo-fpY0fPTeTZiUjop39EisuICmSFfK_Bx-Wm5b41SxjJG3s42T03j4dknkix3qSXfKm1GfeCsChLz9jENaG0ZDSOlPO7Fv-KsSLxvBcH01XLdakV3AX_N8JLfIkXBEFm7wy92IPRcNQZNPjVBTNLrow1ChLWoZ35X0TSiMaEtgw3MgUaSyPHaqb4Ckr85iNExa2dPpblGiBw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-datpaWoSHG_r-yZrIvH5Sm00FkoFDfGk6o4mnIjOlfPq0B8SOVy_YSbcKS6wKnjBD3asA6kG3tikRfN5yrZOsifA3ziXiZ29o0UVN2vYi8PMbqAzRHw6rSeZIe9JXrp1mek_8JOOZ40V4VJu7dpc3m0Idj1LWFj88BPMYv_jCI6urN9CKRbzVcTsk_MoRQWG8QGPvTLe29ifGR24tQ5UDCU8xC7Ofw8-KCAGWK33TSx5INOD1Gir',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBT0lwcBgQVU7kzBKbfPryzprDOh5uNOs_APTTE1lm4hoIPMorE3GSgBKVfJdmxoLXRJ7SO3ojfz3LCP0FBJG39fPNb-MhIPVSooUUalQGijulPyFzpb2xsntujvZrqGvLPMT8dBzqxpc9dagSDww-3Kr4ubO57k0yxq9JDTjZfYaIbQcdy-isB_3GG5diGwZi0fuYoqOvVPvb-3kg5BCdfmJWVi1SoCQgS_HnQbNZBCINSx5pRU06e'
    ],
    description: 'Immerse in the cool climate of Little England and the dramatic cliffs of the central highlands. Trek to World\'s End, ride the iconic blue mountain train, and hike through tea carpeted hills.',
    highlights: [
      'Horton Plains National Park trek to the 870-meter sheer drop of World\'s End',
      'Scenic First Class train ticket between Kandy and Nanu Oya',
      'High tea at the historic 1891 Grand Hotel Nuwara Eliya',
      'Private guided tour of Pedro Tea Estate with master tea plucker',
      'Hike to Ella Rock and Baker\'s Falls'
    ],
    inclusions: [
      '4 nights in luxury colonial heritage hotels & hill lodges',
      'Daily mountain breakfast and 4-course dinners',
      'Chauffeured luxury A/C vehicle throughout',
      'Scenic train tickets (1st class reserved)',
      'Horton Plains entrance pass and trekking tracker guide'
    ],
    exclusions: ['International flights', 'Lunches and drinks', 'Gratuities'],
    physicalRating: 'Active',
    bestSeason: 'December to May',
    itinerary: [
      {
        day: 1,
        title: 'Kandy Royal Botanic Gardens & Tooth Temple',
        location: 'Kandy',
        description: 'Arrive in Kandy. Stroll through the lush Peradeniya Royal Botanical Gardens featuring over 4,000 plant species and ancient orchid houses.',
        highlights: ['Peradeniya Botanical Gardens', 'Kandy Tooth Relic Temple', 'Highland welcome dinner'],
        meals: 'Dinner',
        stay: 'The Grand Kandyan',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXsjMB0yOLA9DOpUxuY90JRpZ_szM3vNkA-8hCdO6kvDRhi06UhKqSTkFQ7fmLOvEM_PvbXgoTN8mczKiT9Q7hHEDK1GhhwKOsij5JmGDWXh0rtolHBsYz_k1ZKfIltstrhiFN1cF26eviTqAd608fBvj6SWLIdT6rhClpWda9ySpEebGC5zNZbUwGIwc98fegN-7vJPN-1xrONQWybfQBeoDgA92sZD7YSx5WPYTU_GJDYOjddLEh'
      },
      {
        day: 2,
        title: 'Scenic Highland Train to Nuwara Eliya',
        location: 'Nuwara Eliya',
        description: 'Board the iconic train ascending past cascading waterfalls into Nuwara Eliya. Visit an artisan tea factory, taste rare white tea, and stroll Gregory Lake.',
        highlights: ['Scenic blue mountain train', 'Pedro Tea Estate tour', 'High tea at The Grand Hotel'],
        meals: 'Breakfast & Dinner',
        stay: 'The Grand Hotel Nuwara Eliya / Heritance Tea Factory',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLuWOquRX_y3A_Dz6hgq1WTBrA9oKoaMJGcRKraZ5tWHhBo-fpY0fPTeTZiUjop39EisuICmSFfK_Bx-Wm5b41SxjJG3s42T03j4dknkix3qSXfKm1GfeCsChLz9jENaG0ZDSOlPO7Fv-KsSLxvBcH01XLdakV3AX_N8JLfIkXBEFm7wy92IPRcNQZNPjVBTNLrow1ChLWoZ35X0TSiMaEtgw3MgUaSyPHaqb4Ckr85iNExa2dPpblGiBw'
      },
      {
        day: 3,
        title: 'Horton Plains & World\'s End Precipice',
        location: 'Horton Plains',
        description: 'Dawn trek through the mist-shrouded cloud forest plateau of Horton Plains. Stand at the edge of World’s End cliff overlooking the Southern plains.',
        highlights: ['World\'s End 870m cliff view', 'Baker\'s Falls waterfall', 'Rare cloud forest wildlife'],
        meals: 'Breakfast & Dinner',
        stay: 'The Grand Hotel Nuwara Eliya',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT0lwcBgQVU7kzBKbfPryzprDOh5uNOs_APTTE1lm4hoIPMorE3GSgBKVfJdmxoLXRJ7SO3ojfz3LCP0FBJG39fPNb-MhIPVSooUUalQGijulPyFzpb2xsntujvZrqGvLPMT8dBzqxpc9dagSDww-3Kr4ubO57k0yxq9JDTjZfYaIbQcdy-isB_3GG5diGwZi0fuYoqOvVPvb-3kg5BCdfmJWVi1SoCQgS_HnQbNZBCINSx5pRU06e'
      },
      {
        day: 4,
        title: 'Ella Gap, Little Adam\'s Peak & Nine Arches',
        location: 'Ella',
        description: 'Drive down to Ella. Hike Little Adam\'s Peak in time for golden hour and photograph the colonial Nine Arches Viaduct.',
        highlights: ['Little Adam\'s Peak trail', 'Nine Arches viaduct', 'Café chill in Ella village'],
        meals: 'Breakfast & Dinner',
        stay: '98 Acres Resort & Spa',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-datpaWoSHG_r-yZrIvH5Sm00FkoFDfGk6o4mnIjOlfPq0B8SOVy_YSbcKS6wKnjBD3asA6kG3tikRfN5yrZOsifA3ziXiZ29o0UVN2vYi8PMbqAzRHw6rSeZIe9JXrp1mek_8JOOZ40V4VJu7dpc3m0Idj1LWFj88BPMYv_jCI6urN9CKRbzVcTsk_MoRQWG8QGPvTLe29ifGR24tQ5UDCU8xC7Ofw8-KCAGWK33TSx5INOD1Gir'
      },
      {
        day: 5,
        title: 'Ravana Falls & Departure Transfer',
        location: 'Ella • Colombo / South Coast',
        description: 'Admire the rushing cascades of Ravana Falls before a private scenic return transfer to Colombo Airport or your chosen southern beach resort.',
        highlights: ['Ravana Falls photo stop', 'Scenic descent to coast', 'Departure transfer'],
        meals: 'Breakfast',
        stay: 'Departure Transfer',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjjudaLfQ5qYJzlczNSOg37i__t71D66w00P-OqZ3-itTNcUk-98p0oi104Z_IXbhicWnGZvGnrVJFT8epxjK3MUhjKOiESodoXwPHmD568Hkjv3YbsPiJswDteo_yS7rXDEyelfADpk2_iqdiJozIgZ3RXdFz2sE5kx4LJzbbl09TETYGofFySpR67GyY5dBNCXqR4QyYAvqUt1zgWKZ0R8gcKIcbJBdUFhthpm1qv5I-St22Txue'
      }
    ]
  },
  {
    id: 'beach-paradise-tour',
    title: 'Beach Paradise & Coral Coast Tour',
    tagline: '5 days of crystal clear waters, whale watching in Mirissa, and Galle Fort sunset dining',
    durationDays: 5,
    durationNights: 4,
    pricePerPersonUSD: 650,
    category: 'Coastal',
    route: 'Bentota • Mirissa • Galle • Unawatuna',
    coverImage: 'https://lh3.googleusercontent.com/aida/AP1WRLsPfwJYHdA74mSoohGhKtrmBeiJ38DY9w45NS0-u6ZT-NnytT80ZhUrJ4Kqw2oXrXuBalUiYKEH_h_OzdpODpT2R3lJ-SzCvbkFIGHENBZzteYGbkcZsEeqbuDvF6UCmpcUVAaiWvEbqcjVJxbyxmxLDBfgT2DrVizNp9CIqoboh-R9uREyWb7whZN3y_J4v_8Xec8KckHMKHlLx9upquC4TraQ9kJJvJhnvpSiYOR86ZLgOfIpsy6Czr0',
    gallery: [
      'https://lh3.googleusercontent.com/aida/AP1WRLsPfwJYHdA74mSoohGhKtrmBeiJ38DY9w45NS0-u6ZT-NnytT80ZhUrJ4Kqw2oXrXuBalUiYKEH_h_OzdpODpT2R3lJ-SzCvbkFIGHENBZzteYGbkcZsEeqbuDvF6UCmpcUVAaiWvEbqcjVJxbyxmxLDBfgT2DrVizNp9CIqoboh-R9uREyWb7whZN3y_J4v_8Xec8KckHMKHlLx9upquC4TraQ9kJJvJhnvpSiYOR86ZLgOfIpsy6Czr0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOqRE8jIPz-cvGDM5ZzSxYtCWFb7G3WgIrQE7A0iCd9rmPPuwhSfHd7KLlxhkivPIQTLQ3Bg19eeCijvXQlgJYltgzKk1thJQMz57R9cx2kuaFFOKWn5A-VE_iv3p84MkUt5koaKuYSnXogLOndk5OFBTBk50IpjJ--CHqvoTxG6z-AaBVMdUdS_bKNQVtq5jqVJHV3Az0Dd6gkiR5pDY7M11CnZnjKHR1YG-kPzYKLyitB0zWnsNb'
    ],
    description: 'Golden beaches, swaying coconut palms, azure Indian Ocean waves, and oceanfront candlelit dining. Includes private whale watching catamaran cruise, turtle conservation sanctuary, and Madu River boat safari.',
    highlights: [
      'Private catamaran cruise to spot blue whales and spinner dolphins in Mirissa',
      'Madu River mangrove boat safari visiting cinnamon islands',
      'Kosgoda Sea Turtle Conservation project release',
      'Sunset cocktail on the ramparts of UNESCO Galle Dutch Fort',
      'Relaxation on palm-lined pristine Mirissa & Bentota beaches'
    ],
    inclusions: [
      '4 nights in 5-star beachfront boutique resort',
      'Daily tropical breakfast & oceanfront dinners',
      'Private air-conditioned chauffeur-driven transport',
      'Whale watching cruise & Madu River boat tour passes',
      'Sea turtle hatchery entry'
    ],
    exclusions: ['Water sports rentals (Jet Ski, surfing lessons)', 'Lunches & drinks'],
    physicalRating: 'Easy',
    bestSeason: 'November to April',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Bentota Coastal Bliss',
        location: 'Bentota',
        description: 'Direct VIP transfer from airport to your beachfront oasis in Bentota. Afternoon at leisure on the wide golden sands.',
        highlights: ['Beachfront check-in', 'Sunset King Coconut', 'Welcome seafood dinner'],
        meals: 'Dinner',
        stay: 'Taj Bentota Resort & Spa / Cinnamon Bentota Beach',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLsPfwJYHdA74mSoohGhKtrmBeiJ38DY9w45NS0-u6ZT-NnytT80ZhUrJ4Kqw2oXrXuBalUiYKEH_h_OzdpODpT2R3lJ-SzCvbkFIGHENBZzteYGbkcZsEeqbuDvF6UCmpcUVAaiWvEbqcjVJxbyxmxLDBfgT2DrVizNp9CIqoboh-R9uREyWb7whZN3y_J4v_8Xec8KckHMKHlLx9upquC4TraQ9kJJvJhnvpSiYOR86ZLgOfIpsy6Czr0'
      },
      {
        day: 2,
        title: 'Madu Ganga Safari & Turtle Sanctuary',
        location: 'Bentota • Balapitiya',
        description: 'Glide through mangrove tunnels on a private boat safari along Madu River. Visit Cinnamon Island and release baby sea turtles at the Kosgoda conservation project.',
        highlights: ['Madu River mangrove safari', 'Cinnamon peeling demonstration', 'Kosgoda Turtle Conservation'],
        meals: 'Breakfast & Dinner',
        stay: 'Taj Bentota Resort & Spa',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPvTwkBRxogzFyLOuAhbUDgaDDOtIwfZPBHSQ40MXgUYMQNuHkBiHw6JLkEI3dI0tFtUgmHMQ-sUxlUN1RCvMdbF4aFJ6bNDQdS6LA3zlCSYYaMYecVE7Z9NK7Cylv2uA8y3bMXNYcmbU7SnPxA4rn7LIGb8JUy9CLWu5eGfQutNHPXjxbzWiddVlxTzi4-1yNGlOZKpCkUxo4VmgpRmBSrCv8_AIY2zOTGwBs6KVlen9Ay4_logLZ'
      },
      {
        day: 3,
        title: 'Whale Watching in Mirissa & Secret Beach',
        location: 'Mirissa',
        description: 'Early morning catamaran cruise into the deep blue Indian Ocean to watch magnificent Blue Whales and playful spinner dolphins. Relax on Mirissa’s Secret Beach.',
        highlights: ['Blue Whale spotting', 'Dolphin pods', 'Secret Beach coconut grove'],
        meals: 'Breakfast & Dinner',
        stay: 'Weligama Bay Marriott Resort & Spa',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOqRE8jIPz-cvGDM5ZzSxYtCWFb7G3WgIrQE7A0iCd9rmPPuwhSfHd7KLlxhkivPIQTLQ3Bg19eeCijvXQlgJYltgzKk1thJQMz57R9cx2kuaFFOKWn5A-VE_iv3p84MkUt5koaKuYSnXogLOndk5OFBTBk50IpjJ--CHqvoTxG6z-AaBVMdUdS_bKNQVtq5jqVJHV3Az0Dd6gkiR5pDY7M11CnZnjKHR1YG-kPzYKLyitB0zWnsNb'
      },
      {
        day: 4,
        title: 'Galle Fort Heritage & Beachfront Candlelight',
        location: 'Galle • Unawatuna',
        description: 'Spend the afternoon walking the 17th-century ramparts of Galle Fort. Enjoy artisan gelato, jewelry boutiques, and a romantic private candlelit dinner right on the sand.',
        highlights: ['UNESCO Galle Fort', 'Lighthouse & ramparts', 'Beach candlelit dinner'],
        meals: 'Breakfast & Special Dinner',
        stay: 'Weligama Bay Marriott Resort & Spa',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOqRE8jIPz-cvGDM5ZzSxYtCWFb7G3WgIrQE7A0iCd9rmPPuwhSfHd7KLlxhkivPIQTLQ3Bg19eeCijvXQlgJYltgzKk1thJQMz57R9cx2kuaFFOKWn5A-VE_iv3p84MkUt5koaKuYSnXogLOndk5OFBTBk50IpjJ--CHqvoTxG6z-AaBVMdUdS_bKNQVtq5jqVJHV3Az0Dd6gkiR5pDY7M11CnZnjKHR1YG-kPzYKLyitB0zWnsNb'
      },
      {
        day: 5,
        title: 'Coastal Farewell & Airport Transfer',
        location: 'Galle • Colombo Airport',
        description: 'Final morning swim in the warm turquoise ocean followed by a direct luxury highway transfer to Bandaranaike International Airport.',
        highlights: ['Morning beach relaxation', 'Southern expressway transfer', 'Departure'],
        meals: 'Breakfast',
        stay: 'Departure Transfer',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLsPfwJYHdA74mSoohGhKtrmBeiJ38DY9w45NS0-u6ZT-NnytT80ZhUrJ4Kqw2oXrXuBalUiYKEH_h_OzdpODpT2R3lJ-SzCvbkFIGHENBZzteYGbkcZsEeqbuDvF6UCmpcUVAaiWvEbqcjVJxbyxmxLDBfgT2DrVizNp9CIqoboh-R9uREyWb7whZN3y_J4v_8Xec8KckHMKHlLx9upquC4TraQ9kJJvJhnvpSiYOR86ZLgOfIpsy6Czr0'
      }
    ]
  },
  {
    id: 'wildlife-safari-experience',
    title: '4-Day Big Game Wildlife Safari',
    tagline: 'Track leopards, Asian elephants, sloth bears, and endemic birds in Sri Lanka\'s premier national parks',
    durationDays: 4,
    durationNights: 3,
    pricePerPersonUSD: 550,
    category: 'Wildlife',
    route: 'Yala • Udawalawe • Minneriya',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbHiNSUs7CNHBr1xuo0D2TBdvD9eVBXtYUBLZOmGUDukvIZvcj3TLXWoTNaXmiChFvzMRxU00tRKCgSHH2GYqOznVIgcU4B5oZAdgor49vhwPoHsVI4sBUZPUfys0FBJpfyTYfAvrjkM6f6pt8UpDrl06zaUsednUdkYdC-gKP3l28RC3RujgVv6Z7E8Cs5EVIrTheajHhoOxgmnNFUglTLmF9MCVaxYR9JdX618VD_OStmB8LdsO',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbHiNSUs7CNHBr1xuo0D2TBdvD9eVBXtYUBLZOmGUDukvIZvcj3TLXWoTNaXmiChFvzMRxU00tRKCgSHH2GYqOznVIgcU4B5oZAdgor49vhwPoHsVI4sBUZPUfys0FBJpfyTYfAvrjkM6f6pt8UpDrl06zaUsednUdkYdC-gKP3l28RC3RujgVv6Z7E8Cs5EVIrTheajHhoOxgmnNFUglTLmF9MCVaxYR9JdX618VD_OStmB8LdsO',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPvTwkBRxogzFyLOuAhbUDgaDDOtIwfZPBHSQ40MXgUYMQNuHkBiHw6JLkEI3dI0tFtUgmHMQ-sUxlUN1RCvMdbF4aFJ6bNDQdS6LA3zlCSYYaMYecVE7Z9NK7Cylv2uA8y3bMXNYcmbU7SnPxA4rn7LIGb8JUy9CLWu5eGfQutNHPXjxbzWiddVlxTzi4-1yNGlOZKpCkUxo4VmgpRmBSrCv8_AIY2zOTGwBs6KVlen9Ay4_logLZ'
    ],
    description: 'An exhilarating wilderness expedition designed for nature photographers and wildlife enthusiasts. Venture into Yala for elusive leopards and Udawalawe for large herds of elephants, staying in luxury safari glamping tents.',
    highlights: [
      '2 private 4x4 game drives in Yala National Park (dawn & dusk)',
      'Udawalawe Elephant Transit Home rehabilitation center visit',
      'Luxury safari tented camp with campfire dinner under the stars',
      'Expert naturalist wildlife tracker with binoculars provided'
    ],
    inclusions: [
      '3 nights in luxury safari camp / wilderness lodge',
      'All meals including campfire bush barbecues',
      'Modified open-top 4x4 safari vehicles with experienced tracker',
      'All national park conservation permits and tracker tips'
    ],
    exclusions: ['International flights', 'Alcoholic drinks outside camp inclusions'],
    physicalRating: 'Moderate',
    bestSeason: 'February to October',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Transfer to Udawalawe Sanctuary',
        location: 'Udawalawe',
        description: 'Chauffeured drive to the southern wilderness. Visit the Elephant Transit Home to watch rehabilitated baby elephant feedings. Evening safari in Udawalawe National Park.',
        highlights: ['Baby elephant feeding', 'Udawalawe elephant safari', 'Campfire dinner'],
        meals: 'Dinner',
        stay: 'Grand Udawalawe Safari Resort / Mahoora Safari Camp',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPvTwkBRxogzFyLOuAhbUDgaDDOtIwfZPBHSQ40MXgUYMQNuHkBiHw6JLkEI3dI0tFtUgmHMQ-sUxlUN1RCvMdbF4aFJ6bNDQdS6LA3zlCSYYaMYecVE7Z9NK7Cylv2uA8y3bMXNYcmbU7SnPxA4rn7LIGb8JUy9CLWu5eGfQutNHPXjxbzWiddVlxTzi4-1yNGlOZKpCkUxo4VmgpRmBSrCv8_AIY2zOTGwBs6KVlen9Ay4_logLZ'
      },
      {
        day: 2,
        title: 'Yala National Park Afternoon Safari',
        location: 'Yala',
        description: 'Transfer to Yala. Settle into your luxury safari lodge. Afternoon game drive in Block 1 of Yala National Park, tracking Sri Lankan leopards (Panthera pardus kotiya).',
        highlights: ['Yala Block 1 Game Drive', 'Leopard territory tracking', 'Sunset over jungle reservoir'],
        meals: 'Breakfast & Bush Dinner',
        stay: 'Cinnamon Wild Yala / Jetwing Yala',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbHiNSUs7CNHBr1xuo0D2TBdvD9eVBXtYUBLZOmGUDukvIZvcj3TLXWoTNaXmiChFvzMRxU00tRKCgSHH2GYqOznVIgcU4B5oZAdgor49vhwPoHsVI4sBUZPUfys0FBJpfyTYfAvrjkM6f6pt8UpDrl06zaUsednUdkYdC-gKP3l28RC3RujgVv6Z7E8Cs5EVIrTheajHhoOxgmnNFUglTLmF9MCVaxYR9JdX618VD_OStmB8LdsO'
      },
      {
        day: 3,
        title: 'Dawn Safari & Bundala Wetland Bird Sanctuary',
        location: 'Yala • Bundala',
        description: 'Early morning dawn game drive in Yala when wildlife is most active. In the afternoon, visit UNESCO Bundala Wetland, a paradise of flamingos, painted storks, and migratory waterfowl.',
        highlights: ['Dawn predator safari', 'Bundala flamingo sanctuary', 'Night jungle sounds relaxation'],
        meals: 'Breakfast & Dinner',
        stay: 'Cinnamon Wild Yala',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbHiNSUs7CNHBr1xuo0D2TBdvD9eVBXtYUBLZOmGUDukvIZvcj3TLXWoTNaXmiChFvzMRxU00tRKCgSHH2GYqOznVIgcU4B5oZAdgor49vhwPoHsVI4sBUZPUfys0FBJpfyTYfAvrjkM6f6pt8UpDrl06zaUsednUdkYdC-gKP3l28RC3RujgVv6Z7E8Cs5EVIrTheajHhoOxgmnNFUglTLmF9MCVaxYR9JdX618VD_OStmB8LdsO'
      },
      {
        day: 4,
        title: 'Scenic Return Transfer',
        location: 'Yala • Colombo / Airport',
        description: 'Relaxed breakfast listening to the calls of the wild. Chauffeur transfer along the southern expressway to Colombo or airport.',
        highlights: ['Morning camp breakfast', 'Scenic return drive', 'Departure transfer'],
        meals: 'Breakfast',
        stay: 'Departure Transfer',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjjudaLfQ5qYJzlczNSOg37i__t71D66w00P-OqZ3-itTNcUk-98p0oi104Z_IXbhicWnGZvGnrVJFT8epxjK3MUhjKOiESodoXwPHmD568Hkjv3YbsPiJswDteo_yS7rXDEyelfADpk2_iqdiJozIgZ3RXdFz2sE5kx4LJzbbl09TETYGofFySpR67GyY5dBNCXqR4QyYAvqUt1zgWKZ0R8gcKIcbJBdUFhthpm1qv5I-St22Txue'
      }
    ]
  }
];
