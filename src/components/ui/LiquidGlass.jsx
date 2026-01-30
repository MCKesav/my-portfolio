/**
 * LiquidGlass Component
 * Apple-inspired liquid glass material with elevation-based blur and refraction
 * 
 * Design Principles:
 * - Glass is contextual, not everywhere
 * - Different elevation = different blur & opacity
 * - Motion reinforces depth
 * - Light refraction > flat transparency
 * 
 * @example
 * // Low elevation - tags, pills
 * <LiquidGlass elevation="low">Tag</LiquidGlass>
 * 
 * // Medium elevation (default) - cards
 * <LiquidGlass>Card content</LiquidGlass>
 * 
 * // High elevation - navbar, hero
 * <LiquidGlass elevation="high">Hero panel</LiquidGlass>
 * 
 * // Highest elevation - forms, modals
 * <LiquidGlass elevation="highest" variant="dark">Form</LiquidGlass>
 */

const LiquidGlass = ({
  children,
  className = '',
  elevation = 'medium',  // 'low' | 'medium' | 'high' | 'highest'
  variant = 'default',   // 'default' | 'dark' | 'accent'
  hover = true,          // Enable hover lift effect
  glow = false,          // Add pulsing glow effect
  padding = 'md',        // 'none' | 'sm' | 'md' | 'lg' | 'xl'
  as: Component = 'div', // Polymorphic component
  ...props
}) => {
  // Elevation class mapping
  const elevationClasses = {
    low: 'liquid-glass--low',
    medium: '',  // default liquid-glass
    high: 'liquid-glass--high',
    highest: 'liquid-glass--highest',
  };
  
  // Variant class mapping
  const variantClasses = {
    default: '',
    dark: 'liquid-glass--dark',
    accent: 'liquid-glass--accent',
  };
  
  // Padding class mapping
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
    xl: 'p-10',
  };
  
  // Build class string
  const classes = [
    'liquid-glass',
    elevationClasses[elevation],
    variantClasses[variant],
    paddingClasses[padding],
    !hover && 'liquid-glass--static',
    glow && 'animate-pulse-glow',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {/* Content wrapper ensures children render above glass reflections */}
      <div className="glass-content">
        {children}
      </div>
    </Component>
  );
};

/**
 * LiquidGlassNav - Pre-configured for navigation bars
 * High elevation, dark variant, no hover lift
 */
export const LiquidGlassNav = ({ children, className = '', ...props }) => (
  <nav className={`liquid-glass-nav ${className}`} {...props}>
    <div className="glass-content">
      {children}
    </div>
  </nav>
);

/**
 * LiquidGlassPill - Pre-configured for tags and chips
 * Low elevation, small padding
 */
export const LiquidGlassPill = ({ children, className = '', ...props }) => (
  <span className={`liquid-glass-pill px-3 py-1.5 text-sm ${className}`} {...props}>
    <span className="glass-content">
      {children}
    </span>
  </span>
);

/**
 * LiquidGlassCard - Pre-configured for content cards
 * Medium elevation with hover effect
 */
export const LiquidGlassCard = ({ 
  children, 
  className = '', 
  padding = 'md',
  hover = true,
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };
  
  return (
    <div 
      className={`glass-card ${paddingClasses[padding]} ${!hover ? 'glass-card--static' : ''} ${className}`} 
      {...props}
    >
      <div className="glass-content">
        {children}
      </div>
    </div>
  );
};

/**
 * LiquidGlassHero - Pre-configured for hero panels
 * High elevation, larger padding, prominent
 */
export const LiquidGlassHero = ({ children, className = '', ...props }) => (
  <LiquidGlass 
    elevation="high" 
    padding="xl" 
    className={`w-full ${className}`} 
    {...props}
  >
    {children}
  </LiquidGlass>
);

/**
 * LiquidGlassForm - Pre-configured for contact forms
 * Highest elevation, dark variant
 */
export const LiquidGlassForm = ({ children, className = '', onSubmit, ...props }) => (
  <form 
    onSubmit={onSubmit}
    className={`liquid-glass liquid-glass--highest liquid-glass--dark p-8 ${className}`} 
    {...props}
  >
    <div className="glass-content">
      {children}
    </div>
  </form>
);

export default LiquidGlass;
