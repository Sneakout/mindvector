export const FUELNERVE_SITE_ORIGIN = "https://fuelnerve.mindvector.tech";

export const FUELNERVE_GUIDE_SLUGS = [
  "petrol-pump-dsr-software",
  "petrol-pump-inventory-management",
  "petrol-pump-shift-reconciliation",
  "petrol-pump-accounting-software",
  "petrol-pump-credit-management",
  "petrol-pump-software-pricing-india",
] as const;

export type FuelNerveGuideSlug = (typeof FUELNERVE_GUIDE_SLUGS)[number];

export const FUELNERVE_MARKETING_HOST = "fuelnerve.mindvector.tech";
export const FUELNERVE_APP_ORIGIN = "https://fuel.mindvector.tech";
