import { ExternalLink } from 'lucide-react';
import GlassContainer from './GlassContainer';
import SkillChip from './SkillChip';

/**
 * ProjectCard Component
 * Apple-inspired liquid glass card for displaying project information
 * Medium elevation with hover lift effect
 * 
 * @param {string} name - Project name
 * @param {string} description - Project description
 * @param {string[]} technologies - Tech stack used
 * @param {string} link - Project link
 */
const ProjectCard = ({ 
  name, 
  description, 
  technologies = [],
  link,
}) => {
  return (
    <GlassContainer hover padding="md" className="h-full flex flex-col group">
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
          {name}
        </h4>
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label={`View ${name} project`}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
      
      <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <SkillChip key={idx} label={tech} variant="tech" color="rose" />
        ))}
      </div>
    </GlassContainer>
  );
};

export default ProjectCard;
