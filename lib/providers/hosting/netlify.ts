export interface HostingProvider {
  name: string
  baseCost: number
  tiers: {
    name: string
    cost: number
    description: string
  }[]
}

export const netlify: HostingProvider = {
  name: "Netlify",
  baseCost: 19,
  tiers: [
    { name: "Starter", cost: 0, description: "Personal projects" },
    { name: "Pro", cost: 19, description: "Professional projects" },
    { name: "Business", cost: 99, description: "Team projects" },
  ],
}

export function calculateNetlifyCost(users: number): number {
  if (users <= 1000) return 0
  if (users <= 100000) return 19
  return 99
}
