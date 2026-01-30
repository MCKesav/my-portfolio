import IconBox from './IconBox';

/**
 * ContactInfoItem Component
 * Contact information display with icon
 * 
 * @param {React.ReactNode} icon - Icon component
 * @param {string} label - Info label (Email, Phone, etc.)
 * @param {string} value - Info value
 * @param {string} className - Additional CSS classes
 */
const ContactInfoItem = ({ 
  icon, 
  label, 
  value,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors ${className}`}>
      <IconBox icon={icon} size="md" color="blue" />
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-white">{value}</p>
      </div>
    </div>
  );
};

export default ContactInfoItem;
