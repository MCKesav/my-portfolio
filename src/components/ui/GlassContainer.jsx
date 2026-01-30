/**
 * GlassContainer Component
 * Frosted glass card wrapper with Apple-inspired liquid glass material
 * 
 * Uses elevation-based blur and refraction system:
 * - Low: subtle tags, pills (12px blur)
 * - Medium: cards, panels (24px blur) - default
 * - High: navbar, hero (32px blur)
 * - Highest: forms, modals (40px blur)
 * 
 * @param {React.ReactNode} children - Content inside the container
 * @param {string} className - Additional CSS classes
 * @param {boolean} glow - Enable glow effect
 * @param {boolean} dark - Use darker variant
 * @param {string} padding - Padding size (none, sm, md, lg, xl)
 * @param {boolean} hover - Enable hover lift effect (default: true)
 * @param {string} elevation - Glass elevation level (low, medium, high, highest)
 * @param {boolean} liquidEffect - Apply SVG liquid distortion filter
 * @param {boolean} rainbowEdge - Add rainbow edge glow on hover
 */
const GlassContainer = ({ 
  children, 
  className = '', 
  glow = false,
  dark = false,
  padding = 'md',
  hover = true,
  elevation = 'medium',
  liquidEffect = false,
  rainbowEdge = false,
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };

  // Use liquid-glass for new elevation system, fall back to glass-card for compatibility
  const baseClass = dark ? 'glass-card-dark' : 'glass-card';
  const elevationClass = elevation !== 'medium' ? `liquid-glass liquid-glass--${elevation}` : '';
  const glowClass = glow ? 'glow-effect' : '';
  const hoverClass = !hover ? 'glass-card--static' : '';
  const liquidClass = liquidEffect ? 'liquid-glass-effect-subtle' : '';
  const rainbowClass = rainbowEdge ? 'liquid-glass-rainbow' : '';
  const paddingClass = paddingClasses[padding] || paddingClasses.md;

  return (
    <div 
      className={`${elevationClass || baseClass} ${glowClass} ${hoverClass} ${liquidClass} ${rainbowClass} ${paddingClass} ${className}`}
      {...props}
    >
      {/* Content wrapper - z-10 ensures content appears above reflection pseudo-elements */}
      <div className="glass-content">
        {children}
      </div>
    </div>
  );
};

export default GlassContainer;
