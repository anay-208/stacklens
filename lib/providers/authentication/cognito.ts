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

export const cognito: AuthProvider = {
  name: "AWS Cognito",
  baseCost: 0,
  perUserCost: 0.0055,
  freeTier: 50000,
  tiers: [
    { name: "Free", maxUsers: 50000, cost: 0 },
    { name: "Pay per use", maxUsers: Number.POSITIVE_INFINITY, cost: 0.0055 },
  ],
}

export function calculateCognitoCost(users: number): number {
  if (users <= cognito.freeTier) return 0
  return (users - cognito.freeTier) * (cognito.perUserCost || 0)
}
