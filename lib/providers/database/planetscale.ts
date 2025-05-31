import type { DatabaseProvider } from "@/lib/types/providers"

export const planetscale: DatabaseProvider = {
  name: "PlanetScale",
  value: "planetscale",
  category: "database",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  freeTier: 1000,
  proCost: 29,
}

export function calculatePlanetScaleCost(users: number): number {
  if (users <= pricingConfig.freeTier) return 0
  return pricingConfig.proCost
}
