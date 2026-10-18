'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { servicesData, ServiceItem } from '@/data/services';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Check, 
  Sparkles,
  SlidersHorizontal,
  Flame,
  Grid,
  Layers,
  HelpCircle,
  Eye
} from 'lucide-react';

interface PricingCatalogProps {
  onSelectService?: (serviceName: string) => void;
}

export default function PricingCatalog({ onSelectService }: PricingCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeType, setActiveType] = useState<'all' | 'individual' | 'bundled'>('all');
  const [showAllServices, setShowAllServices] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // The 6 featured spotlight services for the slider
  const featuredIds = [
    'comp-setup-opt',         // #5 - Computer Setup & Optimization ($199)
    'landing-page-dev',       // #15 - Landing Page Development ($399)
    'resume-cv-prep',         // #21 - Resume / CV Preparation ($149)
    'excel-1hr',              // #35 - Excel Training 1-Hour ($99)
    'pkg-complete-care',      // #42 - Complete Computer Care Package ($499)
    'pkg-small-biz',          // #53 - Small Business Digital Package ($999)
  ];

  const featuredServices = useMemo(() => {
    return featuredIds
      .map((id) => servicesData.find((s) => s.id === id))
      .filter((s): s is ServiceItem => Boolean(s));
  }, []);

  const categories = [
    { label: 'All Offerings', value: 'All', count: 57 },
    { label: 'Bundled Packages', value: 'Bundled Packages', count: 19 },
    { label: 'Technology Support', value: 'Technology Support', count: 10 },
    { label: 'Website Services', value: 'Website Services', count: 10 },
    { label: 'Digital Services', value: 'Digital Services', count: 10 },
    { label: 'Consultation & Training', value: 'Consultation & Training', count: 8 },
  ];

  // Active search or category filter determination
  const isSearching = searchTerm.trim().length > 0;
  const isCategoryFiltered = selectedCategory !== 'All' || activeType !== 'all';
  const shouldShowFullGrid = isSearching || isCategoryFiltered || showAllServices;

  // Search across ALL 57 services
  const searchResults = useMemo(() => {
    return servicesData.filter((item) => {
      // Type filter
      if (activeType !== 'all' && item.type !== activeType) return false;

      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;

      // Search term filter
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesSub = item.subCategory.toLowerCase().includes(query);
        const matchesHighlights = item.highlights?.some((h) => h.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesSub || matchesHighlights;
      }

      return true;
    });
  }, [searchTerm, selectedCategory, activeType]);

  const handleSelect = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
      return;
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/contact?service=${encodeURIComponent(serviceName)}`;
    }
  };

  // Slider navigation logic for 6 cards (showing 1 card on mobile, 2 on tablet, 3 on desktop)
  const maxSlides = Math.max(0, featuredServices.length - 1);

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? maxSlides : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === maxSlides ? 0 : prev + 1));
  };

  return (
    <section id="pricing" className="py-24 relative bg-[#000000]">
      {/* Subtle top/bottom borders with orange accent touch */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff3b00]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#ff3b00]/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Revond-style uppercase badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-space">
            Service Catalog &amp; Transparent Rates
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            One-time fixed rates with zero hidden fees. Explore our 6 spotlight solutions in the slider below, or search across our full catalog of 57 offerings.
          </p>
        </div>

        {/* Search Bar & Instant Discovery (Searches ALL 57 Services) */}
        <div className="revond-panel p-4 sm:p-6 rounded-2xl mb-10 border border-[#1e1e1e] shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search all 57 services (WordPress, Excel, Resume, Troubleshooting)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#0c0c0c] border border-[#222222] text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff3b00] focus:ring-1 focus:ring-[#ff3b00] transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-400 hover:text-white px-1.5 py-0.5 rounded bg-neutral-800"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Type Switcher Filter */}
            <div className="flex items-center p-1 bg-[#0c0c0c] rounded-xl border border-[#1e1e1e] w-full md:w-auto justify-center">
              <button
                onClick={() => setActiveType('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeType === 'all'
                    ? 'bg-[#ff3b00] text-white shadow-lg shadow-[#ff3b00]/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                All (57)
              </button>
              <button
                onClick={() => setActiveType('individual')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeType === 'individual'
                    ? 'bg-[#ff3b00] text-white shadow-lg shadow-[#ff3b00]/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Individual (38)
              </button>
              <button
                onClick={() => setActiveType('bundled')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeType === 'bundled'
                    ? 'bg-[#ff3b00] text-white shadow-lg shadow-[#ff3b00]/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Bundles (19)
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-3 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                    isSelected
                      ? 'bg-[#ff3b00]/15 border-[#ff3b00] text-white shadow-sm'
                      : 'bg-[#0a0a0a] border-[#1f1f1f] text-neutral-400 hover:text-neutral-200 hover:border-[#333333]'
                  }`}
                >
                  {cat.label}
                  <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-[#ff3b00] text-white' : 'bg-[#181818] text-neutral-400'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MODE 1: SEARCH RESULTS OR FILTERED VIEW OR "SEE MORE" FULL GRID */}
        {shouldShowFullGrid ? (
          <div>
            {/* Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-[#1c1c1c]">
              <div className="text-xs text-neutral-400">
                Found <strong className="text-white text-sm">{searchResults.length}</strong> services
                {searchTerm && <span> matching &ldquo;<span className="text-[#ff551f]">{searchTerm}</span>&rdquo;</span>}
                {selectedCategory !== 'All' && <span> in <span className="text-[#ff551f]">{selectedCategory}</span></span>}
              </div>

              {!isSearching && !isCategoryFiltered && showAllServices && (
                <button
                  onClick={() => setShowAllServices(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff551f] hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Switch Back to 6-Card Spotlight Slider</span>
                </button>
              )}
            </div>

            {/* Grid of Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((service) => {
                const isBundle = service.type === 'bundled';
                return (
                  <div
                    key={service.id}
                    className={`rounded-2xl revond-card p-6 flex flex-col justify-between relative group ${
                      isBundle ? 'border-[#ff3b00]/30 bg-[#0e0e0e]' : 'border-[#1a1a1a] bg-[#080808]'
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono text-neutral-400 bg-[#141414] px-2 py-0.5 rounded border border-[#222222]">
                          #{service.sno}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {service.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded revond-badge">
                              {service.badge}
                            </span>
                          )}
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                            {service.subCategory}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#ff551f] transition-colors">
                        {service.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white font-space">
                          ${service.price}
                        </span>
                        <span className="text-xs text-neutral-400 font-medium">
                          USD / flat
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      {service.highlights && service.highlights.length > 0 && (
                        <div className="space-y-2 mb-6 pt-4 border-t border-[#1a1a1a]">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                            {isBundle ? 'Included In This Package:' : 'Service Scope:'}
                          </div>
                          {service.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                              <Check className="w-3.5 h-3.5 text-[#ff3b00] flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-[#1a1a1a] mt-auto">
                      <button
                        onClick={() => handleSelect(service.name)}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                          isBundle
                            ? 'revond-btn-orange'
                            : 'bg-[#141414] hover:bg-[#ff3b00] text-neutral-200 hover:text-white border border-[#222222]'
                        }`}
                      >
                        <span>Request Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty Search State */}
            {searchResults.length === 0 && (
              <div className="text-center py-16 revond-card rounded-2xl border border-[#1f1f1f]">
                <HelpCircle className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-1">No services found</h4>
                <p className="text-sm text-neutral-400 mb-4 max-w-md mx-auto">
                  We couldn&apos;t find any service matching &ldquo;{searchTerm}&rdquo;. Try another term or contact our support desk for custom solutions.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setActiveType('all');
                  }}
                  className="text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg revond-btn-orange"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        ) : (
          /* MODE 2: DEFAULT 6-CARD SPOTLIGHT SLIDER WITH "SEE MORE" ACTION */
          <div>
            {/* Slider Controls Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff3b00] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Featured Spotlight (6 Core Services)
                </span>
                <span className="text-xs text-neutral-400">&bull; Swipe or use arrows</span>
              </div>

              {/* Prev / Next Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-xl bg-[#0c0c0c] border border-[#222222] text-neutral-300 hover:text-white hover:border-[#ff3b00] flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-xl bg-[#0c0c0c] border border-[#222222] text-neutral-300 hover:text-white hover:border-[#ff3b00] flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slider Container */}
            <div className="overflow-hidden rounded-2xl py-2">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlideIndex * 100}%)`,
                }}
              >
                {/* Divide the 6 cards into slides. 
                    On small screens: 1 per slide.
                    On tablet: 2 per slide.
                    On desktop: 3 per slide. */}
                {featuredServices.map((service, idx) => (
                  <div
                    key={service.id}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="rounded-2xl revond-card p-6 h-full flex flex-col justify-between border border-[#1e1e1e] bg-[#0a0a0a] hover:border-[#ff3b00]/50 relative group">
                      <div>
                        {/* Badges */}
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <span className="text-[11px] font-mono text-neutral-400 bg-[#141414] px-2 py-0.5 rounded border border-[#222222]">
                            #{service.sno}
                          </span>
                          {service.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded revond-badge">
                              {service.badge}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#ff551f] transition-colors">
                          {service.name}
                        </h3>

                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-3xl font-extrabold text-white font-space">
                            ${service.price}
                          </span>
                          <span className="text-xs text-neutral-400 font-medium">
                            USD flat rate
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Highlights */}
                        {service.highlights && (
                          <div className="space-y-2 mb-6 pt-4 border-t border-[#181818]">
                            {service.highlights.map((h, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                                <Check className="w-3.5 h-3.5 text-[#ff3b00] flex-shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action */}
                      <div className="pt-4 border-t border-[#181818] mt-auto">
                        <button
                          onClick={() => handleSelect(service.name)}
                          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider revond-btn-orange flex items-center justify-center gap-2"
                        >
                          <span>Request Service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {featuredServices.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentSlideIndex(dotIdx)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentSlideIndex === dotIdx 
                      ? 'w-8 bg-[#ff3b00]' 
                      : 'w-2 bg-[#222222] hover:bg-neutral-600'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Prominent "See More / View All 57 Services" Button */}
            <div className="mt-14 text-center">
              <button
                onClick={() => setShowAllServices(true)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#0f0f0f] hover:bg-[#181818] text-white border border-[#262626] hover:border-[#ff3b00] shadow-xl hover:shadow-[#ff3b00]/20 transition-all hover:scale-105 active:scale-95 group"
              >
                <Grid className="w-4 h-4 text-[#ff3b00] group-hover:rotate-90 transition-transform duration-300" />
                <span>See More &bull; View All 57 Services &amp; Packages</span>
                <ArrowRight className="w-4 h-4 text-[#ff3b00] group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-xs text-neutral-400 mt-3 font-medium">
                Includes all 38 individual services and 19 bundled packages
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
