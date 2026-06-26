'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const SphereCanvas = dynamic(() => import('./SphereCanvas'), { ssr: false })

const roles = ['Web Developer', 'UI/UX Designer', 'Frontend Engineer', 'Creative Coder']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Mouse tracking for sphere
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Smooth spring follow
  const sphereX = useSpring(rawX, { stiffness: 60, damping: 20, mass: 1 })
  const sphereY = useSpring(rawY, { stiffness: 60, damping: 20, mass: 1 })

  useEffect(() => {
   // REPLACE:
const handleMove = (e: MouseEvent) => {
  // Only move if cursor is in the hero section (top of page)
  if (e.clientY > window.innerHeight) return
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  const offsetX = (e.clientX - centerX) * 0.04
  const offsetY = (e.clientY - centerY) * 0.04
  rawX.set(offsetX)
  rawY.set(offsetY)
}
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [rawX, rawY])

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: NodeJS.Timeout
    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 40)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
   // REPLACE:
<section
  style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 80px',
    position: 'relative',
    overflow: 'hidden',
    isolation: 'isolate',   // ← prevents bleed into other sections
    zIndex: 0,
  }}
>
      {/* Background glow orbs */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '15%',
        width: '200px', height: '200px',
        background: 'radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      {/* LEFT: Text */}
      <div style={{ flex: 1, zIndex: 10, maxWidth: '580px' }}>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: 'var(--cyan)', fontSize: '13px', letterSpacing: '5px', marginBottom: '20px' }}
        >
          WELCOME TO MY PORTFOLIO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontSize: '72px', fontWeight: 900, lineHeight: 1.1, marginBottom: '12px' }}
        >
          Hi, I'm{' '}
          <span className="glow-text" style={{ color: 'var(--cyan)' }}>
            Pranay Wanjari
          </span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            fontSize: '28px',
            color: 'var(--muted)',
            marginBottom: '24px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          <span style={{ color: 'var(--purple)' }}>{'> '}</span>
          <span>{displayed}</span>
          <span style={{
            display: 'inline-block', width: '2px', height: '28px',
            background: 'var(--cyan)',
            animation: 'blink 1s step-end infinite',
          }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '40px', maxWidth: '480px' }}
        >
          I build beautiful, performant web experiences with modern technologies.
          Passionate about clean code, stunning UI, and seamless interactions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,245,255,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="cyber-btn"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            View My Work →
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '14px 36px',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              background: 'transparent',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '15px',
              textDecoration: 'none',
              display: 'inline-block',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ display: 'flex', gap: '20px', marginTop: '48px', alignItems: 'center' }}
        >
          <span style={{ color: 'var(--muted)', fontSize: '12px', letterSpacing: '2px' }}>FIND ME ON</span>
          <div style={{ width: '40px', height: '1px', background: 'var(--border)' }} />
          {[
            { name: 'GitHub', url: 'https://github.com/Pranay-9944' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pranay-wanjari-788a74313/' },
            { name: 'Twitter', url: '#' },
          ].map((s) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              whileHover={{ color: 'var(--cyan)', y: -2 }}
              style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
            >
              {s.name}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* RIGHT: 3D Sphere — follows cursor */}
<motion.div
  initial={{ opacity: 0, scale: 0.7 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, delay: 0.5 }}
  style={{
    width: '520px',
    height: '520px',
    flexShrink: 0,
    x: sphereX,
    y: sphereY,
  }}
>
        <SphereCanvas />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute', bottom: '40px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}
      >
        <span style={{ color: 'var(--muted)', fontSize: '11px', letterSpacing: '3px' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: '1px', height: '40px', background: 'linear-gradient(var(--cyan), transparent)' }}
        />
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
