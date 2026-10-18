import React from 'react';
import { 
  Laptop, 
  Globe2, 
  FileText, 
  GraduationCap, 
  ArrowUpRight,
  Flame
} from 'lucide-react';
import Link from 'next/link';

export default function ValuePillars() {
  const pillars = [
    {
      icon: Laptop,
      title: 'Technology Support',
      tagline: 'Practical Device & Software Assistance',
      description: 'Hands-on troubleshooting for computers, operating systems, applications, email accounts, cloud storage, automated backups, and basic digital security.',
      items: [
        'Computer Troubleshooting & Diagnostics',
        'Software Installation & Configuration',
        'Cloud Storage (Drive/OneDrive) & Sync',
        'Automated Backup Setup & Recovery',
        'Digital Security Review & Account Hardening'
      ],
    },
    {
      icon: Globe2,
      title: 'Website Services',
      tagline: 'Modern, Fast & High-Converting Web Platforms',
      description: 'We help individuals and businesses establish, improve, and maintain their web presence with clean responsive design, speed optimization, and SEO.',
      items: [
        'WordPress & Custom Website Setup',
        'Single Landing Pages & Multi-Page Portals',
        'Website Redesign & UI/UX Refresh',
        'Speed Optimization & Core Web Vitals',
        'SEO Website Audits & On-Page SEO'
      ],
    },
    {
      icon: FileText,
      title: 'Digital Services',
      tagline: 'Executive Documents, Branding & Media',
      description: 'Professional digital solutions for customers who need help preparing, designing, and organizing high-impact digital materials.',
      items: [
        'ATS-Compliant Resume & CV Preparation',
        'Executive LinkedIn Profile Optimization',
        'Investor Presentation & Slide Deck Design',
        'Interactive Digital Portfolio Development',
        'Graphic Design, Photo Editing & Conversion'
      ],
    },
    {
      icon: GraduationCap,
      title: 'Consultation & Training',
      tagline: '1-on-1 Personalized Digital Coaching',
      description: 'Technology becomes effortless with expert guidance. We provide live, one-on-one consultation and practical skill-building sessions.',
      items: [
        'General Computer Skills for Everyday Tasks',
        'Microsoft Office (Word, PowerPoint, Outlook)',
        'Excel Mastery (Formulas, Functions, Pivots)',
        'Programming & Developer Guidance',
        'Website Content Management Training'
      ],
    },
  ];

  return (
    <section id="expertise" className="py-24 relative bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-space">
            Specialized Tech &amp; Digital Practice
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
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
                className="group relative rounded-2xl revond-card p-8 border border-[#1c1c1c] bg-[#090909] flex flex-col justify-between overflow-hidden"
              >
                {/* Ambient hover glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#ff3b00]/5 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500" />

                <div>
                  <div className="mb-6">
                    <div className="w-13 h-13 rounded-xl bg-[#111111] border border-[#222222] flex items-center justify-center group-hover:scale-110 group-hover:border-[#ff3b00]/50 transition-all shadow-md">
                      <Icon className="w-6 h-6 text-[#ff3b00]" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff3b00] transition-colors font-space">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ff551f] mb-4 font-mono">
                    {pillar.tagline}
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#1a1a1a] mb-6">
                    {pillar.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00] mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-between w-full pt-4 mt-2 border-t border-[#181818] text-xs font-bold uppercase tracking-wider text-[#ff3b00] hover:text-[#ff551f] group-hover:translate-x-1 transition-all"
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
