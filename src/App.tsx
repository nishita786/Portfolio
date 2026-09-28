import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Starfield } from './components/Starfield'
import { Statement } from './components/Statement'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [booted, setBooted] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = window.setTimeout(() => setBooted(true), 80)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMouse({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    const ids = ['home', 'overview', 'projects', 'skills', 'experience', 'contact']
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
      <Starfield mouseX={mouse.x} mouseY={mouse.y} />
      <div className="ambient" aria-hidden="true" />
      <AnimatePresence>
        {!booted && (
          <motion.div
            className="boot-veil"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero mouseX={mouse.x} mouseY={mouse.y} />
        <Statement />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
