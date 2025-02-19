import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Users, ArrowUpRight, FileText, PenTool } from "lucide-react"
import { MainNav } from "@/components/main-nav"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MainNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Launch Your Career with Confidence
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Empowering university students and job seekers to find their dream careers. Your success story starts here.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
                <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Services
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Briefcase,
                  title: "Job Search Assistance",
                  description: "Personalized job matching and application support to help you land your ideal role.",
                  href: "/services/job-search",
                },
                {
                  icon: Users,
                  title: "Career Coaching",
                  description: "One-on-one guidance to help you navigate your career path and achieve your goals.",
                  href: "/services/career-coaching",
                },
                {
                  icon: GraduationCap,
                  title: "Skills Development",
                  description: "Workshops and resources to enhance your professional skills and marketability.",
                  href: "/services/skills-development",
                },
                {
                  icon: FileText,
                  title: "CV Writing",
                  description: "Expert assistance in crafting compelling CVs that highlight your strengths and experiences.",
                  href: "/services/cv-writing",
                },
                {
                  icon: PenTool,
                  title: "Cover Letter Support",
                  description: "Guidance on writing persuasive cover letters tailored to your target roles and industries.",
                  href: "/services/cover-letter",
                },
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-black/20 border border-white/10 transition-colors hover:bg-black/30"
                >
                  <service.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About CareerLaunch</h2>
                <p className="text-muted-foreground md:text-xl">
                  At CareerLaunch, we're dedicated to bridging the gap between education and employment. Our expert team provides tailored support to help you navigate the job market with confidence.
                </p>
                <div className="flex items-center space-x-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="font-medium">Part of the Elevate family</span>
                </div>
                <p className="text-muted-foreground">
                  Working alongside our sister company, Elevate, we offer a complete journey from university admissions to career success.
                </p>
                <Link
                  href="https://elevate-education.com"
                  className="inline-flex items-center text-primary hover:text-primary/90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about Elevate
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="lg:order-first">
                <img
                  alt="CareerLaunch team"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Launch Your Career?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Take the first step towards your dream job. Contact us today to learn how we can help you succeed.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-2 sm:flex-row items-center">
            <p className="text-xs text-muted-foreground">© 2024 CareerLaunch. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link className="text-xs hover:text-primary transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:text-primary transition-colors" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
