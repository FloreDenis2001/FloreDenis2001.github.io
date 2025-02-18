'use client'

import { motion } from 'framer-motion'
import { Briefcase, Code2, Users, Rocket } from 'lucide-react'

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

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      period: '2021 - Present',
      icon: <Code2 className="w-6 h-6 text-emerald-400" />,
      description: [
        'Developed and maintained multiple web applications using React, Next.js, and Node.js',
        'Implemented responsive designs and optimized application performance',
        'Utilized modern development practices including CI/CD and testing',
      ],
      skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'TailwindCSS']
    },
    {
      title: 'Web Development Specialist',
      period: '2019 - 2021',
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      description: [
        'Led development of custom web solutions for various business needs',
        'Collaborated with clients to deliver high-quality, scalable applications',
        'Implemented modern UI/UX designs and interactive features',
      ],
      skills: ['JavaScript', 'React', 'CSS', 'REST APIs', 'Git']
    },
    {
      title: 'Frontend Developer',
      period: '2018 - 2019',
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      description: [
        'Created responsive and user-friendly web interfaces',
        'Worked with cross-functional teams to deliver project requirements',
        'Maintained and improved existing web applications',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design']
    },
  ]

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 pt-24 overflow-hidden">
    <div className="absolute inset-0 animated-gradient opacity-10" />
      <motion.div 
        initial="initial"
        animate="animate"
        variants={stagger}
        className="relative z-10 max-w-6xl mx-auto py-12"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white tracking-tight mb-4">
            Professional <span className="text-emerald-400">Experience</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Specialized in building modern web applications with a focus on user experience,
            performance, and scalability.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 card-hover">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-emerald-500/10 rounded-xl">
                      {exp.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-emerald-400 font-medium">
                        {exp.period}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-emerald-400 mr-2 mt-1.5">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm text-emerald-400 rounded-full skill-badge"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 card-hover">
            <Briefcase className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-4">Additional Experience</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Beyond these roles, I've consistently engaged in professional development through
              self-directed learning, open-source contributions, and staying current with
              emerging web technologies and best practices.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}