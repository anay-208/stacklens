import type { AuthProvider } from "@/lib/types/providers"

export const firebaseAuth: AuthProvider = {
  name: "Firebase Auth",
  value: "firebase-auth",
  category: "authentication",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  cost: 0, // Always free
}

export function calculateFirebaseAuthCost(users: number): number {
  return pricingConfig.cost
}
