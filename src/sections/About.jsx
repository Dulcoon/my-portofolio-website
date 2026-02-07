import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import profileImg1 from '../assets/images/pict1.jpg'
import profileImg2 from '../assets/images/pict2.jpg'
import profileImg3 from '../assets/images/pict3.jpg'
import '../styles/glass.css'
import '../styles/about.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const photoRefs = useRef([])

  // Note: Initial rotation/position logic is now handled in CSS for base states, 
  // but we can still animate them relative to that or override carefully.
  // For simplicity and resilience, we will just fade/slide them in from offsets.

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Photos
      photoRefs.current.forEach((el, index) => {
        // Different start positions based on index
        const startX = index === 0 ? -100 : 100

        gsap.from(el, {
          x: startX,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'center center',
            scrub: 1, // Soft scrub for smooth feel
          },
        })
      })

      // Animate Content
      gsap.from('.about-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 85%',
        },
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const photos = [
    { img: profileImg1, className: 'fp-1' },
    { img: profileImg2, className: 'fp-2' },
    { img: profileImg3, className: 'fp-3' },
  ]

  return (
    <section ref={sectionRef} className="about-section" id="about">
      {/* Floating Photos */}
      {photos.map((photo, index) => (
        <div
          key={index}
          ref={(el) => (photoRefs.current[index] = el)}
          className={`floating-photo-container ${photo.className}`}
        >
          <div className="photo-glow" />
          <img
            src={photo.img}
            alt="Profile"
            className="floating-img"
          />
        </div>
      ))}

      {/* Main Content */}
      <div className="about-content">
        <h2 className="about-title">WHO AM I ?</h2>

        <p className="about-text">
          I Am a full-stack website developer specialized in ReactJS. Plus, I
          also know some WordPress front-end development with Elementor and
          WooCommerce. Programming is my passion.
        </p>

        <a href="#projects">
          <button className="about-btn">
            SHOW MY PROJECTS
          </button>
        </a>
      </div>
    </section>
  )
}

export default About
