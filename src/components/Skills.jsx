import { useState } from 'react';
import { 
  SectionWrapper, 
  SectionHeader, 
  GlassContainer, 
  FilterButton,
  SkillBar,
  SkillChip,
  QuickStat,
  AnimatedCounter,
  GlowingBorder,
  HoverReveal
} from './ui';
import { ScrollReveal } from '../hooks/useScrollAnimation';
import { GradientText } from './ui/AnimatedText';
import { SKILLS } from '../data/constants';

/**
 * Skills Component
 * Displays technical skills with visual progress indicators
 * Enhanced with scroll animations and staggered reveals
 */
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'aiml', name: 'AI & ML' },
    { id: 'backend', name: 'Backend & Systems' },
    { id: 'cloudDevops', name: 'Cloud & DevOps' },
    { id: 'databases', name: 'Databases' },
  ];

  // Map skills from constants with category and color
  const colorMap = {
    languages: 'gold',
    aiml: 'pink',
    backend: 'teal',
    cloudDevops: 'cyan',
    databases: 'green',
    data: 'amber',
  };

  // Build skills array from SKILLS constant
  const allSkills = [
    ...SKILLS.languages.map(s => ({ ...s, category: 'languages', color: 'gold' })),
    ...SKILLS.aiml.map(s => ({ ...s, category: 'aiml', color: 'pink' })),
    ...SKILLS.backend.map(s => ({ ...s, category: 'backend', color: 'teal' })),
    ...SKILLS.cloudDevops.map(s => ({ ...s, category: 'cloudDevops', color: 'cyan' })),
    ...SKILLS.databases.map(s => ({ ...s, category: 'databases', color: 'green' })),
    ...SKILLS.data.map(s => ({ ...s, category: 'data', color: 'amber' })),
  ];

  const stats = [
    { value: 7, label: 'Languages', suffix: '+' },
    { value: 20, label: 'Technologies', suffix: '+' },
    { value: 5, label: 'Projects', suffix: '+' },
    { value: 3, label: 'Hackathon Wins', suffix: '' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? allSkills.slice(0, 18) // Show top 18 for "all" view
    : allSkills.filter(skill => skill.category === activeCategory);

  return (
    <SectionWrapper id="skills" backgroundImage="bg1" overlayOpacity="medium" theme="cyan">
      <ScrollReveal animation="fade-up">
        <SectionHeader 
          title="Technical" 
          highlight="Skills"
          subtitle="Technologies and tools I work with to bring ideas to life"
        />
      </ScrollReveal>

      {/* Category filters */}
      <ScrollReveal animation="fade-up" delay={200}>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <FilterButton
              key={category.id}
              label={category.name}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              className="hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </ScrollReveal>

      {/* Skills grid with staggered animation */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <ScrollReveal key={`${skill.name}-${activeCategory}`} animation="fade-up" delay={100 + index * 50}>
            <HoverReveal
              revealContent={
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-white mb-2">{skill.level}%</div>
                  <div className="text-gray-300">Proficiency Level</div>
                </div>
              }
              revealPosition="center"
              hoverScale={1.03}
              className="rounded-xl"
            >
              <SkillBar
                name={skill.name}
                level={skill.level}
                category={skill.category}
                color={skill.color}
                animationDelay={index * 50}
                className="hover:scale-[1.02] transition-transform duration-300"
              />
            </HoverReveal>
          </ScrollReveal>
        ))}
      </div>

      {/* Additional skills section */}
      <ScrollReveal animation="fade-up" delay={400}>
        <GlowingBorder 
          colors={['#d4af37', '#f59e0b', '#be3144', '#14b8a6', '#d4af37']}
          borderRadius={24}
          glowIntensity={0.3}
          className="mt-16"
        >
          <div className="p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              <GradientText>Other Skills & Expertise</GradientText>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {SKILLS.other.map((skill, index) => (
                <SkillChip 
                  key={index} 
                  label={skill} 
                  variant="default"
                  className="hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </GlowingBorder>
      </ScrollReveal>

      {/* Stats section with animated counters */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <ScrollReveal key={index} animation="scale" delay={500 + index * 100}>
            <GlassContainer padding="lg" className="text-center group hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                <AnimatedCounter 
                  end={stat.value} 
                  duration={2000} 
                  delay={index * 200}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </GlassContainer>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
