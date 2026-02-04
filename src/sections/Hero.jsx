import '../styles/glass.css';
import profileImage from '../assets/images/profile.png';
import { useLayoutEffect, useRef, forwardRef, useEffect } from 'react'

import gsap from 'gsap'



const HERO_CONFIG = {
    name: 'Michael Valensio',
    title: 'Full Stack Developer',
    buttonText: 'MY PROJECTS',


    navItems: [
        { label: 'ABOUT ME', href: '#about' },
        { label: 'SKILLS', href: '#skills' },
        { label: 'PROJECTS', href: '#projects' },
    ],
    logoText: 'DULCOON',

    review: {
        title: 'CORE FOKUS',
        location: '',
        rating: '',
        text: 'Clean architecture & scalability • API-driven systems • Performance & UX-focused builds.',
    },


    skills: [
        { name: 'BACKEND', percentage: 88 },
        { name: 'CMS', percentage: 90 },
        { name: 'FRONTEND', percentage: 85 },
    ],
};
const Hero = () => {

    const leftCardRef = useRef(null)
    const rightCardRef = useRef(null)
    const nameRef = useRef(null)
    const titleRef = useRef(null)
    const socialCardRef = useRef(null)






    const sectionStyle = {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a0f, #1a1a2e)',
    };
    const containerStyle = {
        width: '100%',


        background: 'linear-gradient(180deg, #1e2a4a 0%, #0f1629 60%, #1a1a2e 100%)',

        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    };

    const backgroundOrbStyle = {
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(217, 249, 157, 0.08) 0%, transparent 70%)',
        top: '-200px',
        right: '-100px',
        pointerEvents: 'none',
    };


    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 40px',
        position: 'relative',
        zIndex: 10,
    };
    const backgroundOrb2Style = {
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(217, 249, 157, 0.05) 0%, transparent 70%)',
        bottom: '-100px',
        left: '-100px',
        pointerEvents: 'none',
    };
    const cardStyle = {
        maxWidth: '1000px',
        width: '100%',
        padding: '60px',
    };

    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '6px',
        position: 'relative',
        zIndex: 1,
        color: '#fff',
        fontSize: '0.9rem',
        fontWeight: '600',
        letterSpacing: '1px',
    };
    const contentStyle = {
    };

    const logoIconStyle = {
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const navLinksStyle = {
        display: 'flex',
        gap: '40px',
        listStyle: 'none',
    };
    const navLinkStyle = {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '0.85rem',
        fontWeight: '500',
        letterSpacing: '1px',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
        textDecoration: 'none',
    };
    const contactButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '30px',
        padding: '10px 20px',
        color: '#fff',
        fontSize: '0.85rem',
        fontWeight: '500',
        letterSpacing: '1px',
        cursor: 'pointer',
    };
    const contactIconStyle = {
        width: '28px',
        height: '28px',
        background: '#d9f99d',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const mainContentStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '40px',
        position: 'relative',
    };
    const greetingStyle = {
        fontSize: '1.1rem',
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: '400',
        letterSpacing: '2px',
        textTransform: 'uppercase',
    };

    const headingContainerStyle = {
        textAlign: 'center',
        zIndex: 5,
        marginBottom: '20px',
    };
    const headingStyle = {
    };

    const line1Style = {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: '700',
        lineHeight: '1.1',
        color: '#fff',
        margin: 0,
        fontStyle: 'italic',
    };
    const nameStyle = {
        color: '#d9f99d',
        textShadow: '0 0 30px rgba(217, 249, 157, 0.4)',
        fontWeight: '600',
        fontStyle: 'italic',
    };
    const subtitleStyle = {
        fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: '400',
        marginTop: '8px',
    };

    const line2ContainerStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        marginTop: '10px',
    };
    const descriptionStyle = {
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: '1.7',
        maxWidth: '450px',
    };

    const glassCapsuleStyle = {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '8px',
        padding: '8px 16px',
        marginRight: '12px',
    };
    const buttonContainerStyle = {
    };

    const line2Style = {
        fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
        fontWeight: '700',
        color: '#fff',
        margin: 0,
        display: 'flex',
        gap: '16px',
        marginTop: '16px',
        flexWrap: 'wrap',
        alignItems: 'center',
    };
    const imageContainerStyle = {
        flex: '0 0 auto',
    };
    const imageWrapperStyle = {
        width: '280px',
        height: '280px',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
    };


    const photoAreaStyle = {
        position: 'relative',
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    };

    const imageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };
    const imageOverlayStyle = {
    };

    const photoGlowStyle = {
        position: 'absolute',
        inset: 0,

        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: `
    radial-gradient(circle at center,
      rgba(217, 249, 157, 0.35) 0%,
      rgba(217, 249, 157, 0.25) 25%,
      rgba(217, 249, 157, 0.15) 45%,
      rgba(217, 249, 157, 0.05) 60%,
      transparent 72%
    )
  `,

        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        filter: 'blur(12px)',
    };

    const mobileCardStyle = {
        ...cardStyle,
        flexDirection: 'column-reverse',
        textAlign: 'center',
        padding: '40px 30px',
    };

    const photoContainerStyle = {
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        justifyContent: 'center',
    };

    const mobileContentStyle = {
        ...contentStyle,
    };

    const photoStyle = {
        width: '420px',
        height: 'auto',
        maxHeight: '450px',
        objectFit: 'cover',
        objectPosition: 'top',
        filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))',
    };
    const projectButtonStyle = {
        position: 'absolute',
        bottom: '60px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#d9f99d',
        color: '#0a0a0f',
        padding: '14px 32px',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '0.9rem',
        letterSpacing: '1px',
        cursor: 'pointer',
        border: 'none',
        boxShadow: '0 0 20px rgba(217, 249, 157, 0.3)',
        zIndex: 10,
    };

    const leftCardStyle = {
        position: 'absolute',
        left: '5%',
        bottom: '20%',
        width: '240px',
        padding: '20px',
        transform: 'rotate(-3deg)',
        zIndex: 4,
    };
    const rightCardStyle = {
        position: 'absolute',
        right: '5%',
        bottom: '25%',
        width: '260px',
        padding: '20px',
        transform: 'rotate(2deg)',
        zIndex: 4,
    };
    const cardTitleStyle = {
        fontSize: '0.85rem',
        fontWeight: '600',
        color: '#fff',
        marginBottom: '4px',
        letterSpacing: '0.5px',
    };
    const locationStyle = {
        fontSize: '1rem',
        fontWeight: '700',
        color: '#fff',
        display: 'inline',
    };
    const ratingBadgeStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        background: '#d9f99d',
        color: '#0a0a0f',
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '0.75rem',
        fontWeight: '700',
        marginLeft: '8px',
    };
    const mobileButtonContainerStyle = {
        ...buttonContainerStyle,
        justifyContent: 'center',
    };
    const reviewTextStyle = {
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: '1.5',
        marginTop: '12px',
    };

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const expertiseTitleStyle = {
        fontSize: '0.9rem',
        fontWeight: '700',
        color: '#fff',
        marginBottom: '16px',
        letterSpacing: '2px',
    };
    const skillRowStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px',
        gap: '12px',
    };
    const skillNameStyle = {
        fontSize: '0.75rem',
        color: 'rgba(255, 255, 255, 0.7)',
        width: '70px',
        letterSpacing: '1px',
    };
    const progressBarContainerStyle = {
        flex: 1,
        height: '4px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '2px',
        position: 'relative',
    };
    const progressBarStyle = (percentage) => ({
        width: `${percentage}%`,
        height: '100%',
        background: 'linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.6))',
        borderRadius: '2px',
        position: 'relative',
    });
    const progressDotStyle = {
        position: 'absolute',
        right: '-4px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '10px',
        height: '10px',
        background: '#d9f99d',
        borderRadius: '50%',
        border: '2px solid #1a1a2e',
    };
    const percentageStyle = {
        fontSize: '0.75rem',
        color: 'rgba(255, 255, 255, 0.7)',
        width: '35px',
        textAlign: 'right',
    };

    useLayoutEffect(() => {
        if (window.innerWidth < 768) return

        const ctx = gsap.context(() => {
            // ======================
            // TEXT ANIMATION
            // ======================
            gsap.set([nameRef.current, titleRef.current], {
                opacity: 0,
                y: 50,
            })

            gsap.to(nameRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out',
                delay: 0.1,
            })

            gsap.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out',
                delay: 0.25,
            })

            // ======================
            // CARD ANIMATION
            // ======================
            gsap.set([leftCardRef.current, rightCardRef.current], {
                opacity: 0,
                scale: 0.95,
                x: 0,
            })

            gsap.to(leftCardRef.current, {
                opacity: 1,
                scale: 1,
                x: '-120',
                duration: 2,
                ease: 'power3.out',
                delay: 0.5,
            })

            gsap.to(rightCardRef.current, {
                opacity: 1,
                scale: 1,
                x: '120',
                duration: 2,
                ease: 'power3.out',
                delay: 0.5,
            })

            // SOCIAL CARD
            gsap.set(socialCardRef.current, {
                opacity: 0,
                scale: 0.9,
                y: 60,
            })

            gsap.to(socialCardRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.8,
                ease: 'power3.out',
                delay: 0.7,
            })

        })

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        const card = document.querySelector('.social-card')
        if (!card) return

        const setDirection = (e) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            const fromLeft = x < rect.width / 2
            const fromTop = y < rect.height / 2

            if (Math.abs(x - rect.width / 2) > Math.abs(y - rect.height / 2)) {
                card.style.setProperty('--x', fromLeft ? '-100%' : '100%')
                card.style.setProperty('--y', '0%')
            } else {
                card.style.setProperty('--x', '0%')
                card.style.setProperty('--y', fromTop ? '-100%' : '100%')
            }
        }

        card.addEventListener('mouseenter', setDirection)
        card.addEventListener('mouseleave', setDirection)

        return () => {
            card.removeEventListener('mouseenter', setDirection)
            card.removeEventListener('mouseleave', setDirection)
        }
    }, [])



    return (
        <section style={sectionStyle} id="hero">
            <div style={backgroundOrbStyle} />
            <div style={backgroundOrb2Style} />

            <div style={containerStyle}>
                {/* Navbar */}
                <nav style={navStyle}>
                    <div style={logoStyle}>
                        <div style={logoIconStyle}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="#fff" strokeWidth="1.5" fill="none" />
                                <path d="M16 12L22 15V21L16 24L10 21V15L16 12Z" stroke="#fff" strokeWidth="1.5" fill="none" />
                            </svg>
                        </div>
                        {HERO_CONFIG.logoText}
                    </div>

                    <ul style={navLinksStyle}>
                        {HERO_CONFIG.navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} style={navLinkStyle}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a href="#contact">
                        <button style={contactButtonStyle}>
                            CONTACT
                            <div style={contactIconStyle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0f" strokeWidth="2.5">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </div>
                        </button>
                    </a>
                </nav>
                {/* Main Content */}
                <div style={mainContentStyle}>
                    {/* Heading */}
                    <div style={headingContainerStyle}>
                        <h1 ref={nameRef} style={line1Style}>
                            I'm <span style={nameStyle}>{HERO_CONFIG.name}</span>
                        </h1>
                        <div style={line2ContainerStyle}>
                            <p ref={titleRef} style={line2Style}>
                                <span style={glassCapsuleStyle}>Full Stack</span>
                                Developer
                            </p>
                        </div>
                    </div>
                    {/* Photo Area */}
                    <div style={photoAreaStyle}>
                        <div style={photoGlowStyle} />

                        {/* Left Floating Card - Review */}
                        <GlassCard ref={leftCardRef} style={leftCardStyle}>
                            <div style={cardTitleStyle}>{HERO_CONFIG.review.title}</div>
                            <div>
                            </div>
                            <p style={reviewTextStyle}>{HERO_CONFIG.review.text}</p>
             
                        </GlassCard>
                        {/* Photo */}
                        <div style={photoContainerStyle}>
                            <img
                                src={profileImage}
                                alt={HERO_CONFIG.name}
                                style={photoStyle}
                            />
                            <div ref={socialCardRef} className="social-card">
                                <a href="https://instagram.com/valen.feb_" className="social-icon" aria-label="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                                    </svg>
                                </a>

                                <a href="https://github.com/dulcoon" className="social-icon" aria-label="GitHub">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.48v-1.7c-2.78.62-3.36-1.37-3.36-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.08 1.56 1.08.9 1.6 2.36 1.14 2.94.87.1-.67.35-1.14.64-1.4-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.77 0 3.98-2.34 4.85-4.57 5.1.36.33.68.97.68 1.96v2.9c0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                                    </svg>
                                </a>

                                <a href="https://www.linkedin.com/in/michael-valensio-one-febian-609430259/" className="social-icon" aria-label="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.6 4.75 6v6.35h-4v-5.6c0-1.35-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.7H9z" />
                                    </svg>
                                </a>

                            </div>

                        </div>
                        {/* Right Floating Card - Expertise */}
                        <GlassCard ref={rightCardRef} style={rightCardStyle}>
                            <div style={expertiseTitleStyle}>MY EXPERTISE</div>
                            {HERO_CONFIG.skills.map((skill, index) => (
                                <div key={index} style={skillRowStyle}>
                                    <span style={skillNameStyle}>{skill.name}</span>
                                    <div style={progressBarContainerStyle}>
                                        <div style={progressBarStyle(skill.percentage)}>
                                            <div style={progressDotStyle} />
                                        </div>
                                    </div>
                                    <span style={percentageStyle}>{skill.percentage}%</span>
                                </div>
                            ))}
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

const GlassCard = forwardRef(({ children, style }, ref) => (
    <div
        ref={ref}
        style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            ...style,
        }}
    >
        {children}
    </div>
))


export default Hero;
