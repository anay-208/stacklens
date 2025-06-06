import type { HostingProvider } from "@/lib/types/providers"

export const vercel: HostingProvider = {
  name: "Vercel",
  value: "vercel",
  category: "hosting",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  tiers: [
    { maxUsers: 1000, cost: 0 },
    { maxUsers: 100000, cost: 20 },
    { maxUsers: Number.POSITIVE_INFINITY, cost: 150 },
  ],
}

export function calculateVercelCost(users: number): number {
  for (const tier of pricingConfig.tiers) {
    if (users <= tier.maxUsers) {
      return tier.cost
    }
  }
  return pricingConfig.tiers[pricingConfig.tiers.length - 1].cost
}
