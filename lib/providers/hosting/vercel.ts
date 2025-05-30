export interface HostingProvider {
  name: string
  baseCost: number
  tiers: {
    name: string
    cost: number
    description: string
  }[]
}

export const vercel: HostingProvider = {
  name: "Vercel",
  baseCost: 20,
  tiers: [
    { name: "Hobby", cost: 0, description: "Personal projects" },
    { name: "Pro", cost: 20, description: "Professional projects" },
    { name: "Team", cost: 150, description: "Team collaboration" },
  ],
}

export function calculateVercelCost(users: number): number {
  if (users <= 1000) return 0
  if (users <= 100000) return 20
  return 150
}
