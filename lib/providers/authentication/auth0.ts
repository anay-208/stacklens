import type { AuthProvider } from "@/lib/types/providers"

export const auth0: AuthProvider = {
  name: "Auth0",
  value: "auth0",
  category: "authentication",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  freeTier: 7000,
  tiers: [
    { name: "Free", maxUsers: 7000, cost: 0 },
    { name: "Essential", maxUsers: 1000, cost: 23 },
    { name: "Professional", maxUsers: 1000, cost: 130 },
    { name: "Enterprise", maxUsers: Number.POSITIVE_INFINITY, cost: 240 },
  ],
}

export function calculateAuth0Cost(users: number): number {
  if (users <= pricingConfig.freeTier) return 0

  // Essential tier pricing
  if (users <= 1000) return 23

  // Professional tier for higher usage
  if (users <= 10000) return 130

  // Enterprise tier
  return 240
}
