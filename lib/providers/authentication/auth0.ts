export interface AuthProvider {
  name: string
  baseCost: number
  perUserCost?: number
  freeTier: number
  tiers: {
    name: string
    maxUsers: number
    cost: number
  }[]
}

export const auth0: AuthProvider = {
  name: "Auth0",
  baseCost: 23,
  freeTier: 7000,
  tiers: [
    { name: "Free", maxUsers: 7000, cost: 0 },
    { name: "Essential", maxUsers: 1000, cost: 23 },
    { name: "Professional", maxUsers: 1000, cost: 130 },
    { name: "Enterprise", maxUsers: Number.POSITIVE_INFINITY, cost: 240 },
  ],
}

export function calculateAuth0Cost(users: number): number {
  if (users <= auth0.freeTier) return 0

  // Essential tier pricing
  if (users <= 1000) return auth0.baseCost

  // Professional tier for higher usage
  if (users <= 10000) return 130

  // Enterprise tier
  return 240
}
