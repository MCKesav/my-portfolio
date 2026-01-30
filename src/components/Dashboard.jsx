import { Github, Linkedin, Mail, Twitter, ChevronDown } from 'lucide-react';
import { 
  SectionWrapper,
  GlassContainer, 
  GlassButton, 
  IconButton, 
  StatusBadge,
  Avatar,
  StatCard,
  SkillChip
} from './ui';
import { scrollToSection } from '../utils/scroll';

/**
 * Dashboard/Hero Component
 * Main landing section with introduction, social links, and navigation
 * Uses reusable UI components for consistency
 */
const Dashboard = () => {

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  const quickStats = [
    { label: 'Experience', value: 'Software Engineer Intern' },
    { label: 'Company', value: 'JPMorgan Chase' },
    { label: 'Projects', value: '4+ Major' },
    { label: 'Focus', value: 'AI & ML' },
  ];

  const achievements = ['GitHub Hackathon Winner', 'Amazon ML School'];

  return (
    <SectionWrapper 
      id="home" 
      backgroundImage="bg1" 
      overlayOpacity="light"
      centered
      className="flex items-center justify-center"
    >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="space-y-6 animate-slide-up">
            {/* Greeting badge */}
            <StatusBadge text="Available for opportunities" active />

            {/* Main heading */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">Movva Chenna Kesav</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                AI Engineer & Software Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Passionate about building intelligent systems and creating innovative solutions. 
              Experienced in developing AI-powered applications and scalable software systems 
              that make a real impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <GlassButton onClick={() => scrollToSection('contact')}>
                <Mail size={18} />
                Get In Touch
              </GlassButton>
              <GlassButton variant="outline" onClick={() => scrollToSection('projects')}>
                View Projects
              </GlassButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <span className="text-gray-500 text-sm">Connect with me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <IconButton 
                    key={index}
                    icon={social.icon}
                    href={social.href}
                    label={social.label}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Profile card */}
          <div className="flex justify-center lg:justify-end animate-slide-up animate-delay-200">
            <GlassContainer glow padding="lg" className="max-w-sm w-full">
              {/* Profile image placeholder */}
              <Avatar initials="MCK" size="xl" rounded className="mx-auto mb-6" />

              {/* Quick stats */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white">Quick Overview</h3>
              </div>

              <div className="space-y-4">
                {quickStats.map((stat, index) => (
                  <StatCard key={index} label={stat.label} value={stat.value} />
                ))}
              </div>

              {/* Achievement badges */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-3">Achievements</p>
                <div className="flex flex-wrap gap-2">
                  {achievements.map((achievement, index) => (
                    <SkillChip key={index} label={achievement} variant="achievement" />
                  ))}
                </div>
              </div>
            </GlassContainer>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown size={24} />
          </button>
        </div>
    </SectionWrapper>
  );
};

export default Dashboard;
