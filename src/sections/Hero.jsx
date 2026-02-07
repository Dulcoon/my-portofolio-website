import '../styles/glass.css'
import '../styles/hero.css'
import profileImage from '../assets/images/profile.png'
import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import gsap from 'gsap'

const HERO_CONFIG = {
    name: 'Michael Valensio',
    title: 'Full Stack Developer',
    navItems: [
        { label: 'ABOUT ME', href: '#about' },
        { label: 'SKILLS', href: '#skills' },
        { label: 'PROJECTS', href: '#projects' },
    ],
    logoText: 'DULCOON',
    review: {
        title: 'CORE FOKUS',
        text: 'Clean architecture & scalability • API-driven systems • Performance & UX-focused builds.',
    },
    skills: [
        { name: 'BACKEND', percentage: 88 },
        { name: 'CMS', percentage: 90 },
        { name: 'FRONTEND', percentage: 85 },
    ],
}

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const leftCardRef = useRef(null)
    const rightCardRef = useRef(null)
    const nameRef = useRef(null)
    const titleRef = useRef(null)
    const socialCardRef = useRef(null)

    // GSAP Animations
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // TEXT
            gsap.from([nameRef.current, titleRef.current], {
                opacity: 0,
                y: 50,
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.2,
            })

            // CARDS (Only animate nicely on desktop, plain fade on mobile to avoid layout breaking)
            gsap.from(leftCardRef.current, {
                opacity: 0,
                x: -100,
                duration: 1.5,
                delay: 0.5,
                ease: 'power3.out',
            })

            gsap.from(rightCardRef.current, {
                opacity: 0,
                x: 100,
                duration: 1.5,
                delay: 0.5,
                ease: 'power3.out',
            })

            // SOCIAL
            gsap.from(socialCardRef.current, {
                opacity: 0,
                y: 50,
                duration: 1.5,
                delay: 0.8,
                ease: 'power3.out',
            })
        })

        return () => ctx.revert()
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <section className="hero-section" id="hero">
            <div className="orb-1" />
            <div className="orb-2" />

            <div className="hero-container">
                {/* Navbar */}
                <nav className="navbar">
                    <div className="logo">
                        <div className="logo-icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="#fff" strokeWidth="1.5" fill="none" />
                                <path d="M16 12L22 15V21L16 24L10 21V15L16 12Z" stroke="#fff" strokeWidth="1.5" fill="none" />
                            </svg>
                        </div>
                        {HERO_CONFIG.logoText}
                    </div>

                    {/* Desktop Links */}
                    <ul className="nav-links">
                        {HERO_CONFIG.navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="nav-link">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a href="#contact" className="contact-btn-link">
                        <button className="contact-btn">
                            CONTACT
                            <div className="contact-icon">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0f" strokeWidth="2.5">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </div>
                        </button>
                    </a>

                    {/* Hamburger Icon */}
                    <div className="hamburger" onClick={toggleMenu}>
                        <span className={`bar ${isMenuOpen ? 'open' : ''}`} style={isMenuOpen ? { transform: 'rotate(45deg) translate(5px, 6px)' } : {}}></span>
                        <span className={`bar ${isMenuOpen ? 'open' : ''}`} style={isMenuOpen ? { opacity: 0 } : {}}></span>
                        <span className={`bar ${isMenuOpen ? 'open' : ''}`} style={isMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -6px)' } : {}}></span>
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    {HERO_CONFIG.navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="mobile-nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a href="#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)} style={{ color: '#d9f99d' }}>
                        CONTACT
                    </a>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    <div className="heading-container">
                        <h1 ref={nameRef} className="heading-line-1">
                            I'm <span className="highlight-name">{HERO_CONFIG.name}</span>
                        </h1>
                        <div className="heading-line-2" ref={titleRef}>
                            <span className="glass-capsule">Full Stack</span>
                            Developer
                        </div>
                    </div>

                    {/* Photo Area */}
                    <div className="photo-area">
                        <div className="photo-glow" />

                        {/* Left Card: Core Fokus */}
                        <div ref={leftCardRef} className="glass-card float-card card-left">
                            <div className="card-title">{HERO_CONFIG.review.title}</div>
                            <p className="card-text">{HERO_CONFIG.review.text}</p>
                        </div>

                        {/* Image */}
                        <img
                            src={profileImage}
                            alt={HERO_CONFIG.name}
                            className="profile-img"
                        />

                        {/* Social Card */}
                        <div ref={socialCardRef} className="social-card">
                            <a href="https://instagram.com/valen.feb_" className="social-icon" aria-label="Instagram">
                                <i className="fa-brands fa-instagram" style={{ fontSize: '1.2rem' }}></i>
                            </a>

                            <a href="https://github.com/dulcoon" className="social-icon" aria-label="GitHub">
                                <i className="fa-brands fa-github" style={{ fontSize: '1.2rem' }}></i>
                            </a>

                            <a href="https://www.linkedin.com/in/michael-valensio-one-febian-609430259/" className="social-icon" aria-label="LinkedIn">
                                <i className="fa-brands fa-linkedin" style={{ fontSize: '1.2rem' }}></i>
                            </a>
                        </div>

                        {/* Right Card: Expertise */}
                        <div ref={rightCardRef} className="glass-card float-card card-right">
                            <div className="card-title">MY EXPERTISE</div>
                            {HERO_CONFIG.skills.map((skill, index) => (
                                <div key={index} className="skill-row">
                                    <span className="skill-name">{skill.name}</span>
                                    <div className="progress-container">
                                        <div className="progress-bar" style={{ width: `${skill.percentage}%` }}>
                                            <div className="progress-dot" />
                                        </div>
                                    </div>
                                    <span className="skill-name" style={{ width: '30px', textAlign: 'right' }}>{skill.percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
