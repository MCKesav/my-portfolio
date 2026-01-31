import LiquidGlass from './LiquidGlass';

/**
 * GlassContainer Component
 * Simplified API wrapper around LiquidGlass for common use cases.
 * For advanced features, use LiquidGlass directly.
 * 
 * Uses elevation-based blur and refraction system:
 * - Low: subtle tags, pills (12px blur)
 * - Medium: cards, panels (24px blur) - default
 * - High: navbar, hero (32px blur)
 * - Highest: forms, modals (40px blur)
 * 
 * @param {React.ReactNode} children - Content inside the container
 * @param {string} className - Additional CSS classes
 * @param {boolean} glow - Enable glow effect (maps to variant="glow")
 * @param {boolean} dark - Use darker variant (maps to variant="dark")
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
  // Map GlassContainer props to LiquidGlass props
  const variant = dark ? 'dark' : glow ? 'glow' : 'default';
  
  return (
    <LiquidGlass
      elevation={elevation}
      variant={variant}
      padding={padding}
      hover={hover}
      liquidEffect={liquidEffect}
      rainbowEdge={rainbowEdge}
      className={className}
      {...props}
    >
      {children}
    </LiquidGlass>
  );
};

export default GlassContainer;
