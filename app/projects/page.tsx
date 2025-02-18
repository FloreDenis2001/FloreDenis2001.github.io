'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Link as LinkIcon, Folder, Star } from 'lucide-react'

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

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
    technologies: ['Next.js', 'TypeScript',  'TailwindCSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and TailwindCSS.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    technologies: ['Next.js', 'TailwindCSS', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true
  },
]

export default function Projects() {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 pt-24 overflow-hidden">
    <div className="absolute inset-0 animated-gradient opacity-10" />
      
      <motion.div 
        initial="initial"
        animate="animate"
        variants={stagger}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white tracking-tight mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my best work, featuring web applications built with modern technologies
            and best practices.
          </p>
        </motion.div>

        <motion.div 
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden card-hover">
                <div className="relative h-56">
                  <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/40 transition-colors z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-emerald-500/20 backdrop-blur-sm rounded-full p-2">
                        <Star className="w-4 h-4 text-emerald-400" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Folder className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm text-emerald-400 skill-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-emerald-400 transition-colors"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-emerald-400 transition-colors"
                      aria-label="View Live Project"
                    >
                      <LinkIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 card-hover">
            <Github className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-4">More Projects on GitHub</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              These are just a few highlights of my work. Visit my GitHub profile to see more
              projects, including open-source contributions and experimental work.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}