import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindVector | Digital products built with intent.",
  description: "MindVector is an independent digital product studio. We design and build mobile apps, web platforms, business systems, and applied AI.",
  metadataBase: new URL("https://mindvector.tech"),
  applicationName: "MindVector",
  keywords: ["MindVector", "digital product studio", "iOS development", "Android development", "web development", "CRM", "billing systems", "AI development"],
  authors: [{ name: "MindVector" }],
  creator: "MindVector",
  publisher: "MindVector",
  category: "business",
  alternates: { canonical: "https://mindvector.tech/" },
  openGraph: {
    title: "MindVector | Digital products built with intent.",
    description: "Mobile apps, web platforms, business systems, and applied AI—designed and built as one system.",
    url: "https://mindvector.tech/",
    siteName: "MindVector",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MindVector | Digital products built with intent.",
    description: "An independent digital product studio.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://mindvector.tech/#organization", name: "MindVector", url: "https://mindvector.tech/", logo: "https://mindvector.tech/favicon.svg", description: "MindVector is an independent digital product studio for mobile, web, business systems and applied AI." },
      { "@type": "WebSite", "@id": "https://mindvector.tech/#website", name: "MindVector", url: "https://mindvector.tech/", publisher: { "@id": "https://mindvector.tech/#organization" }, inLanguage: "en-US" },
    ],
  };
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
