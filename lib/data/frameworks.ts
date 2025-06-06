import { frameworkProviders } from "@/lib/providers/frameworks"

export interface Framework {
  value: string
  label: string
  logo: string
}

// Convert framework providers to Framework objects with logos
export const frameworks: Framework[] = frameworkProviders.map((provider) => ({
  value: provider.value,
  label: provider.name,
  logo: `/logos/${provider.value}.png`,
}))
