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

export const clerk: AuthProvider = {
  name: "Clerk",
  baseCost: 25,
  freeTier: 10000,
  tiers: [
    { name: "Free", maxUsers: 10000, cost: 0 },
    { name: "Pro", maxUsers: Number.POSITIVE_INFINITY, cost: 25 },
  ],
}

export function calculateClerkCost(users: number): number {
  if (users <= clerk.freeTier) return 0
  return clerk.baseCost
}
