import type { HostingProvider } from "@/lib/types/providers"

export const gcp: HostingProvider = {
  name: "Google Cloud",
  value: "gcp",
  category: "hosting",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  tiers: [
    { maxUsers: 1000, cost: 0 },
    { maxUsers: Number.POSITIVE_INFINITY, cost: 30 },
  ],
}

export function calculateGCPCost(users: number): number {
  for (const tier of pricingConfig.tiers) {
    if (users <= tier.maxUsers) {
      return tier.cost
    }
  }
  return pricingConfig.tiers[pricingConfig.tiers.length - 1].cost
}
