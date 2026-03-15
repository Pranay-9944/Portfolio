'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: '120px 80px',
        borderTop: '1px solid var(--border)',
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        style={{ color: 'var(--cyan)', fontSize: '12px', letterSpacing: '5px', marginBottom: '16px' }}
      >
        04. CONTACT
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

        {/* LEFT: Heading + info */}
        <div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '40px' }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '48px' }}
          >
            I'm currently open to new opportunities and collaborations.
            Whether you have a project in mind, a question, or just want
            to say hi — my inbox is always open.
          </motion.p>

          {[
            { label: 'Email', value: 'wanjaripranay9@gmail.com' },
            { label: 'Location', value: 'Nagpur, Maharashtra, India' },
            { label: 'Availability', value: 'Open to work' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '20px',
                alignItems: 'center',
              }}
            >
              <span style={{
                color: 'var(--cyan)',
                fontSize: '12px',
                letterSpacing: '2px',
                minWidth: '100px',
              }}>
                {item.label}
              </span>
              <span style={{ color: 'var(--text)', fontSize: '15px' }}>{item.value}</span>
            </motion.div>
          ))}
        </div>

        {/* RIGHT: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                padding: '60px 40px',
                border: '1px solid rgba(0,245,255,0.3)',
                borderRadius: '12px',
                textAlign: 'center',
                background: 'rgba(0,245,255,0.03)',
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
              <h3 style={{ fontFamily: 'Orbitron', color: 'var(--cyan)', marginBottom: '12px' }}>
                Message Sent!
              </h3>
              <p style={{ color: 'var(--muted)' }}>I'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', letterSpacing: '2px', marginBottom: '8px' }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  className="cyber-input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', letterSpacing: '2px', marginBottom: '8px' }}>
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  className="cyber-input"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', letterSpacing: '2px', marginBottom: '8px' }}>
                  MESSAGE
                </label>
                <textarea
                  className="cyber-input"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  style={{ resize: 'vertical', minHeight: '140px' }}
                />
              </div>

              <motion.button
                type="submit"
                className="cyber-btn"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,245,255,0.3)' }}
                whileTap={{ scale: 0.98 }}
                style={{ alignSelf: 'flex-start', marginTop: '8px' }}
              >
                Send Message →
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
