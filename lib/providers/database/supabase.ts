import type { DatabaseProvider } from "@/lib/types/providers"

export const supabase: DatabaseProvider = {
  name: "Supabase",
  value: "supabase",
  category: "database",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  tiers: [
    { maxUsers: 1000, cost: 0 },
    { maxUsers: 100000, cost: 25 },
    { maxUsers: Number.POSITIVE_INFINITY, cost: 599 },
  ],
}

export function calculateSupabaseCost(users: number): number {
  for (const tier of pricingConfig.tiers) {
    if (users <= tier.maxUsers) {
      return tier.cost
    }
  }
  return pricingConfig.tiers[pricingConfig.tiers.length - 1].cost
}
