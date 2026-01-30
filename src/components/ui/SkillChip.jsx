/**
 * SkillChip Component
 * Apple-inspired low-elevation glass pill for skill tags
 * Uses the liquid glass design system
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
  // Color map for tech variant with proper glass-like appearance
  const colorMap = {
    blue: { 
      bg: 'rgba(59, 130, 246, 0.15)', 
      border: 'rgba(59, 130, 246, 0.25)', 
      text: 'rgb(147, 197, 253)',
      glow: 'rgba(59, 130, 246, 0.1)'
    },
    purple: { 
      bg: 'rgba(139, 92, 246, 0.15)', 
      border: 'rgba(139, 92, 246, 0.25)', 
      text: 'rgb(196, 181, 253)',
      glow: 'rgba(139, 92, 246, 0.1)'
    },
    green: { 
      bg: 'rgba(34, 197, 94, 0.15)', 
      border: 'rgba(34, 197, 94, 0.25)', 
      text: 'rgb(134, 239, 172)',
      glow: 'rgba(34, 197, 94, 0.1)'
    },
    red: { 
      bg: 'rgba(239, 68, 68, 0.15)', 
      border: 'rgba(239, 68, 68, 0.25)', 
      text: 'rgb(252, 165, 165)',
      glow: 'rgba(239, 68, 68, 0.1)'
    },
    yellow: { 
      bg: 'rgba(234, 179, 8, 0.15)', 
      border: 'rgba(234, 179, 8, 0.25)', 
      text: 'rgb(253, 224, 71)',
      glow: 'rgba(234, 179, 8, 0.1)'
    },
    cyan: { 
      bg: 'rgba(6, 182, 212, 0.15)', 
      border: 'rgba(6, 182, 212, 0.25)', 
      text: 'rgb(103, 232, 249)',
      glow: 'rgba(6, 182, 212, 0.1)'
    },
    orange: { 
      bg: 'rgba(249, 115, 22, 0.15)', 
      border: 'rgba(249, 115, 22, 0.25)', 
      text: 'rgb(253, 186, 116)',
      glow: 'rgba(249, 115, 22, 0.1)'
    },
  };

  const getColorStyle = () => colorMap[color] || colorMap.blue;

  // Tech variant - accent colored pill
  if (variant === 'tech') {
    const style = getColorStyle();
    return (
      <span 
        className={`
          px-3 py-1.5 text-xs font-medium rounded-full
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-0.5
          ${className}
        `}
        style={{
          background: `linear-gradient(135deg, ${style.bg}, transparent)`,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: style.border,
          color: style.text,
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 8px ${style.glow}`,
        }}
      >
        {label}
      </span>
    );
  }

  // Achievement variant - gradient glass pill
  if (variant === 'achievement') {
    return (
      <span 
        className={`
          glass-pill px-4 py-2 text-sm font-medium
          bg-gradient-to-r from-blue-500/15 to-purple-500/15
          border border-blue-500/25 text-blue-300
          hover:from-blue-500/20 hover:to-purple-500/20
          ${className}
        `}
      >
        {label}
      </span>
    );
  }

  // Default variant - neutral glass pill
  return (
    <span 
      className={`
        glass-pill px-4 py-2 text-sm font-medium
        text-gray-300 hover:text-white
        ${className}
      `}
    >
      {label}
    </span>
  );
};

export default SkillChip;
