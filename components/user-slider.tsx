"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Users } from "lucide-react"

interface UserSliderProps {
  value: number
  onValueChange: (value: number) => void
}

export function UserSlider({ value, onValueChange }: UserSliderProps) {
  const [displayValue, setDisplayValue] = useState(value)

  const formatUsers = (users: number) => {
    if (users >= 1000000) {
      return `${(users / 1000000).toFixed(1)}M`
    } else if (users >= 1000) {
      return `${(users / 1000).toFixed(1)}K`
    } else {
      return users.toString()
    }
  }

  const handleValueChange = (newValue: number[]) => {
    const value = newValue[0]
    setDisplayValue(value)
    onValueChange(value)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          <Label htmlFor="users" className="text-base font-medium">
            Monthly Active Users
          </Label>
        </div>
        <span className="font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">{formatUsers(displayValue)}</span>
      </div>
      <Slider
        id="users"
        min={100}
        max={1000000}
        step={100}
        value={[displayValue]}
        onValueChange={handleValueChange}
        className="cursor-pointer"
      />
      <div className="flex justify-between text-xs text-slate-500">
        <span>100</span>
        <span>10K</span>
        <span>100K</span>
        <span>1M</span>
      </div>
    </div>
  )
}
