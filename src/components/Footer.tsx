'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0b1523] border-t border-slate-800/80 text-slate-400 text-xs pt-14 pb-12 font-sans relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Brand Shield Logo & Slogan */}
        <div className="mb-10 flex flex-col items-center justify-center space-y-3">
          <Link href="/" className="inline-block transition-transform hover:scale-105">
            <img 
              src="/logo-shield.png" 
              alt="Support Works International Logo" 
              className="w-auto h-12 object-contain drop-shadow-[0_4px_16px_rgba(109,12,234,0.35)]" 
            />
          </Link>
          <div className="font-extrabold text-base tracking-tight text-white font-space">
            Support Works International, Inc.
          </div>
          <p className="text-sm sm:text-base text-slate-300 font-medium tracking-wide max-w-lg mx-auto">
            We don’t just deliver services &mdash; we drive transformation that lasts.
          </p>
        </div>

        {/* Policy Links in an Orderly Line */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 pb-8 border-b border-slate-800/80 font-mono text-[11px] font-bold uppercase tracking-wider">
          <Link 
            href="/privacy-policy" 
            className="text-slate-400 hover:text-[#ea580c] transition-colors"
          >
            PRIVACY POLICY
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link 
            href="/terms-and-conditions" 
            className="text-slate-400 hover:text-[#ea580c] transition-colors"
          >
            TERMS &amp; CONDITIONS
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link 
            href="/payment-policy" 
            className="text-slate-400 hover:text-[#ea580c] transition-colors"
          >
            PAYMENT POLICY
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link 
            href="/service-delivery" 
            className="text-slate-400 hover:text-[#ea580c] transition-colors"
          >
            SERVICE DELIVERY
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link 
            href="/contact" 
            className="text-slate-400 hover:text-[#ea580c] transition-colors"
          >
            CONTACT US
          </Link>
        </div>

        {/* Corporate Address & Email Stacked One Below the Other */}
        <div className="py-8 space-y-4 font-mono text-xs border-b border-slate-800/80">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
              Registered Corporate Address
            </span>
            <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed max-w-xl mx-auto">
              131 Continental Dr, Suite 305, City of Newark, County of New Castle Delaware 19713
            </p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
              E-Mail
            </span>
            <a 
              href="mailto:info@supportworksinternational.com" 
              className="text-white hover:text-[#ea580c] transition-colors font-semibold text-xs sm:text-[13px]"
            >
              info@supportworksinternational.com
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 text-center font-mono text-[11px] text-slate-500">
          <p>
            Copyright &copy; {currentYear} Support Works International, Inc. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

