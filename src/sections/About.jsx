import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import profileImg1 from '../assets/images/pict1.jpg'
import profileImg2 from '../assets/images/pict2.jpg'
import profileImg3 from '../assets/images/pict3.jpg'
import '../styles/glass.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const photoRefs = useRef([])
  const finalRotations = [12, -10, 10]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // initial state
      gsap.set(photoRefs.current[0], {
        x: -250,
        rotate: -30,
        opacity: 0,
      })

      gsap.set(photoRefs.current[1], {
        x: 250,
        rotate: 25,
        opacity: 0,
      })

      gsap.set(photoRefs.current[2], {
        x: 250,
        rotate: 35,
        opacity: 0,
      })

      // animate ke posisi FINAL (MIRING, BUKAN TEGAK)
      photoRefs.current.forEach((el, index) => {
        gsap.to(el, {
          x: 0,
          rotate: finalRotations[index], // ✅ AMAN
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: true,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  /* ========================================================= */

  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 20px',
    background: 'linear-gradient(180deg, #0f0f1a 0%, #0a0a0f 50%, #1a1a2e 100%)',
    position: 'relative',
    overflow: 'hidden',
  }

  const contentStyle = {
    maxWidth: '700px',
    width: '100%',
    padding: '50px 20px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  }

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '700',
    marginBottom: '40px',
    letterSpacing: '6px',
    color: '#d9f99d',
    textShadow: '0 0 30px rgba(217, 249, 157, 0.3)',
  }

  const paragraphStyle = {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '2',
    maxWidth: '600px',
    margin: '0 auto 20px',
  }

  const buttonStyle = {
    background: '#d9f99d',
    color: '#0a0a0f',
    padding: '16px 40px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '0.95rem',
    letterSpacing: '1px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '30px',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 20px rgba(217, 249, 157, 0.3)',
  }

  const photoGlowStyle = {
    position: 'absolute',
    inset: '-60px',
    borderRadius: '50%',
    pointerEvents: 'none',
    background: `
      radial-gradient(circle,
        rgba(217, 249, 157, 0.35) 0%,
        rgba(217, 249, 157, 0.25) 25%,
        rgba(217, 249, 157, 0.15) 45%,
        rgba(217, 249, 157, 0.05) 60%,
        transparent 72%
      )
    `,
    filter: 'blur(14px)',
    zIndex: 0,
  }

  const floatingPhotos = [
    {
      img: profileImg1,
      style: {
        top: '35%',
        left: '10%',
        width: '160px',
        height: '200px',
        transform: 'rotate(12deg)',
      },
    },
    {
      img: profileImg2,
      style: {
        top: '10%',
        right: '20%',
        width: '80px',
        height: '110px',
        transform: 'rotate(-10deg)',
      },
    },
    {
      img: profileImg3,
      style: {
        top: '55%',
        right: '5%',
        width: '130px',
        height: '170px',
        transform: 'rotate(10deg)',
      },
    },
  ]

  return (
    <section ref={sectionRef} style={sectionStyle} id="about">
      {/* Floating Photos */}
      {floatingPhotos.map((photo, index) => (
        <div
          key={index}
          ref={(el) => (photoRefs.current[index] = el)}
          style={{
            position: 'absolute',
            top: photo.style.top,
            left: photo.style.left,
            right: photo.style.right,
            width: photo.style.width,
            height: photo.style.height,
            transform: photo.style.transform,
            zIndex: 1,
          }}
        >
          <div style={photoGlowStyle} />

          <img
            src={photo.img}
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '16px',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
              border: '3px solid rgba(255, 255, 255, 0.1)',
            }}
          />
        </div>
      ))}

      {/* Main Content */}
      <div style={contentStyle}>
        <h2 style={titleStyle}>WHO AM I ?</h2>

        <p style={paragraphStyle}>
          I Am a full-stack website developer specialized in ReactJS. Plus, I
          also know some WordPress front-end development with Elementor and
          WooCommerce. Programming is my passion.
        </p>

        <button
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)'
            e.target.style.boxShadow = '0 0 40px rgba(217, 249, 157, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 0 20px rgba(217, 249, 157, 0.3)'
          }}
        >
          SHOW MY PROJECTS
        </button>
      </div>
    </section>
  )
}

export default About
