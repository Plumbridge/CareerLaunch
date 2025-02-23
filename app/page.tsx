"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import * as THREE from "three"
import {
  BriefcaseIcon,
  UsersIcon,
  GraduationCapIcon,
  TrendingUpIcon,
  SearchIcon,
  UserIcon,
  RocketIcon,
  StarIcon,
} from "lucide-react"

import Layout from "../components/layout"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)

      const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
      const material = new THREE.MeshBasicMaterial({
        color: 0x00bfa5,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      })
      const torusKnot = new THREE.Mesh(geometry, material)
      scene.add(torusKnot)

      camera.position.z = 30

      const animate = () => {
        requestAnimationFrame(animate)
        torusKnot.rotation.x += 0.001
        torusKnot.rotation.y += 0.002
        torusKnot.rotation.z += 0.001
        renderer.render(scene, camera)
      }

      animate()

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
        renderer.dispose()
      }
    }
  }, [])

  const stats = [
    { number: "95%", label: "Success Rate" },
    { number: "1000+", label: "Career Placements" },
    { number: "50+", label: "Partner Companies" },
    { number: "200+", label: "Expert Mentors" },
  ]

  const testimonials = [
    {
      quote: "CareerLaunch transformed my job search. I landed my dream role at a top tech company within weeks!",
      author: "Sarah Chen",
      role: "Software Engineer at TechCorp",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: "The career coaching was invaluable. My mentor helped me completely reshape my career trajectory.",
      author: "James Wilson",
      role: "Product Manager at InnovateCo",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: "The skills workshops gave me the edge I needed in a competitive job market.",
      author: "Maria Rodriguez",
      role: "UX Designer at DesignHub",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const featuredJobs = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$140k - $180k",
      tags: ["Remote", "Full-time", "Senior"],
    },
    {
      title: "Product Marketing Manager",
      company: "InnovateCo",
      location: "New York, NY",
      salary: "$110k - $140k",
      tags: ["Hybrid", "Full-time", "Mid-level"],
    },
    {
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "London, UK",
      salary: "£60k - £80k",
      tags: ["On-site", "Full-time", "Senior"],
    },
  ]

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-b from-[#020817] via-[#0A1122] to-[#020817] animate-gradient-y">
        {/* Hero Section */}
        <div className="relative z-10">
          <canvas ref={canvasRef} className="absolute inset-0 opacity-50" />
          <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] to-[#7C3AED] animate-gradient-x"
            >
              Launch Your Career with Confidence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Empowering university students and job seekers to find their dream careers. Your success story starts
              here.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-x-4"
            >
              <a
                href="/get-started"
                className="inline-block bg-gradient-to-r from-[#00BFA5] to-[#7C3AED] text-white font-semibold py-3 px-8 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00BFA5]/50"
              >
                Get Started
              </a>
              <a
                href="/learn-more"
                className="inline-block border border-[#00BFA5] text-[#00BFA5] hover:bg-[#00BFA5]/10 font-semibold py-3 px-8 rounded-md transition duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 px-4 bg-[#020817]/50 backdrop-blur-lg">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] to-[#7C3AED] mb-16"
          >
            Our Services
          </motion.h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BriefcaseIcon,
                title: "Job Search Assistance",
                description: "Personalized job matching and application support to help you land your ideal role.",
              },
              {
                icon: UsersIcon,
                title: "Career Coaching",
                description: "One-on-one guidance to help you navigate your career path and achieve your goals.",
              },
              {
                icon: GraduationCapIcon,
                title: "Skills Development",
                description: "Workshops and resources to enhance your professional skills and marketability.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#0A1122] p-8 rounded-lg border border-[#1E293B] hover:border-[#00BFA5] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00BFA5]/20"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#7C3AED] flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-[#020817] to-[#0A1122] animate-gradient-y">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] to-[#7C3AED] mb-16"
            >
              How It Works
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: SearchIcon,
                  title: "Explore",
                  description: "Browse through curated job opportunities and resources",
                },
                {
                  icon: UserIcon,
                  title: "Connect",
                  description: "Match with career coaches and mentors in your field",
                },
                {
                  icon: TrendingUpIcon,
                  title: "Grow",
                  description: "Develop your skills through workshops and training",
                },
                {
                  icon: RocketIcon,
                  title: "Launch",
                  description: "Apply and land your dream job with confidence",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#7C3AED] flex items-center justify-center mb-6">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-0.5 bg-gradient-to-r from-[#00BFA5] to-[#7C3AED]"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-[#0A1122] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] to-[#7C3AED] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="py-20 bg-[#020817] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex justify-between items-center mb-12">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] to-[#7C3AED]"
              >
                Featured Jobs
              </motion.h2>
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                href="/jobs"
                className="text-[#00BFA5] hover:text-[#7C3AED] transition-colors duration-200"
              >
                View all jobs →
              </motion.a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredJobs.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-[#0A1122] rounded-lg p-6 border border-[#1E293B] hover:border-[#00BFA5] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00BFA5]/20"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <StarIcon className="w-6 h-6 text-[#00BFA5]" />
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-300">{job.company}</p>
                    <p className="text-gray-400">{job.location}</p>
                    <p className="text-[#00BFA5] font-semibold mt-2">{job.salary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-[#00BFA5]/10 to-[#7C3AED]/10 text-[#00BFA5] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-[#0A1122] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] to-[#7C3AED] mb-16"
            >
              Success Stories
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-[#020817] rounded-lg p-8 border border-[#1E293B] hover:border-[#00BFA5] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00BFA5]/20"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-[#0A1122] to-[#020817] animate-gradient-y relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] opacity-5"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] to-[#7C3AED] mb-6"
            >
              Ready to Launch Your Career?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 mb-8 text-lg"
            >
              Join thousands of successful professionals who have transformed their careers with CareerLaunch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <a
                href="/signup"
                className="bg-gradient-to-r from-[#00BFA5] to-[#7C3AED] text-white px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00BFA5]/50"
              >
                Get Started Now
              </a>
              <a
                href="/contact"
                className="border border-[#00BFA5] text-[#00BFA5] hover:bg-gradient-to-r hover:from-[#00BFA5]/10 hover:to-[#7C3AED]/10 px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Talk to an Expert
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
}