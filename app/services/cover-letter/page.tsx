import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { PenTool, CheckCircle } from "lucide-react"

export default function CoverLetterPage() {
  return (
    <div className="flex flex-col min-h-screen gradient-bg">
      <MainNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <PenTool className="h-16 w-16 text-primary" />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Cover Letter Writing Service
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Make a compelling first impression with a personalized cover letter that showcases your passion and
                  potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Why Our Cover Letter Service?</h2>
                <ul className="space-y-4">
                  {[
                    "Tailored to specific job applications",
                    "Compelling storytelling that captures attention",
                    "Highlight relevant skills and experiences",
                    "Professional tone and formatting",
                    "Quick turnaround time",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">How It Works</h2>
                <div className="grid gap-4">
                  {[
                    {
                      title: "Job Analysis",
                      description: "We analyze the job description to identify key requirements and company culture.",
                    },
                    {
                      title: "Personal Discussion",
                      description: "Understanding your relevant experiences and motivations.",
                    },
                    {
                      title: "Writing & Crafting",
                      description: "Creating a compelling narrative that connects your experience to the role.",
                    },
                    {
                      title: "Review & Refinement",
                      description: "Fine-tuning the content and tone to perfection.",
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

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Make Your Application Stand Out?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Get a professionally written cover letter that helps you land your dream job.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Start Now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

