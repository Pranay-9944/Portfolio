'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scatter'
}

export default function ScrollReveal({ children, delay = 0, direction = 'up' }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-80px', once: false })

  const variants = {
    // Disassembled state — when scrolling away
    hidden: {
      scatter: {
        opacity: 0,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        rotate: Math.random() * 40 - 20,
        scale: 0.3,
        filter: 'blur(8px)',
      },
      up:    { opacity: 0, y: 80,   rotate: -4, scale: 0.92, filter: 'blur(4px)' },
      down:  { opacity: 0, y: -80,  rotate: 4,  scale: 0.92, filter: 'blur(4px)' },
      left:  { opacity: 0, x: 80,   rotate: -4, scale: 0.92, filter: 'blur(4px)' },
      right: { opacity: 0, x: -80,  rotate: 4,  scale: 0.92, filter: 'blur(4px)' },
    },
    // Reassembled state — when scrolling into view
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      filter: 'blur(0px)',
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: direction === 'scatter'
          ? variants.hidden.scatter
          : variants.hidden[direction],
        visible: variants.visible,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}