'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X 
} from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services & Pricing', href: '/services' },
    { label: 'Our Approach', href: '/approach' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#000000]/95 backdrop-blur-xl border-b border-[#1a1a1a] shadow-2xl py-3.5' 
            : 'bg-[#000000] py-5 border-b border-[#141414]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#ff3b00] flex items-center justify-center text-white shadow-lg shadow-[#ff3b00]/30 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M4 4h7a5 5 0 0 1 5 5c0 2.1-1.3 3.9-3.2 4.6L18 20h-4.5l-4.5-5.5H8.5V20H4V4zm4.5 7.5h2.5a2 2 0 1 0 0-4H8.5v4z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-[#ff3b00] transition-colors font-space">
                  SUPPORT WORKS
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#ff3b00]/15 text-[#ff3b00] border border-[#ff3b00]/30 font-mono">
                  INC
                </span>
              </div>
              <span className="text-[10px] block font-bold tracking-[0.2em] text-neutral-400 uppercase font-mono">
                INTERNATIONAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Each redirects to its own dedicated page) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive 
                      ? 'text-[#ff3b00]' 
                      : 'text-neutral-300 hover:text-[#ff3b00]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[90px] z-40 bg-[#080808]/98 backdrop-blur-2xl border-b border-[#222222] px-6 py-8 shadow-2xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold uppercase tracking-wider transition-colors block py-1 ${
                  pathname === link.href ? 'text-[#ff3b00]' : 'text-neutral-200 hover:text-[#ff3b00]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
