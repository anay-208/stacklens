import type { HostingProvider } from "@/lib/types/providers"

export const digitalocean: HostingProvider = {
  name: "DigitalOcean",
  value: "digitalocean",
  category: "hosting",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  baseCost: 5,
}

export function calculateDigitalOceanCost(users: number): number {
  return pricingConfig.baseCost
}
