'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 pt-24 overflow-hidden">
    {/* Animated background gradient */}
    <div className="absolute inset-0 animated-gradient opacity-10" />
      <motion.div 
        initial="initial"
        animate="animate"
        variants={stagger}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white tracking-tight mb-4">
            Get in <span className="text-emerald-400">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div variants={fadeIn} className="order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 card-hover">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-emerald-500/20 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent transition-all placeholder-gray-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-emerald-500/20 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent transition-all placeholder-gray-500"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-emerald-500/20 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent transition-all placeholder-gray-500"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-emerald-500/20 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent transition-all placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div variants={stagger} className="order-1 lg:order-2 space-y-6">
            <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">Let's Talk</h2>
                  <p className="text-gray-300">I'm here to help with your project</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-emerald-400 transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-emerald-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="text-gray-300">
                      City, Country
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 card-hover">
              <h3 className="text-xl font-semibold text-white mb-4">Working Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-emerald-400">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-emerald-400">By appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-emerald-400">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}