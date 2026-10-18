import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Smile, 
  Award,
  Check
} from 'lucide-react';

export default function ResultsSection() {
  const metrics = [
    {
      stat: '30–50%',
      title: 'IT & System Efficiency',
      desc: 'Observed speed and productivity gain following our computer optimization and workflow setups.',
      icon: Zap,
    },
    {
      stat: '100%',
      title: 'Flat Pricing Transparency',
      desc: 'Zero hidden surprise bills, auto-renewing traps, or forced monthly commitments.',
      icon: Award,
    },
    {
      stat: '< 48 Hours',
      title: 'Rapid Digital Delivery',
      desc: 'Average turnaround time for consultations, resume revisions, and single-service requests.',
      icon: TrendingUp,
    },
    {
      stat: '99.8%',
      title: 'Client Satisfaction',
      desc: 'Consistent positive ratings across technology support, web builds, and 1-on-1 coaching.',
      icon: Smile,
    },
  ];

  return (
    <section id="results" className="py-24 relative bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 sm:p-12 lg:p-16 border border-slate-200 shadow-sm relative overflow-hidden">
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-[#ea580c] text-[11px] font-bold tracking-widest uppercase mb-3 font-mono">
              Proven Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-space">
              We Don&apos;t Just Deliver Services &mdash; We Drive Real Results
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether optimizing a single laptop, launching a revenue-generating company website, or preparing an executive resume, our focus is always on practical, lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#ea580c] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#0f2b48] mb-2 font-space">
                      {m.stat}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-2 font-mono">
                      {m.title}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom assurance badge */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#ea580c]" />
              <span>Full confidentiality guaranteed under our strict Privacy Policy</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Standard delivery under agreed scope</span>
              <span>&bull;</span>
              <span>Encrypted communications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

