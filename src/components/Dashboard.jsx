import { ChevronDown, Sparkles, Mail, Download } from 'lucide-react';
import { 
  SectionWrapper,
  GlassContainer, 
  StatusBadge,
  Avatar,
  StatCard,
  SkillChip,
  MorphingBlob,
  TypeWriter,
  MagneticButton,
  Spotlight,
  SocialLinks
} from './ui';
import { GradientText } from './ui/AnimatedText';
import { TiltCard } from '../hooks/useTiltEffect';
import { ScrollReveal } from '../hooks/useScrollAnimation';
import { scrollToSection } from '../utils/scroll';
import { PROFILE, EXPERIENCE, ACHIEVEMENTS, RESUME_PATH, TYPEWRITER_ROLES } from '../data/constants';

/**
 * Dashboard/Hero Component
 * Premium hero section with liquid glass effects and animations
 */
const Dashboard = () => {

  // Use centralized data from constants
  const quickStats = EXPERIENCE.quickStats;

  return (
    <SectionWrapper 
      id="home" 
      backgroundImage="bg1" 
      overlayOpacity="light"
      theme="blue"
      centered
      className="flex items-center justify-center overflow-hidden"
    >
        {/* Morphing Blob Background Decorations */}
        <div className="absolute top-20 -left-32 opacity-25 pointer-events-none">
          <MorphingBlob 
            colors={['#d4af37', '#be3144', '#663399']}
            size={500}
            speed={5}
          />
        </div>
        <div className="absolute -bottom-20 -right-32 opacity-20 pointer-events-none">
          <MorphingBlob 
            colors={['#008080', '#d4af37', '#50c878']}
            size={600}
            speed={4}
          />
        </div>

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
                    colors={['#d4af37', '#ffbf00', '#fde68a', '#d4af37']} 
                    duration={5}
                    className="inline-block"
                  >
                    {PROFILE.name}
                  </GradientText>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                  <TypeWriter 
                    words={TYPEWRITER_ROLES}
                    typingSpeed={80}
                    deletingSpeed={50}
                    delayBetweenWords={2500}
                    cursorChar="|"
                    className="text-amber-400"
                    cursorClassName="text-rose-400 ml-1"
                  />
                </h2>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal animation="fade-up" delay={300}>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                {PROFILE.bio}
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="flex flex-wrap gap-4 pt-4">
                <MagneticButton 
                  onClick={() => scrollToSection('contact')} 
                  variant="primary"
                  size="lg"
                >
                  <Mail size={18} />
                  Get In Touch
                </MagneticButton>
                <a 
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-block"
                >
                  <MagneticButton 
                    variant="secondary"
                    size="lg"
                  >
                    <Download size={18} />
                    Download Resume
                  </MagneticButton>
                </a>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal animation="fade-up" delay={500}>
              <div className="flex items-center gap-4 pt-6">
                <span className="text-gray-500 text-sm">Connect with me:</span>
                <SocialLinks size="md" itemClassName="icon-hover" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Profile card with 3D tilt */}
          <ScrollReveal animation="fade-left" delay={300}>
            <div className="flex justify-center lg:justify-end">
              <Spotlight 
                spotlightColor="rgba(139, 92, 246, 0.2)"
                spotlightSize={500}
                className="rounded-2xl"
              >
                <TiltCard 
                  tiltOptions={{ maxTilt: 8, scale: 1.02, glareMaxOpacity: 0.15 }}
                  className="max-w-sm w-full"
                >
                  <GlassContainer glow padding="lg" elevation="high" className="w-full">
                    {/* Profile image placeholder */}
                    <div className="relative mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-xl opacity-30 animate-pulse-slow" />
                      <Avatar initials={PROFILE.initials} size="xl" rounded className="relative" />
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
                        {ACHIEVEMENTS.slice(0, 3).map((achievement, index) => (
                          <SkillChip 
                            key={index} 
                            label={achievement.short} 
                            variant="achievement"
                            className="hover-scale text-xs"
                          />
                        ))}
                      </div>
                    </div>
                  </GlassContainer>
                </TiltCard>
              </Spotlight>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <span className="text-sm group-hover:text-amber-400 transition-colors">Scroll Down</span>
            <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
    </SectionWrapper>
  );
};

export default Dashboard;
