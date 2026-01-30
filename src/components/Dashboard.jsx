import { Github, Linkedin, Mail, Twitter, ChevronDown, Sparkles } from 'lucide-react';
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
import { GradientText } from './ui/AnimatedText';
import ParticleBackground from './ui/ParticleBackground';
import { TiltCard } from '../hooks/useTiltEffect';
import { ScrollReveal } from '../hooks/useScrollAnimation';
import { scrollToSection } from '../utils/scroll';

/**
 * Dashboard/Hero Component
 * Premium hero section with liquid glass effects and animations
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
      theme="blue"
      centered
      className="flex items-center justify-center overflow-hidden"
    >
        {/* Particle Background */}
        <ParticleBackground 
          particleCount={40}
          colors={['#3b82f6', '#8b5cf6', '#ec4899', '#22d3ee']}
          opacity={0.4}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left side - Text content */}
          <div className="space-y-6">
            {/* Greeting badge with sparkle */}
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="inline-flex items-center gap-2">
                <StatusBadge text="Available for opportunities" active />
                <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            </ScrollReveal>

            {/* Main heading with animated gradient */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Hi, I'm{' '}
                  <GradientText 
                    colors={['#60a5fa', '#a78bfa', '#f472b6', '#60a5fa']} 
                    duration={4}
                    className="inline-block"
                  >
                    Movva Chenna Kesav
                  </GradientText>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                  <span className="text-blue-400">AI Engineer</span> & <span className="text-purple-400">Software Engineer</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal animation="fade-up" delay={300}>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Passionate about building intelligent systems and creating innovative solutions. 
                Experienced in developing AI-powered applications and scalable software systems 
                that make a real impact.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="flex flex-wrap gap-4 pt-4">
                <GlassButton onClick={() => scrollToSection('contact')} className="group">
                  <Mail size={18} className="group-hover:rotate-12 transition-transform" />
                  Get In Touch
                </GlassButton>
                <GlassButton variant="outline" onClick={() => scrollToSection('projects')}>
                  View Projects
                </GlassButton>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal animation="fade-up" delay={500}>
              <div className="flex items-center gap-4 pt-6">
                <span className="text-gray-500 text-sm">Connect with me:</span>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <IconButton 
                      key={index}
                      icon={social.icon}
                      href={social.href}
                      label={social.label}
                      className="hover:scale-110 hover:-translate-y-1"
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Profile card with 3D tilt */}
          <ScrollReveal animation="fade-left" delay={300}>
            <div className="flex justify-center lg:justify-end">
              <TiltCard 
                tiltOptions={{ maxTilt: 8, scale: 1.02, glareMaxOpacity: 0.15 }}
                className="max-w-sm w-full"
              >
                <GlassContainer glow padding="lg" elevation="high" className="w-full">
                  {/* Profile image placeholder */}
                  <div className="relative mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse-slow" />
                    <Avatar initials="MCK" size="xl" rounded className="relative" />
                  </div>

                  {/* Quick stats */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white">Quick Overview</h3>
                  </div>

                  <div className="space-y-4">
                    {quickStats.map((stat, index) => (
                      <StatCard 
                        key={index} 
                        label={stat.label} 
                        value={stat.value}
                        className="hover:bg-white/10 transition-colors"
                      />
                    ))}
                  </div>

                  {/* Achievement badges */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400 mb-3">Achievements</p>
                    <div className="flex flex-wrap gap-2">
                      {achievements.map((achievement, index) => (
                        <SkillChip 
                          key={index} 
                          label={achievement} 
                          variant="achievement"
                          className="hover:scale-105 transition-transform"
                        />
                      ))}
                    </div>
                  </div>
                </GlassContainer>
              </TiltCard>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <span className="text-sm group-hover:text-blue-400 transition-colors">Scroll Down</span>
            <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
    </SectionWrapper>
  );
};

export default Dashboard;
