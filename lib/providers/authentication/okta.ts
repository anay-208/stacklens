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

export const okta: AuthProvider = {
  name: "Okta",
  baseCost: 0,
  perUserCost: 2,
  freeTier: 0,
  tiers: [{ name: "Workforce Identity", maxUsers: Number.POSITIVE_INFINITY, cost: 2 }],
}

export function calculateOktaCost(users: number): number {
  return users * (okta.perUserCost || 0)
}
