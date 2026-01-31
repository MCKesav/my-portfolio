/**
 * StatusBadge Component
 * Badge showing availability status
 * 
 * @param {string} text - Badge text
 * @param {boolean} active - Whether status is active/available
 */
const StatusBadge = ({ 
  text = 'Available for opportunities',
  active = true,
}) => {
  return (
    <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm border border-amber-500/10">
      <span className={`w-2 h-2 rounded-full ${active ? 'bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50' : 'bg-gray-500'}`} />
      <span className="text-amber-100/80">{text}</span>
    </div>
  );
};

export default StatusBadge;
