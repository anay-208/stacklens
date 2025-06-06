// Import all providers and calculators
import { dynamodb, calculateDynamoDBCost } from "./dynamodb"
import { firestore, calculateFirestoreCost } from "./firebase"
import { mongodb, calculateMongoDBCost } from "./mongodb"
import { planetscale, calculatePlanetScaleCost } from "./planetscale"
import { redis, calculateRedisCost } from "./redis"
import { supabase, calculateSupabaseCost } from "./supabase"

// Export providers array
export const databaseProviders = [dynamodb, firestore, mongodb, planetscale,  redis, supabase]

// Export calculators object
export const databaseCalculators = {
  dynamodb: calculateDynamoDBCost,
  firestore: calculateFirestoreCost,
  mongodb: calculateMongoDBCost,
  planetscale: calculatePlanetScaleCost,
  redis: calculateRedisCost,
  supabase: calculateSupabaseCost,
}
