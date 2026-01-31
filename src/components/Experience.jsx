import { Briefcase, ExternalLink, Trophy, Star, Award } from 'lucide-react';
import { 
  SectionWrapper, 
  SectionHeader, 
  GlassContainer, 
  SubHeading,
  TimelineItem,
  ProjectCard,
  FlipCard,
  GlowingBorder,
  NeonText
} from './ui';
import { ScrollReveal } from '../hooks/useScrollAnimation';
import { TiltCard } from '../hooks/useTiltEffect';
import { ACHIEVEMENTS, EXPERIENCE, PROJECTS } from '../data/constants';

/**
 * Experience Component
 * Professional experience timeline with work history and projects
 * Uses reusable UI components for consistency
 */
const Experience = () => {
  // Featured projects (first 4)
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <SectionWrapper id="experience" backgroundImage="bg1" overlayOpacity="medium" theme="warm">
      <ScrollReveal animation="fade-up">
        <SectionHeader 
          title="& Projects" 
          highlight="Experience" 
          highlightFirst 
          subtitle="My professional journey and the projects that showcase my skills"
        />
      </ScrollReveal>

      {/* Work Experience Section */}
      <div className="mb-16">
        <ScrollReveal animation="fade-up" delay={100}>
          <SubHeading icon={<Briefcase className="w-6 h-6" />} iconColor="text-amber-400">
            Work Experience
          </SubHeading>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-yellow-400 to-transparent" />

          <ScrollReveal animation="fade-left" delay={200}>
            <TimelineItem
              role={EXPERIENCE.current.role}
              company={EXPERIENCE.current.company}
              location={EXPERIENCE.current.location}
              duration={EXPERIENCE.current.duration}
              description={EXPERIENCE.current.description}
              highlights={EXPERIENCE.current.highlights}
              technologies={EXPERIENCE.current.technologies}
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects">
        <ScrollReveal animation="fade-up" delay={100}>
          <SubHeading icon={<ExternalLink className="w-6 h-6" />} iconColor="text-yellow-400">
            Featured Projects
          </SubHeading>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={150 + index * 100}>
              <TiltCard tiltAmount={8} glareOpacity={0.15} className="h-full">
                <ProjectCard
                  name={`${project.name} — ${project.subtitle}`}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                  badge={project.badge}
                  className="h-full hover:scale-[1.02] transition-transform duration-300"
                />
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-16">
        <ScrollReveal animation="fade-up" delay={100}>
          <SubHeading centered>
            <NeonText color="#fbbf24" intensity={0.8}>🏆 Achievements</NeonText>
          </SubHeading>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((achievement, index) => (
            <ScrollReveal key={achievement.id} animation="zoom-in" delay={200 + index * 150}>
              <FlipCard
                height={220}
                front={
                  <GlowingBorder 
                    colors={['#fbbf24', '#f59e0b', '#d97706', '#fbbf24']}
                    borderRadius={16}
                    glowIntensity={0.4}
                    className="h-full"
                  >
                    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                      <span className="text-5xl mb-4 animate-float">{achievement.emoji}</span>
                      <h4 className="text-lg font-bold text-white">{achievement.title}</h4>
                    </div>
                  </GlowingBorder>
                }
                back={
                  <GlassContainer glow padding="lg" className="h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                    <Trophy className="w-8 h-8 text-yellow-400 mb-3" />
                    <h4 className="text-md font-bold text-yellow-300 mb-2">{achievement.title}</h4>
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                    <div className="mt-3 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </GlassContainer>
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
