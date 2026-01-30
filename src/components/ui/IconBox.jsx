/**
 * IconBox Component
 * Consistent icon wrapper with gradient background
 * Used across About, Contact, Experience sections
 * 
 * @param {React.ReactNode} icon - Icon component
 * @param {string} size - Box size (sm, md, lg)
 * @param {string} color - Color scheme (blue, purple, yellow, green)
 * @param {string} className - Additional CSS classes
 */
const IconBox = ({ 
  icon, 
  size = 'md',
  color = 'blue',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClasses = {
    blue: 'from-blue-500/20 to-purple-500/20 text-blue-400',
    purple: 'from-purple-500/20 to-pink-500/20 text-purple-400',
    yellow: 'from-yellow-500/20 to-orange-500/20 text-yellow-400',
    green: 'from-green-500/20 to-emerald-500/20 text-green-400',
    cyan: 'from-cyan-500/20 to-blue-500/20 text-cyan-400',
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]}
        rounded-xl bg-gradient-to-br
        ${colorClasses[color]}
        flex items-center justify-center
        transition-transform duration-300
        ${className}
      `}
    >
      {icon}
    </div>
  );
};

export default IconBox;
