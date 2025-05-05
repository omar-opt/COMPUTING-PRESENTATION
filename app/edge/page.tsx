import { SectionTitle } from "@/components/section-title"
import { FeatureList } from "@/components/feature-list"
import { Illustration } from "@/components/illustration"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { ServerIcon } from "lucide-react"

export default function EdgeComputing() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <AnimatedSection className="space-y-2 mb-12">
        <SectionTitle
          title="Edge Computing"
          subtitle="Processing data closer to where it's generated, at the network's edge"
        />
      </AnimatedSection>

      <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
        <AnimatedSection delay={100}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">What is Edge Computing?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Edge computing is a distributed computing paradigm that brings computation and data storage closer to
                the location where it is needed, to improve response times and save bandwidth. Instead of sending all
                data to a centralized data center, edge computing processes data locally at or near the source of data
                generation.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                This approach is particularly valuable for applications requiring real-time processing, low latency, or
                those operating in environments with limited connectivity to the cloud.
              </p>
            </div>

            <FeatureList
              title="Key Characteristics"
              features={[
                "Proximity to data source and end users",
                "Low latency and real-time processing capabilities",
                "Distributed processing across many devices",
                "Limited computing resources compared to cloud",
                "Reduced bandwidth usage and network congestion",
                "Enhanced privacy and security for sensitive data",
              ]}
            />

            <FeatureList
              title="Real-World Examples"
              features={[
                "IoT devices and sensors",
                "Autonomous vehicles and drones",
                "Smart manufacturing equipment",
                "Wearable health monitoring devices",
                "Content Delivery Networks (CDNs)",
                "Mobile edge computing in 5G networks",
              ]}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="space-y-8">
            <Illustration type="edge" className="mb-8" />

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Common Tools and Frameworks</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <ServerIcon className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">AWS IoT Greengrass</h4>
                    <p className="text-sm text-muted-foreground">
                      Extends AWS to edge devices for local compute, messaging, and data caching
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <ServerIcon className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">Azure IoT Edge</h4>
                    <p className="text-sm text-muted-foreground">
                      Deploys cloud workloads to run directly on IoT devices
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <ServerIcon className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">EdgeX Foundry</h4>
                    <p className="text-sm text-muted-foreground">
                      Open source, vendor-neutral edge computing framework
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <ServerIcon className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">KubeEdge</h4>
                    <p className="text-sm text-muted-foreground">Extends Kubernetes capabilities to edge computing</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
