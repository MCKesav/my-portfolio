/**
 * SectionWrapper Component
 * Handles background images, overlay, padding, and layout spacing for sections
 * 
 * Uses centralized CSS variables for background:
 * - --app-background-image: Change once in index.css to update all pages
 * - --overlay-light/medium/dark: Consistent overlay gradients
 * 
 * @param {React.ReactNode} children - Section content
 * @param {string} id - Section ID for navigation
 * @param {string} backgroundImage - Background image path (bg1, bg2, bg3) or 'default' for CSS variable
 * @param {string} overlayOpacity - Overlay opacity level (light, medium, dark)
 * @param {string} theme - Reflection theme (blue, purple, cyan, green, pink, warm, cool)
 * @param {string} className - Additional CSS classes
 * @param {boolean} fullHeight - Minimum full viewport height
 * @param {boolean} centered - Center content vertically
 * @param {boolean} useGlobalBackground - Use the global CSS variable background (default: true)
 */
const SectionWrapper = ({ 
  children, 
  id,
  backgroundImage = 'default',
  overlayOpacity = 'medium',
  theme = 'blue',
  className = '',
  fullHeight = true,
  centered = false,
  useGlobalBackground = true,
}) => {
  // Theme class for adaptive reflections
  const themeClass = theme ? `theme-${theme}` : 'theme-warm';

  return (
    <section 
      id={id}
      className={`
        relative py-20 px-4
        ${fullHeight ? 'min-h-screen' : ''}
        ${centered ? 'flex items-center justify-center' : ''}
        ${themeClass}
        ${className}
      `}
      style={{
        backgroundColor: 'var(--bg-primary)',
        background: 'var(--app-background-gradient)',
      }}
    >
      {/* Background image layer - only for dark themes with images */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: 'var(--app-background-image)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Gradient Overlay - uses CSS variables */}
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{ background: `var(--overlay-${overlayOpacity})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
