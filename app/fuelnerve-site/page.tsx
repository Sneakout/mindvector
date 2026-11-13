import type { Metadata } from "next";
import FuelNervePage from "../apps/fuelnerve/page";
import { FUELNERVE_SITE_ORIGIN } from "../../lib/fuelnerve-site";

const canonical = `${FUELNERVE_SITE_ORIGIN}/`;

export const metadata: Metadata = {
  metadataBase: new URL(FUELNERVE_SITE_ORIGIN),
  applicationName: "FuelNerve",
  title: "FuelNerve | Petrol Pump Management Software in India",
  description:
    "FuelNerve is petrol pump management software for shifts, nozzle readings, tank stock, sales, collections, credit, expenses, accounts and owner intelligence.",
  alternates: { canonical },
  authors: [{ name: "MindVector", url: "https://mindvector.tech/" }],
  creator: "MindVector",
  publisher: "MindVector",
  category: "business software",
  openGraph: {
    title: "FuelNerve | Petrol Pump Management Software in India",
    description:
      "Run shifts, fuel inventory, sales, collections, credit, accounts and owner intelligence from one petrol pump operating system.",
    url: canonical,
    siteName: "FuelNerve",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/fuelnerve-icon-512.png",
        width: 512,
        height: 512,
        alt: "FuelNerve petrol pump management software",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "FuelNerve | Petrol Pump Management Software in India",
    description:
      "One operating system for petrol pump shifts, stock, collections, accounts and owner intelligence.",
    images: ["/fuelnerve-icon-512.png"],
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
      { url: "/fuelnerve-icon-48.png", type: "image/png", sizes: "48x48" },
      {
        url: "/fuelnerve-icon-512.png",
        type: "image/png",
        sizes: "512x512",
      },
      { url: "/fuelnerve-mark.svg", type: "image/svg+xml" },
    ],
    apple: [
      {
        url: "/fuelnerve-apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
};

export default function Page() {
  return <FuelNervePage siteUrl={canonical} />;
}
