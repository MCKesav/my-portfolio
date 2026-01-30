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
    <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm">
      <span className={`w-2 h-2 rounded-full ${active ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
      <span className="text-gray-300">{text}</span>
    </div>
  );
};

export default StatusBadge;
