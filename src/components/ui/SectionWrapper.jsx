/**
 * SectionWrapper Component
 * Handles background images, overlay, padding, and layout spacing for sections
 * 
 * @param {React.ReactNode} children - Section content
 * @param {string} id - Section ID for navigation
 * @param {string} backgroundImage - Background image path (bg1, bg2, bg1)
 * @param {string} overlayOpacity - Overlay opacity level (light, medium, dark)
 * @param {string} className - Additional CSS classes
 * @param {boolean} fullHeight - Minimum full viewport height
 * @param {boolean} centered - Center content vertically
 */
const SectionWrapper = ({ 
  children, 
  id,
  backgroundImage = 'bg1',
  overlayOpacity = 'medium',
  className = '',
  fullHeight = true,
  centered = false,
}) => {
  const bgPath = `/ui images/${backgroundImage}.png`;
  
  const overlayClasses = {
    light: 'from-slate-900/40 via-slate-900/30 to-slate-900/40',
    medium: 'from-slate-900/60 via-slate-900/50 to-slate-900/60',
    dark: 'from-slate-900/80 via-slate-900/70 to-slate-900/80',
  };

  return (
    <section 
      id={id}
      className={`
        relative py-20 px-4
        ${fullHeight ? 'min-h-screen' : ''}
        ${centered ? 'flex items-center justify-center' : ''}
        ${className}
      `}
      style={{
        backgroundImage: `url("${bgPath}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${overlayClasses[overlayOpacity] || overlayClasses.medium}`} />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
