import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Briefcase, CheckCircle } from "lucide-react"

export default function JobSearchPage() {
  return (
    <div className="flex flex-col min-h-screen gradient-bg">
      <MainNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Briefcase className="h-16 w-16 text-primary" />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Job Search Assistance
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Let us help you navigate the job market and find opportunities that match your skills and aspirations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Job Search Support</h2>
                <ul className="space-y-4">
                  {[
                    "Personalized job matching based on your skills",
                    "Access to exclusive job opportunities",
                    "Application strategy and support",
                    "Interview preparation assistance",
                    "Salary negotiation guidance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Approach</h2>
                <div className="grid gap-4">
                  {[
                    {
                      title: "Career Assessment",
                      description: "Understanding your skills, experience, and career goals.",
                    },
                    {
                      title: "Job Market Analysis",
                      description: "Identifying suitable opportunities in your target industry.",
                    },
                    {
                      title: "Application Support",
                      description: "Helping you submit strong applications for selected positions.",
                    },
                    {
                      title: "Ongoing Guidance",
                      description: "Supporting you throughout the entire job search process.",
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Start Your Job Search Today</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Let us help you find and secure your ideal role.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

