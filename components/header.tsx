import { Calculator } from "lucide-react"

export function Header() {
  return (
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
  )
}
