import { Briefcase, ExternalLink } from 'lucide-react';
import { 
  SectionWrapper, 
  SectionHeader, 
  GlassContainer, 
  SubHeading,
  IconBox,
  TimelineItem,
  ProjectCard 
} from './ui';

/**
 * Experience Component
 * Professional experience timeline with work history and projects
 * Uses reusable UI components for consistency
 */
const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Software Engineer Intern',
      company: 'JPMorgan Chase & Co.',
      location: 'Remote / On-site',
      duration: '2023 - 2024',
      type: 'Internship',
      description: 'Worked on enterprise-level applications and contributed to the development of scalable software solutions. Collaborated with cross-functional teams to deliver high-quality features.',
      highlights: [
        'Developed and maintained enterprise applications',
        'Collaborated with senior engineers on system design',
        'Participated in code reviews and agile ceremonies',
        'Implemented best practices for code quality',
      ],
      technologies: ['Java', 'Python', 'React', 'AWS'],
    },
  ];

  const projects = [
    {
      id: 1,
      name: 'Ila - AI Note Summarizer',
      description: 'An intelligent AI-powered application that automatically summarizes notes and documents, helping users extract key information efficiently.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'React'],
      link: '#',
    },
    {
      id: 2,
      name: 'Webpage Summarizer',
      description: 'A browser extension/tool that extracts and summarizes content from web pages, making it easier to digest information quickly.',
      technologies: ['JavaScript', 'Chrome Extension', 'NLP', 'API'],
      link: '#',
    },
    {
      id: 3,
      name: 'Surf Securely',
      description: 'A security-focused tool designed to enhance online browsing safety by detecting and alerting users about potential threats.',
      technologies: ['Python', 'Security', 'Browser Extension', 'API'],
      link: '#',
    },
    {
      id: 4,
      name: 'Price Notification',
      description: 'An automated price tracking and notification system that alerts users when product prices drop to their desired levels.',
      technologies: ['Python', 'Web Scraping', 'Automation', 'Notifications'],
      link: '#',
    },
  ];

  const achievements = [
    {
      emoji: '🥇',
      title: 'GitHub Hackathon Winner',
      description: 'Won the GitHub Hackathon for innovative project submission',
    },
    {
      emoji: '🎓',
      title: 'Amazon ML Summer School',
      description: "Selected participant in Amazon's Machine Learning Summer School program",
    },
  ];

  return (
    <SectionWrapper id="experience" backgroundImage="bg1" overlayOpacity="medium" theme="blue">
      <SectionHeader 
        title="& Projects" 
        highlight="Experience" 
        highlightFirst 
        subtitle="My professional journey and the projects that showcase my skills"
      />

      {/* Work Experience Section */}
      <div className="mb-16">
        <SubHeading icon={<Briefcase className="w-6 h-6" />} iconColor="text-blue-400">
          Work Experience
        </SubHeading>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          {experiences.map((exp) => (
            <TimelineItem
              key={exp.id}
              role={exp.role}
              company={exp.company}
              location={exp.location}
              duration={exp.duration}
              description={exp.description}
              highlights={exp.highlights}
              technologies={exp.technologies}
            />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects">
        <SubHeading icon={<ExternalLink className="w-6 h-6" />} iconColor="text-purple-400">
          Featured Projects
        </SubHeading>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-16">
        <SubHeading centered>
          🏆 Achievements
        </SubHeading>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {achievements.map((achievement, index) => (
            <GlassContainer key={index} glow padding="md" className="text-center">
              <IconBox 
                icon={<span className="text-3xl">{achievement.emoji}</span>} 
                size="xl" 
                color="yellow" 
                className="mx-auto mb-4"
              />
              <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
              <p className="text-gray-400 text-sm">{achievement.description}</p>
            </GlassContainer>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
