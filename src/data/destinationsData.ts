export interface Destination {
  id: string;
  name: string;
  region: 'Cultural Triangle' | 'Hill Country' | 'Southern Coast' | 'Northern Province' | 'Wildlife Savannas' | 'Eastern Coast';
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  climate: string;
  bestMonths: string;
  signatureExperience: string;
}

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'sigiriya-cultural-triangle',
    name: 'Sigiriya & Cultural Triangle',
    region: 'Cultural Triangle',
    tagline: 'Ancient royal citadels, UNESCO frescoes, and golden cave monasteries',
    description: 'The ancient heartland of Ceylon, home to royal water gardens, towering 5th-century rock palaces, and gilded monasteries carved deep into granite boulders.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsYsVVCjrdGAwwWG2W1LeRZHOd_-gLryjAz4p2AIoxNuhGhO-zo9Fh6n36hVLpTnF99466vPZV8HQ-GOi3RItfGDeq3X-Z3CtbFDQLfI8YrS69coQsFfIgtOxwMcobR8W4pJpxvR60Dh1jLDjBFzCRSgQgAYqhDQIkQ6a8wwP4GYAaFKVOaaGDtr2j9i7fTjCz9SPMvh08GihDSxMboUVj5KNDSt0RDNJZns2j07q89dMPwVrS51OcOWaA',
    highlights: ['Sigiriya Lion Rock Fortress', 'Dambulla Golden Cave Temple', 'Polonnaruwa Quadrangle', 'Pidurangala Sunset Hike'],
    climate: '28°C - 32°C Tropical & Sunny',
    bestMonths: 'December to April, July to September',
    signatureExperience: 'Sunrise hot air balloon flight drifting over Sigiriya Rock and jungle reservoirs.'
  },
  {
    id: 'nuwara-eliya-ella',
    name: 'Nuwara Eliya & Ella Hill Country',
    region: 'Hill Country',
    tagline: 'Misty tea plantations, colonial high tea, and dramatic mountain gaps',
    description: 'Perched at 1,800m above sea level, the emerald central highlands boast rolling Ceylon tea estates, cool alpine air, cascading waterfalls, and world-renowned scenic train rides.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuWOquRX_y3A_Dz6hgq1WTBrA9oKoaMJGcRKraZ5tWHhBo-fpY0fPTeTZiUjop39EisuICmSFfK_Bx-Wm5b41SxjJG3s42T03j4dknkix3qSXfKm1GfeCsChLz9jENaG0ZDSOlPO7Fv-KsSLxvBcH01XLdakV3AX_N8JLfIkXBEFm7wy92IPRcNQZNPjVBTNLrow1ChLWoZ35X0TSiMaEtgw3MgUaSyPHaqb4Ckr85iNExa2dPpblGiBw',
    highlights: ['Pedro Tea Estate plucking', 'Nine Arches Viaduct', 'Horton Plains World’s End', 'Little Adam’s Peak'],
    climate: '14°C - 20°C Cool & Crisp',
    bestMonths: 'December to May',
    signatureExperience: 'First Class observation carriage train through the tea carpeted hills of Nuwara Eliya to Ella.'
  },
  {
    id: 'mirissa-galle-coast',
    name: 'Mirissa, Weligama & Galle Fort',
    region: 'Southern Coast',
    tagline: 'Pristine turquoise bays, blue whale safaris, and 17th-century ramparts',
    description: 'Golden sandy coves shaded by bending palms, world-class surf breaks, and the living colonial masterpiece of Galle Dutch Fort filled with gemstone boutiques and artisan cafes.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsPfwJYHdA74mSoohGhKtrmBeiJ38DY9w45NS0-u6ZT-NnytT80ZhUrJ4Kqw2oXrXuBalUiYKEH_h_OzdpODpT2R3lJ-SzCvbkFIGHENBZzteYGbkcZsEeqbuDvF6UCmpcUVAaiWvEbqcjVJxbyxmxLDBfgT2DrVizNp9CIqoboh-R9uREyWb7whZN3y_J4v_8Xec8KckHMKHlLx9upquC4TraQ9kJJvJhnvpSiYOR86ZLgOfIpsy6Czr0',
    highlights: ['UNESCO Galle Dutch Fort', 'Mirissa Blue Whale Cruise', 'Weligama Stilt Fishermen', 'Kosgoda Turtle Sanctuary'],
    climate: '27°C - 31°C Coastal Breeze',
    bestMonths: 'November to April',
    signatureExperience: 'Private catamaran champagne cruise at sunset watching blue whales and dolphins.'
  },
  {
    id: 'jaffna-northern-heritage',
    name: 'Jaffna & The Northern Peninsula',
    region: 'Northern Province',
    tagline: 'Golden Dravidian temples, palmyrah groves, island ferries, and unique culinary spices',
    description: 'A vibrant world of distinct Dravidian Tamil culture, monumental Hindu kovils with towering gilded sculptures, isolated historic islands, and fiery seafood cuisine.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLu2VC7xXMumXOOG3SpfDU3JH9CdwLljc8NnzF7oYodk0qUiVyeVy7z2b4lJi_NQw-iY5KLbMYGHt4rq3swU1hai4xyU-Gvpf7eoWj2jfW8WWyVXIFeojTHcTyrEizSVXMOMwcscWGvWSyoycutjTFGmLNSLAsc2kB26Rpwe2Cq_8-xh2cqzSn8DqdD3rW3KnyxUb-1OUO9g92P5d8e8JAImSoHD59SsDTOSOtVky2U80RxhS7oESAaP2Kw',
    highlights: ['Nallur Kandaswamy Kovil', 'Jaffna Dutch Fort', 'Nainativu Island boat tour', 'Point Pedro lighthouse'],
    climate: '28°C - 34°C Warm & Dry',
    bestMonths: 'March to October',
    signatureExperience: 'Attending the grand evening puja ceremony inside the golden sanctum of Nallur Kovil.'
  },
  {
    id: 'yala-udawalawe-wildlife',
    name: 'Yala & Udawalawe Wildlife Parks',
    region: 'Wildlife Savannas',
    tagline: 'The kingdom of the Sri Lankan leopard, sloth bears, and colossal elephant herds',
    description: 'Vast scrub jungle and open savanna stretching to the wild southern sea, teeming with wild Asian elephants, leopards, mugger crocodiles, and colorful bee-eaters.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbHiNSUs7CNHBr1xuo0D2TBdvD9eVBXtYUBLZOmGUDukvIZvcj3TLXWoTNaXmiChFvzMRxU00tRKCgSHH2GYqOznVIgcU4B5oZAdgor49vhwPoHsVI4sBUZPUfys0FBJpfyTYfAvrjkM6f6pt8UpDrl06zaUsednUdkYdC-gKP3l28RC3RujgVv6Z7E8Cs5EVIrTheajHhoOxgmnNFUglTLmF9MCVaxYR9JdX618VD_OStmB8LdsO',
    highlights: ['Yala Leopard Safari', 'Udawalawe Elephant Transit Home', 'Bundala Wetland birding', 'Luxury safari glamping'],
    climate: '29°C - 33°C Semi-Arid',
    bestMonths: 'February to October',
    signatureExperience: 'Dusk leopard tracking in a customized silent safari jeep with private naturalist.'
  },
  {
    id: 'trincomalee-nilaveli',
    name: 'Trincomalee & Nilaveli Beach',
    region: 'Eastern Coast',
    tagline: 'Natural deep harbours, cliff-perched Hindu temples, and Pigeon Island coral gardens',
    description: 'Sri Lanka’s east coast jewel featuring pristine powder-white sands, calm summer seas, and sacred cliffside temples overlooking majestic ocean vistas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZnwZgFHUNg5pg92gQlLeRRbVKtxRN52BlJO5w1_8cekgHgKVGybFBCfrSraVNXRZSF1lb_IedBOt0iAiUSmy0P7hItpltS2u-FLq6u8MuE0vhG-mKE-mKBA8W7xqdWbragpJF_YIKXxVDy6UMqLHYDUruLsA7Cqqgs5IVFwd4sVN9rZiNj_TJOcUJcu6ru5D8y2cr4M8RFJDeaaV-zPKt42iVM1ptK1yXHqlAzQU5S28py-hviyzy',
    highlights: ['Koneswaram Temple Swami Rock', 'Pigeon Island coral snorkeling', 'Nilaveli Beach', 'Fort Frederick'],
    climate: '28°C - 33°C Sunny Coast',
    bestMonths: 'April to October',
    signatureExperience: 'Swimming with gentle reef sharks and green sea turtles around Pigeon Island’s live reef.'
  }
];
