'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Grid,
  Eye,
  HelpCircle
} from 'lucide-react';
import { servicesData, ServiceItem } from '@/data/services';

interface PricingCatalogProps {
  onSelectService?: (serviceName: string) => void;
}

export default function PricingCatalog({ onSelectService }: PricingCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeType, setActiveType] = useState<'all' | 'individual' | 'bundled'>('all');
  
  // Spotlight 6-card slider state
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Full-catalog view state
  const [showAllServices, setShowAllServices] = useState(false);

  // 6 Spotlight Featured Services
  const featuredServices: ServiceItem[] = useMemo(() => {
    const spotlightIds = [
      'comp-troubleshoot',       // #3 Computer Troubleshooting ($99)
      'wordpress-setup',         // #14 WordPress Setup ($299)
      'resume-prep',             // #21 Resume / CV Preparation ($149)
      'excel-training-1h',       // #35 Excel Training ($99)
      'essential-digital-pkg',   // #39 Essential Digital Support ($199)
      'complete-digital-biz-pkg' // #57 Complete Digital Business ($2,499)
    ];
    return spotlightIds
      .map(id => servicesData.find(s => s.id === id))
      .filter((s): s is ServiceItem => Boolean(s));
  }, []);

  // Category counts
  const categories = useMemo(() => {
    return [
      { label: 'All Services', value: 'All', count: servicesData.length },
      { label: 'Tech Support', value: 'Technology Support', count: 10 },
      { label: 'Web Development', value: 'Website Services', count: 10 },
      { label: 'Digital & Documents', value: 'Digital Services', count: 10 },
      { label: 'Coaching & Training', value: 'Consultation & Training', count: 8 },
      { label: 'Bundled Packages', value: 'Bundled Packages', count: 19 },
    ];
  }, []);

  // Filtered Services based on search, category, and type
  const searchResults = useMemo(() => {
    return servicesData.filter((service) => {
      // Type Filter
      if (activeType === 'individual' && service.type !== 'individual') return false;
      if (activeType === 'bundled' && service.type !== 'bundled') return false;

      // Category Filter
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Bundled Packages') {
          if (service.type !== 'bundled') return false;
        } else if (service.category !== selectedCategory) {
          return false;
        }
      }

      // Search Query
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchName = service.name.toLowerCase().includes(query);
        const matchDesc = service.description.toLowerCase().includes(query);
        const matchCat = service.category.toLowerCase().includes(query);
        const matchSub = service.subCategory.toLowerCase().includes(query);
        const matchHighlights = service.highlights?.some(h => h.toLowerCase().includes(query)) || false;
        return matchName || matchDesc || matchCat || matchSub || matchHighlights;
      }

      return true;
    });
  }, [searchTerm, selectedCategory, activeType]);

  // Handle CTA Click
  const handleSelect = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    } else {
      window.location.href = `/contact?service=${encodeURIComponent(serviceName)}`;
    }
  };

  const isSearching = searchTerm.trim().length > 0;
  const isCategoryFiltered = selectedCategory !== 'All' || activeType !== 'all';
  const shouldShowFullGrid = isSearching || isCategoryFiltered || showAllServices;

  // Next / Previous for slider (loops through 6 cards, max 4 slides when showing 3 per row)
  const maxSlides = 4;
  const nextSlide = () => setCurrentSlideIndex((prev) => (prev + 1) % maxSlides);
  const prevSlide = () => setCurrentSlideIndex((prev) => (prev - 1 + maxSlides) % maxSlides);

  return (
    <section id="pricing" className="py-24 relative bg-[#f8fafc] border-b border-slate-200/60">
      
      {/* Subtle background ambient touch */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-slate-200/40 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header in Gower Editorial Style */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-space">
            Service Catalog &amp; Transparent Rates
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            One-time fixed rates with zero hidden fees. Explore our 6 spotlight solutions in the slider below, or search across our full catalog of 57 offerings.
          </p>
        </div>

        {/* Search Bar & Instant Discovery (Searches ALL 57 Services) */}
        <div className="gower-panel p-4 sm:p-6 rounded-2xl mb-10 bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search all 57 services (WordPress, Excel, Resume, Troubleshooting)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f2b48] focus:bg-white transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-slate-800 px-1.5 py-0.5 rounded bg-slate-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Type Switcher Filter */}
            <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 w-full md:w-auto justify-center">
              <button
                onClick={() => setActiveType('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeType === 'all'
                    ? 'bg-[#0f172a] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All (57)
              </button>
              <button
                onClick={() => setActiveType('individual')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeType === 'individual'
                    ? 'bg-[#0f172a] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Individual (38)
              </button>
              <button
                onClick={() => setActiveType('bundled')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeType === 'bundled'
                    ? 'bg-[#0f172a] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
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
                      ? 'bg-[#0f172a] border-[#0f172a] text-white shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                  <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white text-slate-900' : 'bg-slate-100 text-slate-600'
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
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-slate-200">
              <div className="text-xs text-slate-600">
                Found <strong className="text-slate-900 text-sm">{searchResults.length}</strong> services
                {searchTerm && <span> matching &ldquo;<span className="text-[#ea580c] font-semibold">{searchTerm}</span>&rdquo;</span>}
                {selectedCategory !== 'All' && <span> in <span className="text-[#ea580c] font-semibold">{selectedCategory}</span></span>}
              </div>

              {!isSearching && !isCategoryFiltered && showAllServices && (
                <button
                  onClick={() => setShowAllServices(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea580c] hover:text-[#c2410c] transition-colors"
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
                    className={`rounded-2xl gower-card p-6 flex flex-col justify-between relative group bg-white border ${
                      isBundle ? 'border-orange-200 shadow-md' : 'border-slate-200 shadow-xs'
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          #{service.sno}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {service.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-orange-50 text-[#ea580c] border border-orange-200">
                              {service.badge}
                            </span>
                          )}
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                            {service.subCategory}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#0f2b48] transition-colors font-space">
                        {service.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#ea580c] font-space">
                          ${service.price}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          USD / flat
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      {service.highlights && service.highlights.length > 0 && (
                        <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono">
                            {isBundle ? 'Included In This Package:' : 'Service Scope:'}
                          </div>
                          {service.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                              <Check className="w-3.5 h-3.5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-slate-100 mt-auto">
                      <button
                        onClick={() => handleSelect(service.name)}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                          isBundle
                            ? 'gower-btn-orange'
                            : 'bg-slate-100 hover:bg-[#0f172a] text-slate-800 hover:text-white border border-slate-200'
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
              <div className="text-center py-16 gower-card rounded-2xl border border-slate-200 bg-white">
                <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-slate-900 mb-1">No services found</h4>
                <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto">
                  We couldn&apos;t find any service matching &ldquo;{searchTerm}&rdquo;. Try another term or contact our support desk for custom solutions.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setActiveType('all');
                  }}
                  className="text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg gower-btn-orange"
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-4 h-4" />
                  Featured Spotlight (6 Core Services)
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">&bull; Swipe or use arrows</span>
              </div>

              {/* Prev / Next Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-[#0f172a] hover:border-[#0f172a] flex items-center justify-center transition-all shadow-xs"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-[#0f172a] hover:border-[#0f172a] flex items-center justify-center transition-all shadow-xs"
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
                {featuredServices.map((service) => (
                  <div
                    key={service.id}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="rounded-2xl gower-card p-6 sm:p-8 h-full flex flex-col justify-between bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group">
                      <div>
                        {/* Badges */}
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                            #{service.sno}
                          </span>
                          {service.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-orange-50 text-[#ea580c] border border-orange-200 font-mono">
                              {service.badge}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#0f2b48] transition-colors font-space">
                          {service.name}
                        </h3>

                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-3xl font-extrabold text-[#ea580c] font-space">
                            ${service.price}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            USD flat rate
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Highlights */}
                        {service.highlights && (
                          <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                            {service.highlights.map((h, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                <Check className="w-3.5 h-3.5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action */}
                      <div className="pt-4 border-t border-slate-100 mt-auto">
                        <button
                          onClick={() => handleSelect(service.name)}
                          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider gower-btn-orange flex items-center justify-center gap-2"
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
                      ? 'w-8 bg-[#ea580c]' 
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Prominent "See More / View All 57 Services" Button */}
            <div className="mt-14 text-center">
              <button
                onClick={() => setShowAllServices(true)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider gower-btn-primary shadow-md hover:shadow-xl transition-all hover:scale-105 active:scale-95 group"
              >
                <Grid className="w-4 h-4 text-[#ea580c] group-hover:rotate-90 transition-transform duration-300" />
                <span>See More &bull; View All 57 Services &amp; Packages</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-xs text-slate-500 mt-3 font-medium">
                Includes all 38 individual services and 19 bundled packages
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
