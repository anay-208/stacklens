import type { DatabaseProvider } from "@/lib/types/providers"
import { config } from "./config"

export const redis: DatabaseProvider = {
  name: "Upstash Redis",
  value: "redis",
  category: "database",
}

const pricingConfig = {
  storage: {
    free: 0.256, // GB (256 MB free tier)
  },

  freeCommands: 500_000,
  commandCost: 0.20 / 100_000, // $0.20 per 100K commands
  storageLimit: 100, // GB (limit of Pay-as-you-go)
}

export function calculateRedisCost(users: number): number {

  const totalCommands =
    users * (config.operations.reads + config.operations.writes)
  if (totalCommands <= pricingConfig.freeCommands) {
    return 0
  }


  return totalCommands * pricingConfig.commandCost

}
