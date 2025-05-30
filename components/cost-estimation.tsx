import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator } from "lucide-react"
import { type CostEstimate, formatCost, getTotalCost } from "@/lib/cost-calculator"

interface CostEstimationProps {
  estimates: CostEstimate[]
  users: number
}

export function CostEstimation({ estimates, users }: CostEstimationProps) {
  const totalCost = getTotalCost(estimates)

  if (estimates.length === 0) return null

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calculator className="h-6 w-6 text-blue-600" />
          Cost Estimation
        </CardTitle>
        <CardDescription>
          Monthly costs for your selected stack with {users.toLocaleString()} monthly active users
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
  )
}
