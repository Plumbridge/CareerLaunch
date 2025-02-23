"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const JobSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [jobs] = useState([
    { id: 1, title: "Software Engineer", company: "TechCorp", location: "San Francisco, CA" },
    { id: 2, title: "Data Scientist", company: "DataWiz", location: "New York, NY" },
    { id: 3, title: "UX Designer", company: "DesignMasters", location: "London, UK" },
  ])

  const filteredJobs = jobs.filter((job) => job.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
      >
        Find Your Dream Job
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Search for jobs..."
          className="w-full p-4 mb-8 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 placeholder-gray-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-4"
      >
        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-100">{job.title}</h3>
            <p className="text-gray-300 mb-1">{job.company}</p>
            <p className="text-gray-400">{job.location}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Apply Now
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default JobSearch

