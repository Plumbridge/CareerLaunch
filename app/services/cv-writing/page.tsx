import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { FileText, CheckCircle } from "lucide-react"

export default function CVWritingPage() {
  return (
    <div className="flex flex-col min-h-screen gradient-bg">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <FileText className="h-16 w-16 text-primary" />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Professional CV Writing Service
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Stand out from the crowd with a professionally crafted CV that highlights your strengths and
                  achievements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our CV Writing Service / Our Process */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Why Choose Our CV Writing Service?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Professional writers with industry expertise",
                    "ATS-optimized formatting and keywords",
                    "Tailored to your specific industry and role",
                    "Highlight your achievements and skills effectively",
                    "Multiple revisions to ensure satisfaction",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Our Process
                </h2>
                <div className="grid gap-4">
                  {[
                    {
                      title: "Initial Consultation",
                      description: "We discuss your career goals, experience, and target roles.",
                    },
                    {
                      title: "Information Gathering",
                      description: "Detailed questionnaire to capture your achievements and skills.",
                    },
                    {
                      title: "CV Writing",
                      description: "Our experts craft your CV using industry best practices.",
                    },
                    {
                      title: "Review & Revisions",
                      description: "Multiple rounds of feedback to ensure your complete satisfaction.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="p-4 rounded-lg bg-black/20 border border-white/10">
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Transform Your CV?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Take the first step towards your dream job with a professionally written CV.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
