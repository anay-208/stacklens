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

export const firebaseAuth: AuthProvider = {
  name: "Firebase Auth",
  baseCost: 0,
  freeTier: Number.POSITIVE_INFINITY,
  tiers: [{ name: "Free", maxUsers: Number.POSITIVE_INFINITY, cost: 0 }],
}

export function calculateFirebaseAuthCost(users: number): number {
  return 0 // Always free
}
