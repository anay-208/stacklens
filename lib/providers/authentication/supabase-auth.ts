import type { AuthProvider } from "@/lib/types/providers"

export const supabaseAuth: AuthProvider = {
  name: "Supabase Auth",
  value: "supabase-auth",
  category: "authentication",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  freeTier: 50000,
  plans: {
    pro: {
      cost: 25,
      includedUsers: 100_000,
      mau: 0.00325
    }
  }
}

export function calculateSupabaseAuthCost(users: number): number {
  if (users <= pricingConfig.freeTier) return 0
  if (users <= pricingConfig.plans.pro.includedUsers) return pricingConfig.plans.pro.cost
  return pricingConfig.plans.pro.cost + (users - pricingConfig.plans.pro.includedUsers) * pricingConfig.plans.pro.mau
}
