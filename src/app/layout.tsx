import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 antialiased font-sans selection:bg-[#0f2b48] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
