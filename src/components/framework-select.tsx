"use client"

import { useState, useEffect } from "react"
import { Check, ChevronsUpDown, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from "next/image"

export interface Framework {
  value: string
  label: string
  logo: string
}

interface FrameworkSelectProps {
  frameworks: Framework[]
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
}

export function FrameworkSelect({
  frameworks,
  value,
  onValueChange,
  placeholder = "Select framework",
}: FrameworkSelectProps) {
  const [open, setOpen] = useState(false)
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null)

  useEffect(() => {
    const selected = frameworks.find((framework) => framework.value === value)
    setSelectedFramework(selected || null)
  }, [value, frameworks])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border-blue-200 bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 hover:text-blue-800"
        >
          {selectedFramework ? (
            <div className="flex items-center gap-2">
              <Image
                src={selectedFramework.logo || "/placeholder.svg"}
                alt={selectedFramework.label}
                width={20}
                height={20}
                className="rounded"
              />
              <span>{selectedFramework.label}</span>
            </div>
          ) : (
            <span>{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" icon={Search} />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-auto">
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={() => {
                    onValueChange(framework.value)
                    setOpen(false)
                  }}
                >
                  <div className="flex items-center gap-2 w-full">
                    <Image
                      src={framework.logo || "/placeholder.svg"}
                      alt={framework.label}
                      width={20}
                      height={20}
                      className="rounded"
                    />
                    <span>{framework.label}</span>
                  </div>
                  <Check className={cn("ml-auto h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
