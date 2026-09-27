import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindVector — Digital Product & Software Studio",
  description:
    "MindVector builds focused products including FuelNerve and Fresh Fold, and partners with teams on mobile apps, web platforms, business systems and applied AI.",
  metadataBase: new URL("https://mindvector.tech"),
  applicationName: "MindVector",
  keywords: [
    "MindVector",
    "FuelNerve",
    "Fresh Fold",
    "digital product company",
    "product development studio",
    "iOS app development",
    "Android app development",
    "web application development",
    "business software",
    "CRM development",
    "billing systems",
    "AI development",
    "machine learning",
  ],
  authors: [{ name: "MindVector" }],
  creator: "MindVector",
  publisher: "MindVector",
  category: "business",
  alternates: { canonical: "https://mindvector.tech/" },
  openGraph: {
    title: "MindVector — Digital Product & Software Studio",
    description:
      "MindVector builds focused products including FuelNerve and Fresh Fold, and partners with teams on mobile apps, web platforms, business systems and applied AI.",
    url: "https://mindvector.tech/",
    siteName: "MindVector",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MindVector — Digital Product & Software Studio",
    description:
      "Focused software products and product-development partnerships for ambitious teams.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/mindvector-icon-48.png",
        type: "image/png",
        sizes: "48x48",
      },
      {
        url: "/mindvector-icon-512.png",
        type: "image/png",
        sizes: "512x512",
      },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      {
        url: "/mindvector-apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mindvector.tech/#organization",
        name: "MindVector",
        url: "https://mindvector.tech/",
        email: "hello@mindvector.tech",
        logo: {
          "@type": "ImageObject",
          url: "https://mindvector.tech/mindvector-icon-512.png",
          width: 512,
          height: 512,
        },
        description:
          "MindVector builds focused software products and partners with teams to create mobile apps, web platforms, business systems and applied AI.",
      },
      {
        "@type": "WebSite",
        "@id": "https://mindvector.tech/#website",
        name: "MindVector",
        alternateName: "mindvector.tech",
        url: "https://mindvector.tech/",
        publisher: { "@id": "https://mindvector.tech/#organization" },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://mindvector.tech/#webpage",
        url: "https://mindvector.tech/",
        name: "MindVector — Digital Product & Software Studio",
        description:
          "MindVector builds focused products including FuelNerve and Fresh Fold, and partners with teams on mobile apps, web platforms, business systems and applied AI.",
        isPartOf: { "@id": "https://mindvector.tech/#website" },
        about: { "@id": "https://mindvector.tech/#organization" },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://mindvector.tech/apps/fuelnerve#software",
        name: "FuelNerve",
        url: "https://mindvector.tech/apps/fuelnerve",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Petrol Pump Management Software",
        operatingSystem: "Web",
        description:
          "An intelligent operating system for petrol pumps, covering shifts, inventory, collections, finance and owner intelligence.",
        creator: { "@id": "https://mindvector.tech/#organization" },
      },
      {
        "@type": "SoftwareApplication",
        name: "Fresh Fold",
        url: "https://mindvector.tech/apps/fresh-fold/",
        applicationCategory: "LifestyleApplication",
        description:
          "A connected laundry and garment-care platform for customers, service partners and delivery teams.",
        creator: { "@id": "https://mindvector.tech/#organization" },
      },
    ],
  };
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
