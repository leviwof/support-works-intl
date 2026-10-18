'use client';

import React from 'react';
import Hero from '@/components/Hero';
import ValuePillars from '@/components/ValuePillars';
import PricingCatalog from '@/components/PricingCatalog';
import AudiencePathways from '@/components/AudiencePathways';
import OurApproach from '@/components/OurApproach';
import ResultsSection from '@/components/ResultsSection';
import ContactSection from '@/components/ContactSection';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleSelectService = (serviceName: string) => {
    router.push(`/contact?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#000000]">
      {/* 1. Hero with Revond flame-orange & black visual impact */}
      <Hero />

      {/* 2. 4 Core Pillars */}
      <ValuePillars />

      {/* 3. 6-Card Spotlight Slider with See More expansion & 57-service live search */}
      <PricingCatalog onSelectService={handleSelectService} />

      {/* 4. Audience Pathways (Individuals, Pros, Founders, Small Biz) */}
      <AudiencePathways />

      {/* 5. 4-Step Approach & Methodology */}
      <OurApproach />

      {/* 6. Measurable Results & Impact Stats */}
      <ResultsSection />

      {/* 7. Streamlined Contact Form */}
      <ContactSection />
    </div>
  );
}
