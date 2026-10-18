'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#000000] border-t border-[#1a1a1a] text-neutral-400 text-xs pt-16 pb-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Slogan from Client Reference Image */}
        <div className="text-center mb-12">
          <p className="text-sm sm:text-base text-neutral-300 font-medium tracking-wide">
            We don’t just deliver services &mdash; we drive transformation that lasts.
          </p>
        </div>

        {/* Middle Navigation Links Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pb-8 border-b border-[#141414] font-mono text-[11px] font-bold uppercase tracking-wider">
          <Link 
            href="/privacy-policy" 
            className="text-neutral-400 hover:text-[#ff3b00] transition-colors"
          >
            PRIVACY POLICY
          </Link>
          <Link 
            href="/terms-and-conditions" 
            className="text-neutral-400 hover:text-[#ff3b00] transition-colors"
          >
            TERMS &amp; CONDITIONS
          </Link>
          <Link 
            href="/payment-policy" 
            className="text-neutral-400 hover:text-[#ff3b00] transition-colors"
          >
            PAYMENT POLICY
          </Link>
          <Link 
            href="/service-delivery" 
            className="text-neutral-400 hover:text-[#ff3b00] transition-colors"
          >
            SERVICE DELIVERY
          </Link>
          <Link 
            href="/contact" 
            className="text-neutral-400 hover:text-[#ff3b00] transition-colors"
          >
            CONTACT US
          </Link>
        </div>

        {/* Parallel Information Row: Address on Left, Email & Website on Parallel Side */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#141414] font-mono text-xs">
          {/* Corporate Registered Address (Left side) */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block">
              Registered Corporate Address
            </span>
            <p className="text-neutral-300 text-xs sm:text-[13px]">
              131 Continental Dr, Suite 305, City of Newark, County of New Castle Delaware 19713
            </p>
          </div>

          {/* Email and Website (Parallel Right side) */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center md:text-right">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block">
                E-Mail
              </span>
              <a 
                href="mailto:info@supportworksinternational.com" 
                className="text-white hover:text-[#ff3b00] transition-colors font-semibold"
              >
                info@supportworksinternational.com
              </a>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block">
                Website
              </span>
              <span className="text-neutral-300">
                supportworksinternational.com
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 text-center font-mono text-[11px] text-neutral-400">
          <p>
            Copyright &copy; {currentYear} Support Works International, Inc. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
