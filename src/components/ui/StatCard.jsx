/**
 * StatCard Component
 * Displays a statistic with label
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
    <div className={`flex justify-between items-center p-3 bg-white/5 rounded-lg ${className}`}>
      <span className="text-gray-400">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
};

/**
 * QuickStat Component  
 * Compact stat display for overview cards
 * 
 * @param {string} value - Main value/number
 * @param {string} label - Description label
 * @param {boolean} centered - Center align content
 * @param {boolean} gradient - Use gradient text for value
 * @param {string} className - Additional CSS classes
 */
const QuickStat = ({ value, label, centered = false, gradient = false, className = '' }) => {
  return (
    <div className={`p-4 bg-white/5 rounded-xl ${centered ? 'text-center' : ''} ${className}`}>
      <p className={`text-2xl font-bold ${gradient ? 'gradient-text' : 'text-white'}`}>{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
};

export { StatCard, QuickStat };
export default StatCard;
