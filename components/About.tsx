'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const specialties = [
  {
    title: 'FULL STACK DEVELOPMENT',
    desc: 'Building end-to-end web solutions using React, Next.js, Node.js, and modern databases to create scalable applications.',
    color: '#00f5ff',
  },
  {
    title: 'UI/UX & DESIGN SYSTEMS',
    desc: 'Designing beautiful, accessible interfaces with Figma, Tailwind, and Framer Motion for smooth, delightful experiences.',
    color: '#a855f7',
  },
  {
    title: '3D & INTERACTIVE WEB',
    desc: 'Creating immersive 3D experiences using Three.js and React Three Fiber with real-time WebGL rendering.',
    color: '#00f5ff',
  },
  {
    title: 'PERFORMANCE & DEVOPS',
    desc: 'Optimizing web performance, CI/CD pipelines, and deploying scalable apps on Vercel, AWS, and Docker.',
    color: '#a855f7',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: '120px 80px', borderTop: '1px solid var(--border)' }}
    >
      {/* Top label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        style={{ color: 'var(--cyan)', fontSize: '12px', letterSpacing: '5px', marginBottom: '16px' }}
      >
        01. ABOUT ME
      </motion.p>

      {/* Big heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '72px' }}
      >
        <p style={{
          fontSize: '12px',
          letterSpacing: '4px',
          color: 'var(--muted)',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
        }}>
          <span style={{ width: '40px', height: '1px', background: 'var(--cyan)', display: 'inline-block' }} />
          STORY • CRAFT • VALUES
          <span style={{ width: '40px', height: '1px', background: 'var(--cyan)', display: 'inline-block' }} />
        </p>

        <h2 style={{
          fontSize: '48px',
          fontWeight: 700,
          fontFamily: 'Orbitron, monospace',
          lineHeight: 1.2,
          marginBottom: '20px',
        }}>
          Building scalable solutions with{' '}
          <span style={{ color: 'var(--cyan)' }}>passion</span>{' '}
          and{' '}
          <span style={{ color: 'var(--purple)' }}>precision</span>
        </h2>

        <p style={{
          color: 'var(--muted)',
          fontSize: '20px',
          lineHeight: 2,
          maxWidth: '620px',
          margin: '0 auto',
        }}>
          I'm passionate about creating high-performance applications, exploring
          the latest technologies, and building impactful software solutions that
          make a real difference.
        </p>
      </motion.div>

      {/* Bio + Photo Card row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: '64px',
        alignItems: 'start',
        marginBottom: '64px',
      }}>

        {/* LEFT: Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
<h3 style={{
  fontSize: '39px',
  fontFamily: 'Space Grotesk, sans-serif',
  fontWeight: 600,
  marginBottom: '24px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}}>
  Hi, I'm Pranay Wanjari 👋
</h3>

          {[
            "I'm a passionate web developer and designer specializing in building exceptional digital experiences. I love the intersection of design and engineering — where beautiful visuals meet clean, performant code.",
            "With 3+ years of experience, I've worked on everything from small business websites to complex web applications. I'm always exploring the latest technologies to deliver the best possible results.",
            "My goal is to build impactful products that solve real problems — continuously learning, contributing to open source, and pushing the boundaries of what's possible on the web.",
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                color: 'var(--muted)',
                fontSize: '20px',
                lineHeight: 1.9,
                marginBottom: '16px',
              }}
            >
              {para}
            </motion.p>
          ))}
        </motion.div>

        {/* RIGHT: Photo card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '32px 24px',
            textAlign: 'center',
            position: 'sticky',
            top: '100px',
          }}
        >
          {/* Photo */}
          <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            margin: '0 auto 20px',
            background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
            padding: '3px',
          }}>
<div style={{
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  overflow: 'hidden',
}}>
  <img
src="/Pranay.jpg.jpeg"    alt="Pranay Wanjari"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
    }}
  />
</div>
          </div>

          <h3 style={{
            fontSize: '20px',
            fontFamily: 'Orbitron, monospace',
            marginBottom: '6px',
            color: 'var(--text)',
          }}>
            Pranay Wanajri
          </h3>

          <p style={{ color: 'var(--muted)', fontSize: '13px', marginBottom: '24px' }}>
            Web Developer & Designer
          </p>

          {/* Info pills */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              { label: 'FOCUS', value: 'Next.js + 3D' },
              { label: 'LOCATION', value: 'Ngapur, India' },
              { label: 'STATUS', value: 'Open to work' }
            
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: 'var(--dark2)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  textAlign: 'left',
                }}
              >
                <div style={{ fontSize: '9px', letterSpacing: '2px', color: 'var(--cyan)', marginBottom: '4px' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text)', fontWeight: 500 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: '24px', right: '24px',
              width: '40px', height: '40px',
              borderRadius: '50%',
              border: '1px solid rgba(0,245,255,0.3)',
              borderTopColor: 'var(--cyan)',
            }}
          />
        </motion.div>

      </div>{/* end bio+photo grid */}

      {/* Bottom: Specialty cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0, delay: 0 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginTop: '16px',
        }}
      >
        {specialties.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0 + i * 0.1 }}
            whileHover={{ borderColor: `${s.color}55`, y: -10 }}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '24px',
              transition: 'border-color 0.3s, transform 0.1s',
            }}
          >
            <div style={{
              fontSize: '23px',
              letterSpacing: '2px',
              color: s.color,
              marginBottom: '12px',
              fontWeight: 600,
            }}>
              {s.title}
            </div>
            <p style={{
              color: 'var(--muted)',
              fontSize: '17px',
              lineHeight: 1.7,
            }}>
              {s.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}
