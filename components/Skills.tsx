'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experience = [
  {
    title: 'Web Development Intern and App Development',
    company: 'Softronix',
    location: 'Nagpur, Maharashtra',
    period: 'Jun 2024 - Jul 2024',
    duration: '2 mos',
    points: [
      'Gained hands-on experience in full stack web development, contributing to real world projects.',
      'Developed proficiency in java & SpringBoot framework.',
      'Implemented MVT (Model View Template) architecture.',
      'Built responsive UI with React & CSS.',
      'Collaborated on project structure & version control.',
    ],
    tech: ['Java', 'SpringBoot', 'HTML/CSS', 'React', 'Git', 'Next.js'],
    color: '#00f5ff',
  },
]

const skillCategories = [
  {
    icon: '</>',
    title: 'Programming Languages',
    desc: 'Core languages I use for problem-solving and development.',
    color: '#00f5ff',
    skills: ['JavaScript', 'TypeScript', 'Java', 'C++', 'C', 'SQL'],
  },
  {
    icon: '⚡',
    title: 'Dev Skills & Frameworks',
    desc: 'Modern frameworks and technologies for building full-stack applications.',
    color: '#a855f7',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind', 'HTML5', 'CSS3', 'REST API'],
  },
  {
    icon: '🗄',
    title: 'Tools & Databases',
    desc: 'Essential tools and database systems for efficient development workflows.',
    color: '#00f5ff',
    skills: ['MySQL', 'PostgreSQL', 'Git', 'GitHub', 'VS Code', 'Linux', 'Postman'],
  },
]

export default function Skills() {
  const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: '120px 80px', borderTop: '1px solid var(--border)' }}
    >
      {/* ── EXPERIENCE ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        style={{ color: 'var(--cyan)', fontSize: '16px', letterSpacing: '5px', marginBottom: '16px' }}
      >
        03. EXPERIENCE & SKILLS
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h2 style={{
          fontSize: '42px',
          fontFamily: 'Orbitron, monospace',
          fontWeight: 700,
          marginBottom: '12px',
        }}>
          Professional <span style={{ color: 'var(--cyan)' }}>Experience</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
          My professional journey and practical experience in the tech industry.
        </p>
      </motion.div>

      {/* Experience cards */}
      <div style={{ maxWidth: '860px', margin: '0 auto 100px', position: 'relative' }}>

        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: 0, bottom: 0,
          width: '1px',
          background: 'linear-gradient(var(--cyan), var(--purple), transparent)',
          opacity: 0.3,
        }} />

        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            style={{ paddingLeft: '56px', position: 'relative', marginBottom: '40px' }}
          >
            {/* Timeline dot */}
            <motion.div
              animate={{ boxShadow: [`0 0 0px ${exp.color}`, `0 0 16px ${exp.color}`, `0 0 0px ${exp.color}`] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute',
                left: '12px',
                top: '24px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: exp.color,
                border: '3px solid var(--dark)',
                zIndex: 1,
              }}
            />

            {/* Card — floating */}
<motion.div
  whileHover={{ borderColor: `${exp.color}55` }}
  style={{
    background: 'var(--card)',
    border: '1px solid var(--border)',
    borderRadius: '16px',
    padding: '32px',
    transition: 'border-color 0.3s',
    animation: 'float 4s ease-in-out infinite',
  }}
>
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '8px',
                flexWrap: 'wrap',
                gap: '12px',
              }}>
                <div>
                  <h3 style={{
                    fontSize: '20px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '4px',
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{ color: exp.color, fontSize: '14px', fontWeight: 500 }}>{exp.company}</p>
                  <p style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '2px' }}>📍 {exp.location}</p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border)', margin: '20px 0' }} />

              {/* Points */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '24px' }}>
                {exp.points.map((point, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + j * 0.08 }}
                    style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
                  >
                    <span style={{ color: exp.color, fontSize: '12px', marginTop: '3px', flexShrink: 0 }}>▸</span>
                    <span style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6 }}>{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: '11px',
                    padding: '4px 12px',
                    background: `${exp.color}11`,
                    border: `1px solid ${exp.color}33`,
                    color: exp.color,
                    borderRadius: '99px',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ── TECHNICAL SKILLS ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ textAlign: 'center', marginBottom: '56px' }}
      >
        <h2 style={{
          fontSize: '52px',
          fontFamily: 'Orbitron, monospace',
          fontWeight: 700,
          marginBottom: '12px',
        }}>
          Technical <span style={{ color: 'var(--cyan)' }}>Expertise</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
          A curated stack of modern technologies I use to build scalable applications.
        </p>
      </motion.div>

      {/* Skill category cards — floating */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: [0, -10, 0] } : {}}
            transition={{
              opacity: { duration: 0.5, delay: 0.4 + i * 0.12 },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 },
            }}
            whileHover={{ borderColor: `${cat.color}55`, scale: 1.02 }}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '32px',
              transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
          >
            {/* Icon */}
            <div style={{
              width: '48px', height: '48px',
              borderRadius: '12px',
              background: `${cat.color}18`,
              border: `1px solid ${cat.color}33`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px',
              marginBottom: '20px',
              color: cat.color,
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
            }}>
              {cat.icon}
            </div>

            <h3 style={{
              fontSize: '27px',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600,
              marginBottom: '8px',
              color: 'var(--text)',
            }}>
              {cat.title}
            </h3>

            <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6, marginBottom: '24px' }}>
              {cat.desc}
            </p>

            {/* Divider */}
            <div style={{ height: '1px', background: 'var(--border)', marginBottom: '20px' }} />

            {/* Skill pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.skills.map((skill, j) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 + j * 0.04 }}
                  whileHover={{ background: `${cat.color}22`, borderColor: cat.color, color: cat.color }}
                  style={{
                    fontSize: '15px',
                    padding: '5px 12px',
                    background: 'var(--dark2)',
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                    borderRadius: '99px',
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}