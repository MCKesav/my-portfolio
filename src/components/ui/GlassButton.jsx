import { Link } from 'react-router-dom';

/**
 * GlassButton Component
 * Reusable button with glass effect, hover glow, and focus states
 * 
 * @param {React.ReactNode} children - Button content
 * @param {string} variant - Button style (primary, secondary, outline)
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
    secondary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity',
    outline: 'border border-white/20 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-300',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300',
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  // Loading spinner
  const LoadingSpinner = () => (
    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
  );

  const content = loading ? (
    <>
      <LoadingSpinner />
      {children}
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
