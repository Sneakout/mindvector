import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/apps/fuel-ledger",
        destination: "/apps/fuelnerve",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
