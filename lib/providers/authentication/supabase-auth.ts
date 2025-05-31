import type { AuthProvider } from "@/lib/types/providers"

export const supabaseAuth: AuthProvider = {
  name: "Supabase Auth",
  value: "supabase-auth",
  category: "authentication",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  freeTier: 50000,
  proCost: 25,
}

export function calculateSupabaseAuthCost(users: number): number {
  if (users <= pricingConfig.freeTier) return 0
  return pricingConfig.proCost
}
