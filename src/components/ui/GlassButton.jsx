import { Link } from 'react-router-dom';

/**
 * GlassButton Component
 * Apple-inspired liquid glass button with refraction and motion
 * 
 * Uses the liquid glass design system with:
 * - Light refraction overlay
 * - Apple-like timing curves (cubic-bezier 0.22, 1, 0.36, 1)
 * - Hover lift and glow effects
 * 
 * @param {React.ReactNode} children - Button content
 * @param {string} variant - Button style (primary, secondary, outline, ghost)
 * @param {string} size - Button size (sm, md, lg)
 * @param {string} href - External link URL
 * @param {string} to - React Router link path
 * @param {boolean} disabled - Disabled state
 * @param {boolean} loading - Loading state
 * @param {function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 */
const GlassButton = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  href,
  to,
  disabled = false,
  loading = false,
  onClick,
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'glass-button text-white font-medium',
    secondary: `
      bg-gradient-to-r from-blue-500 to-purple-500 
      text-white font-medium rounded-xl 
      hover:from-blue-400 hover:to-purple-400
      hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25
      active:translate-y-0 active:shadow-none
      transition-all duration-300
    `,
    outline: `
      border border-white/20 rounded-xl 
      text-white font-medium 
      backdrop-blur-sm
      hover:bg-white/10 hover:border-white/30
      hover:-translate-y-0.5
      active:translate-y-0
      transition-all duration-300
    `,
    ghost: `
      text-gray-400 rounded-xl 
      hover:text-white hover:bg-white/8
      transition-all duration-300
    `,
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled || loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Loading spinner with Apple-like animation
  const LoadingSpinner = () => (
    <div 
      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
      style={{ animationDuration: '0.8s' }}
    />
  );

  const content = loading ? (
    <>
      <LoadingSpinner />
      <span className="opacity-80">{children}</span>
    </>
  ) : children;

  // External link
  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  // React Router link
  if (to) {
    return (
      <Link 
        to={to}
        className={baseClasses}
        {...props}
      >
        {content}
      </Link>
    );
  }

  // Regular button
  return (
    <button 
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
};

export default GlassButton;
