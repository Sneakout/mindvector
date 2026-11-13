export function MindVectorStructuredData() {
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
