import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Check,
  ShieldCheck
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-[#f8fafc] border-b border-slate-200/60">
      
      {/* Subtle modern architectural grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#0f2b4808_1px,transparent_1px),linear-gradient(to_bottom,#0f2b4808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      {/* Subtle warm ambient highlight */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Large Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] font-space">
            Practical Technology. <br className="hidden sm:inline" />
            <span className="text-[#ea580c]">
              Digital Solutions.
            </span> <br />
            Professional Support.
          </h1>

          {/* Subtitle Styled in High-Trust Corporate Editorial Tone */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Support Works International, Inc. delivers straightforward tech troubleshooting, professional website development, executive document design, and personalized 1-on-1 coaching for individuals, professionals, and growing businesses.
          </p>

          {/* Value Highlights Pill Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-12">
            <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Check className="w-3.5 h-3.5 text-[#ea580c]" />
              One-Time Flat Pricing
            </span>
            <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Check className="w-3.5 h-3.5 text-[#ea580c]" />
              No Forced Subscriptions
            </span>
            <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Check className="w-3.5 h-3.5 text-[#ea580c]" />
              57 Transparent Services
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider gower-btn-orange"
            >
              <span>Explore 57 Services &amp; Rates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider gower-btn-secondary"
            >
              Request Consultation
            </Link>
          </div>

          {/* Trust Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md">
            <div className="text-center p-3 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-1 font-space">57+</div>
              <div className="text-[11px] text-slate-500 uppercase font-mono tracking-wider">Services &amp; Bundles</div>
            </div>
            <div className="text-center p-3 md:border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#ea580c] mb-1 font-space">$49</div>
              <div className="text-[11px] text-slate-500 uppercase font-mono tracking-wider">Starting Flat Rate</div>
            </div>
            <div className="text-center p-3 border-r border-slate-100 last:border-0">
              <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-1 font-space">100%</div>
              <div className="text-[11px] text-slate-500 uppercase font-mono tracking-wider">Pay-as-you-go</div>
            </div>
            <div className="text-center p-3">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#ea580c] mb-1 font-space">99.8%</div>
              <div className="text-[11px] text-slate-500 uppercase font-mono tracking-wider">Client Satisfaction</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
