'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    id: '01',
    category: 'FULL STACK & E-COMMERCE',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce app with real-time inventory, payment integration, and an admin dashboard. Built with Next.js and Prisma with a fully responsive UI and secure checkout flow.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    demo: '#',
    code: '#',
    color: '#00f5ff',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    id: '02',
    category: 'DESIGN & SYSTEMS',
    title: 'Design System',
    description:
      'A comprehensive component library and design system used across multiple products. Includes 50+ components, Figma tokens, dark mode support, and full Storybook documentation.',
    tech: ['React', 'Storybook', 'Tailwind', 'Figma'],
    demo: '#',
    code: '#',
    color: '#a855f7',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    id: '03',
    category: 'ANALYTICS & DASHBOARD',
    title: 'SaaS Dashboard',
    description:
      'Analytics dashboard with real-time data visualization, charts, and team collaboration features. Powered by WebSockets for live updates and D3.js for beautiful interactive charts.',
    tech: ['Next.js', 'D3.js', 'WebSockets', 'PostgreSQL'],
    demo: '#',
    code: '#',
    color: '#00f5ff',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    id: '04',
    category: 'TOOLS & PRODUCTIVITY',
    title: 'Portfolio Generator',
    description:
      'A tool that lets developers build stunning portfolios by filling out a simple form. Generates a fully animated Next.js site with custom themes, deployed instantly to Vercel.',
    tech: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
    demo: '#',
    code: '#',
    color: '#a855f7',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
  },
  {
    id: '05',
    category: 'AI & INTERFACES',
    title: 'AI Chat Interface',
    description:
      'A sleek chat interface with streaming responses, markdown rendering, and conversation history. Supports multiple AI models, custom system prompts, and file uploads.',
    tech: ['Next.js', 'OpenAI API', 'Tailwind', 'Vercel AI SDK'],
    demo: '#',
    code: '#',
    color: '#00f5ff',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  },
  {
    id: '06',
    category: '3D & INTERACTIVE',
    title: '3D Product Showcase',
    description:
      'An interactive 3D product viewer with custom lighting, animations, and AR support. Users can rotate, zoom, and inspect products in full 3D directly in the browser.',
    tech: ['Three.js', 'React Three Fiber', 'GSAP', 'WebXR'],
    demo: '#',
    code: '#',
    color: '#a855f7',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&q=80',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: '120px 80px', borderTop: '1px solid var(--border)' }}
    >
      {/* Header */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        style={{ color: 'var(--cyan)', fontSize: '12px', letterSpacing: '5px', marginBottom: '16px' }}
      >
        02. PROJECTS
      </motion.p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '72px' }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Things I've Built
        </motion.h2>

        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          whileHover={{ color: 'var(--cyan)' }}
          style={{ color: 'var(--muted)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
        >
          View All Projects →
        </motion.a>
      </div>

      {/* Project Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{
              borderColor: `${project.color}88`,
              y: -6,
              boxShadow: `0 20px 60px ${project.color}18, 0 0 0 1px ${project.color}22`,
            }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 420px',
              gap: '48px',
              alignItems: 'center',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '40px',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            {/* Glow accent top-left */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '200px', height: '200px',
              background: `radial-gradient(circle, ${project.color}08 0%, transparent 70%)`,
              pointerEvents: 'none',
            }} />

            {/* Scanning light on hover */}
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              whileHover={{ x: '100%', opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '40%',
                height: '100%',
                background: `linear-gradient(90deg, transparent, ${project.color}08, transparent)`,
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            {/* LEFT: Content */}
            <div style={{ zIndex: 1 }}>
              {/* Category */}
              <div style={{
                display: 'inline-block',
                fontSize: '11px',
                letterSpacing: '3px',
                color: project.color,
                marginBottom: '16px',
                fontFamily: 'Space Grotesk, sans-serif',
              }}>
                {project.category}
              </div>

              {/* Number + Title */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
                <span style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '13px',
                  color: project.color,
                  opacity: 0.5,
                }}>
                  {project.id}
                </span>
<h3 style={{
  fontSize: '26px',
  fontFamily: 'Space Grotesk, sans-serif',
  fontWeight: 600,
  color: 'var(--text)',
  lineHeight: 1.3,
}}>
  {project.title}
</h3>
              </div>

              {/* Description */}
              <p style={{
                color: 'var(--muted)',
                fontSize: '15px',
                lineHeight: 1.8,
                marginBottom: '28px',
                maxWidth: '560px',
              }}>
                {project.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '12px',
                      padding: '5px 14px',
                      border: `1px solid ${project.color}55`,
                      color: project.color,
                      borderRadius: '99px',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${project.color}55` }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '11px 24px',
                    background: project.color,
                    color: '#050810',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    transition: 'box-shadow 0.2s',
                  }}
                >
                  ▶ Live Demo
                </motion.a>

                <motion.a
                  href={project.code}
                  whileHover={{ scale: 1.05, borderColor: project.color, color: project.color }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '11px 24px',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    borderRadius: '6px',
                    fontSize: '13px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
  fontFamily: 'Space Grotesk, sans-serif',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                >
                  {'<>'} View Code
                </motion.a>
              </div>
            </div>

            {/* RIGHT: Image */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: `0 0 40px ${project.color}35` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: `1px solid ${project.color}22`,
                boxShadow: `0 0 30px ${project.color}15`,
                aspectRatio: '16/10',
                position: 'relative',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'brightness(0.85) saturate(1.1)',
                  transition: 'filter 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'brightness(1) saturate(1.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'brightness(0.85) saturate(1.1)'
                }}
              />
            </motion.div>

          </motion.div>
        ))}
      </div>
    </section>
  )
}