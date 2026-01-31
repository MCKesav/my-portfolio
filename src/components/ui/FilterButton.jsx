/**
 * FilterButton Component
 * Category filter/toggle button with active state
 * Used for Skills category filtering
 * 
 * @param {string} label - Button label
 * @param {boolean} active - Whether button is active
 * @param {function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 */
const FilterButton = ({ 
  label, 
  active = false,
  onClick,
  className = '',
}) => {
  const baseClasses = 'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300';
  const activeClasses = 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg';
  const inactiveClasses = 'glass-card text-gray-300 hover:text-white hover:bg-white/15';

  return (
    <button
      onClick={onClick}
      className={`
        ${baseClasses}
        ${active ? activeClasses : inactiveClasses}
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default FilterButton;
