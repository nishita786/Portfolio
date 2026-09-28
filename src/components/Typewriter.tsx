import { useEffect, useState } from 'react'

type TypewriterProps = {
  phrases: readonly string[]
  typingMs?: number
  deletingMs?: number
  holdMs?: number
  className?: string
}

export function Typewriter({
  phrases,
  typingMs = 75,
  deletingMs = 40,
  holdMs = 1600,
  className = '',
}: TypewriterProps) {
  const [text, setText] = useState('')

  useEffect(() => {
    let phraseIndex = 0
    let deleting = false
    let current = ''
    let timer = 0
    let alive = true

    const schedule = (fn: () => void, ms: number) => {
      timer = window.setTimeout(() => {
        if (alive) fn()
      }, ms)
    }

    const step = () => {
      const phrase = phrases[phraseIndex % phrases.length]

      if (!deleting && current === phrase) {
        schedule(() => {
          deleting = true
          step()
        }, holdMs)
        return
      }

      if (deleting && current === '') {
        deleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        schedule(step, typingMs)
        return
      }

      current = deleting
        ? phrase.slice(0, current.length - 1)
        : phrase.slice(0, current.length + 1)
      setText(current)
      schedule(step, deleting ? deletingMs : typingMs)
    }

    step()
    return () => {
      alive = false
      window.clearTimeout(timer)
    }
  }, [phrases, typingMs, deletingMs, holdMs])

  return (
    <span className={`typewriter ${className}`}>
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  )
}
