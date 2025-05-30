export interface DatabaseProvider {
  name: string
  baseCost: number
  tiers: {
    name: string
    cost: number
    description: string
  }[]
}

export const postgresql: DatabaseProvider = {
  name: "PostgreSQL",
  baseCost: 15,
  tiers: [
    { name: "Basic", cost: 15, description: "Small applications" },
    { name: "Standard", cost: 50, description: "Medium applications" },
    { name: "Premium", cost: 150, description: "Large applications" },
  ],
}

export function calculatePostgreSQLCost(users: number): number {
  if (users <= 1000) return 15
  if (users <= 10000) return 50
  return 150
}
