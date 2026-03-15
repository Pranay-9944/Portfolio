'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Dot — instant
  const dotX = useSpring(mouseX, { stiffness: 3000, damping: 100, mass: 0.1 })
  const dotY = useSpring(mouseY, { stiffness: 3000, damping: 100, mass: 0.1 })

  // Ring — slight smooth lag
  const ringX = useSpring(mouseX, { stiffness: 300, damping: 40, mass: 0.5 })
  const ringY = useSpring(mouseY, { stiffness: 300, damping: 40, mass: 0.5 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
    }
    const down = () => setClicked(true)
    const up = () => setClicked(false)
    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    // Hover detection on links and buttons
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovering(!!el.closest('a, button, [data-hover]'))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', onOver)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    window.addEventListener('mouseleave', leave)
    window.addEventListener('mouseenter', enter)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', onOver)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('mouseleave', leave)
      window.removeEventListener('mouseenter', enter)
    }
  }, [mouseX, mouseY])

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        @media (max-width: 768px) {
          * { cursor: auto !important; }
          .cur { display: none !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.15); }
        }
      `}</style>

      {/* Outer soft glow — slowest */}
      <motion.div
        className="cur"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: hovering ? '70px' : '50px',
          height: hovering ? '70px' : '50px',
          borderRadius: '50%',
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          background: hovering
            ? 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9996,
          opacity: visible ? 1 : 0,
          transition: 'width 0.3s, height 0.3s, background 0.3s',
        }}
      />

      {/* Ring — smooth lag */}
      <motion.div
        className="cur"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: hovering ? '48px' : clicked ? '20px' : '36px',
          height: hovering ? '48px' : clicked ? '20px' : '36px',
          borderRadius: '50%',
          border: `1px solid ${hovering ? 'rgba(168,85,247,0.8)' : 'rgba(0,245,255,0.7)'}`,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
          pointerEvents: 'none',
          zIndex: 9998,
          boxShadow: hovering
            ? '0 0 12px rgba(168,85,247,0.6), inset 0 0 8px rgba(168,85,247,0.1)'
            : '0 0 12px rgba(0,245,255,0.5), inset 0 0 8px rgba(0,245,255,0.08)',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s, box-shadow 0.2s',
          animation: 'pulse 2.5s ease-in-out infinite',
        }}
      />

      {/* Center dot — instant */}
      <motion.div
        className="cur"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: clicked ? '4px' : '7px',
          height: clicked ? '4px' : '7px',
          borderRadius: '50%',
          background: hovering ? '#a855f7' : '#00f5ff',
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
          pointerEvents: 'none',
          zIndex: 10000,
          boxShadow: hovering
            ? '0 0 8px #a855f7, 0 0 20px rgba(168,85,247,0.6)'
            : '0 0 8px #00f5ff, 0 0 20px rgba(0,245,255,0.6)',
          transition: 'width 0.1s, height 0.1s, background 0.2s, box-shadow 0.2s',
        }}
      />
    </>
  )
}