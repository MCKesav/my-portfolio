/**
 * StatCard Component
 * Displays a statistic with label
 * Matches glass material from reference image
 * 
 * @param {string} label - Statistic label
 * @param {string} value - Statistic value
 * @param {string} className - Additional CSS classes
 */
const StatCard = ({ 
  label, 
  value,
  className = '',
}) => {
  return (
    <div className={`
      relative overflow-hidden
      flex justify-between items-center p-4 
      bg-white/5 backdrop-filter backdrop-blur-lg
      border border-white/10 rounded-xl
      before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.08] before:to-transparent before:pointer-events-none
      ${className}
    `}>
      <span className="relative z-10 text-gray-400">{label}</span>
      <span className="relative z-10 text-white font-medium">{value}</span>
    </div>
  );
};

/**
 * QuickStat Component  
 * Compact stat display for overview cards
 * Matches reference image stat boxes (144 Projects, 604 Likes, etc.)
 * 
 * @param {string} value - Main value/number
 * @param {string} label - Description label
 * @param {boolean} centered - Center align content
 * @param {boolean} gradient - Use gradient text for value
 * @param {string} className - Additional CSS classes
 */
const QuickStat = ({ value, label, centered = false, gradient = false, className = '' }) => {
  return (
    <div className={`
      relative overflow-hidden
      p-5 
      bg-gradient-to-br from-blue-500/10 to-purple-500/10
      backdrop-filter backdrop-blur-lg
      border border-blue-400/20 rounded-2xl
      before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.12] before:via-white/[0.04] before:to-transparent before:pointer-events-none
      hover:border-blue-400/30 transition-all duration-300
      ${centered ? 'text-center' : ''} 
      ${className}
    `}>
      <p className={`relative z-10 text-3xl font-bold mb-1 ${gradient ? 'gradient-text' : 'text-white'}`}>{value}</p>
      <p className="relative z-10 text-gray-400 text-sm font-medium">{label}</p>
    </div>
  );
};

export { StatCard, QuickStat };
export default StatCard;
