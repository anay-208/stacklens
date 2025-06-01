import type { AuthProvider } from "@/lib/types/providers"

export const firebaseAuth: AuthProvider = {
  name: "Firebase Auth",
  value: "firebase-auth",
  category: "authentication",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  freeTier: 50_000,
  mau1: 0.0055,
  mau2: 0.0045
}

export function calculateFirebaseAuthCost(users: number): number {
  if (users <= pricingConfig.freeTier) return 0
  if (users <= 100_000) return users * pricingConfig.mau1
  return pricingConfig.freeTier * pricingConfig.mau1 + (users - 100_000) * pricingConfig.mau2
}
