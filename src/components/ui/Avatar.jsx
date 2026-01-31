/**
 * Avatar Component
 * Profile avatar with initials or image
 * 
 * @param {string} initials - Initials to display
 * @param {string} image - Image URL (optional)
 * @param {string} size - Avatar size (sm, md, lg, xl)
 * @param {boolean} rounded - Fully rounded (circle)
 * @param {string} className - Additional CSS classes
 */
const Avatar = ({ 
  initials = 'MCK',
  image,
  size = 'lg',
  rounded = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-20 h-20 text-xl',
    lg: 'w-24 h-24 text-2xl',
    xl: 'w-32 h-32 text-4xl',
  };

  const roundedClass = rounded ? 'rounded-full' : 'rounded-2xl';

  return (
    <div 
      className={`
        ${sizeClasses[size]}
        ${roundedClass}
        bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-600 
        flex items-center justify-center flex-shrink-0
        ${className}
      `}
    >
      {image ? (
        <img 
          src={image} 
          alt="Profile" 
          className={`w-full h-full object-cover ${roundedClass}`}
        />
      ) : (
        <span className="font-bold text-white">{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
