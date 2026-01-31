import { createElement } from 'react';
import { useState } from 'react';
import { 
  Send, 
  Loader2
} from 'lucide-react';
import { 
  SectionWrapper, 
  SectionHeader, 
  GlassContainer, 
  FormInput,
  ContactInfoItem,
  SuccessState,
  SocialLinks
} from './ui';
import { ScrollReveal } from '../hooks/useScrollAnimation';
import { TiltCard } from '../hooks/useTiltEffect';
import { GradientText } from './ui/AnimatedText';
import { CONTACT_INFO } from '../data/constants';

/**
 * Contact Component
 * Contact form with default, focus, and success states
 */
const Contact = () => {
  // Form states: 'default', 'focused', 'submitting', 'success'
  const [formState, setFormState] = useState('default');
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
    if (formState === 'default') {
      setFormState('focused');
    }
  };

  const handleBlur = () => {
    setFocusedField(null);
    // Keep focused state if any field has value
    if (!Object.values(formData).some(val => val.trim())) {
      setFormState('default');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setFormState('success');
    
    // Reset after showing success
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormState('default');
    }, 5000);
  };

  // Success state UI
  if (formState === 'success') {
    return <SuccessState />;
  }

  return (
    <SectionWrapper id="contact" theme="purple">
      <ScrollReveal animation="fade-up">
        <SectionHeader 
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
        />
      </ScrollReveal>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact info sidebar */}
        <div className="lg:col-span-2 space-y-6">
          {/* Info card */}
          <ScrollReveal animation="fade-right" delay={100}>
            <TiltCard tiltAmount={8} glareOpacity={0.1}>
              <GlassContainer className="hover:border-amber-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-6">
                  <GradientText>Contact Information</GradientText>
                </h3>
                
                <div className="space-y-4">
                  {CONTACT_INFO.map((item, index) => (
                    <ContactInfoItem 
                      key={index}
                      icon={createElement(item.Icon, { className: 'w-5 h-5' })}
                      label={item.label}
                      value={item.value}
                      className="hover:translate-x-2 transition-transform duration-300"
                    />
                  ))}
                </div>
              </GlassContainer>
            </TiltCard>
          </ScrollReveal>

          {/* Social links card */}
          <ScrollReveal animation="fade-right" delay={200}>
            <TiltCard tiltAmount={8} glareOpacity={0.1}>
              <GlassContainer className="hover:border-amber-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-6">
                  <GradientText>Connect With Me</GradientText>
                </h3>
                
                <SocialLinks size="lg" itemClassName="icon-hover" exclude={['email']} />
              </GlassContainer>
            </TiltCard>
          </ScrollReveal>

          {/* Quick note */}
          <ScrollReveal animation="fade-right" delay={300}>
            <GlassContainer className="hover:border-teal-500/30 transition-all duration-300">
              <p className="text-gray-400 text-sm">
                <span className="text-white font-medium">⚡ Response time:</span> I typically respond 
                within 24-48 hours. For urgent matters, feel free to reach out via LinkedIn.
              </p>
            </GlassContainer>
          </ScrollReveal>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-3">
          <ScrollReveal animation="fade-left" delay={200}>
            <TiltCard tiltAmount={5} glareOpacity={0.08}>
              <form 
                onSubmit={handleSubmit}
                className={`glass-card p-8 transition-all duration-500 ${
                  formState === 'focused' ? 'ring-2 ring-amber-500/50 glow-effect scale-[1.01]' : ''
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  <GradientText>Send a Message</GradientText>
                </h3>
            
            <div className="space-y-6">
              {/* Name and Email row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <FormInput
                  type="text"
                  name="name"
                  label="Your Name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                  className={focusedField === 'name' ? 'ring-2 ring-amber-500/50' : ''}
                />
                <FormInput
                  type="email"
                  name="email"
                  label="Email Address"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  className={focusedField === 'email' ? 'ring-2 ring-amber-500/50' : ''}
                />
              </div>

              {/* Subject */}
              <FormInput
                type="text"
                name="subject"
                label="Subject"
                placeholder="Project Collaboration"
                value={formData.subject}
                onChange={handleInputChange}
                onFocus={() => handleFocus('subject')}
                onBlur={handleBlur}
                required
                className={focusedField === 'subject' ? 'ring-2 ring-amber-500/50' : ''}
              />

              {/* Message */}
              <FormInput
                textarea
                name="message"
                label="Your Message"
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                required
                rows={5}
                className={`resize-none ${focusedField === 'message' ? 'ring-2 ring-amber-500/50' : ''}`}
              />

              {/* Submit button */}
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 group ${
                  formState === 'submitting'
                    ? 'bg-amber-500/50 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:opacity-90 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02]'
                }`}
              >
                {formState === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
