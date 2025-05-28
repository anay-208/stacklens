"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Database, Shield, Server, Heart } from "lucide-react"
import { FrameworkSelect, type Framework } from "@/components/framework-select"
import { StackSelect, type StackOption } from "@/components/stack-select"
import { UserSlider } from "@/components/user-slider"

interface StackSelection {
  framework: string
  auth: string
  database: string
  hosting: string
  users: number
}

interface CostEstimate {
  service: string
  cost: number
  period: string
}

const frameworks: Framework[] = [
  { value: "nextjs", label: "Next.js", logo: "/logos/nextjs.png" },
  { value: "remix", label: "Remix", logo: "/logos/remix.png" },
  { value: "nuxt", label: "Nuxt.js", logo: "/logos/nuxt.png" },
  { value: "sveltekit", label: "SvelteKit", logo: "/logos/sveltekit.png" },
  { value: "astro", label: "Astro", logo: "/logos/astro.png" },
  { value: "react", label: "React", logo: "/logos/react.png" },
  { value: "vue", label: "Vue.js", logo: "/logos/vue.png" },
  { value: "angular", label: "Angular", logo: "/logos/angular.png" },
]

const authOptions: StackOption[] = [
  { value: "auth0", label: "Auth0" },
  { value: "supabase-auth", label: "Supabase Auth" },
  { value: "nextauth", label: "NextAuth.js" },
  { value: "clerk", label: "Clerk" },
  { value: "firebase-auth", label: "Firebase Auth" },
  { value: "cognito", label: "AWS Cognito" },
  { value: "okta", label: "Okta" },
]

const databaseOptions: StackOption[] = [
  { value: "postgresql", label: "PostgreSQL" },
  { value: "mongodb", label: "MongoDB" },
  { value: "supabase", label: "Supabase" },
  { value: "planetscale", label: "PlanetScale" },
  { value: "firebase", label: "Firebase" },
  { value: "dynamodb", label: "AWS DynamoDB" },
  { value: "mysql", label: "MySQL" },
  { value: "redis", label: "Redis" },
]

const hostingOptions: StackOption[] = [
  { value: "vercel", label: "Vercel" },
  { value: "netlify", label: "Netlify" },
  { value: "aws", label: "AWS" },
  { value: "railway", label: "Railway" },
  { value: "render", label: "Render" },
  { value: "gcp", label: "Google Cloud" },
  { value: "azure", label: "Azure" },
  { value: "digitalocean", label: "DigitalOcean" },
]

// Base costs per service
const baseCostData: Record<string, number> = {
  // Frameworks (free)
  nextjs: 0,
  remix: 0,
  nuxt: 0,
  sveltekit: 0,
  astro: 0,
  react: 0,
  vue: 0,
  angular: 0,

  // Auth
  auth0: 23,
  "supabase-auth": 0,
  nextauth: 0,
  clerk: 25,
  "firebase-auth": 0,
  cognito: 0.0175, // per MAU
  okta: 2, // per MAU

  // Database
  postgresql: 15,
  mongodb: 9,
  supabase: 25,
  planetscale: 29,
  firebase: 0,
  dynamodb: 0, // pay per use
  mysql: 15,
  redis: 5,

  // Hosting
  vercel: 20,
  netlify: 19,
  aws: 50,
  railway: 5,
  render: 7,
  gcp: 30,
  azure: 13,
  digitalocean: 5,
}

// Cost multipliers based on MAU
const getUserCostMultiplier = (users: number, service: string) => {
  // Services with per-user pricing
  if (["cognito", "okta"].includes(service)) {
    return users
  }

  // Services with tiered pricing
  if (users <= 1000) {
    return 1 // Base price for small usage
  } else if (users <= 10000) {
    return 1.5 // 50% more for medium usage
  } else if (users <= 100000) {
    return 2.5 // 150% more for large usage
  } else {
    return 4 // 300% more for enterprise usage
  }
}

export default function StackLens() {
  const [stack, setStack] = useState<StackSelection>({
    framework: "",
    auth: "",
    database: "",
    hosting: "",
    users: 1000,
  })

  const calculateCosts = (): CostEstimate[] => {
    const estimates: CostEstimate[] = []

    if (stack.framework) {
      estimates.push({
        service: frameworks.find((f) => f.value === stack.framework)?.label || "",
        cost: baseCostData[stack.framework] || 0,
        period: "month",
      })
    }

    if (stack.auth) {
      const baseCost = baseCostData[stack.auth] || 0
      const multiplier = getUserCostMultiplier(stack.users, stack.auth)
      const cost = ["cognito", "okta"].includes(stack.auth)
        ? baseCost * multiplier
        : baseCost * getUserCostMultiplier(stack.users, "auth")

      estimates.push({
        service: authOptions.find((a) => a.value === stack.auth)?.label || "",
        cost: cost,
        period: "month",
      })
    }

    if (stack.database) {
      const baseCost = baseCostData[stack.database] || 0
      estimates.push({
        service: databaseOptions.find((d) => d.value === stack.database)?.label || "",
        cost: baseCost * getUserCostMultiplier(stack.users, "database"),
        period: "month",
      })
    }

    if (stack.hosting) {
      const baseCost = baseCostData[stack.hosting] || 0
      estimates.push({
        service: hostingOptions.find((h) => h.value === stack.hosting)?.label || "",
        cost: baseCost * getUserCostMultiplier(stack.users, "hosting"),
        period: "month",
      })
    }

    return estimates
  }

  const getTotalCost = (): number => {
    const estimates = calculateCosts()
    return estimates.reduce((total, estimate) => total + estimate.cost, 0)
  }

  const formatCost = (cost: number): string => {
    if (cost === 0) return "Free"
    return `$${cost.toFixed(2)}`
  }

  const estimates = calculateCosts()
  const totalCost = getTotalCost()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">StackLens</h1>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Estimate Your Stack Cost</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Select your tech stack components and see what you'll pay based on your user base.*
          </p>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 border-2 border-dashed border-slate-200 bg-white/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-slate-700">
                {"I'm using "}
                <span className="inline-block min-w-[140px] mx-2">
                  <FrameworkSelect
                    frameworks={frameworks}
                    value={stack.framework}
                    onValueChange={(value) => setStack((prev) => ({ ...prev, framework: value }))}
                    placeholder="framework"
                  />
                </span>
                {" for my project"}
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Stack Selection */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-green-600" />
                  Authentication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <StackSelect
                  options={authOptions}
                  value={stack.auth}
                  onValueChange={(value) => setStack((prev) => ({ ...prev, auth: value }))}
                  placeholder="Choose auth provider"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Database className="h-5 w-5 text-purple-600" />
                  Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <StackSelect
                  options={databaseOptions}
                  value={stack.database}
                  onValueChange={(value) => setStack((prev) => ({ ...prev, database: value }))}
                  placeholder="Choose database"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Server className="h-5 w-5 text-orange-600" />
                  Hosting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <StackSelect
                  options={hostingOptions}
                  value={stack.hosting}
                  onValueChange={(value) => setStack((prev) => ({ ...prev, hosting: value }))}
                  placeholder="Choose hosting"
                />
              </CardContent>
            </Card>
          </div>

          {/* User Slider */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Scale</CardTitle>
              <CardDescription>Adjust your expected monthly active users</CardDescription>
            </CardHeader>
            <CardContent>
              <UserSlider
                value={stack.users}
                onValueChange={(value) => setStack((prev) => ({ ...prev, users: value }))}
              />
            </CardContent>
          </Card>

          {/* Cost Estimation */}
          {estimates.length > 0 && (
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Calculator className="h-6 w-6 text-blue-600" />
                  Cost Estimation
                </CardTitle>
                <CardDescription>
                  Monthly costs for your selected stack with {stack.users.toLocaleString()} monthly active users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {estimates.map((estimate, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <span className="font-medium text-slate-700">{estimate.service}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant={estimate.cost === 0 ? "secondary" : "default"}>
                          {formatCost(estimate.cost)}
                          {estimate.cost !== 0 && `/${estimate.period}`}
                        </Badge>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4 mt-4">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span className="text-slate-900">Total Monthly Cost</span>
                      <Badge variant="default" className="text-lg px-4 py-2 bg-blue-600">
                        {formatCost(totalCost)}/month
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">* Just an estimate, costs could vary</p>
          <p className="text-slate-600 flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Anay
          </p>
        </div>
      </div>
    </div>
  )
}
