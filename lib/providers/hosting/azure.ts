import type { HostingProvider } from "@/lib/types/providers"

export const azure: HostingProvider = {
  name: "Azure",
  value: "azure",
  category: "hosting",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  tiers: [
    { maxUsers: 1000, cost: 0 },
    { maxUsers: Number.POSITIVE_INFINITY, cost: 13 },
  ],
}

export function calculateAzureCost(users: number): number {
  for (const tier of pricingConfig.tiers) {
    if (users <= tier.maxUsers) {
      return tier.cost
    }
  }
  return pricingConfig.tiers[pricingConfig.tiers.length - 1].cost
}
