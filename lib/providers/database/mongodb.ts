export interface DatabaseProvider {
  name: string
  baseCost: number
  tiers: {
    name: string
    cost: number
    description: string
  }[]
}

export const mongodb: DatabaseProvider = {
  name: "MongoDB",
  baseCost: 9,
  tiers: [
    { name: "M0 (Free)", cost: 0, description: "512 MB storage" },
    { name: "M2", cost: 9, description: "2 GB storage" },
    { name: "M5", cost: 25, description: "5 GB storage" },
    { name: "M10", cost: 57, description: "10 GB storage" },
  ],
}

export function calculateMongoDBCost(users: number): number {
  if (users <= 1000) return 9
  if (users <= 10000) return 25
  if (users <= 100000) return 57
  return 150
}
