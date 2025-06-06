import { authCalculators } from "./providers/authentication"
import { databaseCalculators } from "./providers/database"
import { hostingCalculators } from "./providers/hosting"

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

// Service labels for display purposes
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
  firestore: "Firestore",
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

function getServiceLabel(value: string): string {
  return serviceLabels[value] || value
}

export function calculateStackCost(stack: StackSelection): CostEstimate[] {
  const estimates: CostEstimate[] = []

  // Framework cost (always free)
  if (stack.framework) {
    estimates.push({
      service: getServiceLabel(stack.framework),
      cost: 0,
      period: "month",
    })
  }

  // Authentication cost
  if (stack.auth) {
    const calculator = authCalculators[stack.auth]
    const cost = calculator ? calculator(stack.users) : 0

    estimates.push({
      service: getServiceLabel(stack.auth),
      cost,
      period: "month",
    })
  }

  // Database cost
  if (stack.database) {
    const calculator = databaseCalculators[stack.database]
    const cost = calculator ? calculator(stack.users) : 0

    estimates.push({
      service: getServiceLabel(stack.database),
      cost,
      period: "month",
    })
  }

  // Hosting cost
  if (stack.hosting) {
    const calculator = hostingCalculators[stack.hosting]
    const cost = calculator ? calculator(stack.users) : 0

    estimates.push({
      service: getServiceLabel(stack.hosting),
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
