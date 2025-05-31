import type { HostingProvider } from "@/lib/types/providers"

export const netlify: HostingProvider = {
  name: "Netlify",
  value: "netlify",
  category: "hosting",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  tiers: [
    { maxUsers: 1000, cost: 0 },
    { maxUsers: 100000, cost: 19 },
    { maxUsers: Number.POSITIVE_INFINITY, cost: 99 },
  ],
}

export function calculateNetlifyCost(users: number): number {
  for (const tier of pricingConfig.tiers) {
    if (users <= tier.maxUsers) {
      return tier.cost
    }
  }
  return pricingConfig.tiers[pricingConfig.tiers.length - 1].cost
}
