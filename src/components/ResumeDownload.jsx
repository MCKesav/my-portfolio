import { Download, FileText, Eye, CheckCircle, ExternalLink } from 'lucide-react';
import { 
  SectionWrapper, 
  SectionHeader, 
  GlassContainer, 
  GlassButton 
} from './ui';
import { ScrollReveal } from '../hooks/useScrollAnimation';
import { TiltCard } from '../hooks/useTiltEffect';
import { GradientText } from './ui/AnimatedText';
import { PROFILE, RESUME_HIGHLIGHTS, ACHIEVEMENTS, EXPERIENCE, EDUCATION, RESUME_PATH, PROJECTS } from '../data/constants';

/**
 * ResumeDownload Component
 * Section for downloading and previewing resume
 */
const ResumeDownload = () => {
  // Resume sections built from centralized data
  const resumeSections = [
    { 
      title: 'Experience', 
      items: [
        `${EXPERIENCE.current.role}`,
        EXPERIENCE.current.company, 
        EXPERIENCE.current.duration
      ] 
    },
    { 
      title: 'Education', 
      items: [
        EDUCATION.specialization,
        EDUCATION.institution,
        EDUCATION.duration
      ] 
    },
    { 
      title: 'Skills', 
      items: [
        'Python, Java, C/C++, Rust, JavaScript',
        'NLP, LLMs, Transformers, Prompt Engineering',
        'Kafka, Spring Boot, FastAPI, AWS, Docker'
      ] 
    },
    { 
      title: 'Projects', 
      items: PROJECTS.slice(0, 3).map(p => p.name)
    },
    { 
      title: 'Achievements', 
      items: ACHIEVEMENTS.map(a => a.short) 
    },
    { 
      title: 'Focus Areas', 
      items: [
        'AI-Driven Product Development',
        'Distributed Systems & Backend',
        'Health-Tech & Edu-Tech AI'
      ] 
    },
  ];

  return (
    <SectionWrapper id="resume" fullHeight={false} theme="cool">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal animation="fade-up">
          <SectionHeader 
            title="Download My"
            highlight="Resume"
            subtitle="Get a detailed overview of my experience, skills, and qualifications"
          />
        </ScrollReveal>

        {/* Main resume card */}
        <ScrollReveal animation="fade-up" delay={150}>
          <TiltCard tiltAmount={5} glareOpacity={0.1}>
            <GlassContainer glow padding="xl" className="hover:border-amber-500/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Resume icon/preview */}
                <div className="flex-shrink-0 group">
                  <GlassContainer className="w-32 h-40 flex flex-col items-center justify-center border-2 border-dashed border-amber-500/30 group-hover:border-amber-400/50 group-hover:scale-105 transition-all duration-300">
                    <FileText className="w-12 h-12 text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs text-gray-400">Resume.pdf</span>
                  </GlassContainer>
                </div>

                {/* Resume info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    <GradientText>{PROFILE.name}</GradientText>
                  </h3>
                  <p className="text-amber-400 mb-4">{PROFILE.title}</p>
                  
                  {/* Quick highlights */}
                  <div className="space-y-2 mb-6">
                    {RESUME_HIGHLIGHTS.slice(0, 5).map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Download buttons */}
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a 
                      href={RESUME_PATH}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <GlassButton 
                        size="lg"
                        className="hover:scale-105 transition-transform duration-300"
                      >
                        <Download className="w-5 h-5" />
                        Download PDF
                      </GlassButton>
                    </a>
                    <a 
                      href={RESUME_PATH}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <GlassButton 
                        variant="outline" 
                        size="lg" 
                        className="hover:scale-105 transition-transform duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Resume
                      </GlassButton>
                    </a>
                  </div>
                </div>
              </div>
            </GlassContainer>
          </TiltCard>
        </ScrollReveal>

        {/* Resume sections preview */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeSections.map((section, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={200 + index * 100}>
              <TiltCard tiltAmount={10} glareOpacity={0.15}>
                <GlassContainer hover className="h-full group">
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">{section.title}</h4>
                  <ul className="space-y-1">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item}</li>
                    ))}
                  </ul>
                </GlassContainer>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal animation="fade-up" delay={500}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Want to discuss opportunities? Let's connect!
            </p>
            <GlassButton href="#contact" variant="secondary" size="lg" className="hover:scale-105 transition-transform duration-300">
              Get In Touch
            </GlassButton>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
};

export default ResumeDownload;
