/**
 * SkillBar Component
 * Apple-inspired liquid glass skill card with glowing progress bar
 * 
 * Features:
 * - Gradient progress bar with glow effect
 * - Animated fill on mount
 * - Theme-adaptive colors
 * 
 * @param {string} name - Skill name
 * @param {number} level - Skill level (0-100)
 * @param {string} category - Skill category
 * @param {string} color - Color theme (blue, cyan, green, purple, orange, pink, red)
 * @param {number} animationDelay - Animation delay in ms
 */
const SkillBar = ({ 
  name, 
  level, 
  category,
  color = 'blue',
  animationDelay = 0,
}) => {
  const categoryLabel = category === 'ai' ? 'AI & ML' : category;

  // Color configurations for progress bar with glow
  const colorConfig = {
    blue: {
      gradient: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)',
      glow: 'rgba(59, 130, 246, 0.6)',
      shadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
    },
    cyan: {
      gradient: 'linear-gradient(90deg, #06b6d4 0%, #22d3ee 50%, #67e8f9 100%)',
      glow: 'rgba(6, 182, 212, 0.6)',
      shadow: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)',
    },
    green: {
      gradient: 'linear-gradient(90deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)',
      glow: 'rgba(16, 185, 129, 0.6)',
      shadow: '0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3)',
    },
    purple: {
      gradient: 'linear-gradient(90deg, #8b5cf6 0%, #a78bfa 50%, #c4b5fd 100%)',
      glow: 'rgba(139, 92, 246, 0.6)',
      shadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
    },
    orange: {
      gradient: 'linear-gradient(90deg, #f97316 0%, #fb923c 50%, #fdba74 100%)',
      glow: 'rgba(249, 115, 22, 0.6)',
      shadow: '0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3)',
    },
    pink: {
      gradient: 'linear-gradient(90deg, #ec4899 0%, #f472b6 50%, #f9a8d4 100%)',
      glow: 'rgba(236, 72, 153, 0.6)',
      shadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
    },
    red: {
      gradient: 'linear-gradient(90deg, #ef4444 0%, #f87171 50%, #fca5a5 100%)',
      glow: 'rgba(239, 68, 68, 0.6)',
      shadow: '0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.3)',
    },
    yellow: {
      gradient: 'linear-gradient(90deg, #eab308 0%, #facc15 50%, #fde047 100%)',
      glow: 'rgba(234, 179, 8, 0.6)',
      shadow: '0 0 20px rgba(234, 179, 8, 0.5), 0 0 40px rgba(234, 179, 8, 0.3)',
    },
  };

  const currentColor = colorConfig[color] || colorConfig.blue;

  return (
    <div 
      className="glass-card p-6 group"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="glass-content">
        {/* Header with name and percentage */}
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {name}
          </h4>
          <span className="text-sm font-medium text-gray-400">{level}%</span>
        </div>

        {/* Progress bar track */}
        <div className="relative h-2 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
          {/* Glow layer behind the bar */}
          <div 
            className="absolute inset-0 rounded-full opacity-50 blur-sm transition-all duration-1000 ease-out"
            style={{ 
              width: `${level}%`,
              background: currentColor.gradient,
            }}
          />
          
          {/* Main progress bar */}
          <div 
            className="relative h-full rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: `${level}%`,
              background: currentColor.gradient,
              boxShadow: currentColor.shadow,
            }}
          >
            {/* Shimmer effect */}
            <div 
              className="absolute inset-0 rounded-full opacity-60"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Category tag */}
        <div className="mt-3">
          <span className="text-xs text-gray-500 capitalize font-medium">
            {categoryLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
