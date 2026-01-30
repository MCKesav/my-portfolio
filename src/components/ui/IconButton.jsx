/**
 * IconButton Component
 * Social icons, navigation icons, and action buttons with glass effect
 * 
 * @param {React.ReactNode} icon - Icon component to render
 * @param {string} href - External link URL
 * @param {string} label - Accessibility label
 * @param {string} size - Button size (sm, md, lg)
 * @param {function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 */
const IconButton = ({ 
  icon, 
  href,
  label,
  size = 'md',
  onClick,
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const baseClasses = `
    ${sizeClasses[size]}
    glass-card flex items-center justify-center rounded-lg
    text-gray-300 hover:text-white hover:bg-white/20
    transition-all duration-300
    ${className}
  `;

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        aria-label={label}
        {...props}
      >
        {icon}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={baseClasses}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
