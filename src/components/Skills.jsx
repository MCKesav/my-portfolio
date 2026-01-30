import { useState } from 'react';
import { 
  SectionWrapper, 
  SectionHeader, 
  GlassContainer, 
  FilterButton,
  SkillBar,
  SkillChip,
  QuickStat
} from './ui';

/**
 * Skills Component
 * Displays technical skills with visual progress indicators
 * Uses reusable UI components for consistency
 */
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'tools', name: 'Tools & Platforms' },
    { id: 'ai', name: 'AI & ML' },
  ];

  const skills = [
    // Programming Languages
    { name: 'Python', level: 90, category: 'languages', color: 'blue' },
    { name: 'JavaScript', level: 85, category: 'languages', color: 'yellow' },
    { name: 'Java', level: 80, category: 'languages', color: 'purple' },
    { name: 'TypeScript', level: 75, category: 'languages', color: 'blue' },
    { name: 'SQL', level: 80, category: 'languages', color: 'cyan' },
    { name: 'C++', level: 70, category: 'languages', color: 'purple' },

    // Frameworks & Libraries
    { name: 'React', level: 85, category: 'frameworks', color: 'cyan' },
    { name: 'Node.js', level: 80, category: 'frameworks', color: 'green' },
    { name: 'FastAPI', level: 75, category: 'frameworks', color: 'cyan' },
    { name: 'Django', level: 70, category: 'frameworks', color: 'green' },
    { name: 'TailwindCSS', level: 85, category: 'frameworks', color: 'blue' },
    { name: 'Express.js', level: 75, category: 'frameworks', color: 'purple' },

    // Tools & Platforms
    { name: 'Git & GitHub', level: 90, category: 'tools', color: 'red' },
    { name: 'Docker', level: 75, category: 'tools', color: 'blue' },
    { name: 'AWS', level: 70, category: 'tools', color: 'orange' },
    { name: 'Linux', level: 80, category: 'tools', color: 'yellow' },
    { name: 'VS Code', level: 90, category: 'tools', color: 'blue' },
    { name: 'MongoDB', level: 75, category: 'tools', color: 'green' },

    // AI & ML
    { name: 'Machine Learning', level: 85, category: 'ai', color: 'purple' },
    { name: 'Deep Learning', level: 75, category: 'ai', color: 'pink' },
    { name: 'NLP', level: 80, category: 'ai', color: 'pink' },
    { name: 'TensorFlow', level: 70, category: 'ai', color: 'orange' },
    { name: 'PyTorch', level: 70, category: 'ai', color: 'red' },
    { name: 'OpenAI API', level: 80, category: 'ai', color: 'green' },
  ];

  const otherSkills = [
    'RESTful APIs',
    'GraphQL',
    'Agile/Scrum',
    'CI/CD',
    'System Design',
    'Data Structures',
    'Algorithms',
    'Web Scraping',
    'Browser Extensions',
    'Automation',
    'Problem Solving',
    'Technical Writing',
  ];

  const stats = [
    { value: '6+', label: 'Languages' },
    { value: '10+', label: 'Technologies' },
    { value: '4+', label: 'Projects' },
    { value: '2+', label: 'Years Learning' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <SectionWrapper id="skills" backgroundImage="bg1" overlayOpacity="medium" theme="cyan">
      <SectionHeader 
        title="Technical" 
        highlight="Skills"
        subtitle="Technologies and tools I work with to bring ideas to life"
      />

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skillCategories.map((category) => (
          <FilterButton
            key={category.id}
            label={category.name}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          />
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <SkillBar
            key={index}
            name={skill.name}
            level={skill.level}
            category={skill.category}
            color={skill.color}
            animationDelay={index * 50}
          />
        ))}
      </div>

      {/* Additional skills section */}
      <GlassContainer padding="lg" className="mt-16">
        <h3 className="text-xl font-bold text-white mb-6 text-center">
          Other Skills & Interests
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {otherSkills.map((skill, index) => (
            <SkillChip key={index} label={skill} variant="default" />
          ))}
        </div>
      </GlassContainer>

      {/* Stats section */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <QuickStat key={index} value={stat.value} label={stat.label} centered gradient />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
