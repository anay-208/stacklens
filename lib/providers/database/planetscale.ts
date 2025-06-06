import type { DatabaseProvider } from "@/lib/types/providers"
import { config } from "./config"

export const planetscale: DatabaseProvider = {
  name: "PlanetScale",
  value: "planetscale",
  category: "database",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  baseStorage: 10, // GB included in base tier
  extraStoragePerGB: 1.5, // $ per GB overage

  tiers: [
    { maxUsers: 100_000, cost: 39 },
    { maxUsers: 200_000, cost: 59 },
    { maxUsers: 400_000, cost: 99 },
    { maxUsers: 1_000_000, cost: 149 },
  ],
}

export function calculatePlanetScaleCost(users: number): number {
  // Total storage used by all users
  const totalStorageUsed = users * config.storage.perUser // in GB

  // Find the right tier
  const tier = pricingConfig.tiers.find(t => users <= t.maxUsers) 
    ?? pricingConfig.tiers[pricingConfig.tiers.length - 1]

  // Calculate extra storage cost
  const extraStorage = Math.max(totalStorageUsed - pricingConfig.baseStorage, 0)
  const extraStorageCost = extraStorage * pricingConfig.extraStoragePerGB

  return tier.cost + extraStorageCost
}
