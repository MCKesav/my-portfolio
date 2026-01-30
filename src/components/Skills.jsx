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
    { name: 'Python', level: 90, category: 'languages', color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 85, category: 'languages', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Java', level: 80, category: 'languages', color: 'from-red-400 to-red-600' },
    { name: 'TypeScript', level: 75, category: 'languages', color: 'from-blue-500 to-blue-700' },
    { name: 'SQL', level: 80, category: 'languages', color: 'from-cyan-400 to-cyan-600' },
    { name: 'C++', level: 70, category: 'languages', color: 'from-purple-400 to-purple-600' },

    // Frameworks & Libraries
    { name: 'React', level: 85, category: 'frameworks', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', level: 80, category: 'frameworks', color: 'from-green-400 to-green-600' },
    { name: 'FastAPI', level: 75, category: 'frameworks', color: 'from-teal-400 to-teal-600' },
    { name: 'Django', level: 70, category: 'frameworks', color: 'from-green-500 to-green-700' },
    { name: 'TailwindCSS', level: 85, category: 'frameworks', color: 'from-cyan-400 to-blue-500' },
    { name: 'Express.js', level: 75, category: 'frameworks', color: 'from-gray-400 to-gray-600' },

    // Tools & Platforms
    { name: 'Git & GitHub', level: 90, category: 'tools', color: 'from-orange-400 to-red-500' },
    { name: 'Docker', level: 75, category: 'tools', color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', level: 70, category: 'tools', color: 'from-orange-400 to-orange-600' },
    { name: 'Linux', level: 80, category: 'tools', color: 'from-yellow-500 to-yellow-700' },
    { name: 'VS Code', level: 90, category: 'tools', color: 'from-blue-500 to-blue-700' },
    { name: 'MongoDB', level: 75, category: 'tools', color: 'from-green-400 to-green-600' },

    // AI & ML
    { name: 'Machine Learning', level: 85, category: 'ai', color: 'from-purple-400 to-pink-500' },
    { name: 'Deep Learning', level: 75, category: 'ai', color: 'from-indigo-400 to-purple-500' },
    { name: 'NLP', level: 80, category: 'ai', color: 'from-pink-400 to-rose-500' },
    { name: 'TensorFlow', level: 70, category: 'ai', color: 'from-orange-400 to-orange-600' },
    { name: 'PyTorch', level: 70, category: 'ai', color: 'from-red-400 to-orange-500' },
    { name: 'OpenAI API', level: 80, category: 'ai', color: 'from-green-400 to-teal-500' },
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
    <SectionWrapper id="skills" backgroundImage="bg1" overlayOpacity="medium">
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
