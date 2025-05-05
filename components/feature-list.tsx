import { Check } from "lucide-react"

interface FeatureListProps {
  title: string
  features: string[]
}

export function FeatureList({ title, features }: FeatureListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
