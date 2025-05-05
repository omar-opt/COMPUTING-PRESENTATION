import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <section className="w-full h-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Understanding Distributed Computing:
                <span className="text-primary"> Cloud, Edge, and Fog</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore the evolution of computing paradigms and how they shape our digital infrastructure
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/cloud">
                  Start Exploring <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

   
    </div>
  )
}
