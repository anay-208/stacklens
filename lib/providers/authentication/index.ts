// Import all providers and calculators
import { auth0, calculateAuth0Cost } from "./auth0"
import { betterAuth, calculateBetterAuthCost } from "./better-auth"
import { clerk, calculateClerkCost } from "./clerk"
import { cognito, calculateCognitoCost } from "./cognito"
import { firebaseAuth, calculateFirebaseAuthCost } from "./firebase-auth"
import { nextAuth, calculateNextAuthCost } from "./nextauth"
import { supabaseAuth, calculateSupabaseAuthCost } from "./supabase-auth"
import { workos, calculateWorkOSCost } from "./workos"

// Export providers array
export const authProviders = [auth0, betterAuth, clerk, cognito, firebaseAuth, nextAuth, supabaseAuth, workos]

// Export calculators object
export const authCalculators = {
  auth0: calculateAuth0Cost,
  "better-auth": calculateBetterAuthCost,
  clerk: calculateClerkCost,
  cognito: calculateCognitoCost,
  "firebase-auth": calculateFirebaseAuthCost,
  nextauth: calculateNextAuthCost,
  "supabase-auth": calculateSupabaseAuthCost,
  workos: calculateWorkOSCost,
}
