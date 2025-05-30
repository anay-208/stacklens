"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Shield, Server } from "lucide-react"
import { StackSelect } from "@/components/stack-select"
import { authOptions, databaseOptions, hostingOptions } from "@/lib/data/stack-options"

interface StackSelectionProps {
  auth: string
  database: string
  hosting: string
  onAuthChange: (value: string) => void
  onDatabaseChange: (value: string) => void
  onHostingChange: (value: string) => void
}

export function StackSelection({
  auth,
  database,
  hosting,
  onAuthChange,
  onDatabaseChange,
  onHostingChange,
}: StackSelectionProps) {
  return (
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
            value={auth}
            onValueChange={onAuthChange}
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
            value={database}
            onValueChange={onDatabaseChange}
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
            value={hosting}
            onValueChange={onHostingChange}
            placeholder="Choose hosting"
          />
        </CardContent>
      </Card>
    </div>
  )
}
