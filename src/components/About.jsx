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

/**
 * About Component
 * Personal introduction section with bio and key highlights
 * Uses reusable UI components for consistency
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
      <SectionHeader title="About" highlight="Me" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - About content */}
        <GlassContainer padding="lg" className="space-y-6">
          {/* Avatar/Image placeholder */}
          <div className="flex items-center gap-6 mb-8">
            <Avatar initials="MCK" size="lg" />
            <div>
              <h3 className="text-2xl font-bold text-white">Movva Chenna Kesav</h3>
              <p className="text-blue-400">AI Engineer & Software Engineer</p>
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
            <QuickStat value="4+" label="Major Projects" />
            <QuickStat value="2" label="Awards Won" />
          </div>
        </GlassContainer>

        {/* Right side - Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <GlassContainer key={index} hover padding="md" className="group">
              <IconBox 
                icon={item.icon} 
                size="lg" 
                color="blue" 
                className="mb-4 group-hover:scale-110"
              />
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </GlassContainer>
          ))}
        </div>
      </div>

      {/* Interests/Passions */}
      <GlassContainer padding="lg" className="mt-16">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          What Drives Me
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {interests.map((interest, index) => (
            <SkillChip key={index} label={interest} variant="default" />
          ))}
        </div>
      </GlassContainer>
    </SectionWrapper>
  );
};

export default About;
