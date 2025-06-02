import type { DatabaseProvider } from "@/lib/types/providers"

export const mongodb: DatabaseProvider = {
  name: "MongoDB",
  value: "mongodb",
  category: "database",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  tiers: [ // As always, it is a rough estimate, and estimated by GPT based on usage
    { maxUsers: 100_000, cost: 57 },
    { maxUsers: 200_000, cost: 144 },
    { maxUsers: 400_000, cost: 389 },
    { maxUsers: 1_000_000, cost: 749 }
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
