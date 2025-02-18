'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import logo from '@/assets/logowhite.svg'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-950/75 backdrop-blur-lg border-b border-emerald-500/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center md:flex-col md:gap-8 lg:flex-row justify-between px-6 lg:px-8" aria-label="Global">
        <motion.div 
          className="flex lg:flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative group">
              <Image 
                src={logo}
                alt="Logo"
                width={96}
                height={96}
                className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
            </div>
          </Link>
        </motion.div>

        <div className="flex md:hidden">
          <button
            type="button"
            className="rounded-full p-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <motion.div 
          className="hidden md:flex lg:gap-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                pathname === item.href
                  ? 'text-emerald-400'
                  : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              
              <div className="absolute inset-0 rounded-full bg-gray-800/0 transition-all duration-300 group-hover:bg-gray-800/50" />
              
              <div className="absolute inset-0 -z-10 rounded-full opacity-0 blur-md bg-emerald-500/20 transition-all duration-300 group-hover:opacity-100" />
              
             
            </Link>
          ))}
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed md:hidden inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-white/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile menu panel */}
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950/90 backdrop-blur-xl border-l border-emerald-500/10 px-6 py-6 sm:max-w-sm"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between">
                
                <Link
                  href="/"
                  className="flex items-center space-x-2 group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="relative p-2 rounded-xl bg-gray-900/50 group-hover:bg-gray-900 transition-all duration-300">
                    <Code className="h-6 w-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md" />
                  </div>
                  <span className="font-bold text-xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">DF</span>
                </Link>
                <button
                  type="button"
                  className="rounded-full p-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-8 flow-root">
                <div className="space-y-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`group relative block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                          pathname === item.href
                            ? 'text-emerald-400 bg-gray-800/50'
                            : 'text-gray-300 hover:text-emerald-400 hover:bg-gray-800/25'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <div className="absolute inset-0 rounded-xl opacity-0 blur-md bg-emerald-500/20 transition-all duration-300 group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}