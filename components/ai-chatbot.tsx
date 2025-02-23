"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Thank you for your message. How can I assist you with your career?", isUser: false },
        ])
      }, 1000)
      setInput("")
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary hover:bg-secondary text-white rounded-full p-4 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-4 w-80 h-96 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg z-50 flex flex-col"
        >
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`${message.isUser ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${message.isUser ? "bg-primary text-white" : "bg-gray-700 text-gray-200"}`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </form>
        </motion.div>
      )}
    </>
  )
}

export default AIChatbot

