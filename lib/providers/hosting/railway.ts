import type { HostingProvider } from "@/lib/types/providers"

export const railway: HostingProvider = {
  name: "Railway",
  value: "railway",
  category: "hosting",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  tiers: [
    { maxUsers: 1000, cost: 5 },
    { maxUsers: Number.POSITIVE_INFINITY, cost: 20 },
  ],
}

export function calculateRailwayCost(users: number): number {
  for (const tier of pricingConfig.tiers) {
    if (users <= tier.maxUsers) {
      return tier.cost
    }
  }
  return pricingConfig.tiers[pricingConfig.tiers.length - 1].cost
}
