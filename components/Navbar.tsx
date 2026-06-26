'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = ['About', 'Projects', 'Skills', 'Contact']
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 80px',
        height: scrolled ? '64px' : '80px',
        background: scrolled ? 'rgba(5, 8, 16, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,245,255,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: '20px',
          fontWeight: 700,
          color: 'var(--cyan)',
          textDecoration: 'none',
          letterSpacing: '2px',
        }}
      >
        
      </motion.a>

      {/* Nav Links */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {navLinks.map((link, i) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            whileHover={{ color: 'var(--cyan)' }}
            style={{
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: '14px',
              letterSpacing: '1px',
              transition: 'color 0.2s ease',
            }}
          >
            <span style={{ color: 'var(--cyan)', marginRight: '4px', fontSize: '12px' }}>
              0{i + 1}.
            </span>
            {link}
          </motion.a>
        ))}

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,245,255,0.3)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: '8px 20px',
            border: '1px solid var(--cyan)',
            color: 'var(--cyan)',
            borderRadius: '4px',
            fontSize: '13px',
            textDecoration: 'none',
            letterSpacing: '1px',
            transition: 'all 0.2s ease',
          }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  )
}
