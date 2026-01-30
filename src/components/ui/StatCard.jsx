/**
 * StatCard Component
 * Displays a statistic with label - uses glass-stat for reflections
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
    <div className={`glass-stat p-3 ${className}`}>
      <div className="relative z-10 flex justify-between items-center">
        <span className="text-gray-300">{label}</span>
        <span className="text-white font-medium">{value}</span>
      </div>
    </div>
  );
};

/**
 * QuickStat Component  
 * Compact stat display for overview cards - uses glass-stat for reflections
 * 
 * @param {string} value - Main value/number
 * @param {string} label - Description label
 * @param {boolean} centered - Center align content
 * @param {boolean} gradient - Use gradient text for value
 * @param {string} className - Additional CSS classes
 */
const QuickStat = ({ value, label, centered = false, gradient = false, className = '' }) => {
  return (
    <div className={`glass-stat p-4 ${className}`}>
      <div className={`relative z-10 ${centered ? 'text-center' : ''}`}>
        <p className={`text-2xl font-bold ${gradient ? 'gradient-text' : 'text-white'}`}>{value}</p>
        <p className="text-gray-300 text-sm">{label}</p>
      </div>
    </div>
  );
};

export { StatCard, QuickStat };
export default StatCard;
