import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/glass.css'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'HTML', percent: 90, color: '#ff4d4f', logo: '/logos/html.png' },
  { name: 'CSS', percent: 90, color: '#3b82f6', logo: '/logos/css.png' },
  { name: 'JavaScript', percent: 88, color: '#facc15', logo: '/logos/js.png' },
  { name: 'Python', percent: 90, color: '#3274a7', logo: '/logos/python.png' },
  { name: 'Node.js', percent: 80, color: '#22c55e', logo: '/logos/node.png' },
  { name: 'React', percent: 80, color: '#38bdf8', logo: '/logos/react.png' },
  { name: 'Laravel', percent: 85, color: '#ff3426', logo: '/logos/Laravel.png' },
  { name: 'Flask', percent: 90, color: '#fe8208', logo: '/logos/flask.png' },
  { name: 'Flutter', percent: 85, color: '#02569B', logo: '/logos/flutter.png' },
  { name: 'MySQL', percent: 95, color: '#4479a1', logo: '/logos/mysql.png' },
  { name: 'Firebase', percent: 80, color: '#ff9800', logo: '/logos/firebase.png' },
  { name: 'MongoDB', percent: 70, color: '#47a248', logo: '/logos/mongodb.png' },


]

const radius = 26
const circumference = 2 * Math.PI * radius

export default function Skills() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])
  const progressRef = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        const targetOffset =
          circumference - (skills[i].percent / 100) * circumference

        // Ring progress mengikuti scroll
        gsap.fromTo(
          progressRef.current[i],
          { strokeDashoffset: circumference },
          {
            strokeDashoffset: targetOffset,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 30%',
              end: 'center center',
              scrub: true,
            },
          }
        )

        // Fade + rise item
        gsap.from(item, {
          opacity: 0,
          y: 40,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" style={sectionStyle}>
      <h2 style={titleStyle}>SKILLS</h2>

      <div style={gridStyle}>
        {skills.map((skill, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            style={itemStyle}
          >
            {/* LOGO WRAPPER */}
            <div
              style={logoWrapperStyle}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, logoWrapperHoverStyle)
                e.currentTarget.style.background =
                  'radial-gradient(circle at center, rgba(217,249,157,.18), rgba(255,255,255,.08))'

                e.currentTarget.style.transform = 'translateY(-4px) scale(1.04)'
                e.currentTarget.style.border =
                  '2.5px solid rgba(217,249,157,0.9)'

                e.currentTarget.style.transform =
                  'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.border =
                  '3px solid rgba(217,249,157,0)'

                e.currentTarget.style.transform =
                  'translateY(0)'
              }}
            >
              {/* PLACEHOLDER IMAGE */}
              <img
                src={skill.logo}
                alt={skill.name}
                style={logoImageStyle}
              />

              {/* RING BADGE */}
              <div style={ringBadgeStyle}>
                <svg width="70" height="70">
                  <circle
                    cx="35"
                    cy="35"
                    r={radius}
                    stroke="rgba(255,255,255,.15)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    ref={(el) => (progressRef.current[i] = el)}
                    cx="35"
                    cy="35"
                    r={radius}
                    stroke={skill.color}
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    strokeLinecap="round"
                  />
                </svg>

                <span style={{ ...percentStyle, color: skill.color }}>
                  {skill.percent}%
                </span>
              </div>
            </div>

            <h3 style={skillTitle}>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ================= STYLES ================= */

const sectionStyle = {
  minHeight: '100vh',
  padding: '120px 20px',
  background: 'linear-gradient(180deg, #0a0a0f, #1a1a2e)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const titleStyle = {
  color: '#fff',
  fontSize: '5rem',
  marginBottom: '80px',
  fontWeight: 500,
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '20px',
  maxWidth: '1100px',
  width: '100%',
}

const itemStyle = {
  textAlign: 'center',
}

/* LOGO */
const logoWrapperStyle = {
  position: 'relative',
  width: '200px',
  height: '200px',
  margin: '0 auto 20px',
  borderRadius: '20px',
  background: 'rgba(255,255,255,.08)',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // transition: 'box-shadow .4s ease, transform .3s ease',
  border: '1.5px solid rgba(217,249,157,0)',
  transition: 'border .25s ease, box-shadow .3s ease, transform .3s ease',
}



const logoWrapperHoverStyle = {
  boxShadow: `
    0 0 0 rgba(0,0,0,0),
    0 0 25px rgba(217, 249, 157, 0.6),
    0 0 60px rgba(217, 249, 157, 0.45),
    0 0 110px rgba(217, 249, 157, 0.25)
  `,
}



const logoImageStyle = {
  width: '90px',
  height: '90px',
  objectFit: 'contain',
}

/* RING BADGE */
const ringBadgeStyle = {
  position: 'absolute',
  right: '-14px',
  bottom: '-14px',
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  background: '#0a0a0f',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 18px rgba(0,0,0,.6)',
}

const percentStyle = {
  position: 'absolute',
  fontSize: '.7rem',
  fontWeight: 700,
}

/* TEXT */
const skillTitle = {
  color: '#fff',
  marginTop: '14px',
}
