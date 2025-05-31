import type { DatabaseProvider } from "@/lib/types/providers"

export const mysql: DatabaseProvider = {
  name: "MySQL",
  value: "mysql",
  category: "database",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  tiers: [
    { maxUsers: 1000, cost: 15 },
    { maxUsers: 10000, cost: 50 },
    { maxUsers: Number.POSITIVE_INFINITY, cost: 150 },
  ],
}

export function calculateMySQLCost(users: number): number {
  for (const tier of pricingConfig.tiers) {
    if (users <= tier.maxUsers) {
      return tier.cost
    }
  }
  return pricingConfig.tiers[pricingConfig.tiers.length - 1].cost
}
