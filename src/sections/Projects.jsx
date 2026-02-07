import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import '../styles/glass.css'
import '../styles/projects.css'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
  markers: false,
})

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

      // Active first slide explicit setup
      if (slidesRef.current[0]) {
        gsap.set(slidesRef.current[0], {
          opacity: 1,
          scale: 1,
          x: 0,
          filter: 'blur(0px)',
          pointerEvents: 'auto',
          border: '2px solid rgba(217,249,157,.7)',
          boxShadow: `
            0 0 24px rgba(217,249,157,.35),
            0 0 48px rgba(217,249,157,.25),
            0 0 72px rgba(217,249,157,.15)
          `,
        })
      }

      if (navRef.current[0]) {
        gsap.set(navRef.current[0], {
          background: '#d9f99d',
          boxShadow: '0 0 14px rgba(217,249,157,.8)',
        })
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${window.innerHeight * (total - 1)}`,
          scrub: true,
          pin: true,
        },
      })

      for (let i = 1; i < total; i++) {
        if (!slidesRef.current[i] || !slidesRef.current[i - 1]) continue;

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
    <section ref={sectionRef} id="projects" className="projects-section">
      <div className="projects-container">
        {/* LEFT */}
        <div className="projects-left">
          <h2 className="projects-title">PROJECTS</h2>
        </div>

        {/* RIGHT */}
        <div className="projects-right">
          <div className="projects-slider">
            {projects.map((p, i) => (
              <div
                key={p.id || i}
                ref={(el) => (slidesRef.current[i] = el)}
                className="project-slide"
              >
                <div className="project-step">0{i + 1}</div>
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                {/* Tech stack: hidden on mobile via CSS */}
                <span className="project-tech">
                  {Array.isArray(p.tech) ? p.tech.join(' · ') : p.tech}
                </span>

                <div className="project-btn-container">
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
          <ul className="projects-nav">
            {projects.map((_, i) => (
              <li
                key={i}
                ref={(el) => (navRef.current[i] = el)}
                className="nav-dot"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
