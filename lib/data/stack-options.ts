import { authProviders } from "@/lib/providers/authentication"
import { databaseProviders } from "@/lib/providers/database"
import { hostingProviders } from "@/lib/providers/hosting"

export interface StackOption {
  value: string
  label: string
}

// Convert providers to stack options
export const authOptions: StackOption[] = authProviders.map((provider) => ({
  value: provider.value,
  label: provider.name,
}))

export const databaseOptions: StackOption[] = databaseProviders.map((provider) => ({
  value: provider.value,
  label: provider.name,
}))

export const hostingOptions: StackOption[] = hostingProviders.map((provider) => ({
  value: provider.value,
  label: provider.name,
}))
