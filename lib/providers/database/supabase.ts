export interface DatabaseProvider {
  name: string
  baseCost: number
  tiers: {
    name: string
    cost: number
    description: string
  }[]
}

export const supabase: DatabaseProvider = {
  name: "Supabase",
  baseCost: 25,
  tiers: [
    { name: "Free", cost: 0, description: "Up to 500MB database" },
    { name: "Pro", cost: 25, description: "8GB database" },
    { name: "Team", cost: 599, description: "Unlimited database" },
  ],
}

export function calculateSupabaseCost(users: number): number {
  if (users <= 1000) return 0
  if (users <= 100000) return 25
  return 599
}
