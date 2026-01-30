/**
 * FeaturedProjectCard Component
 * =====================================================
 * 
 * Enhanced project card with LIMITED rdev effects.
 * One of THREE components using rdev (Hero, Loading, Featured).
 * 
 * Uses REDUCED chromatic aberration to highlight
 * featured projects without overwhelming the grid.
 * 
 * Features:
 * - Subtle chromatic edge effect
 * - Elegant hover state with lift
 * - Responsive design
 * - Graceful CSS fallback
 */

import { useState, useEffect, useMemo, forwardRef } from 'react';
import { useLiquidGlass } from './useLiquidGlass';

/**
 * FeaturedProjectCard
 * 
 * @param {string} title - Project title
 * @param {string} description - Project description
 * @param {string} image - Project thumbnail URL
 * @param {string[]} tags - Technology tags
 * @param {string} href - Link to project
 * @param {boolean} featured - Whether this is a featured project
 * @param {ReactNode} children - Custom content
 * @param {string} className - Additional classes
 */
const FeaturedProjectCard = forwardRef(({
  title,
  description,
  image,
  tags = [],
  href,
  featured = true,
  children,
  className = '',
  onClick,
  ...props
}, ref) => {
  const { preset, enableAdvancedEffects } = useLiquidGlass('featured');
  const [rdevComponent, setRdevComponent] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Dynamically import liquid-glass-react
  useEffect(() => {
    setIsMounted(true);
    
    if (enableAdvancedEffects && featured) {
      import('liquid-glass-react')
        .then((module) => {
          setRdevComponent(() => module.default || module.LiquidGlass);
        })
        .catch((err) => {
          console.warn('Could not load liquid-glass-react:', err);
        });
    }
  }, [enableAdvancedEffects, featured]);

  // rdev configuration with REDUCED intensity
  const rdevConfig = useMemo(() => ({
    displacementScale: isHovered ? 40 : 20,
    blurAmount: preset.blur,
    saturation: preset.saturation / 100,
    aberrationIntensity: isHovered ? 1.2 : 0.6, // Lower than hero
    elasticity: 0.08,
    cornerRadius: preset.radius,
    mode: 'standard',
  }), [preset, isHovered]);

  // Card styles
  const cardStyles = useMemo(() => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: `${preset.radius}px`,
    backdropFilter: `blur(${preset.blur}px) saturate(${preset.saturation}%)`,
    WebkitBackdropFilter: `blur(${preset.blur}px) saturate(${preset.saturation}%)`,
    backgroundColor: preset.tint,
    border: `1px solid ${preset.border}`,
    boxShadow: isHovered 
      ? `${preset.shadow}, 0 0 30px rgba(139, 92, 246, 0.2)`
      : preset.shadow,
    transition: 'all var(--motion-smooth) var(--motion-ease)',
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'none',
    cursor: href || onClick ? 'pointer' : 'default',
  }), [preset, isHovered, href, onClick]);

  // Tag styles
  const tagStyles = useMemo(() => ({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.75rem',
    fontSize: '0.75rem',
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(8px)',
    borderRadius: '999px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all var(--motion-swift) var(--motion-ease)',
  }), []);

  // Card content
  const cardContent = (
    <>
      {/* Featured badge */}
      {featured && (
        <div 
          className="featured-badge"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.375rem 0.875rem',
            fontSize: '0.6875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#fff',
            background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
            borderRadius: '999px',
            boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)',
            zIndex: 10,
          }}
        >
          Featured
        </div>
      )}

      {/* Image */}
      {image && (
        <div 
          className="card-image"
          style={{
            position: 'relative',
            height: '200px',
            overflow: 'hidden',
          }}
        >
          <img 
            src={image} 
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform var(--motion-smooth) var(--motion-ease)',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          {/* Image overlay gradient */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}

      {/* Content */}
      <div 
        className="card-content"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
        }}
      >
        {/* Title */}
        {title && (
          <h3 
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#fff',
              marginBottom: '0.5rem',
              lineHeight: 1.3,
            }}
          >
            {title}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p 
            style={{
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.6,
              marginBottom: '1rem',
              flex: 1,
            }}
          >
            {description}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div 
            className="card-tags"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: 'auto',
            }}
          >
            {tags.map((tag, index) => (
              <span key={index} style={tagStyles}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Custom children */}
        {children}
      </div>

      {/* Chromatic edge (CSS fallback) */}
      {featured && (
        <div 
          className="chromatic-edge"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: -1,
            borderRadius: 'inherit',
            background: `linear-gradient(
              135deg,
              rgba(255, 100, 200, 0.15) 0%,
              rgba(100, 200, 255, 0.15) 50%,
              rgba(200, 100, 255, 0.15) 100%
            )`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1.5px',
            pointerEvents: 'none',
            opacity: isHovered ? 1 : 0.5,
            transition: 'opacity var(--motion-smooth) var(--motion-ease)',
            animation: featured ? 'chromatic-shift 4s linear infinite' : 'none',
          }}
        />
      )}
    </>
  );

  // Wrap in link if href provided
  const Component = href ? 'a' : 'div';
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  // Event handlers
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // If rdev available and featured, use it
  if (isMounted && rdevComponent && enableAdvancedEffects && featured) {
    const RdevGlass = rdevComponent;
    return (
      <Component
        ref={ref}
        className={`featured-project-card featured-project-card-rdev ${className}`}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...linkProps}
        {...props}
      >
        <RdevGlass {...rdevConfig}>
          <div style={cardStyles}>
            {cardContent}
          </div>
        </RdevGlass>
      </Component>
    );
  }

  // CSS-only fallback
  return (
    <Component
      ref={ref}
      className={`featured-project-card featured-project-card-fallback ${className}`}
      style={cardStyles}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...linkProps}
      {...props}
    >
      {cardContent}
    </Component>
  );
});

FeaturedProjectCard.displayName = 'FeaturedProjectCard';

// CSS to add to index.css
export const FeaturedProjectCardCSS = `
/* FeaturedProjectCard Animations */
@keyframes chromatic-shift {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}

/* Card hover effects */
.featured-project-card {
  text-decoration: none;
}

.featured-project-card .card-tags span:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Accessibility: focus state */
.featured-project-card:focus-visible {
  outline: none;
  box-shadow: 
    0 12px 32px rgba(139, 92, 246, 0.15),
    0 0 0 3px rgba(139, 92, 246, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .featured-project-card .card-image {
    height: 160px;
  }
  
  .featured-project-card .card-content {
    padding: 1rem;
  }
}
`;

export default FeaturedProjectCard;
