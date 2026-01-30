/**
 * SkillBar Component
 * Skill item with progress bar and level indicator
 * 
 * @param {string} name - Skill name
 * @param {number} level - Skill level (0-100)
 * @param {string} category - Skill category
 * @param {string} color - Gradient color classes (e.g., "from-blue-400 to-blue-600")
 * @param {number} animationDelay - Animation delay in ms
 */
const SkillBar = ({ 
  name, 
  level, 
  category,
  color = 'from-blue-400 to-blue-600',
  animationDelay = 0,
}) => {
  const categoryLabel = category === 'ai' ? 'AI & ML' : category;

  return (
    <div 
      className="glass-card p-6 hover:bg-white/15 transition-all duration-300 group"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
          {name}
        </h4>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>

      {/* Category tag */}
      <div className="mt-3">
        <span className="text-xs text-gray-500 capitalize">
          {categoryLabel}
        </span>
      </div>
    </div>
  );
};

export default SkillBar;
