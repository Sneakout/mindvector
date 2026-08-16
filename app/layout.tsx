import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindVector | Your mind, represented.",
  description: "MindVector is building an evolving computational representation of a person's memories, relationships, preferences and patterns.",
  metadataBase: new URL("https://mindvector.tech"),
  openGraph: { title: "MindVector | Your mind, represented.", description: "A living computational representation of a person.", url: "https://mindvector.tech", siteName: "MindVector", type: "website" },
  twitter: { card: "summary_large_image", title: "MindVector | Your mind, represented.", description: "A living computational representation of a person." },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
