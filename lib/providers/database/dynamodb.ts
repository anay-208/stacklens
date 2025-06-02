import type { DatabaseProvider } from "@/lib/types/providers"
import { config } from "./config"

export const dynamodb: DatabaseProvider = {
  name: "AWS DynamoDB",
  value: "dynamodb",
  category: "database",
}


const pricingConfig = {
  cost: 0,
  storage: 0.25, // $ per GB/month
  operations: {
      read: (0.125 * 2) / 1_000_000,  
      write: (0.625 * 1.5) / 1_000_000, 
  },
}

// A really rough estimate

export function calculateDynamoDBCost(users: number): number {
  const storageCost =
    config.storage.perUser * pricingConfig.storage * users

  const operationsCost =
    users *
    (config.operations.reads * pricingConfig.operations.read +
      config.operations.writes * pricingConfig.operations.write)

  return storageCost + operationsCost
}
