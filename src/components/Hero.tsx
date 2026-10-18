import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Check
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-[#000000]">
      {/* Background ambient flame orange glow (Revond aesthetic) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#ff3b00]/12 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-1/4 w-[250px] h-[250px] bg-[#ff551f]/8 blur-[100px] pointer-events-none -z-10" />
      
      {/* Subtle modern geometric grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">

          {/* Large Bold Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] font-space">
            Practical Technology. <br className="hidden sm:inline" />
            <span className="revond-orange-gradient-text">
              Digital Solutions.
            </span> <br />
            Professional Support.
          </h1>

          {/* Subtitle Styled in Revond Monospaced All-Caps Tech Vibe */}
          <p className="text-xs sm:text-sm md:text-base font-mono tracking-wider text-neutral-400 uppercase max-w-3xl mx-auto mb-10 leading-relaxed">
            SUPPORT WORKS INTERNATIONAL IS A FORWARD-THINKING TECHNOLOGY &amp; DIGITAL SERVICES COMPANY DEDICATED TO DELIVERING STRAIGHTFORWARD TECH TROUBLESHOOTING, WEBSITE DEVELOPMENT, EXECUTIVE DOCUMENTS, AND PERSONALIZED 1-ON-1 TRAINING.
          </p>

          {/* Value Highlights Pill Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-12">
            <span className="flex items-center gap-1.5 bg-[#0a0a0a] px-3.5 py-1.5 rounded-lg border border-[#1f1f1f]">
              <Check className="w-3.5 h-3.5 text-[#ff3b00]" />
              One-Time Flat Pricing
            </span>
            <span className="flex items-center gap-1.5 bg-[#0a0a0a] px-3.5 py-1.5 rounded-lg border border-[#1f1f1f]">
              <Check className="w-3.5 h-3.5 text-[#ff3b00]" />
              No Forced Subscriptions
            </span>
            <span className="flex items-center gap-1.5 bg-[#0a0a0a] px-3.5 py-1.5 rounded-lg border border-[#1f1f1f]">
              <Check className="w-3.5 h-3.5 text-[#ff3b00]" />
              57 Transparent Services
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider revond-btn-orange"
            >
              <span>Explore 57 Services &amp; Rates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0c0c0c] hover:bg-[#181818] text-neutral-200 hover:text-white border border-[#222222] hover:border-[#ff3b00]/40 transition-all"
            >
              Request Custom Consultation
            </Link>
          </div>

          {/* Trust Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl revond-panel border border-[#1e1e1e]">
            <div className="text-center p-3 border-r border-[#1e1e1e] last:border-0">
              <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1 font-space">57+</div>
              <div className="text-[11px] text-neutral-400 uppercase font-mono tracking-wider">Services &amp; Bundles</div>
            </div>
            <div className="text-center p-3 md:border-r border-[#1e1e1e] last:border-0">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#ff3b00] mb-1 font-space">$49</div>
              <div className="text-[11px] text-neutral-400 uppercase font-mono tracking-wider">Starting Flat Rate</div>
            </div>
            <div className="text-center p-3 border-r border-[#1e1e1e] last:border-0">
              <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1 font-space">100%</div>
              <div className="text-[11px] text-neutral-400 uppercase font-mono tracking-wider">Pay-as-you-go</div>
            </div>
            <div className="text-center p-3">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#ff3b00] mb-1 font-space">99.8%</div>
              <div className="text-[11px] text-neutral-400 uppercase font-mono tracking-wider">Client Satisfaction</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
