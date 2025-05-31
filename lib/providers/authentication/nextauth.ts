import type { AuthProvider } from "@/lib/types/providers"

export const nextAuth: AuthProvider = {
  name: "NextAuth.js",
  value: "nextauth",
  category: "authentication",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  cost: 0, // Always free
}

export function calculateNextAuthCost(users: number): number {
  return pricingConfig.cost
}
