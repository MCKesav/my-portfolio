/**
 * SubHeading Component
 * Consistent section sub-headings with optional icon
 * Used in Experience, Skills sections
 * 
 * @param {React.ReactNode} icon - Optional icon component
 * @param {string} iconColor - Icon color class
 * @param {string} children - Heading text
 * @param {boolean} centered - Center align text
 * @param {string} className - Additional CSS classes
 */
const SubHeading = ({ 
  icon, 
  iconColor = 'text-blue-400',
  children,
  centered = false,
  className = '',
}) => {
  return (
    <h3 
      className={`
        text-2xl font-bold text-white mb-8
        flex items-center gap-3
        ${centered ? 'justify-center' : ''}
        ${className}
      `}
    >
      {icon && <span className={iconColor}>{icon}</span>}
      {children}
    </h3>
  );
};

export default SubHeading;
