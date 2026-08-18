import React, { useState } from 'react';
import { Sparkles, Camera, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/servicesData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Heritage', 'Highlands', 'Coastal', 'Wildlife', 'Culture'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const handleNext = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setLightboxItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#003f87] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-[#003f87]" />
            <span>Visual Journal</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight mb-4">
            Capturing the Spirit of Sri Lanka
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            Embark on a visual journey through the emerald isle. From the mist-shrouded peaks of tea country to sacred Northern shrines and golden shores.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#003f87] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat === 'All' ? 'All Visuals (8)' : cat}
            </button>
          ))}
        </div>

        {/* Bento / Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {filteredItems.map((item, index) => {
            // make the 1st or 4th item span larger on wide screens
            const isLarge = index === 0 || index === 3;
            return (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-900 ${
                  isLarge ? 'sm:col-span-2 sm:row-span-2 h-72 sm:h-96' : 'h-72'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#003f87] text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-heading font-bold text-base sm:text-lg mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#ffdcc4]" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[65vh] w-full bg-black flex items-center justify-center">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="w-full h-full object-contain"
                />

                {/* Close Button */}
                <button
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Prev & Next */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-3 rounded-full backdrop-blur-md transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-3 rounded-full backdrop-blur-md transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Caption */}
              <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#003f87] uppercase tracking-wider block mb-0.5">
                    {lightboxItem.category} • {lightboxItem.location}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-gray-900">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    {lightboxItem.caption}
                  </p>
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-full text-xs font-bold transition-all shrink-0"
                >
                  Close Photo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
