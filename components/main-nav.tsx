import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function MainNav() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-white/10">
      <Link className="flex items-center justify-center" href="/">
        <span className="font-bold text-xl">CareerLaunch</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 bg-black/90 backdrop-blur-sm">
            <DropdownMenuItem asChild>
              <Link href="/services/cv-writing" className="cursor-pointer">
                CV Writing
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/services/cover-letter" className="cursor-pointer">
                Cover Letter
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/services/job-search" className="cursor-pointer">
                Job Search
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/services/career-coaching" className="cursor-pointer">
                Career Coaching
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/services/skills-development" className="cursor-pointer">
                Skills Development
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="#about">
          About
        </Link>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="#contact">
          Contact
        </Link>
      </nav>
      <div className="ml-4 flex items-center gap-2">
        <Button variant="outline" size="sm">
          Log In
        </Button>
        <Button size="sm">Sign Up</Button>
      </div>
    </header>
  );
}
