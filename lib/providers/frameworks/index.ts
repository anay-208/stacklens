// Import all framework providers
import { nextjs } from "./nextjs"
import { remix } from "./remix"
import { nuxt } from "./nuxt"
import { sveltekit } from "./sveltekit"
import { astro } from "./astro"
import { react } from "./react"
import { vue } from "./vue"
import { angular } from "./angular"

// Export providers array
export const frameworkProviders = [nextjs, remix, nuxt, sveltekit, astro, react, vue, angular]

// Export calculators object (all frameworks are free)
export const frameworkCalculators = {
  nextjs: () => 0,
  remix: () => 0,
  nuxt: () => 0,
  sveltekit: () => 0,
  astro: () => 0,
  react: () => 0,
  vue: () => 0,
  angular: () => 0,
}
