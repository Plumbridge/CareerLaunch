"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function MainNav() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto">
        <div className="flex items-center h-16">
          {/* Left: Logo */}
          <div className="flex-1">
            <Link href="/" className="text-2xl font-bold text-primary">
              Elevate
            </Link>
          </div>

          {/* Center: Nav links */}
          <nav className="flex items-center justify-center space-x-12 text-lg">
            <Link
              href="/application"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Application
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/services/university-application">
                    University Application
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/visa-support">Visa Support</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/accommodation">Accommodation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/financial-planning">
                    Financial Planning
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/cultural-preparation">
                    Cultural Preparation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/career-support">
                    Career Support
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/packages"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Packages & Pricing
            </Link>
          </nav>

          {/* Right: Auth buttons */}
          <div className="flex-1 flex justify-end gap-2">
            <Button variant="outline" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
