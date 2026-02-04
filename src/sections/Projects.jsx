import { useLayoutEffect, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/glass.css'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
  markers: false,
})


// const projects = [
//   {
//     title: 'PaulusConnect',
//     desc: 'Church service & community mobile app',
//     tech: 'Flutter · Laravel · Firebase',
//   },
//   {
//     title: 'E-Commerce App',
//     desc: 'Full stack shopping platform',
//     tech: 'React · Express · MySQL',
//   },
//   {
//     title: 'AR Interview App',
//     desc: 'Interactive AR interview experience',
//     tech: 'Flutter · Unity · OpenAI',
//   },
//   {
//     title: 'Web AR Experience',
//     desc: 'Three.js + WebXR project',
//     tech: 'Three.js · WebXR',
//   },
// ]

export default function Projects() {
  const sectionRef = useRef(null)
  const slidesRef = useRef([])
  const navRef = useRef([])



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const total = projects.length

      /* INITIAL STATE */
      gsap.set(slidesRef.current, {
        opacity: 0,
        scale: 0.85,
        x: 140,
        filter: 'blur(6px)',
        borderColor: 'rgba(255,255,255,.15)',
        boxShadow: 'none',
        pointerEvents: 'none',
      })

      // FIX BUG: slide pertama HARUS explicit
      gsap.set(slidesRef.current[0], {
        opacity: 1,
        scale: 1,
        x: 0,
        filter: 'blur(0px)',
        pointerEvents: 'auto',

        // 🔥 TAMBAHAN
        border: '2px solid rgba(217,249,157,.7)',
        boxShadow: `
    0 0 24px rgba(217,249,157,.35),
    0 0 48px rgba(217,249,157,.25),
    0 0 72px rgba(217,249,157,.15)
  `,
      })


      gsap.set(navRef.current[0], {
        background: '#d9f99d',
        boxShadow: '0 0 14px rgba(217,249,157,.8)',
      })

      const tl = gsap.timeline({


        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${window.innerHeight * (total - 1)}`,
          scrub: true,
          pin: true,
          // snap: 1 / (total - 1),
        },
      })

      for (let i = 1; i < total; i++) {
        tl
          .to(
            slidesRef.current[i],
            {
              opacity: 1,
              scale: 1,
              x: 0,
              filter: 'blur(0px)',
              border: '2px solid rgba(217,249,157,.7)',
              boxShadow: `
      0 0 24px rgba(217,249,157,.35),
      0 0 48px rgba(217,249,157,.25),
      0 0 72px rgba(217,249,157,.15)
    `,
            },
            i
          )


          .to(
            slidesRef.current[i - 1],
            {
              opacity: 0,
              scale: 0.85,
              x: -140,
              filter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,.15)',
              boxShadow: 'none',
            },
            i
          )


          .to(
            navRef.current[i],
            {
              background: '#d9f99d',
              boxShadow: '0 0 14px rgba(217,249,157,.8)',
            },
            i
          )
          .to(
            navRef.current[i - 1],
            {
              background: 'rgba(255,255,255,.25)',
              boxShadow: 'none',
            },
            i
          )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" style={sectionStyle}>
      <div style={containerStyle}>
        {/* LEFT */}
        <div style={leftStyle}>
          <h2 style={titleStyle}>PROJECTS</h2>
        </div>

        {/* RIGHT */}
        <div style={rightStyle}>
          <div style={sliderStyle}>
            {projects.map((p, i) => (
              <div
                key={p.id}
                ref={(el) => (slidesRef.current[i] = el)}
                style={slideStyle}
              >
                <div style={stepStyle}>0{i + 1}</div>
                <h3 style={projectTitle}>{p.title}</h3>
                <p style={projectDesc}>{p.desc}</p>
                <span style={techStyle}>{p.tech.join(' · ')}</span>
                <div style={detailBtnStyle}>
                  <Link
                    to={`/projects/${p.id}`}
                    className="view-detail-btn"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* INDICATOR BAWAH */}
          <ul style={navStyle}>
            {projects.map((_, i) => (
              <li
                key={i}
                ref={(el) => (navRef.current[i] = el)}
                style={navDotStyle}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ================= STYLES ================= */

const sectionStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(180deg,#0a0a0f,#1a1a2e)',
  display: 'flex',
  alignItems: 'center',
}

const containerStyle = {
  display: 'block',
  // gridTemplateColumns: '1fr 1.5fr',
  gap: '80px',
  width: '80%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 40px',
}

const leftStyle = {
  // position: 'absolute',
  // left: 0,
  // top: '20%',
  // transform: 'translateY(-90%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

const titleStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  top: '20%',
  textAlign: 'center',
  fontSize: '8rem',
  fontWeight: 600,
  color: '#fff',
  letterSpacing: '4px',
}

const subtitleStyle = {
  color: 'rgba(255,255,255,.6)',
  marginTop: '12px',
}

const rightStyle = {
  position: 'relative',
}

const sliderStyle = {
  position: 'relative',
  minHeight: '360px',
}

const slideStyle = {
  position: 'absolute',
  inset: 0,
  padding: '48px',
  borderRadius: '20px',
  background: 'rgba(255,255,255,.08)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,.15)',
}

const stepStyle = {
  fontSize: '3rem',
  color: 'rgba(217,249,157,.25)',
  fontWeight: 700,
}

const projectTitle = {
  fontSize: '1.6rem',
  color: '#fff',
  marginTop: '12px',
}

const projectDesc = {
  color: 'rgba(255,255,255,.7)',
  marginTop: '12px',
  lineHeight: 1.6,
}

const techStyle = {
  marginTop: '18px',
  display: 'inline-block',
  color: '#d9f99d',
  fontSize: '.85rem',
}

/* INDICATOR BAWAH */
const navStyle = {
  marginTop: '28px',
  display: 'flex',
  justifyContent: 'center',
  gap: '14px',
}

const navDotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,.25)',
}

const activeSlideStyle = {
  border: '1px solid rgba(217,249,157,.6)',
  boxShadow: '0 0 28px rgba(217,249,157,.35)',
}

const detailBtnStyle = {
  position: 'relative',
  zIndex: 9999,
  width: '100%',
  textAlign: 'right',
  marginTop: '24px',

}

