import type { AuthProvider } from "@/lib/types/providers"

export const cognito: AuthProvider = {
  name: "AWS Cognito",
  value: "cognito",
  category: "authentication",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  freeTier: 50000,
  perUserCost: 0.0055,
}

export function calculateCognitoCost(users: number): number {
  if (users <= pricingConfig.freeTier) return 0
  return (users - pricingConfig.freeTier) * pricingConfig.perUserCost
}
