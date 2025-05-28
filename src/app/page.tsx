import { FrameworkSelect } from "@/src/components/framework-select"
import { StackSelect } from "@/src/components/stack-select"
import { UserSlider } from "@/src/components/user-slider"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>AI Project Generator</h1>
      <FrameworkSelect />
      <StackSelect />
      <UserSlider />
    </main>
  )
}
