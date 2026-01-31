import { User, Code, Lightbulb, Target, GraduationCap, Rocket } from 'lucide-react';
import { 
  SectionWrapper, 
  SectionHeader, 
  GlassContainer, 
  Avatar,
  QuickStat,
  SkillChip,
  IconBox
} from './ui';
import { ScrollReveal } from '../hooks/useScrollAnimation';
import { TiltCard } from '../hooks/useTiltEffect';
import { PROFILE, EDUCATION, ACHIEVEMENTS } from '../data/constants';

/**
 * About Component
 * Personal introduction section with bio and key highlights
 * Enhanced with scroll animations and 3D effects
 */
const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Backend & Distributed Systems',
      description: 'Experience with Apache Kafka, Spring Boot, microservices, and production-grade engineering at JPMorgan Chase.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'AI & Machine Learning',
      description: 'Specialized in NLP, LLMs, Transformers, and AI system design with focus on hallucination reduction and reliability.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Product & MVP Development',
      description: 'Strong product mindset with experience taking ideas from prototype to scalable MVP, proven by hackathon wins.',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Health-Tech & Edu-Tech AI',
      description: 'Building impactful AI systems in maternal health and education domains for real-world impact.',
    },
  ];

  const interests = [
    'Artificial Intelligence',
    'Machine Learning',
    'NLP & LLMs',
    'Distributed Systems',
    'Backend Engineering',
    'Health-Tech AI',
    'Edu-Tech AI',
    'Open Source',
    'Startup Development',
  ];

  return (
    <SectionWrapper id="about" backgroundImage="bg1" overlayOpacity="medium" theme="warm">
      <ScrollReveal animation="fade-up">
        <SectionHeader title="About" highlight="Me" />
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - About content */}
        <ScrollReveal animation="fade-right" delay={200}>
          <TiltCard tiltOptions={{ maxTilt: 5, scale: 1.01, glareMaxOpacity: 0.1 }}>
            <GlassContainer padding="lg" elevation="high" className="space-y-6">
              {/* Avatar/Image placeholder */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full blur-lg opacity-30 animate-pulse-slow" />
                  <Avatar initials={PROFILE.initials} size="lg" className="relative" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{PROFILE.name}</h3>
                  <p className="text-amber-400">{PROFILE.title}</p>
                </div>
              </div>

              {/* Bio text */}
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  {PROFILE.bio}
                </p>
                <p>
                  As an SDE Intern at <span className="text-amber-400 font-medium">JPMorgan Chase & Co.</span>, I integrated 
                  Apache Kafka for distributed systems, worked with Spring Boot and CI/CD pipelines, and gained hands-on 
                  exposure to large-scale backend systems and microservices architecture.
                </p>
                <p>
                  I'm a <span className="text-amber-400 font-medium">Google TechSprint Winner</span> (1st place among 300+ teams) 
                  and <span className="text-amber-400 font-medium">GitHub Hackathon Winner</span>, demonstrating my ability to 
                  build innovative AI solutions. Selected for <span className="text-amber-400 font-medium">Amazon ML Summer School</span> from 
                  ~200,000 applicants, I focus on designing AI systems with reliability, explainability, and real-world impact.
                </p>
              </div>

              {/* Education */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-amber-400" />
                  <span className="text-white font-semibold">Education</span>
                </div>
                <p className="text-gray-400 text-sm">{EDUCATION.degree}</p>
                <p className="text-amber-400 text-sm">Specialization: {EDUCATION.specialization}</p>
                <p className="text-gray-400 text-sm">{EDUCATION.institution} | {EDUCATION.duration}</p>
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <QuickStat value="5+" label="Major Projects" gradient />
                <QuickStat value="3" label="Hackathon Wins" gradient />
              </div>
            </GlassContainer>
          </TiltCard>
        </ScrollReveal>

        {/* Right side - Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={300 + index * 100}>
              <TiltCard tiltOptions={{ maxTilt: 10, scale: 1.03, glareMaxOpacity: 0.2 }}>
                <GlassContainer hover padding="md" className="group h-full">
                  <IconBox 
                    icon={item.icon} 
                    size="lg" 
                    color="gold" 
                    className="mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </GlassContainer>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Interests/Passions */}
      <ScrollReveal animation="fade-up" delay={600}>
        <GlassContainer padding="lg" className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            What Drives Me
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, index) => (
              <SkillChip 
                key={index} 
                label={interest} 
                variant="default"
                className="hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              />
            ))}
          </div>
        </GlassContainer>
      </ScrollReveal>
    </SectionWrapper>
  );
};

export default About;
