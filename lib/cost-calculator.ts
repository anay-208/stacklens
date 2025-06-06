import { authCalculators, authProviders } from "./providers/authentication"
import { databaseCalculators, databaseProviders } from "./providers/database"
import { frameworkCalculators, frameworkProviders } from "./providers/frameworks"
import { hostingCalculators, hostingProviders } from "./providers/hosting"

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

// Create service label lookup from provider names
function createServiceLabels() {
  const labels: Record<string, string> = {}

  // Add all provider labels from their name property
  const allProviders = [...frameworkProviders, ...authProviders, ...databaseProviders, ...hostingProviders]
  allProviders.forEach((provider) => {
    labels[provider.value] = provider.name
  })

  return labels
}

const serviceLabels = createServiceLabels()

function getServiceLabel(value: string): string {
  return serviceLabels[value] || value
}

export function calculateStackCost(stack: StackSelection): CostEstimate[] {
  const estimates: CostEstimate[] = []

  // Framework cost (always free)
  if (stack.framework) {
    const calculator = frameworkCalculators[stack.framework]
    const cost = calculator ? calculator(stack.users) : 0

    estimates.push({
      service: getServiceLabel(stack.framework),
      cost,
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
