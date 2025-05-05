import { SectionTitle } from "@/components/section-title"
import { AnimatedSection } from "@/components/animated-section"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { CloudIcon, ServerIcon, NetworkIcon } from "lucide-react"

export default function Comparison() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <AnimatedSection className="space-y-2 mb-12">
        <SectionTitle
          title="Cloud vs. Edge vs. Fog: Key Differences"
          subtitle="Understanding the unique characteristics and use cases of each computing paradigm"
        />
      </AnimatedSection>

      <AnimatedSection delay={100} className="mb-16">
        <Card>
          <CardContent className="p-6 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Factor</TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      <CloudIcon className="h-4 w-4 mr-2" />
                      Cloud Computing
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      <ServerIcon className="h-4 w-4 mr-2" />
                      Edge Computing
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      <NetworkIcon className="h-4 w-4 mr-2" />
                      Fog Computing
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Latency</TableCell>
                  <TableCell>High (milliseconds to seconds)</TableCell>
                  <TableCell>Very Low (microseconds to milliseconds)</TableCell>
                  <TableCell>Low (milliseconds)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Location of Processing</TableCell>
                  <TableCell>Centralized data centers</TableCell>
                  <TableCell>Directly on or near the data source</TableCell>
                  <TableCell>Distributed nodes between edge and cloud</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bandwidth Requirements</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>Low</TableCell>
                  <TableCell>Medium</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Data Volume Processed</TableCell>
                  <TableCell>Massive data volumes</TableCell>
                  <TableCell>Local, device-specific data</TableCell>
                  <TableCell>Aggregated data from multiple edge devices</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Geographic Distribution</TableCell>
                  <TableCell>Few centralized locations</TableCell>
                  <TableCell>Highly distributed at endpoints</TableCell>
                  <TableCell>Distributed across multiple tiers</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Primary Use Cases</TableCell>
                  <TableCell>Big data analytics, long-term storage, complex processing</TableCell>
                  <TableCell>Real-time processing, low-latency applications</TableCell>
                  <TableCell>Coordinating multiple edge devices, regional data processing</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Computing Power</TableCell>
                  <TableCell>Very high</TableCell>
                  <TableCell>Limited</TableCell>
                  <TableCell>Moderate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Connectivity Requirements</TableCell>
                  <TableCell>Constant internet connection</TableCell>
                  <TableCell>Can operate offline</TableCell>
                  <TableCell>Intermittent connection sufficient</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Scalability</TableCell>
                  <TableCell>Highly scalable</TableCell>
                  <TableCell>Limited by device capabilities</TableCell>
                  <TableCell>Moderately scalable</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection delay={200} className="mx-auto max-w-[800px] space-y-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-center">
          The Relationship Between Cloud, Edge, and Fog Computing
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Rather than competing paradigms, Cloud, Edge, and Fog computing are complementary approaches that work
          together to create a comprehensive computing ecosystem. Each addresses specific needs within the computing
          landscape:
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          <strong>Cloud computing</strong> excels at handling massive data sets, providing virtually unlimited storage,
          and performing complex computations that require significant processing power. It remains the backbone of our
          digital infrastructure, offering centralized services accessible from anywhere.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          <strong>Edge computing</strong> addresses the need for real-time processing and low latency by moving
          computation directly to or near the data source. This is crucial for time-sensitive applications like
          autonomous vehicles, industrial automation, and augmented reality.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          <strong>Fog computing</strong> bridges the gap between edge and cloud, creating a hierarchical architecture
          that can coordinate multiple edge devices while filtering and processing data before sending it to the cloud.
          This reduces bandwidth usage and provides a more flexible, scalable approach to distributed computing.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The future of computing will likely involve all three paradigms working in concert, with workloads distributed
          optimally across the cloud-to-edge continuum based on their specific requirements for latency, processing
          power, bandwidth, and geographic distribution.
        </p>
      </AnimatedSection>
    </div>
  )
}
