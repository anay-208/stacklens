import type { AuthProvider } from "@/lib/types/providers"

export const workos: AuthProvider = {
  name: "WorkOS",
  value: "workos",
  category: "authentication",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  cost: 0, // Free upto a million users
}

export function calculateWorkOSCost(users: number): number {
  return pricingConfig.cost
}
