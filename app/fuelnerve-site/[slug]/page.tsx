import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FuelNerveTopicPage, {
  type TopicPageContent,
} from "../../components/FuelNerveTopicPage";
import {
  FUELNERVE_GUIDE_SLUGS,
  FUELNERVE_SITE_ORIGIN,
  type FuelNerveGuideSlug,
} from "../../../lib/fuelnerve-site";
import {
  content as dsrContent,
  metadata as dsrMetadata,
} from "../../petrol-pump-dsr-software/page";
import {
  content as inventoryContent,
  metadata as inventoryMetadata,
} from "../../petrol-pump-inventory-management/page";
import {
  content as shiftContent,
  metadata as shiftMetadata,
} from "../../petrol-pump-shift-reconciliation/page";
import {
  content as accountingContent,
  metadata as accountingMetadata,
} from "../../petrol-pump-accounting-software/page";
import {
  content as creditContent,
  metadata as creditMetadata,
} from "../../petrol-pump-credit-management/page";
import {
  content as pricingContent,
  metadata as pricingMetadata,
} from "../../petrol-pump-software-pricing-india/page";

type GuideDefinition = {
  content: TopicPageContent;
  metadata: Metadata;
};

const guides: Record<FuelNerveGuideSlug, GuideDefinition> = {
  "petrol-pump-dsr-software": {
    content: dsrContent,
    metadata: dsrMetadata,
  },
  "petrol-pump-inventory-management": {
    content: inventoryContent,
    metadata: inventoryMetadata,
  },
  "petrol-pump-shift-reconciliation": {
    content: shiftContent,
    metadata: shiftMetadata,
  },
  "petrol-pump-accounting-software": {
    content: accountingContent,
    metadata: accountingMetadata,
  },
  "petrol-pump-credit-management": {
    content: creditContent,
    metadata: creditMetadata,
  },
  "petrol-pump-software-pricing-india": {
    content: pricingContent,
    metadata: pricingMetadata,
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return FUELNERVE_GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!FUELNERVE_GUIDE_SLUGS.includes(slug as FuelNerveGuideSlug)) {
    return {};
  }

  const source = guides[slug as FuelNerveGuideSlug].metadata;
  const canonical = `${FUELNERVE_SITE_ORIGIN}/${slug}`;
  const sourceOpenGraph = source.openGraph ?? {};

  return {
    ...source,
    metadataBase: new URL(FUELNERVE_SITE_ORIGIN),
    applicationName: "FuelNerve",
    alternates: { canonical },
    openGraph: {
      ...sourceOpenGraph,
      url: canonical,
      siteName: "FuelNerve",
    },
    icons: {
      icon: [
        {
          url: "/fuelnerve-icon-48.png",
          type: "image/png",
          sizes: "48x48",
        },
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
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!FUELNERVE_GUIDE_SLUGS.includes(slug as FuelNerveGuideSlug)) {
    notFound();
  }

  const source = guides[slug as FuelNerveGuideSlug].content;
  const content = {
    ...source,
    canonical: `${FUELNERVE_SITE_ORIGIN}/${slug}`,
  };

  return <FuelNerveTopicPage content={content} />;
}
