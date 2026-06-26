'use client'
import { motion } from 'framer-motion'

const links = [
  { name: 'GitHub',   url: 'https://github.com/Pranay-9944' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pranay-wanjari-788a74313/' },
  { name: 'Twitter',  url: 'https://twitter.com/YOURUSERNAME' },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 80px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>

      {/* Logo */}
      <motion.span
        whileHover={{ color: 'var(--cyan)' }}
        style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: '16px',
          color: 'var(--muted)',
          cursor: 'pointer',
          transition: 'color 0.2s',
        }}
      >
        {'<Pranay Wanjari />'}
      </motion.span>

      {/* Copyright */}
      <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
        Designed & Built by{' '}
        <span style={{ color: 'var(--cyan)' }}>Pranay Wanjari</span>
        {' '}· {new Date().getFullYear()}
      </p>

      {/* Social Links */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {links.map((s) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: 'var(--cyan)', y: -2 }}
            style={{
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: '13px',
              transition: 'color 0.2s',
            }}
          >
            {s.name}
          </motion.a>
        ))}
      </div>

    </footer>
  )
}