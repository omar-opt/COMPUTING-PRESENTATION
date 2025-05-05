import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
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

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <AnimatedSection delay={200} className="mx-auto max-w-[800px] space-y-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center">
              The Importance of Distributed Computing
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In today's interconnected world, distributed computing has become the backbone of our digital
              infrastructure. From storing vast amounts of data to processing information at lightning speeds, these
              computing paradigms enable the technologies we rely on daily. Understanding the differences between Cloud,
              Edge, and Fog computing is crucial for designing efficient, scalable, and responsive systems that meet the
              demands of modern applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This presentation explores each computing model in detail, highlighting their unique characteristics,
              real-world applications, and the tools that power them. By the end, you'll have a comprehensive
              understanding of how these paradigms work together to create the seamless digital experiences we've come
              to expect.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
