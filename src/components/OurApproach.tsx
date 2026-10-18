import React from 'react';
import { 
  ClipboardCheck, 
  Wrench, 
  Send, 
  HeartHandshake, 
  Check
} from 'lucide-react';

export default function OurApproach() {
  const steps = [
    {
      num: '01',
      title: 'Assessment & Strategy',
      subtitle: 'Clear Scope & Fixed Quote',
      desc: 'We review your exact technical or digital requirement upfront. No guesswork, no retainers — just clear communication and an agreed flat price.',
      icon: ClipboardCheck,
    },
    {
      num: '02',
      title: 'Expert Execution',
      subtitle: 'Precision & Industry Standards',
      desc: 'We execute the agreed deliverables — writing clean website code, optimizing your PC, redesigning your resume, or conducting 1-on-1 coaching.',
      icon: Wrench,
    },
    {
      num: '03',
      title: 'Digital Delivery & Review',
      subtitle: 'Verification & Quality Check',
      desc: 'You receive all digital files, credentials, or live site deployments. We conduct verification tests to ensure 100% satisfaction before marking complete.',
      icon: Send,
    },
    {
      num: '04',
      title: 'Flexible Ongoing Support',
      subtitle: 'Zero Locked Contracts',
      desc: 'You own your assets completely. Whenever you need future updates, troubleshooting, or coaching, simply place another one-time service order.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="approach" className="py-24 relative bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-space">
            How We Deliver Success
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            A straightforward, transparent engagement model built on clarity, accountability, and practical execution.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl revond-card p-6 border border-[#1a1a1a] bg-[#090909] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-[#ff3b00] font-mono">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#222222] flex items-center justify-center text-[#ff3b00]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 font-space">
                    {step.title}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ff551f] mb-3 font-mono">
                    {step.subtitle}
                  </div>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#181818] mt-6 flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
                  <Check className="w-3.5 h-3.5 text-[#ff3b00]" />
                  <span>GUARANTEED SCOPE OF WORK</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
