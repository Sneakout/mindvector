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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
