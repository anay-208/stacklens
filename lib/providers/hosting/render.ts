import type { HostingProvider } from "@/lib/types/providers"

export const render: HostingProvider = {
  name: "Render",
  value: "render",
  category: "hosting",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  tiers: [
    { maxUsers: 1000, cost: 7 },
    { maxUsers: Number.POSITIVE_INFINITY, cost: 25 },
  ],
}

export function calculateRenderCost(users: number): number {
  for (const tier of pricingConfig.tiers) {
    if (users <= tier.maxUsers) {
      return tier.cost
    }
  }
  return pricingConfig.tiers[pricingConfig.tiers.length - 1].cost
}
