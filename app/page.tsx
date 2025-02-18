'use client'

import { ArrowRight, Github, Linkedin, Mail, Code, Palette, Sparkles, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import profile from '@/assets/profile.jpg'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 } 
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 lg:px-6  sm:pt-48 lg:pt-24 pb-8 overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10" />

      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="relative w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div variants={stagger} className="space-y-6 sm:space-y-8">
            <motion.div variants={fadeIn} className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 animate-pulse" />
                <h2 className="text-base sm:text-lg font-medium text-emerald-400">Hello, I'm</h2>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text text-glow">Denis Flore</span>
              </h1>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300">
                Full Stack Developer
              </h3>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="relative aspect-square w-full max-w-[280px] mx-auto block lg:hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" />
              <motion.div
                className="relative rounded-2xl overflow-hidden border border-emerald-500/20 image-glow animate-float"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                  <Image
                src={profile}
                alt="Profile"
                width={500}
                height={500}
                className="object-cover transition-transform duration-500"
                priority
              />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </motion.div>
            </motion.div>

            <motion.p variants={fadeIn} className="text-base sm:text-lg text-gray-400 leading-relaxed">
              I craft exceptional digital experiences with modern technologies, 
              focusing on clean code and intuitive design. Specialized in React, 
              TypeScript, and Next.js development.
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="hover-glow p-4 sm:p-6 text-center group">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-xs sm:text-sm text-gray-400 group-hover:text-emerald-400 transition-colors">Clean Code</p>
              </div>
              <div className="hover-glow p-4 sm:p-6 text-center group">
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-xs sm:text-sm text-gray-400 group-hover:text-emerald-400 transition-colors">UI/UX Design</p>
              </div>
              <div className="hover-glow p-4 sm:p-6 text-center group col-span-2 sm:col-span-1">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-xs sm:text-sm text-gray-400 group-hover:text-emerald-400 transition-colors">Innovation</p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/projects"
                className="group flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 glass-card text-gray-300 font-medium hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="flex justify-center sm:justify-start space-x-4 sm:space-x-6 pt-2 sm:pt-4">
              {[
                { icon: Github, href: 'https://github.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Mail, href: 'mailto:your.email@example.com' }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-glow p-2 sm:p-3 text-gray-400 hover:text-emerald-400 transition-all duration-300"
                >
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="relative aspect-square w-full max-w-xl mx-auto hidden lg:block "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" />
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-emerald-500/20 image-glow animate-float"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <Image
                src={profile}
                alt="Profile"
                className="object-cover transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}