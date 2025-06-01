import type { AuthProvider } from "@/lib/types/providers"

export const auth0: AuthProvider = {
  name: "Auth0",
  value: "auth0",
  category: "authentication",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  freeTier: 25_000,
  beyond: {
    cost: 3000 // Assumption, because contacting sales will be needed
  }
}

export function calculateAuth0Cost(users: number): number {
  if (users <= pricingConfig.freeTier) return 0

  return pricingConfig.beyond.cost
}
