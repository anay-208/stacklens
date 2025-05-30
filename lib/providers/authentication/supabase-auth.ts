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

export const supabaseAuth: AuthProvider = {
  name: "Supabase Auth",
  baseCost: 0,
  freeTier: 50000,
  tiers: [
    { name: "Free", maxUsers: 50000, cost: 0 },
    { name: "Pro", maxUsers: Number.POSITIVE_INFINITY, cost: 25 },
  ],
}

export function calculateSupabaseAuthCost(users: number): number {
  if (users <= supabaseAuth.freeTier) return 0
  return 25
}
