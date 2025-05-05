import { SectionTitle } from "@/components/section-title"
import { FeatureList } from "@/components/feature-list"
import { Illustration } from "@/components/illustration"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { CloudIcon } from "lucide-react"

export default function CloudComputing() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <AnimatedSection className="space-y-2 mb-12">
        <SectionTitle
          title="Cloud Computing"
          subtitle="Centralized computing resources delivered as a service over the internet"
        />
      </AnimatedSection>

      <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
        <AnimatedSection delay={100}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">What is Cloud Computing?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared
                pool of configurable computing resources (e.g., networks, servers, storage, applications, and services)
                that can be rapidly provisioned and released with minimal management effort or service provider
                interaction.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                It represents a shift from owning computational resources to renting them, allowing businesses and
                individuals to access vast computing power without the need for physical infrastructure.
              </p>
            </div>

            <FeatureList
              title="Key Characteristics"
              features={[
                "Centralized data centers with massive computing power",
                "On-demand self-service with minimal management",
                "Broad network access from various client platforms",
                "Resource pooling and rapid elasticity",
               
              ]}
            />

            <FeatureList
              title="Real-World Examples"
              features={[
                "Amazon Web Services (AWS)",
                "Microsoft Azure",
                "Google Cloud Platform",
                "IBM Cloud",
                "Dropbox and other cloud storage services",
              ]}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="space-y-8">
            <Illustration type="cloud" className="mb-8" />

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Common Tools and Services</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <CloudIcon className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">Compute Services</h4>
                    <p className="text-sm text-muted-foreground">AWS EC2, Azure VMs, Google Compute Engine</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <CloudIcon className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">Storage Services</h4>
                    <p className="text-sm text-muted-foreground">AWS S3, Azure Blob Storage, Google Cloud Storage</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <CloudIcon className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">Serverless Computing</h4>
                    <p className="text-sm text-muted-foreground">AWS Lambda, Azure Functions, Google Cloud Functions</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <CloudIcon className="h-8 w-8 text-primary" />
                    <h4 className="font-bold">Database Services</h4>
                    <p className="text-sm text-muted-foreground">AWS RDS, Azure SQL, Google Cloud SQL, MongoDB Atlas</p>
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
