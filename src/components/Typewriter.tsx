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
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[index % phrases.length]
    let timer: number

    if (!deleting && text === phrase) {
      timer = window.setTimeout(() => setDeleting(true), holdMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % phrases.length)
    } else {
      const next = deleting
        ? phrase.slice(0, text.length - 1)
        : phrase.slice(0, text.length + 1)
      timer = window.setTimeout(
        () => setText(next),
        deleting ? deletingMs : typingMs,
      )
    }

    return () => window.clearTimeout(timer)
  }, [text, deleting, index, phrases, typingMs, deletingMs, holdMs])

  return (
    <span className={`typewriter ${className}`}>
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  )
}
