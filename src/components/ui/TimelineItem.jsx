import { Calendar, MapPin } from 'lucide-react';
import GlassContainer from './GlassContainer';
import SkillChip from './SkillChip';

/**
 * TimelineItem Component
 * Used in Experience section for work history entries
 * 
 * @param {string} role - Job title/role
 * @param {string} company - Company name
 * @param {string} location - Work location
 * @param {string} duration - Time period
 * @param {string} description - Job description
 * @param {string[]} highlights - Key achievements/responsibilities
 * @param {string[]} technologies - Tech stack used
 */
const TimelineItem = ({ 
  role, 
  company, 
  location, 
  duration, 
  description,
  highlights = [],
  technologies = [],
}) => {
  return (
    <div className="relative pl-8 md:pl-20 pb-12">
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-8 top-0 w-4 h-4 -translate-x-1/2 bg-blue-500 rounded-full border-4 border-slate-900 glow-effect" />

      <GlassContainer padding="lg">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h4 className="text-xl font-bold text-white">{role}</h4>
            <p className="text-blue-400 font-medium">{company}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              {duration}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Highlights */}
        {highlights.length > 0 && (
          <ul className="space-y-2 mb-4">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                <span className="w-1.5 h-1.5 mt-2 bg-blue-400 rounded-full flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <SkillChip key={idx} label={tech} variant="tech" color="blue" />
            ))}
          </div>
        )}
      </GlassContainer>
    </div>
  );
};

export default TimelineItem;
