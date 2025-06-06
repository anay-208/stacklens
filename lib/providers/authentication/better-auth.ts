import type { AuthProvider } from "@/lib/types/providers"

export const betterAuth: AuthProvider = {
  name: "Better Auth",
  value: "better-auth",
  category: "authentication",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  cost: 0, // Always free, but additional compute costs for hashing passwords not counted
}

export function calculateBetterAuthCost(users: number): number {
  return pricingConfig.cost
}
