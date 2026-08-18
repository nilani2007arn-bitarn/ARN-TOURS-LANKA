export interface ConciergeService {
  id: string;
  title: string;
  category: 'Transport' | 'Planning' | 'VIP Ground' | 'Specialty';
  icon: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  image: string;
}

export const SERVICES_DATA: ConciergeService[] = [
  {
    id: 'bespoke-planning',
    title: 'Bespoke Itinerary Planning',
    category: 'Planning',
    icon: 'MapPin',
    shortDesc: 'Custom-crafted journeys designed by veteran local concierges to match your distinct rhythm and passions.',
    fullDesc: 'No cookie-cutter templates. We collaborate one-on-one with you to design a seamless trip tailored to your preferred pace, accommodation tier, culinary preferences, and special interests.',
    features: [
      'Dedicated personal concierge matched to your travel profile',
      'Exclusive private access to closed heritage hours and private estates',
      'Flexible on-the-fly daily schedule adjustments',
      'Full digital & luxury printed itinerary binder with regional guides'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbgISYDIvuT8Z4s9LuEGkk5riD1IfDkz12akhI_AUWb0bSJjcITfjfA1588JC-hgpOYmWDB41MSDhlAXUwxtyLmtZwObFmcgQW5ARGZiQ27TRVjsLZbCvqQe052reP98Z6BywZz8w053CV9mjiNNcBhIFQAbKRj1vnuzO7KSvzIfR4R-_FU63ZOGRttSjtXpVnboA2Ej6uTDy7smNG0aTNb39_7Fs02FGrwXPwTd__ZpGMxq32AmNc'
  },
  {
    id: 'luxury-fleet',
    title: 'Private Chauffeur & Luxury Fleet',
    category: 'Transport',
    icon: 'Car',
    shortDesc: 'Premium climate-controlled sedans, executive vans, and private train carriages driven by elite English-speaking chauffeur-guides.',
    fullDesc: 'Our spotless fleet consists of Mercedes-Benz sedans, Toyota Alphard & KDH VIP luxury vans, open-top safari cruisers, and reserved 1st Class train observation tickets.',
    features: [
      'Licensed Tourist Chauffeur-Guides with defensive driving certification',
      'Complimentary on-board high-speed 5G Wi-Fi, chilled water & fresh towels',
      'Full comprehensive passenger liability insurance coverage',
      'Child safety seats and accessibility equipment available upon request'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBcWY-TC02Vpl7i3mmc8F2_g7Ou_2owxF6NTipDcre_wt00xycQ5OWugACQt0GsnIRjvAK8Qlv7sjlFSPrfNLtfg3oD1ygs_x0FpMf9UGgukfumb4Lx5t4i9bmsVx80k1M4_0Hw-HTqOvP12nFe1RslQ2wXcfnVCt3B3SzSxcPAA2ogodRpLs5BZEHp5p39qDO48Wd6twqupW_jtKCdrQVwiiZ5yv0HILuNmrxuwNFkMwctCmPu_Vs'
  },
  {
    id: 'vip-airport-meet',
    title: 'VIP Airport Meet & Fast-Track',
    category: 'VIP Ground',
    icon: 'Plane',
    shortDesc: 'Bypass long arrival queues with personalized airbridge escort, baggage assistance, and welcome amenities.',
    fullDesc: 'From the moment you step off your international flight at Colombo (CMB), our airport executive meets you with personalized signage, handles luggage, provides activated local SIM data cards, and escorts you to your chauffeur.',
    features: [
      'Personal greeting at the arrival terminal',
      'Local 4G/5G Tourist SIM card with unlimited data pre-activated',
      'Curated welcome package with Ceylon spice treats & fresh King Coconut',
      'Silk cold towels and floral frangipani garland greeting'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjjudaLfQ5qYJzlczNSOg37i__t71D66w00P-OqZ3-itTNcUk-98p0oi104Z_IXbhicWnGZvGnrVJFT8epxjK3MUhjKOiESodoXwPHmD568Hkjv3YbsPiJswDteo_yS7rXDEyelfADpk2_iqdiJozIgZ3RXdFz2sE5kx4LJzbbl09TETYGofFySpR67GyY5dBNCXqR4QyYAvqUt1zgWKZ0R8gcKIcbJBdUFhthpm1qv5I-St22Txue'
  },
  {
    id: 'specialty-honeymoon-wellness',
    title: 'Honeymoon, Wellness & Executive Retreats',
    category: 'Specialty',
    icon: 'HeartHandshake',
    shortDesc: 'Intimate beachfront candlelight dining, couple ayurvedic spas, and private corporate executive offsites.',
    fullDesc: 'Whether curating romantic candlelit beach dinners by the gentle waves of Mirissa, secluded colonial tea bungalow buyouts, or corporate team retreats overlooking panoramic jungle valleys.',
    features: [
      'Private chef table experiences and champagne high teas',
      'Bespoke photography and drone videography sessions',
      'Exclusive booking of boutique 6-room tea villas and private islands',
      'Corporate conference setup with audio-visual equipment and private shuttles'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOqRE8jIPz-cvGDM5ZzSxYtCWFb7G3WgIrQE7A0iCd9rmPPuwhSfHd7KLlxhkivPIQTLQ3Bg19eeCijvXQlgJYltgzKk1thJQMz57R9cx2kuaFFOKWn5A-VE_iv3p84MkUt5koaKuYSnXogLOndk5OFBTBk50IpjJ--CHqvoTxG6z-AaBVMdUdS_bKNQVtq5jqVJHV3Az0Dd6gkiR5pDY7M11CnZnjKHR1YG-kPzYKLyitB0zWnsNb'
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'Heritage' | 'Highlands' | 'Coastal' | 'Wildlife' | 'Culture';
  image: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sigiriya Ancient Rock Fortress',
    location: 'Sigiriya, Cultural Triangle',
    category: 'Heritage',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsYsVVCjrdGAwwWG2W1LeRZHOd_-gLryjAz4p2AIoxNuhGhO-zo9Fh6n36hVLpTnF99466vPZV8HQ-GOi3RItfGDeq3X-Z3CtbFDQLfI8YrS69coQsFfIgtOxwMcobR8W4pJpxvR60Dh1jLDjBFzCRSgQgAYqhDQIkQ6a8wwP4GYAaFKVOaaGDtr2j9i7fTjCz9SPMvh08GihDSxMboUVj5KNDSt0RDNJZns2j07q89dMPwVrS51OcOWaA',
    caption: 'The majestic 5th-century palace citadel rising 200m above the jungle canopy.'
  },
  {
    id: 'gal-2',
    title: 'Nuwara Eliya Rolling Tea Terraces',
    location: 'Nuwara Eliya, Central Highlands',
    category: 'Highlands',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuWOquRX_y3A_Dz6hgq1WTBrA9oKoaMJGcRKraZ5tWHhBo-fpY0fPTeTZiUjop39EisuICmSFfK_Bx-Wm5b41SxjJG3s42T03j4dknkix3qSXfKm1GfeCsChLz9jENaG0ZDSOlPO7Fv-KsSLxvBcH01XLdakV3AX_N8JLfIkXBEFm7wy92IPRcNQZNPjVBTNLrow1ChLWoZ35X0TSiMaEtgw3MgUaSyPHaqb4Ckr85iNExa2dPpblGiBw',
    caption: 'Vibrant green emerald hills shrouded in morning mist where world-renowned Ceylon tea is harvested.'
  },
  {
    id: 'gal-3',
    title: 'Southern Turquoise Coastline',
    location: 'Mirissa & Tangalle',
    category: 'Coastal',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsPfwJYHdA74mSoohGhKtrmBeiJ38DY9w45NS0-u6ZT-NnytT80ZhUrJ4Kqw2oXrXuBalUiYKEH_h_OzdpODpT2R3lJ-SzCvbkFIGHENBZzteYGbkcZsEeqbuDvF6UCmpcUVAaiWvEbqcjVJxbyxmxLDBfgT2DrVizNp9CIqoboh-R9uREyWb7whZN3y_J4v_8Xec8KckHMKHlLx9upquC4TraQ9kJJvJhnvpSiYOR86ZLgOfIpsy6Czr0',
    caption: 'Pristine white sands, leaning coconut palms, and crystal turquoise waters of southern Sri Lanka.'
  },
  {
    id: 'gal-4',
    title: 'Nallur Kandaswamy Kovil Temple',
    location: 'Jaffna, Northern Province',
    category: 'Heritage',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLu2VC7xXMumXOOG3SpfDU3JH9CdwLljc8NnzF7oYodk0qUiVyeVy7z2b4lJi_NQw-iY5KLbMYGHt4rq3swU1hai4xyU-Gvpf7eoWj2jfW8WWyVXIFeojTHcTyrEizSVXMOMwcscWGvWSyoycutjTFGmLNSLAsc2kB26Rpwe2Cq_8-xh2cqzSn8DqdD3rW3KnyxUb-1OUO9g92P5d8e8JAImSoHD59SsDTOSOtVky2U80RxhS7oESAaP2Kw',
    caption: 'Intricate golden Dravidian gopuram soaring against the blue sky during morning ceremonies.'
  },
  {
    id: 'gal-5',
    title: 'Wild Asian Elephants of Yala',
    location: 'Yala & Udawalawe',
    category: 'Wildlife',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbHiNSUs7CNHBr1xuo0D2TBdvD9eVBXtYUBLZOmGUDukvIZvcj3TLXWoTNaXmiChFvzMRxU00tRKCgSHH2GYqOznVIgcU4B5oZAdgor49vhwPoHsVI4sBUZPUfys0FBJpfyTYfAvrjkM6f6pt8UpDrl06zaUsednUdkYdC-gKP3l28RC3RujgVv6Z7E8Cs5EVIrTheajHhoOxgmnNFUglTLmF9MCVaxYR9JdX618VD_OStmB8LdsO',
    caption: 'Majestic wild Asian bull elephant crossing golden savanna grasslands at sunset.'
  },
  {
    id: 'gal-6',
    title: 'The Blue Mountain Express Train',
    location: 'Kandy to Ella Rail Pass',
    category: 'Highlands',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-datpaWoSHG_r-yZrIvH5Sm00FkoFDfGk6o4mnIjOlfPq0B8SOVy_YSbcKS6wKnjBD3asA6kG3tikRfN5yrZOsifA3ziXiZ29o0UVN2vYi8PMbqAzRHw6rSeZIe9JXrp1mek_8JOOZ40V4VJu7dpc3m0Idj1LWFj88BPMYv_jCI6urN9CKRbzVcTsk_MoRQWG8QGPvTLe29ifGR24tQ5UDCU8xC7Ofw8-KCAGWK33TSx5INOD1Gir',
    caption: 'The legendary vintage blue train traversing mountain curves above deep cloud valleys.'
  },
  {
    id: 'gal-7',
    title: 'Sacred Stone Monasteries',
    location: 'Anuradhapura & Polonnaruwa',
    category: 'Culture',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJQVGLUzM7C8qdWmpeWDJiCmAp56TFHisv1V3Uz8Qfbc4FVzLIXRs0I0c6G1gxEu4AMNyQGBOgp93kXCIRB8Y8gTtn8Lss7hT046OHti2Cq6d71aRnTlYoStwHy4em-akjK0gMOHEv9_h9GSqfd6upRIn3BmfRWa3K6fpR9Yp83qSF2VKjVZEyUSwq3gvm1xPWAnbooQS_QoIWCfNu8wCeC8AngsnjnqPNXLwPLybdp7f5u2KK3WOF',
    caption: 'Ancient Buddhist monk walking mindfully among 2,000-year-old carved granite pillars.'
  },
  {
    id: 'gal-8',
    title: 'Private Beachfront Sunset Dinner',
    location: 'Weligama Bay',
    category: 'Coastal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOqRE8jIPz-cvGDM5ZzSxYtCWFb7G3WgIrQE7A0iCd9rmPPuwhSfHd7KLlxhkivPIQTLQ3Bg19eeCijvXQlgJYltgzKk1thJQMz57R9cx2kuaFFOKWn5A-VE_iv3p84MkUt5koaKuYSnXogLOndk5OFBTBk50IpjJ--CHqvoTxG6z-AaBVMdUdS_bKNQVtq5jqVJHV3Az0Dd6gkiR5pDY7M11CnZnjKHR1YG-kPzYKLyitB0zWnsNb',
    caption: 'Candlelit dining on white linen set directly along the gentle surf of the Indian Ocean.'
  }
];
