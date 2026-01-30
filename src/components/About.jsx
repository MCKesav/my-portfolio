import { User, Code, Lightbulb, Target } from 'lucide-react';
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

/**
 * About Component
 * Personal introduction section with bio and key highlights
 * Enhanced with scroll animations and 3D effects
 */
const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Software Development',
      description: 'Building scalable applications with modern tech stacks and best practices.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'AI & Machine Learning',
      description: 'Developing intelligent systems and ML models for real-world applications.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Problem Solving',
      description: 'Tackling complex challenges with innovative and efficient solutions.',
    },
    {
      icon: <User className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Working effectively in teams to deliver impactful projects.',
    },
  ];

  const interests = [
    'Artificial Intelligence',
    'Machine Learning',
    'Full Stack Development',
    'Cloud Computing',
    'Open Source',
    'Problem Solving',
    'Innovation',
    'Continuous Learning',
  ];

  return (
    <SectionWrapper id="about" backgroundImage="bg1" overlayOpacity="medium" theme="purple">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse-slow" />
                  <Avatar initials="MCK" size="lg" className="relative" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Movva Chenna Kesav</h3>
                  <p className="text-purple-400">AI Engineer & Software Engineer</p>
                </div>
              </div>

              {/* Bio text */}
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I am a passionate AI Engineer and Software Engineer with a strong foundation in 
                  building intelligent systems and scalable applications. My journey in tech has been 
                  driven by curiosity and a desire to create solutions that make a meaningful impact.
                </p>
                <p>
                  As a Software Engineer Intern at JPMorgan Chase & Co., I gained valuable experience 
                  working on enterprise-level applications and collaborating with cross-functional teams. 
                  This experience has shaped my approach to software development, emphasizing clean code, 
                  scalability, and user-centric design.
                </p>
                <p>
                  I have a particular interest in AI and Machine Learning, having participated in the 
                  Amazon ML Summer School and won the GitHub Hackathon. I enjoy exploring the intersection 
                  of AI and practical applications, creating tools that enhance productivity and solve 
                  real-world problems.
                </p>
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <QuickStat value="4+" label="Major Projects" gradient />
                <QuickStat value="2" label="Awards Won" gradient />
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
                    color="purple" 
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
