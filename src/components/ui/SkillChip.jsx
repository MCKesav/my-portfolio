/**
 * SkillChip Component
 * Small pill/badge for displaying skill tags
 * 
 * @param {string} label - Skill label
 * @param {string} variant - Style variant (default, tech, achievement)
 * @param {string} color - Color scheme (blue, purple, green, etc.)
 * @param {string} className - Additional CSS classes
 */
const SkillChip = ({ 
  label, 
  variant = 'default',
  color = 'blue',
  className = '',
}) => {
  const variantClasses = {
    default: 'glass-card text-gray-300 hover:text-white hover:bg-white/15',
    tech: `bg-${color}-500/20 border border-${color}-500/30 text-${color}-300`,
    achievement: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300',
  };

  // For tech variant, use inline styles for dynamic colors
  const getTechStyle = () => {
    const colorMap = {
      blue: { bg: 'rgba(59, 130, 246, 0.2)', border: 'rgba(59, 130, 246, 0.3)', text: 'rgb(147, 197, 253)' },
      purple: { bg: 'rgba(139, 92, 246, 0.2)', border: 'rgba(139, 92, 246, 0.3)', text: 'rgb(196, 181, 253)' },
      green: { bg: 'rgba(34, 197, 94, 0.2)', border: 'rgba(34, 197, 94, 0.3)', text: 'rgb(134, 239, 172)' },
      red: { bg: 'rgba(239, 68, 68, 0.2)', border: 'rgba(239, 68, 68, 0.3)', text: 'rgb(252, 165, 165)' },
      yellow: { bg: 'rgba(234, 179, 8, 0.2)', border: 'rgba(234, 179, 8, 0.3)', text: 'rgb(253, 224, 71)' },
      cyan: { bg: 'rgba(6, 182, 212, 0.2)', border: 'rgba(6, 182, 212, 0.3)', text: 'rgb(103, 232, 249)' },
      orange: { bg: 'rgba(249, 115, 22, 0.2)', border: 'rgba(249, 115, 22, 0.3)', text: 'rgb(253, 186, 116)' },
    };
    return colorMap[color] || colorMap.blue;
  };

  if (variant === 'tech') {
    const style = getTechStyle();
    return (
      <span 
        className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${className}`}
        style={{
          backgroundColor: style.bg,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: style.border,
          color: style.text,
        }}
      >
        {label}
      </span>
    );
  }

  return (
    <span 
      className={`
        px-4 py-2 text-sm rounded-full
        transition-all duration-300 cursor-default
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {label}
    </span>
  );
};

export default SkillChip;
