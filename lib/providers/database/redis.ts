import type { DatabaseProvider } from "@/lib/types/providers"

export const redis: DatabaseProvider = {
  name: "Redis",
  value: "redis",
  category: "database",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  tiers: [
    { maxUsers: 1000, cost: 5 },
    { maxUsers: Number.POSITIVE_INFINITY, cost: 15 },
  ],
}

export function calculateRedisCost(users: number): number {
  for (const tier of pricingConfig.tiers) {
    if (users <= tier.maxUsers) {
      return tier.cost
    }
  }
  return pricingConfig.tiers[pricingConfig.tiers.length - 1].cost
}
