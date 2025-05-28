"use client"

import type React from "react"

import { Slider } from "@/src/components/ui/slider"
import { Label } from "@/src/components/ui/label"

interface UserSliderProps {
  label: string
  min: number
  max: number
  step: number
  value: number[]
  onValueChange: (value: number[]) => void
}

const UserSlider: React.FC<UserSliderProps> = ({ label, min, max, step, value, onValueChange }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={label}>{label}</Label>
      <Slider id={label} min={min} max={max} step={step} value={value} onValueChange={onValueChange} />
    </div>
  )
}

export default UserSlider
