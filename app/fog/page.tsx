import { SectionTitle } from "@/components/section-title"
import { FeatureList } from "@/components/feature-list"
import { Illustration } from "@/components/illustration"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { NetworkIcon } from "lucide-react"

export default function FogComputing() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <AnimatedSection className="space-y-2 mb-12">
        <SectionTitle
          title="Fog Computing"
          subtitle="A layer between edge devices and cloud data centers that extends cloud capabilities"
        />
      </AnimatedSection>

      <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
        <AnimatedSection delay={100}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">What is Fog Computing?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fog computing is a horizontal, system-level architecture that distributes computing, storage, control,
                and networking functions closer to the users along a cloud-to-thing continuum. It acts as an
                intermediate layer between edge devices and traditional cloud data centers, creating a distributed
                network of fog nodes.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                While edge computing focuses on processing at or near the data source, fog computing creates a
                multi-tiered architecture that can handle more complex tasks and coordinate multiple edge devices within
                a geographic area.
              </p>
            </div>

            <FeatureList
              title="Key Characteristics"
              features={[
                "Hierarchical distribution of resources",
                "Geographic distribution across multiple locations",
                "Bridge between edge devices and cloud centers",
                "Support for mobility and real-time interactions",
                "Heterogeneous device and network support",
                "Scalable and flexible deployment options",
              ]}
            />

            <FeatureList
              title="Real-World Examples"
              features={[
                "Smart city infrastructure management",
                "Connected vehicle networks",
                "Industrial IoT (IIoT) systems",
                "Smart grid energy management",
                "Distributed traffic management systems",
                "Augmented reality applications",
              ]}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="space-y-8">
            <Illustration type="fog" className="mb-8" />

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Common Platforms and Protocols</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <NetworkIcon className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">OpenFog Reference Architecture</h4>
                    <p className="text-sm text-muted-foreground">Framework for fog computing system development</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <NetworkIcon className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">MQTT</h4>
                    <p className="text-sm text-muted-foreground">
                      Lightweight messaging protocol for small sensors and mobile devices
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <NetworkIcon className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">CoAP</h4>
                    <p className="text-sm text-muted-foreground">
                      Constrained Application Protocol for Internet of Things devices
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <NetworkIcon className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">Cisco IOx</h4>
                    <p className="text-sm text-muted-foreground">
                      Platform for fog applications on Cisco network devices
                    </p>
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
