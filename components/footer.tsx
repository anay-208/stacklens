import { Heart } from "lucide-react"

export function Footer() {
  return (
    <div className="text-center mt-16 pt-8 border-t border-slate-200">
      <p className="text-sm text-slate-500 mb-4">* Just an estimate, costs could vary</p>
      <p className="text-slate-600 flex items-center justify-center gap-1">
        Built with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Anay
      </p>
    </div>
  )
}
