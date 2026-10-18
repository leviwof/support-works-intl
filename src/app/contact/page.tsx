'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ContactSection from '@/components/ContactSection';

function ContactContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  return (
    <div className="py-6 bg-[#000000] min-h-screen">
      <ContactSection selectedService={serviceParam} isStandalone={true} />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#000000] py-20 text-center text-neutral-400">Loading contact form...</div>}>
      <ContactContent />
    </Suspense>
  );
}
