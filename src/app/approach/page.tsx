import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import OurApproach from '@/components/OurApproach';
import ResultsSection from '@/components/ResultsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Approach & Results | Support Works International, Inc.',
  description: 'Our collaborative approach and measurable results for IT, websites, and digital operations.',
};

export default function ApproachPage() {
  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen">
      {/* Hero Banner for Approach */}
      <section className="py-20 lg:py-24 relative border-b border-slate-200/80 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-[#ea580c] text-[11px] font-bold tracking-widest uppercase mb-4 font-mono">
            Methodology &amp; Execution
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-space">
            Collaborative Transformation
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Rooted in personalization, precision, and continuous support. We evaluate your current systems, deploy scalable solutions, and empower you to manage your technology effortlessly.
          </p>
        </div>
      </section>

      {/* 4-Step Approach */}
      <OurApproach />

      {/* Results & Impact Section */}
      <ResultsSection />

      {/* Bottom CTA */}
      <section className="py-20 border-t border-slate-200/80 bg-[#f8fafc] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-space">
            Ready to Streamline Your Technology?
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Choose from 57 individual services and bundled packages, or contact us for a personalized consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/services"
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider gower-btn-orange inline-flex items-center gap-2"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider gower-btn-secondary"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

