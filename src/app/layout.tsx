import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Support Works International, Inc. | Practical Technology & Digital Solutions",
  description: "Practical technology, website development, digital services, and 1-on-1 consultation & training for individuals, professionals, and small businesses. Straightforward flat pricing with no subscriptions.",
  keywords: [
    "Technology Support",
    "Computer Troubleshooting",
    "WordPress Setup",
    "Website Development",
    "Resume Optimization",
    "LinkedIn Profile Optimization",
    "Excel Training",
    "Support Works International"
  ],
  authors: [{ name: "Support Works International, Inc." }],
  openGraph: {
    title: "Support Works International, Inc. | Practical Technology & Digital Solutions",
    description: "Practical Technology. Digital Solutions. Professional Support. Transparent flat pricing with 57+ services & packages.",
    url: "https://supportworksinternational.com/",
    siteName: "Support Works International, Inc.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Support Works International, Inc.",
    "url": "https://supportworksinternational.com",
    "logo": "https://supportworksinternational.com/logo-shield.png",
    "description": "Practical technology, website development, digital services, and 1-on-1 consultation & training for individuals, professionals, and small businesses.",
    "email": "info@supportworksinternational.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "131 Continental Dr, Suite 305",
      "addressLocality": "City of Newark",
      "addressRegion": "Delaware",
      "postalCode": "19713",
      "addressCountry": "US"
    },
    "priceRange": "$49 - $2499"
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 antialiased font-sans selection:bg-[#0f2b48] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
