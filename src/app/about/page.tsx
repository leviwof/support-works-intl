import React from 'react';
import Link from 'next/link';
import { 
  Laptop, 
  Globe, 
  FileText, 
  GraduationCap, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  User,
  Briefcase,
  Rocket,
  Store,
  Check
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Support Works International, Inc.',
  description: 'Practical Technology and Digital Services for Individuals and Businesses. Learn about our services, approach, and commitment.',
};

export default function AboutPage() {
  const whatWeDoItems = [
    {
      icon: Laptop,
      title: 'Technology Support',
      tagline: 'Devices, Software & Security',
      p1: 'We provide practical assistance with computers, software, email accounts, cloud storage, backups, digital organization, and basic digital security.',
      p2: 'Our technology services are designed to help customers set up, maintain, and use their devices and digital tools more effectively.',
    },
    {
      icon: Globe,
      title: 'Website Services',
      tagline: 'Online Presence & Optimization',
      p1: 'We help individuals and businesses establish, improve, and maintain their online presence.',
      p2: 'Our website services include website development, WordPress setup, landing pages, website updates, redesigns, performance optimization, and basic SEO services.',
    },
    {
      icon: FileText,
      title: 'Digital Services',
      tagline: 'Materials, Resumes & Design',
      p1: 'We provide professional digital solutions for customers who need help preparing and organizing digital materials.',
      p2: 'Our services include resume and CV preparation, LinkedIn profile optimization, presentation design, professional document design, digital portfolios, graphic design, photo editing, and document conversion.',
    },
    {
      icon: GraduationCap,
      title: 'Consultation & Training',
      tagline: '1-on-1 Guidance & Skills',
      p1: 'Technology becomes easier when you have someone to guide you.',
      p2: 'We provide one-on-one consultation and training covering computer skills, Microsoft Office, Excel, programming, website management, digital productivity, and other everyday technology requirements.',
    },
  ];

  const approachPillars = [
    'Clear communication',
    'Practical solutions',
    'Transparent service descriptions',
    'Straightforward pricing',
    'Professional delivery',
    'Customer-focused support',
  ];

  const audienceSegments = [
    {
      icon: User,
      title: 'Individuals',
      description: 'We help with everyday computer support, digital organization, resumes, documents, personal websites, and technology training.',
    },
    {
      icon: Briefcase,
      title: 'Professionals',
      description: 'We provide services to help professionals improve their resumes, LinkedIn profiles, portfolios, presentations, and digital presence.',
    },
    {
      icon: Rocket,
      title: 'Entrepreneurs',
      description: 'We assist entrepreneurs with websites, digital materials, technology setup, and practical digital solutions.',
    },
    {
      icon: Store,
      title: 'Small Businesses',
      description: 'We provide website, technology, digital documentation, basic SEO, and productivity services to help small businesses manage their digital requirements.',
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen">
      
      {/* 1. HERO SECTION (Word-for-Word Document Content) */}
      <section className="py-20 lg:py-28 relative border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 font-space">
            About Us
          </h1>
          
          <p className="text-lg sm:text-xl font-semibold text-[#ea580c] tracking-tight mb-8 font-space">
            Practical Technology and Digital Services for Individuals and Businesses
          </p>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p>
              At <strong>Support Works International, Inc.</strong>, we provide practical technology, website, digital, consultation, and training services to individuals, professionals, entrepreneurs, and small businesses.
            </p>
            <p className="text-slate-900 font-medium">
              Our goal is simple: to make everyday technology and digital tasks easier to manage.
            </p>
            <p>
              From computer troubleshooting and software setup to website development, digital document services, and personalized technology training, we provide straightforward solutions based on each customer&apos;s specific requirements.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-mono uppercase tracking-wider text-slate-700">
            <span className="bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-lg shadow-2xs">
              &bull; 100% One-Time Services
            </span>
            <span className="bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-lg shadow-2xs">
              &bull; No Subscriptions Required
            </span>
            <span className="bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-lg shadow-2xs">
              &bull; Professional Remote Delivery
            </span>
          </div>
        </div>
      </section>


      {/* 2. WHAT WE DO (Word-for-Word 4 Areas) */}
      <section className="py-20 lg:py-24 relative bg-slate-50/60 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-space">
              What We Do
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our services are organized into four primary areas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatWeDoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-8 bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200/60 flex items-center justify-center text-[#6d0cea]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c] bg-orange-50/80 px-2.5 py-1 rounded-md border border-orange-200/60">
                        {item.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-space">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {item.p1}
                    </p>
                    
                    <p className="text-slate-600 text-sm leading-relaxed pt-3 border-t border-slate-100">
                      {item.p2}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-end text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
                    <Link 
                      href="/services" 
                      className="text-[#6d0cea] hover:text-[#ea580c] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>View Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 3. OUR APPROACH (Word-for-Word Section) */}
      <section className="py-20 lg:py-24 relative bg-white border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-space">
              Our Approach
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
              Every customer has different needs. That&apos;s why we focus on understanding the requirement before providing a service.
            </p>
            <p className="text-slate-500 text-sm mt-3">
              Our approach is based on:
            </p>
          </div>

          {/* 6 Core Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {approachPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors flex items-center gap-3.5"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-bold text-slate-800 font-space">
                  {pillar}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 text-center max-w-3xl mx-auto">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
              &ldquo;We aim to provide services that are easy to understand and appropriate for the customer&apos;s specific requirements.&rdquo;
            </p>
          </div>

        </div>
      </section>


      {/* 4. FLEXIBLE ONE-TIME SERVICES */}
      <section className="py-20 lg:py-24 relative bg-[#0f172a] text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 font-space">
            Flexible One-Time Services
          </h2>

          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            <p className="text-white font-medium">
              Our services are primarily offered as one-time purchases.
            </p>
            <p>
              Customers can select an individual service or choose from our bundled service packages based on their needs. There is no requirement to purchase a subscription to access our standard services.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              When a customer requires another service in the future, they can simply place another order.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/80">
              <div className="text-orange-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
                01. No Subscriptions
              </div>
              <p className="text-xs text-slate-300">
                Zero recurring charges or hidden monthly commitments.
              </p>
            </div>

            <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/80">
              <div className="text-orange-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
                02. Individual or Bundled
              </div>
              <p className="text-xs text-slate-300">
                Choose a single task or select tailored package bundles.
              </p>
            </div>

            <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/80">
              <div className="text-orange-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
                03. Order On-Demand
              </div>
              <p className="text-xs text-slate-300">
                Return whenever you have a new task or requirement.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* 5. SERVICES FOR INDIVIDUALS AND SMALL BUSINESSES */}
      <section className="py-20 lg:py-24 relative bg-white border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-space">
              Services for Individuals and Small Businesses
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Support Works International, Inc. serves customers with a wide range of digital requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceSegments.map((segment, idx) => {
              const Icon = segment.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl p-6 bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#6d0cea] mb-5 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-space">
                      {segment.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {segment.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 6. OUR COMMITMENT TO CUSTOMERS */}
      <section className="py-20 lg:py-24 relative bg-[#f8fafc] border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200/80 text-[#ea580c] flex items-center justify-center mx-auto mb-6 shadow-xs">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6 font-space">
              Our Commitment to Customers
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left sm:text-center max-w-2xl mx-auto">
              <p className="text-slate-900 font-medium">
                We believe professional service starts with clear expectations.
              </p>
              <p>
                Before providing a service, we aim to clearly communicate the nature of the service, applicable pricing, and information required from the customer.
              </p>
              <p>
                We also work to protect customer information and use customer-provided documents, files, and information only as necessary to provide the requested service and operate our business.
              </p>
              <p className="pt-2 font-semibold text-slate-800">
                Our commitment is to provide professional service, communicate clearly, and deliver the agreed scope of work.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs font-mono uppercase tracking-wider text-slate-700">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Clear Expectations
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Data Protection
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Agreed Scope Delivery
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* 7. A STRAIGHTFORWARD WAY TO GET DIGITAL HELP */}
      <section className="py-20 lg:py-24 relative bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-space">
            A Straightforward Way to Get Digital Help
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            You don&apos;t need to be an expert to solve a technology or digital problem. Whether you need assistance with a computer, website, document, online presence, or digital skill, Support Works International, Inc. provides practical services designed to help you move forward.
          </p>

          <p className="text-base sm:text-lg font-bold text-[#ea580c] font-space mb-8">
            Choose a service. Tell us what you need. We&apos;ll take care of the rest.
          </p>

          {/* Corporate Sign-off from Doc */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-lg mx-auto mb-10">
            <div className="text-base font-extrabold text-slate-900 font-space">
              Support Works International, Inc.
            </div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6d0cea] mt-1">
              Practical Technology. Digital Solutions. Professional Support.
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider gower-btn-orange inline-flex items-center gap-2"
            >
              <span>Explore 57 Services &amp; Flat Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider gower-btn-secondary"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
