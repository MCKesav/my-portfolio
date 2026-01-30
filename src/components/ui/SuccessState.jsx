import { CheckCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import GlassContainer from './GlassContainer';

/**
 * SuccessState Component
 * Contact form success confirmation UI
 * 
 * @param {string} title - Success message title
 * @param {string} message - Success message body
 * @param {string} subtext - Additional text (e.g., "Redirecting...")
 */
const SuccessState = ({ 
  title = 'Message Sent Successfully!',
  message = "Thank you for reaching out! I'll get back to you as soon as possible.",
  subtext = 'Redirecting back to form in a few seconds...',
}) => {
  return (
    <SectionWrapper 
      id="contact" 
      backgroundImage="bg1" 
      overlayOpacity="medium"
      theme="green"
      centered
    >
      <div className="max-w-2xl mx-auto w-full">
        <GlassContainer glow padding="xl" className="text-center animate-scale-in">
          {/* Success icon */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-400 mb-8">
            {message}
          </p>
          
          {/* Animated success bar */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-8">
            <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse" style={{ width: '100%' }} />
          </div>
          
          <p className="text-sm text-gray-500">
            {subtext}
          </p>
        </GlassContainer>
      </div>
    </SectionWrapper>
  );
};

export default SuccessState;
