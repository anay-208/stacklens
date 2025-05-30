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

export const nextAuth: AuthProvider = {
  name: "NextAuth.js",
  baseCost: 0,
  freeTier: Number.POSITIVE_INFINITY,
  tiers: [{ name: "Free", maxUsers: Number.POSITIVE_INFINITY, cost: 0 }],
}

export function calculateNextAuthCost(users: number): number {
  return 0 // Always free
}
