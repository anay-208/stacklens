import type { DatabaseProvider } from "@/lib/types/providers"

export const mongodb: DatabaseProvider = {
  name: "MongoDB",
  value: "mongodb",
  category: "database",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  tiers: [
    { maxUsers: 1000, cost: 9 },
    { maxUsers: 10000, cost: 25 },
    { maxUsers: 100000, cost: 57 },
    { maxUsers: Number.POSITIVE_INFINITY, cost: 150 },
  ],
}

export function calculateMongoDBCost(users: number): number {
  for (const tier of pricingConfig.tiers) {
    if (users <= tier.maxUsers) {
      return tier.cost
    }
  }
  return pricingConfig.tiers[pricingConfig.tiers.length - 1].cost
}
