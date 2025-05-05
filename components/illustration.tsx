import Image from "next/image"
import { cn } from "@/lib/utils"

interface IllustrationProps {
  type: "cloud" | "edge" | "fog"
  className?: string
}

export function Illustration({ type, className }: IllustrationProps) {
  const getImageSrc = () => {
    switch (type) {
      case "cloud":
        return "/placeholder.svg?height=400&width=600"
      case "edge":
        return "/placeholder.svg?height=400&width=600"
      case "fog":
        return "/placeholder.svg?height=400&width=600"
      default:
        return "/placeholder.svg?height=400&width=600"
    }
  }

  return (
    <div className={cn("rounded-lg overflow-hidden", className)}>
      <Image
        src={getImageSrc() || "/placeholder.svg"}
        alt={`${type} computing illustration`}
        width={600}
        height={400}
        className="w-full h-auto object-cover"
      />
    </div>
  )
}
