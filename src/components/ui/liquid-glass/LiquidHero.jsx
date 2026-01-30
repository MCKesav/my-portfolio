/**
 * LiquidHero Component
 * =====================================================
 * 
 * Hero section with FULL rdev liquid-glass-react effects.
 * This is one of only THREE components that uses the rdev library
 * (Hero, Loading, Featured Cards) - all others use CSS-only.
 * 
 * Features:
 * - Chromatic aberration for prismatic edge effect
 * - Displacement for liquid distortion
 * - Elasticity for organic movement
 * - Responsive: falls back to CSS on mobile
 */

import { useMemo, useState, useEffect } from 'react';
import { useLiquidGlass } from './useLiquidGlass';

// Conditional import for liquid-glass-react
let LiquidGlassReact = null;
try {
  // Dynamic import handled in useEffect for SSR safety
} catch (e) {
  console.warn('liquid-glass-react not available, using CSS fallback');
}

/**
 * LiquidHero
 * 
 * @param {ReactNode} children - Hero content
 * @param {string} title - Main heading
 * @param {string} subtitle - Secondary text
 * @param {ReactNode} actions - CTA buttons
 * @param {string} className - Additional classes
 * @param {object} glassConfig - Override rdev config
 */
const LiquidHero = ({
  children,
  title,
  subtitle,
  actions,
  className = '',
  glassConfig = {},
  ...props
}) => {
  const { preset, enableAdvancedEffects } = useLiquidGlass('hero');
  const [rdevComponent, setRdevComponent] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // Dynamically import liquid-glass-react
  useEffect(() => {
    setIsMounted(true);
    
    if (enableAdvancedEffects) {
      import('liquid-glass-react')
        .then((module) => {
          setRdevComponent(() => module.default || module.LiquidGlass);
        })
        .catch((err) => {
          console.warn('Could not load liquid-glass-react:', err);
        });
    }
  }, [enableAdvancedEffects]);

  // rdev configuration with preset values
  const rdevConfig = useMemo(() => ({
    displacementScale: preset.displacementScale,
    blurAmount: preset.blur,
    saturation: preset.saturation / 100, // rdev uses 0-2 scale
    aberrationIntensity: preset.aberrationIntensity,
    elasticity: preset.elasticity,
    cornerRadius: preset.radius,
    mode: 'prominent', // Hero uses prominent mode
    ...glassConfig, // Allow overrides
  }), [preset, glassConfig]);

  // CSS-only fallback styles
  const fallbackStyles = useMemo(() => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    padding: '4rem 2rem',
    backdropFilter: `blur(${preset.blur}px) saturate(${preset.saturation}%)`,
    WebkitBackdropFilter: `blur(${preset.blur}px) saturate(${preset.saturation}%)`,
    backgroundColor: preset.tint,
    borderRadius: `${preset.radius}px`,
    border: `1px solid ${preset.border}`,
    boxShadow: preset.shadow,
    overflow: 'hidden',
    transition: 'all var(--motion-gentle) var(--motion-ease)',
  }), [preset]);

  // Hero content
  const heroContent = (
    <div className="liquid-hero-content">
      {/* Animated background gradient */}
      <div 
        className="liquid-hero-gradient"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 60%)
          `,
          animation: 'liquid-hero-breathe 8s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Title */}
      {title && (
        <h1 
          className="liquid-hero-title"
          style={{
            position: 'relative',
            zIndex: 2,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1.5rem',
          }}
        >
          {title}
        </h1>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p 
          className="liquid-hero-subtitle"
          style={{
            position: 'relative',
            zIndex: 2,
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            maxWidth: '600px',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Actions */}
      {actions && (
        <div 
          className="liquid-hero-actions"
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {actions}
        </div>
      )}

      {/* Custom children */}
      {children && (
        <div 
          className="liquid-hero-custom"
          style={{
            position: 'relative',
            zIndex: 2,
            marginTop: '2rem',
          }}
        >
          {children}
        </div>
      )}

      {/* Chromatic edge highlight */}
      <div 
        className="liquid-hero-edge"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: -1,
          borderRadius: 'inherit',
          background: `linear-gradient(
            135deg,
            rgba(255, 100, 100, 0.2) 0%,
            rgba(255, 200, 100, 0.2) 20%,
            rgba(100, 255, 100, 0.2) 40%,
            rgba(100, 200, 255, 0.2) 60%,
            rgba(200, 100, 255, 0.2) 80%,
            rgba(255, 100, 200, 0.2) 100%
          )`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '2px',
          pointerEvents: 'none',
          animation: 'liquid-rainbow-shift 6s linear infinite',
        }}
      />
    </div>
  );

  // If rdev is available and effects enabled, use it
  if (isMounted && rdevComponent && enableAdvancedEffects) {
    const RdevGlass = rdevComponent;
    return (
      <section className={`liquid-hero liquid-hero-rdev ${className}`} {...props}>
        <RdevGlass {...rdevConfig}>
          {heroContent}
        </RdevGlass>
      </section>
    );
  }

  // CSS-only fallback
  return (
    <section 
      className={`liquid-hero liquid-hero-fallback ${className}`}
      style={fallbackStyles}
      {...props}
    >
      {heroContent}
    </section>
  );
};

// CSS to add to index.css
export const LiquidHeroCSS = `
/* LiquidHero Animations */
@keyframes liquid-hero-breathe {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

@keyframes liquid-rainbow-shift {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}

/* LiquidHero responsive */
@media (max-width: 768px) {
  .liquid-hero {
    min-height: 70vh;
    padding: 2rem 1rem;
  }
  
  .liquid-hero-title {
    font-size: 2rem !important;
  }
  
  .liquid-hero-subtitle {
    font-size: 1rem !important;
  }
}

/* LiquidHero hover effects (CSS fallback) */
.liquid-hero-fallback:hover {
  transform: scale(1.005);
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.25),
    0 12px 24px rgba(0, 0, 0, 0.15),
    0 0 40px rgba(139, 92, 246, 0.1);
}
`;

export default LiquidHero;
