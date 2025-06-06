// Import all providers and calculators
import { aws, calculateAWSCost } from "./aws"
import { azure, calculateAzureCost } from "./azure"
import { digitalocean, calculateDigitalOceanCost } from "./digitalocean"
import { gcp, calculateGCPCost } from "./gcp"
import { netlify, calculateNetlifyCost } from "./netlify"
import { railway, calculateRailwayCost } from "./railway"
import { render, calculateRenderCost } from "./render"
import { vercel, calculateVercelCost } from "./vercel"

// Export providers array
export const hostingProviders = [aws, azure, digitalocean, gcp, netlify, railway, render, vercel]

// Export calculators object
export const hostingCalculators = {
  aws: calculateAWSCost,
  azure: calculateAzureCost,
  digitalocean: calculateDigitalOceanCost,
  gcp: calculateGCPCost,
  netlify: calculateNetlifyCost,
  railway: calculateRailwayCost,
  render: calculateRenderCost,
  vercel: calculateVercelCost,
}
