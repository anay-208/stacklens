import type { DatabaseProvider } from "@/lib/types/providers"
import { config } from "./config"

export const firestore: DatabaseProvider = {
  name: "Firebase",
  value: "firebase",
  category: "database",
}

const pricingConfig = {
  storage: 0.15, // $ per GB/month
  operations: {
    read: 0.03 / 100_000,   // $0.03 per 100K reads
    write: 0.09 / 100_000,  // $0.09 per 100K writes
  },
}

export function calculateFirestoreCost(users: number): number {
  const storageCost =
    config.storage.perUser * pricingConfig.storage * users

  const operationsCost =
    users *
    (config.operations.reads * pricingConfig.operations.read +
     config.operations.writes * pricingConfig.operations.write)

  return storageCost + operationsCost
}
