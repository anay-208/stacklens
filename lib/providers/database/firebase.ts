import type { DatabaseProvider } from "@/lib/types/providers"

export const firebase: DatabaseProvider = {
  name: "Firebase",
  value: "firebase",
  category: "database",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  cost: 0, // Generous free tier
}

export function calculateFirebaseCost(users: number): number {
  return pricingConfig.cost
}
