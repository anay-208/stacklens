"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserSlider } from "@/components/user-slider"

interface UserScaleProps {
  users: number
  onUsersChange: (value: number) => void
}

export function UserScale({ users, onUsersChange }: UserScaleProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Scale</CardTitle>
        <CardDescription>Adjust your expected monthly active users</CardDescription>
      </CardHeader>
      <CardContent>
        <UserSlider value={users} onValueChange={onUsersChange} />
      </CardContent>
    </Card>
  )
}
