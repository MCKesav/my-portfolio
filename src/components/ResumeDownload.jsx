import { Download, FileText, Eye, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { 
  SectionWrapper, 
  SectionHeader, 
  GlassContainer, 
  GlassButton 
} from './ui';

/**
 * ResumeDownload Component
 * Section for downloading and previewing resume
 */
const ResumeDownload = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = () => {
    setDownloadStarted(true);
    // Simulate download - in production, this would trigger actual file download
    setTimeout(() => {
      setDownloadStarted(false);
    }, 2000);
  };

  const resumeHighlights = [
    'Software Engineer Intern at JPMorgan Chase & Co.',
    'AI Engineer with focus on Machine Learning',
    'GitHub Hackathon Winner',
    'Amazon ML Summer School Participant',
    '4+ Major Projects in AI & Web Development',
    'Proficient in Python, JavaScript, React, and ML frameworks',
  ];

  const resumeSections = [
    { title: 'Experience', items: ['JPMorgan Chase & Co.', 'Software Engineer Intern'] },
    { title: 'Education', items: ['Computer Science', 'University'] },
    { title: 'Skills', items: ['Python, JavaScript, React', 'ML, NLP, Deep Learning'] },
    { title: 'Projects', items: ['Ila - AI Note Summarizer', 'Webpage Summarizer', '+2 more'] },
    { title: 'Achievements', items: ['GitHub Hackathon Winner', 'Amazon ML Summer School'] },
    { title: 'Interests', items: ['AI & Machine Learning', 'Open Source'] },
  ];

  return (
    <SectionWrapper id="resume" fullHeight={false} theme="cool">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Download My"
          highlight="Resume"
          subtitle="Get a detailed overview of my experience, skills, and qualifications"
        />

        {/* Main resume card */}
        <GlassContainer glow padding="xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Resume icon/preview */}
            <div className="flex-shrink-0">
              <GlassContainer className="w-32 h-40 flex flex-col items-center justify-center border-2 border-dashed border-blue-500/30">
                <FileText className="w-12 h-12 text-blue-400 mb-2" />
                <span className="text-xs text-gray-400">Resume.pdf</span>
              </GlassContainer>
            </div>

            {/* Resume info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Movva Chenna Kesav
              </h3>
              <p className="text-blue-400 mb-4">AI Engineer & Software Engineer</p>
              
              {/* Quick highlights */}
              <div className="space-y-2 mb-6">
                {resumeHighlights.slice(0, 4).map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Download buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <GlassButton 
                  onClick={handleDownload}
                  disabled={downloadStarted}
                  loading={downloadStarted}
                  size="lg"
                >
                  {downloadStarted ? 'Downloading...' : (
                    <>
                      <Download className="w-5 h-5" />
                      Download PDF
                    </>
                  )}
                </GlassButton>
                <GlassButton variant="outline" size="lg">
                  <Eye className="w-5 h-5" />
                  Preview
                </GlassButton>
              </div>
            </div>
          </div>
        </GlassContainer>

        {/* Resume sections preview */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeSections.map((section, index) => (
            <GlassContainer key={index} hover>
              <h4 className="text-lg font-semibold text-white mb-3">{section.title}</h4>
              <ul className="space-y-1">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-400">{item}</li>
                ))}
              </ul>
            </GlassContainer>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Want to discuss opportunities? Let's connect!
          </p>
          <GlassButton href="#contact" variant="secondary" size="lg">
            Get In Touch
          </GlassButton>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResumeDownload;
