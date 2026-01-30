/**
 * GlassContainer Component
 * Base frosted glass card wrapper with blur, border, shadow, and reflections
 * 
 * Reflections are applied via CSS pseudo-elements in index.css
 * Content is wrapped in relative z-10 to appear above reflections
 * 
 * @param {React.ReactNode} children - Content inside the container
 * @param {string} className - Additional CSS classes
 * @param {boolean} glow - Enable glow effect
 * @param {boolean} dark - Use darker variant
 * @param {string} padding - Padding size (sm, md, lg, xl)
 * @param {boolean} hover - Enable hover effect
 */
const GlassContainer = ({ 
  children, 
  className = '', 
  glow = false,
  dark = false,
  padding = 'md',
  hover = false,
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };

  const baseClass = dark ? 'glass-card-dark' : 'glass-card';
  const glowClass = glow ? 'glow-effect' : '';
  const hoverClass = hover ? 'hover:bg-white/15 transition-all duration-300' : '';
  const paddingClass = paddingClasses[padding] || paddingClasses.md;

  return (
    <div 
      className={`${baseClass} ${glowClass} ${hoverClass} ${paddingClass} ${className}`}
      {...props}
    >
      {/* Content wrapper - z-10 ensures content appears above reflection pseudo-elements */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassContainer;
