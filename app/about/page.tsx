'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code2, Briefcase, GraduationCap, Heart } from 'lucide-react'

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

export default function About() {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-4  overflow-hidden pt-24">
    {/* Animated background gradient */}
    <div className="absolute inset-0 animated-gradient opacity-10" />

      <div className="relative  flex items-center justify-center z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl px-6">
          {/* Left Column: Profile and Introduction */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="flex flex-col items-center lg:items-start space-y-6"
          >
            <div className="relative w-56 h-56 profile-glow">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-emerald-500/30">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="text-center lg:text-left space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight">
                About <span className="text-emerald-400">Me</span>
              </h1>
              <p className="text-emerald-400 text-xl font-medium">
                Full Stack Developer & UI/UX Enthusiast
              </p>
              <p className="text-gray-300 text-base max-w-lg leading-relaxed">
                Passionate about creating seamless digital experiences that combine 
                innovative technology with intuitive design. I transform complex problems 
                into elegant solutions.
              </p>
            </div>

            <motion.div 
              variants={stagger}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {['TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS'].map((tech) => (
                <motion.span
                  key={tech}
                  variants={fadeIn}
                  className="px-4 py-2 rounded-full text-sm font-medium text-emerald-400 skill-badge"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Detailed Information */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="grid grid-cols-1 gap-6"
          >
            {/* Experience Card */}
            <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 card-hover">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Code2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Technical Expertise</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Specialized in building scalable web applications with modern technologies.
                    Strong focus on performance optimization and clean code practices.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Work Experience */}
            <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 card-hover">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Work Experience</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-emerald-400 font-medium">Senior Developer</h3>
                      <p className="text-gray-400 text-sm">Tech Solutions Inc. • 2020 - Present</p>
                    </div>
                    <div>
                      <h3 className="text-emerald-400 font-medium">Frontend Developer</h3>
                      <p className="text-gray-400 text-sm">Digital Agency • 2018 - 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 card-hover">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Education</h2>
                  <div>
                    <h3 className="text-emerald-400 font-medium">M.Sc. in Computer Science</h3>
                    <p className="text-gray-400 text-sm">University of Technology • 2018 - 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 card-hover">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Heart className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Interests</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Beyond coding, I'm passionate about UI/UX design, open-source contribution,
                    and exploring emerging technologies in web development.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}