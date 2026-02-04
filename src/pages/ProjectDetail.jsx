import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import '../styles/glass.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowLeft') navigatePrev();
      if (e.key === 'ArrowRight') navigateNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const navigatePrev = () => {
    if (!project) return;
    setSelectedImageIndex(prev => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const navigateNext = () => {
    if (!project) return;
    setSelectedImageIndex(prev => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  // Styles
  const sectionStyle = {
    minHeight: '100vh',
    padding: '40px 20px',
    background: 'linear-gradient(180deg, #1a1a2e 0%, #0f1629 50%, #0a0a0f 100%)',
    position: 'relative',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const backLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#d9f99d',
    fontSize: '0.95rem',
    fontWeight: '500',
    marginBottom: '30px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  };

  const headerCardStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '40px',
    marginBottom: '30px',
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '20px',
    lineHeight: '1.2',
  };

  const descStyle = {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.8',
    marginBottom: '30px',
  };

  const metaGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
  };

  const metaItemStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
  };

  const metaLabelStyle = {
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, 0.5)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '6px',
  };

  const metaValueStyle = {
    fontSize: '1rem',
    color: '#d9f99d',
    fontWeight: '600',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '30px',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '30px',
  };

  const cardTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '20px',
    letterSpacing: '2px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 0',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.95rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  };

  const techBadgeStyle = {
    display: 'inline-block',
    background: 'rgba(217, 249, 157, 0.1)',
    color: '#d9f99d',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '500',
    margin: '4px',
    border: '1px solid rgba(217, 249, 157, 0.2)',
  };

  const galleryCardStyle = {
    ...cardStyle,
    gridColumn: '1 / -1',
  };

  const galleryGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
  };

  const galleryImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    marginTop: '30px',
  };

  const primaryButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#d9f99d',
    color: '#0a0a0f',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '0.9rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 20px rgba(217, 249, 157, 0.3)',
  };

  const secondaryButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '0.9rem',
    textDecoration: 'none',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
  };

  const notFoundStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #1a1a2e 0%, #0f1629 50%, #0a0a0f 100%)',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  };

  const dotStyle = {
    width: '6px',
    height: '6px',
    background: '#d9f99d',
    borderRadius: '50%',
    flexShrink: 0,
  };

  // Lightbox styles
  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.92)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const lightboxContainerStyle = {
    position: 'relative',
    maxWidth: '90vw',
    maxHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const lightboxImageStyle = {
    maxWidth: '100%',
    maxHeight: '85vh',
    objectFit: 'contain',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
  };

  const closeButtonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 1001,
  };

  const navButtonStyle = {
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 1001,
  };

  const imageCounterStyle = {
    position: 'fixed',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(0, 0, 0, 0.6)',
    padding: '10px 20px',
    borderRadius: '30px',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.9rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 1001,
  };

  if (!project) {
    return (
      <div style={notFoundStyle}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Project not found</h1>
        <Link to="/" style={primaryButtonStyle}>← Back to Home</Link>
      </div>
    );
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Back Link */}
        <Link 
          to="/" 
          style={backLinkStyle}
          onMouseEnter={(e) => {
            e.target.style.opacity = '0.7';
            e.target.style.transform = 'translateX(-5px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateX(0)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Projects
        </Link>

        {/* Header Card */}
        <div style={headerCardStyle}>
          <h1 style={titleStyle}>{project.title}</h1>
          <p style={descStyle}>{project.longDesc}</p>

          {/* Meta Info */}
          <div style={metaGridStyle}>
            <div style={metaItemStyle}>
              <div style={metaLabelStyle}>Role</div>
              <div style={metaValueStyle}>{project.role}</div>
            </div>
            <div style={metaItemStyle}>
              <div style={metaLabelStyle}>Year</div>
              <div style={metaValueStyle}>{project.year}</div>
            </div>
            <div style={metaItemStyle}>
              <div style={metaLabelStyle}>Status</div>
              <div style={metaValueStyle}>{project.status}</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div style={gridStyle}>
          {/* Tech Stack Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d9f99d" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              TECH STACK
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {project.tech.map(t => (
                <span key={t} style={techBadgeStyle}>{t}</span>
              ))}
            </div>
          </div>

          {/* Features Card */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d9f99d" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              FEATURES
            </h3>
            <ul style={listStyle}>
              {project.features.map(f => (
                <li key={f} style={listItemStyle}>
                  <span style={dotStyle}></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery Card */}
          <div style={galleryCardStyle}>
            <h3 style={cardTitleStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d9f99d" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              GALLERY
            </h3>
            <div style={galleryGridStyle}>
              {project.images.map((img, i) => (
                <img 
                  key={i} 
                  src={img} 
                  alt={`${project.title} screenshot ${i + 1}`}
                  style={galleryImageStyle}
                  onClick={() => setSelectedImageIndex(i)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={buttonContainerStyle}>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              style={primaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 0 40px rgba(217, 249, 157, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 0 20px rgba(217, 249, 157, 0.3)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              style={secondaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div 
          style={overlayStyle} 
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            style={closeButtonStyle}
            onClick={() => setSelectedImageIndex(null)}
            onMouseEnter={(e) => {
              e.target.style.background = '#d9f99d';
              e.target.style.color = '#0a0a0f';
              e.target.style.boxShadow = '0 0 30px rgba(217, 249, 157, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = '#fff';
              e.target.style.boxShadow = 'none';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* Prev Button */}
          <button
            style={{ ...navButtonStyle, left: '20px' }}
            onClick={(e) => {
              e.stopPropagation();
              navigatePrev();
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#d9f99d';
              e.target.style.color = '#0a0a0f';
              e.target.style.boxShadow = '0 0 30px rgba(217, 249, 157, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = '#fff';
              e.target.style.boxShadow = 'none';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Next Button */}
          <button
            style={{ ...navButtonStyle, right: '20px' }}
            onClick={(e) => {
              e.stopPropagation();
              navigateNext();
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#d9f99d';
              e.target.style.color = '#0a0a0f';
              e.target.style.boxShadow = '0 0 30px rgba(217, 249, 157, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = '#fff';
              e.target.style.boxShadow = 'none';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          {/* Image Container */}
          <div 
            style={lightboxContainerStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[selectedImageIndex]}
              alt={`${project.title} screenshot ${selectedImageIndex + 1}`}
              style={lightboxImageStyle}
            />
          </div>

          {/* Image Counter */}
          <div style={imageCounterStyle}>
            {selectedImageIndex + 1} / {project.images.length}
          </div>
        </div>
      )}
    </section>
  );
}
