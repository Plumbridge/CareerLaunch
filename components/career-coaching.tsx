"use client"

import type React from "react"
import { motion } from "framer-motion"

const testimonials = [
  { id: 1, name: "John Doe", text: "CareerLaunch helped me land my dream job!" },
  { id: 2, name: "Jane Smith", text: "The career coaching was invaluable for my professional growth." },
  { id: 3, name: "Mike Johnson", text: "I highly recommend CareerLaunch to anyone looking to advance their career." },
]

const CareerCoaching: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
      >
        Career Coaching
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-100">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              One-on-one career counseling
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Resume and cover letter review
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Interview preparation
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Skill assessment and development
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-100">Testimonials</h3>
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + testimonial.id * 0.2 }}
                className="bg-gray-700 bg-opacity-50 p-4 rounded-lg"
              >
                <p className="italic text-gray-300">"{testimonial.text}"</p>
                <p className="text-right text-gray-400 mt-2">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-12 text-center"
      >
        <a
          href="/coaching"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Book a Coaching Session
        </a>
      </motion.div>
    </div>
  )
}

export default CareerCoaching

