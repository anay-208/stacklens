"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { FrameworkSelect } from "@/components/framework-select"
import { frameworks } from "@/lib/data/frameworks"

interface HeroSectionProps {
  selectedFramework: string
  onFrameworkChange: (value: string) => void
}

export function HeroSection({ selectedFramework, onFrameworkChange }: HeroSectionProps) {
  return (
    <Card className="mb-8 border-2 border-dashed border-slate-200 bg-white/50">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-slate-700">
          {"I'm using "}
          <span className="inline-block min-w-[140px] mx-2">
            <FrameworkSelect
              frameworks={frameworks}
              value={selectedFramework}
              onValueChange={onFrameworkChange}
              placeholder="framework"
            />
          </span>
          {" for my project"}
        </CardTitle>
      </CardHeader>
    </Card>
  )
}
