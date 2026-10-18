'use client';

import React from 'react';
import Link from 'next/link';
import { 
  User, 
  Briefcase, 
  Rocket, 
  Store, 
  ArrowRight,
  Check
} from 'lucide-react';

export default function AudiencePathways() {
  const audiences = [
    {
      icon: User,
      badge: 'Individual Users',
      title: 'Individuals',
      description: 'Home computer troubleshooting, email setup, secure personal cloud backups, and private technology tutoring.',
      benefits: [
        'Affordable single-issue fixes',
        'Simple remote screen-share support',
        'Patient, zero-jargon guidance'
      ],
      recommendedBundle: 'Essential Digital Support ($199)',
      filterTarget: 'tech'
    },
    {
      icon: Briefcase,
      badge: 'Career Climbers',
      title: 'Professionals',
      description: 'Resume overhauls, high-visibility LinkedIn profiles, executive presentation design, and advanced Excel coaching.',
      benefits: [
        'Executive ATS-compliant resumes',
        'Polished personal portfolios',
        '1-on-1 formulas & spreadsheet training'
      ],
      recommendedBundle: 'Professional Digital Profile ($499)',
      filterTarget: 'digital'
    },
    {
      icon: Rocket,
      badge: 'Creators & Founders',
      title: 'Entrepreneurs',
      description: 'Landing page development, WordPress launch, digital branding packages, and technical marketing setup.',
      benefits: [
        'Rapid turn-key landing pages',
        'Brand asset packaging',
        'No ongoing agency retainers'
      ],
      recommendedBundle: 'Personal Branding Package ($699)',
      filterTarget: 'packages'
    },
    {
      icon: Store,
      badge: 'Local Enterprises',
      title: 'Small Businesses',
      description: 'Multi-page website redesign, basic SEO optimization, Google business profiles, and staff digital training.',
      benefits: [
        'Modern mobile-first websites',
        'Local SEO & speed audits',
        'Staff software onboarding'
      ],
      recommendedBundle: 'Complete Digital Business ($2,499)',
      filterTarget: 'packages'
    },
  ];

  return (
    <section id="audiences" className="py-24 relative bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-space">
            Engineered For Every Stage
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From home computer users to growing commercial teams, our practical services are built to solve your exact challenges.
          </p>
        </div>

        {/* 4 Cards in Gower Light Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl gower-card p-6 flex flex-col justify-between bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0f2b48] shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono">
                      {aud.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-space">{aud.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {aud.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    {aud.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono">
                    Recommended Package:
                  </div>
                  <div className="text-xs font-bold text-[#ea580c] mb-3">
                    {aud.recommendedBundle}
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0f2b48] hover:text-[#ea580c] transition-colors"
                  >
                    <span>View Options</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
