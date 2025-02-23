"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#020817]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020817]/80 backdrop-blur-md border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold text-white cursor-pointer">
                CareerLaunch
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-[#0A1122] border border-[#1E293B] rounded-md shadow-lg">
                    <div className="py-1">
                      {["Job Search", "Career Coaching", "Skills Development"].map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase().replace(" ", "-")}`}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#00BFA5]/10 hover:text-white"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link href="/about">
                <motion.div className="text-gray-300 hover:text-white transition-colors duration-200">About</motion.div>
              </Link>
              <Link href="/contact">
                <motion.div className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </motion.div>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/login">
                <motion.div className="text-gray-300 hover:text-white transition-colors duration-200">
                  Log In
                </motion.div>
              </Link>
              <Link href="/signup">
                <motion.div className="bg-[#00BFA5] hover:bg-[#00A693] text-white px-4 py-2 rounded-md transition duration-200">
                  Sign Up
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">{children}</main>

      <footer className="bg-[#0A1122] border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Job Search
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Career Coaching
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Skills Development
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#1E293B] text-center text-gray-400">
            <p>© 2024 CareerLaunch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

