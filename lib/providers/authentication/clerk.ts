import type { AuthProvider } from "@/lib/types/providers"

export const clerk: AuthProvider = {
  name: "Clerk",
  value: "clerk",
  category: "authentication",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  freeTier: 10000,
  baseCost: 25,
  mau: 0.02,
}

export function calculateClerkCost(users: number): number {
  if (users <= pricingConfig.freeTier) return 0
  return pricingConfig.baseCost + (users - pricingConfig.freeTier) * pricingConfig.mau
}
