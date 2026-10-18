import React from 'react';
import { 
  User, 
  Briefcase, 
  Rocket, 
  Building2, 
  Check,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function AudiencePathways() {
  const audiences = [
    {
      title: 'Individuals',
      icon: User,
      badge: 'Personal Tech',
      description: 'You do not need to be a tech expert. We take the frustration out of computer problems, file backups, and digital tools.',
      benefits: [
        'Everyday computer troubleshooting & diagnostics',
        'Personal email, cloud storage & secure backup setup',
        'Personal websites & biography pages',
        'Patient, 1-on-1 computer & phone training'
      ],
      recommendedBundle: 'Essential Digital Support ($199)',
    },
    {
      title: 'Working Professionals',
      icon: Briefcase,
      badge: 'Career Elevation',
      description: 'Position yourself for promotions and high-tier opportunities with executive digital presence and productivity.',
      benefits: [
        'ATS-optimized executive Resume & CV redesign',
        'LinkedIn profile optimization for recruiter visibility',
        'Executive pitch decks & presentation design',
        'Excel advanced functions & workplace workflow training'
      ],
      recommendedBundle: 'Digital Professional Package ($799)',
    },
    {
      title: 'Entrepreneurs & Founders',
      icon: Rocket,
      badge: 'Rapid Launch',
      description: 'Speed to market matters. We build your landing pages, brand materials, and setup your core digital tools.',
      benefits: [
        'High-converting single-page landing pages',
        'Professional document design & investor presentations',
        'Domain, email & cloud infrastructure onboarding',
        'Turnkey personal branding & portfolio creation'
      ],
      recommendedBundle: 'Website Starter Package ($699)',
    },
    {
      title: 'Small Businesses',
      icon: Building2,
      badge: 'Business Operations',
      description: 'Get corporate-grade technical support, secure infrastructure, and an authoritative web presence without agency overhead.',
      benefits: [
        'Custom multi-page professional company website',
        'Core Web Vitals & speed optimization',
        'On-page SEO optimization & audit reports',
        'Staff digital training & secure file backup reviews'
      ],
      recommendedBundle: 'Small Business Digital ($999)',
    },
  ];

  return (
    <section id="audiences" className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-space">
            Engineered For Every Stage
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            From home computer users to growing commercial teams, our practical services are built to solve your exact challenges.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl revond-card p-6 flex flex-col justify-between border border-[#1a1a1a] bg-[#0a0a0a]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#121212] border border-[#222222] flex items-center justify-center text-[#ff3b00] shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#161616] text-neutral-300 border border-[#262626]">
                      {aud.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-space">{aud.title}</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {aud.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#1a1a1a] mb-6">
                    {aud.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#ff3b00] flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#181818] mt-auto">
                  <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1 font-mono">
                    Recommended Package:
                  </div>
                  <div className="text-xs font-bold text-[#ff551f] mb-3">
                    {aud.recommendedBundle}
                  </div>
                  <Link
                    href="#pricing"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors"
                  >
                    <span>View Options</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff3b00]" />
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
