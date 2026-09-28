import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Statement } from './components/Statement'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setBooted(true), 60)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const ids = ['home', 'projects', 'experience', 'contact']
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-35% 0px -50% 0px', threshold: 0 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="app-shell">
      <div className="ambient" aria-hidden="true" />
      <AnimatePresence>
        {!booted && (
          <motion.div
            className="boot-veil"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Statement />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
