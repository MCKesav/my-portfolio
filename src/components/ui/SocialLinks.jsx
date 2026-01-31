/**
 * SocialLinks Component
 * Reusable social media links component
 * 
 * SINGLE SOURCE OF TRUTH for rendering social links
 * Replaces duplicated socialLinks arrays in Dashboard, Footer, Contact
 * 
 * @param {string} size - Icon size variant (sm, md, lg)
 * @param {string} layout - Layout direction (row, column)
 * @param {boolean} showLabels - Show text labels
 * @param {string} className - Additional CSS classes
 * @param {string} itemClassName - Additional CSS classes for each item
 */
import { SOCIAL_LINKS } from '../../data/constants';
import IconButton from './IconButton';

const SocialLinks = ({
  size = 'md',
  layout = 'row',
  showLabels = false,
  className = '',
  itemClassName = '',
  exclude = [], // Array of ids to exclude (e.g., ['email'])
}) => {
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const filteredLinks = SOCIAL_LINKS.filter(link => !exclude.includes(link.id));

  const layoutClasses = layout === 'row' ? 'flex gap-3' : 'flex flex-col gap-2';

  return (
    <div className={`${layoutClasses} ${className}`}>
      {filteredLinks.map((social) => {
        const IconComponent = social.Icon;
        
        if (showLabels) {
          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 ${itemClassName}`}
              aria-label={social.label}
            >
              <IconComponent size={iconSizes[size]} />
              <span className="text-sm">{social.label}</span>
            </a>
          );
        }

        return (
          <IconButton
            key={social.id}
            icon={<IconComponent size={iconSizes[size]} />}
            href={social.href}
            label={social.label}
            size={size}
            className={`hover:scale-110 hover:-translate-y-1 ${itemClassName}`}
          />
        );
      })}
    </div>
  );
};

export default SocialLinks;
