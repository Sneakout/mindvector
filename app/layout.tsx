import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindVector | Your mind, represented.",
  description: "MindVector is building an evolving computational representation of a person’s memories, relationships, preferences, and patterns — a personal AI that learns you over time.",
  metadataBase: new URL("https://mindvector.tech"),
  applicationName: "MindVector",
  keywords: ["MindVector", "personal AI", "digital identity", "computational representation", "AI agent", "memory and context", "Viral social network"],
  authors: [{ name: "MindVector" }],
  creator: "MindVector",
  publisher: "MindVector",
  category: "technology",
  alternates: { canonical: "https://mindvector.tech/" },
  openGraph: {
    title: "MindVector | Your mind, represented.",
    description: "A living computational representation of a person — built from memory, context, relationships, and perspective.",
    url: "https://mindvector.tech/",
    siteName: "MindVector",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MindVector | Your mind, represented.",
    description: "A living computational representation of a person.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://mindvector.tech/#organization", name: "MindVector", url: "https://mindvector.tech/", logo: "https://mindvector.tech/favicon.svg", description: "MindVector is building an evolving computational representation of a person." },
      { "@type": "WebSite", "@id": "https://mindvector.tech/#website", name: "MindVector", url: "https://mindvector.tech/", publisher: { "@id": "https://mindvector.tech/#organization" }, inLanguage: "en-US" },
    ],
  };
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
