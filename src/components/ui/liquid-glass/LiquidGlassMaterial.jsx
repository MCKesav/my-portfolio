/**
 * LiquidGlassMaterial Component
 * =====================================================
 * 
 * UNIFIED glass material that combines:
 * - CSS-based glass (index.css tokens) for base styling
 * - Optional rdev liquid-glass-react for advanced effects
 * 
 * This is the SINGLE glass component for normal sections.
 * Only Hero/Loading/Featured use the rdev wrapper directly.
 */

import { forwardRef, useMemo } from 'react';
import { useLiquidGlass } from './useLiquidGlass';

/**
 * LiquidGlassMaterial
 * 
 * @param {string} preset - Glass preset: 'subtle' | 'standard' | 'prominent' | 'hero' | 'featured'
 * @param {string} as - Element type to render (default: 'div')
 * @param {boolean} interactive - Add hover/focus states
 * @param {boolean} lightRefraction - Add light refraction overlay
 * @param {string} refractionType - Type of refraction: 'highlight' | 'sweep' | 'edge' | 'ambient'
 * @param {boolean} rainbowEdge - Add rainbow border effect
 * @param {string} className - Additional CSS classes
 * @param {object} style - Additional inline styles
 * @param {ReactNode} children - Content
 */
const LiquidGlassMaterial = forwardRef(({
  preset = 'standard',
  as: Component = 'div',
  interactive = false,
  lightRefraction = false,
  refractionType = 'highlight',
  rainbowEdge = false,
  className = '',
  style = {},
  children,
  ...props
}, ref) => {
  const { preset: presetValues, cssVars } = useLiquidGlass(preset);

  // Build combined styles
  const combinedStyles = useMemo(() => ({
    // Apply CSS variables from preset
    ...cssVars,
    // Glass backdrop effect
    backdropFilter: `blur(var(--glass-blur)) saturate(var(--glass-saturation))`,
    WebkitBackdropFilter: `blur(var(--glass-blur)) saturate(var(--glass-saturation))`,
    // Glass appearance
    backgroundColor: 'var(--glass-tint)',
    border: `1px solid var(--glass-border)`,
    borderRadius: 'var(--glass-radius)',
    boxShadow: 'var(--glass-shadow)',
    // Apple-like motion
    transition: 'all var(--motion-smooth) var(--motion-ease)',
    // Custom overrides
    ...style,
  }), [cssVars, style]);

  // Build class list
  const classes = useMemo(() => {
    const classList = ['liquid-glass-material'];
    
    // Add preset class for CSS hooks
    classList.push(`liquid-glass-${preset}`);
    
    // Interactive states
    if (interactive) {
      classList.push('liquid-glass-interactive');
    }
    
    // Light refraction
    if (lightRefraction) {
      classList.push('light-refraction', `light-refraction-${refractionType}`);
    }
    
    // Rainbow edge
    if (rainbowEdge) {
      classList.push('liquid-glass-rainbow-edge');
    }
    
    // Custom classes
    if (className) {
      classList.push(className);
    }
    
    return classList.join(' ');
  }, [preset, interactive, lightRefraction, refractionType, rainbowEdge, className]);

  return (
    <Component
      ref={ref}
      className={classes}
      style={combinedStyles}
      {...props}
    >
      {/* Light refraction overlay */}
      {lightRefraction && (
        <div 
          className="light-refraction-overlay"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      )}
      
      {/* Rainbow edge pseudo-border */}
      {rainbowEdge && (
        <div 
          className="rainbow-edge-overlay"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: -1,
            borderRadius: 'inherit',
            background: 'linear-gradient(135deg, rgba(255,0,0,0.3), rgba(255,127,0,0.3), rgba(255,255,0,0.3), rgba(0,255,0,0.3), rgba(0,0,255,0.3), rgba(75,0,130,0.3), rgba(148,0,211,0.3))',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1px',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.5,
          }}
        />
      )}
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </Component>
  );
});

LiquidGlassMaterial.displayName = 'LiquidGlassMaterial';

// CSS to be added to index.css for this component
export const LiquidGlassMaterialCSS = `
/* Liquid Glass Material Component Styles */
.liquid-glass-material {
  position: relative;
  overflow: hidden;
  will-change: transform, backdrop-filter;
}

/* Interactive States */
.liquid-glass-interactive {
  cursor: pointer;
}

.liquid-glass-interactive:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 
    var(--glass-shadow),
    0 0 20px rgba(255, 255, 255, 0.1);
}

.liquid-glass-interactive:active {
  transform: translateY(0) scale(0.99);
}

.liquid-glass-interactive:focus-visible {
  outline: none;
  box-shadow: 
    var(--glass-shadow),
    0 0 0 3px rgba(139, 92, 246, 0.5);
}

/* Light Refraction Overlays */
.light-refraction-overlay {
  opacity: 0;
  transition: opacity var(--motion-smooth) var(--motion-ease);
}

.light-refraction:hover .light-refraction-overlay {
  opacity: 1;
}

.light-refraction-highlight .light-refraction-overlay {
  background: var(--light-highlight);
}

.light-refraction-sweep .light-refraction-overlay {
  background: var(--light-sweep);
}

.light-refraction-edge .light-refraction-overlay {
  background: var(--light-edge);
}

.light-refraction-ambient .light-refraction-overlay {
  background: var(--light-ambient);
}

/* Rainbow Edge Animation */
@keyframes rainbow-rotate {
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
}

.liquid-glass-rainbow-edge .rainbow-edge-overlay {
  animation: rainbow-rotate 8s linear infinite;
}

/* Preset-specific adjustments */
.liquid-glass-subtle {
  --glass-blur: 12px;
  --glass-saturation: 120%;
}

.liquid-glass-standard {
  --glass-blur: 24px;
  --glass-saturation: 140%;
}

.liquid-glass-prominent {
  --glass-blur: 32px;
  --glass-saturation: 160%;
}

.liquid-glass-hero {
  --glass-blur: 40px;
  --glass-saturation: 180%;
}

.liquid-glass-featured {
  --glass-blur: 28px;
  --glass-saturation: 150%;
  border-color: rgba(139, 92, 246, 0.25);
}
`;

export default LiquidGlassMaterial;
