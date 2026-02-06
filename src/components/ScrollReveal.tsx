'use client'

import { useEffect, useRef, ReactNode, useCallback } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  width?: 'fit-content' | '100%'
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  className?: string
}

export default function ScrollReveal({
  children,
  width = '100%',
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  const getInitialPosition = useCallback(() => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 75 }
      case 'down':
        return { opacity: 0, y: -75 }
      case 'left':
        return { opacity: 0, x: 75 }
      case 'right':
        return { opacity: 0, x: -75 }
      case 'none':
        return { opacity: 0 }
      default:
        return { opacity: 0, y: 75 }
    }
  }, [direction])

  const getFinalPosition = useCallback(() => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 }
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 }
      case 'none':
        return { opacity: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }, [direction])

  useEffect(() => {
    if (isInView) {
      controls.start(getFinalPosition())
    }
  }, [isInView, controls, getFinalPosition])

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        initial={getInitialPosition()}
        animate={controls}
        transition={{ duration, delay, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
