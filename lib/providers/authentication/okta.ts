import type { AuthProvider } from "@/lib/types/providers"

export const okta: AuthProvider = {
  name: "Okta",
  value: "okta",
  category: "authentication",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  perUserCost: 2,
}

export function calculateOktaCost(users: number): number {
  return users * pricingConfig.perUserCost
}
