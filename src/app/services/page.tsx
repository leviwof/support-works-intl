'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PricingCatalog from '@/components/PricingCatalog';

export default function ServicesPage() {
  const router = useRouter();

  const handleSelectService = (serviceName: string) => {
    router.push(`/contact?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen py-10">
      <PricingCatalog onSelectService={handleSelectService} />
    </div>
  );
}
