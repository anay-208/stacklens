"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StackSelection } from "@/components/stack-selection"
import { UserScale } from "@/components/user-scale"
import { CostEstimation } from "@/components/cost-estimation"
import { Footer } from "@/components/footer"
import { calculateStackCost, type StackSelection as StackSelectionType } from "@/lib/cost-calculator"

export default function StackLens() {
  const [stack, setStack] = useState<StackSelectionType>({
    framework: "",
    auth: "",
    database: "",
    hosting: "",
    users: 1000,
  })

  const estimates = calculateStackCost(stack)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <Header />

        <div className="max-w-4xl mx-auto">
          <HeroSection
            selectedFramework={stack.framework}
            onFrameworkChange={(value) => setStack((prev) => ({ ...prev, framework: value }))}
          />

          <StackSelection
            auth={stack.auth}
            database={stack.database}
            hosting={stack.hosting}
            onAuthChange={(value) => setStack((prev) => ({ ...prev, auth: value }))}
            onDatabaseChange={(value) => setStack((prev) => ({ ...prev, database: value }))}
            onHostingChange={(value) => setStack((prev) => ({ ...prev, hosting: value }))}
          />

          <UserScale users={stack.users} onUsersChange={(value) => setStack((prev) => ({ ...prev, users: value }))} />

          <CostEstimation estimates={estimates} users={stack.users} />
        </div>

        <Footer />
      </div>
    </div>
  )
}
