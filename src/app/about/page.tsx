import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import ValuePillars from '@/components/ValuePillars';
import AudiencePathways from '@/components/AudiencePathways';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Support Works International, Inc.',
  description: 'Learn about Support Works International, Inc. - practical technology, website development, digital services, and 1-on-1 coaching.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#000000] text-neutral-100 min-h-screen">
      {/* Hero section for About */}
      <section className="py-20 lg:py-28 relative border-b border-[#141414]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 font-space">
            Practical Technology. <br />
            <span className="revond-orange-gradient-text">Digital Solutions.</span>
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
            At <strong>Support Works International, Inc.</strong>, our goal is simple: to make everyday technology, websites, and digital tasks easier to manage for individuals, professionals, entrepreneurs, and small businesses.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono uppercase tracking-wider text-neutral-300">
            <span className="bg-[#0e0e0e] border border-[#222222] px-3.5 py-1.5 rounded-lg">
              &bull; 100% Flat Pricing
            </span>
            <span className="bg-[#0e0e0e] border border-[#222222] px-3.5 py-1.5 rounded-lg">
              &bull; No Recurring Contracts
            </span>
            <span className="bg-[#0e0e0e] border border-[#222222] px-3.5 py-1.5 rounded-lg">
              &bull; Remote Global Delivery
            </span>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <ValuePillars />

      {/* Audience Pathways Section */}
      <AudiencePathways />

      {/* Commitment & Approach Section from About Us.docx */}
      <section className="py-20 border-t border-[#141414] bg-[#050505]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="revond-panel p-8 sm:p-12 rounded-3xl border border-[#1e1e1e] text-center space-y-6">
            <div className="w-12 h-12 rounded-xl bg-[#ff3b00]/10 text-[#ff3b00] flex items-center justify-center mx-auto border border-[#ff3b00]/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-space">
              Our Commitment to Customers
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              We believe professional service starts with clear expectations. Before providing a service, we aim to clearly communicate the nature of the service, applicable flat pricing, and information required from the customer. We also work to protect customer information and use customer-provided documents, files, and information only as necessary to provide the requested service and operate our business.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-4 text-xs font-mono uppercase tracking-wider text-neutral-300">
              <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#222222] flex items-center justify-center text-center">
                Clear Communication
              </div>
              <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#222222] flex items-center justify-center text-center">
                Practical Solutions
              </div>
              <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#222222] flex items-center justify-center text-center">
                Transparent Pricing
              </div>
              <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#222222] flex items-center justify-center text-center">
                No Subscriptions
              </div>
              <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#222222] flex items-center justify-center text-center">
                Professional Delivery
              </div>
              <div className="p-3 rounded-xl bg-[#0c0c0c] border border-[#222222] flex items-center justify-center text-center">
                Customer-Focused
              </div>
            </div>
          </div>

          {/* Straightforward Way to Get Digital Help */}
          <div className="p-8 sm:p-10 rounded-3xl border border-[#1e1e1e] bg-[#080808] text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-space">
              A Straightforward Way to Get Digital Help
            </h3>
            <p className="text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              You don&apos;t need to be an expert to solve a technology or digital problem. Whether you need assistance with a computer, website, document, online presence, or digital skill, Support Works International, Inc. provides practical services designed to help you move forward.
            </p>
            <p className="text-sm font-semibold text-[#ff3b00] font-mono uppercase tracking-wider">
              Choose a service. Tell us what you need. We&apos;ll take care of the rest.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider revond-btn-orange inline-flex items-center gap-2"
              >
                <span>Browse 57 Services &amp; Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0c0c0c] hover:bg-[#181818] text-white border border-[#222222]"
              >
                Get in Touch
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
