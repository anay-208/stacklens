import type { DatabaseProvider } from "@/lib/types/providers"

export const dynamodb: DatabaseProvider = {
  name: "AWS DynamoDB",
  value: "dynamodb",
  category: "database",
}

// Internal pricing configuration - not exported
const pricingConfig = {
  cost: 0, // Pay per use, minimal for small apps
}

export function calculateDynamoDBCost(users: number): number {
  return pricingConfig.cost
}
