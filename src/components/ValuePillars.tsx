'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Laptop, 
  Globe, 
  FileText, 
  GraduationCap, 
  ArrowUpRight 
} from 'lucide-react';

export default function ValuePillars() {
  const pillars = [
    {
      icon: Laptop,
      title: 'Technology Support',
      tagline: 'Practical Diagnostics, Setups & Cloud Workflows',
      description: 'Hands-on technical assistance for computers, software setup, cloud file organization, automated backups, and basic security audits.',
      items: [
        'Computer troubleshooting & diagnostics ($99)',
        'Full software installation & setup ($129)',
        'Email, Cloud storage & backup configuration ($79 - $149)',
        'Digital security reviews & practical hardening ($249)'
      ],
      filterKey: 'Technology Support'
    },
    {
      icon: Globe,
      title: 'Website Services',
      tagline: 'WordPress, Custom Pages & Speed Optimization',
      description: 'Comprehensive digital presence solutions from single-page portfolios to high-conversion multi-page business websites.',
      items: [
        'WordPress installation & theme configuration ($299)',
        'Responsive landing page development ($399)',
        'Multi-page professional websites ($999)',
        'Basic SEO audits & on-page optimization ($199 - $399)'
      ],
      filterKey: 'Website Services'
    },
    {
      icon: FileText,
      title: 'Digital Services',
      tagline: 'Executive Documentation, Resumes & Presentations',
      description: 'Polished digital presentation materials designed for job seekers, executives, consultants, and commercial businesses.',
      items: [
        'Executive resume & CV redesign ($149)',
        'LinkedIn profile optimization ($199)',
        'High-impact PowerPoint presentation decks ($249)',
        'Digital portfolios & graphic design services ($149 - $499)'
      ],
      filterKey: 'Digital Services'
    },
    {
      icon: GraduationCap,
      title: 'Consultation & Training',
      tagline: 'Personalized 1-on-1 Guidance & Skill Mastery',
      description: 'Dedicated coaching sessions in Excel, Microsoft Office, programming fundamentals, and general digital workflow productivity.',
      items: [
        '1-on-1 technology consultation ($49 - $99)',
        'Microsoft Office & Excel formulas coaching ($79 - $99)',
        'Technical programming guidance ($129)',
        'Digital productivity & file workflows ($99)'
      ],
      filterKey: 'Consultation & Training'
    }
  ];

  return (
    <section id="pillars" className="py-24 relative bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header in Gower Editorial Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-space">
            Specialized Tech &amp; Digital Practice
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our dual-specialty capabilities span technical execution and creative digital presentation. Choose individual solutions or bundled packages.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl gower-card p-8 bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0f2b48] group-hover:bg-[#ea580c] group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#0f2b48] transition-colors font-space">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-3 font-mono">
                    {pillar.tagline}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    {pillar.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-between w-full pt-4 mt-2 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-[#0f2b48] group-hover:text-[#ea580c] transition-colors"
                >
                  <span>Explore Offerings In This Pillar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
