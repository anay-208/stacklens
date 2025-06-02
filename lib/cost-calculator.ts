import { calculateAuth0Cost } from "./providers/authentication/auth0"
import { calculateClerkCost } from "./providers/authentication/clerk"
import { calculateSupabaseAuthCost } from "./providers/authentication/supabase-auth"
import { calculateBetterAuthCost } from "./providers/authentication/better-auth"
import { calculateFirebaseAuthCost } from "./providers/authentication/firebase-auth"
import { calculateCognitoCost } from "./providers/authentication/cognito"
import { calculateNextAuthCost } from "./providers/authentication/nextauth"
import { calculateWorkOSCost } from "./providers/authentication/workos"

import { calculatePostgreSQLCost } from "./providers/database/postgresql"
import { calculateMongoDBCost } from "./providers/database/mongodb"
import { calculateSupabaseCost } from "./providers/database/supabase"
import { calculatePlanetScaleCost } from "./providers/database/planetscale"
import { calculateFirestoreCost } from "./providers/database/firebase"
import { calculateDynamoDBCost } from "./providers/database/dynamodb"
import { calculateMySQLCost } from "./providers/database/mysql"
import { calculateRedisCost } from "./providers/database/redis"

import { calculateVercelCost } from "./providers/hosting/vercel"
import { calculateNetlifyCost } from "./providers/hosting/netlify"
import { calculateAWSCost } from "./providers/hosting/aws"
import { calculateRailwayCost } from "./providers/hosting/railway"
import { calculateRenderCost } from "./providers/hosting/render"
import { calculateGCPCost } from "./providers/hosting/gcp"
import { calculateAzureCost } from "./providers/hosting/azure"
import { calculateDigitalOceanCost } from "./providers/hosting/digitalocean"

export interface CostEstimate {
  service: string
  cost: number
  period: string
}

export interface StackSelection {
  framework: string
  auth: string
  database: string
  hosting: string
  users: number
}

const authCalculators: Record<string, (users: number) => number> = {
  auth0: calculateAuth0Cost,
  clerk: calculateClerkCost,
  "supabase-auth": calculateSupabaseAuthCost,
  nextauth: calculateNextAuthCost,
  "firebase-auth": calculateFirebaseAuthCost,
  cognito: calculateCognitoCost,
  "better-auth": calculateBetterAuthCost,
  workos: calculateWorkOSCost,
}

const databaseCalculators: Record<string, (users: number) => number> = {
  postgresql: calculatePostgreSQLCost,
  mongodb: calculateMongoDBCost,
  supabase: calculateSupabaseCost,
  planetscale: calculatePlanetScaleCost,
  firestore: calculateFirestoreCost,
  dynamodb: calculateDynamoDBCost,
  mysql: calculateMySQLCost,
  redis: calculateRedisCost,
}

const hostingCalculators: Record<string, (users: number) => number> = {
  vercel: calculateVercelCost,
  netlify: calculateNetlifyCost,
  aws: calculateAWSCost,
  railway: calculateRailwayCost,
  render: calculateRenderCost,
  gcp: calculateGCPCost,
  azure: calculateAzureCost,
  digitalocean: calculateDigitalOceanCost,
}

const serviceLabels: Record<string, string> = {
  // Frameworks
  nextjs: "Next.js",
  remix: "Remix",
  nuxt: "Nuxt.js",
  sveltekit: "SvelteKit",
  astro: "Astro",
  react: "React",
  vue: "Vue.js",
  angular: "Angular",

  // Auth
  auth0: "Auth0",
  clerk: "Clerk",
  "supabase-auth": "Supabase Auth",
  "firebase-auth": "Firebase Auth",
  cognito: "AWS Cognito",  
  nextauth: "NextAuth.js",
  "better-auth": "Better Auth",
  workos: "WorkOS",
  // Database
  postgresql: "PostgreSQL",
  mongodb: "MongoDB",
  supabase: "Supabase",
  planetscale: "PlanetScale",
  firebase: "Firebase",
  dynamodb: "AWS DynamoDB",
  mysql: "MySQL",
  redis: "Redis",

  // Hosting
  vercel: "Vercel",
  netlify: "Netlify",
  aws: "AWS",
  railway: "Railway",
  render: "Render",
  gcp: "Google Cloud",
  azure: "Azure",
  digitalocean: "DigitalOcean",
}

export function calculateStackCost(stack: StackSelection): CostEstimate[] {
  const estimates: CostEstimate[] = []

  // Framework cost (always free)
  if (stack.framework) {
    estimates.push({
      service: serviceLabels[stack.framework] || stack.framework,
      cost: 0,
      period: "month",
    })
  }

  // Authentication cost
  if (stack.auth) {
    const calculator = authCalculators[stack.auth]
    const cost = calculator ? calculator(stack.users) : 0

    estimates.push({
      service: serviceLabels[stack.auth] || stack.auth,
      cost,
      period: "month",
    })
  }

  // Database cost
  if (stack.database) {
    const calculator = databaseCalculators[stack.database]
    const cost = calculator ? calculator(stack.users) : 0

    estimates.push({
      service: serviceLabels[stack.database] || stack.database,
      cost,
      period: "month",
    })
  }

  // Hosting cost
  if (stack.hosting) {
    const calculator = hostingCalculators[stack.hosting]
    const cost = calculator ? calculator(stack.users) : 0

    estimates.push({
      service: serviceLabels[stack.hosting] || stack.hosting,
      cost,
      period: "month",
    })
  }

  return estimates
}

export function getTotalCost(estimates: CostEstimate[]): number {
  return estimates.reduce((total, estimate) => total + estimate.cost, 0)
}

export function formatCost(cost: number): string {
  if (cost === 0) return "Free"
  return `$${cost.toFixed(2)}`
}
