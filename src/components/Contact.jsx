import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Loader2
} from 'lucide-react';
import { 
  SectionWrapper, 
  SectionHeader, 
  GlassContainer, 
  GlassButton,
  IconButton,
  FormInput,
  ContactInfoItem,
  SuccessState
} from './ui';

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

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'contact@movvakesav.com' },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+91 XXXXX XXXXX' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'India' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: 'https://twitter.com' },
  ];

  // Success state UI
  if (formState === 'success') {
    return <SuccessState />;
  }

  return (
    <SectionWrapper id="contact" theme="purple">
      <SectionHeader 
        title="Get In"
        highlight="Touch"
        subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
      />

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact info sidebar */}
        <div className="lg:col-span-2 space-y-6">
          {/* Info card */}
          <GlassContainer>
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <ContactInfoItem 
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </GlassContainer>

          {/* Social links card */}
          <GlassContainer>
            <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <IconButton 
                  key={index}
                  icon={social.icon}
                  href={social.href}
                  label={social.label}
                  size="lg"
                />
              ))}
            </div>
          </GlassContainer>

          {/* Quick note */}
          <GlassContainer>
            <p className="text-gray-400 text-sm">
              <span className="text-white font-medium">Response time:</span> I typically respond 
              within 24-48 hours. For urgent matters, feel free to reach out via LinkedIn.
            </p>
          </GlassContainer>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-3">
          <form 
            onSubmit={handleSubmit}
            className={`glass-card p-8 transition-all duration-300 ${
              formState === 'focused' ? 'ring-2 ring-blue-500/50 glow-effect' : ''
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
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
                  className={focusedField === 'name' ? 'ring-2 ring-blue-500/50' : ''}
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
                  className={focusedField === 'email' ? 'ring-2 ring-blue-500/50' : ''}
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
                className={focusedField === 'subject' ? 'ring-2 ring-blue-500/50' : ''}
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
                className={`resize-none ${focusedField === 'message' ? 'ring-2 ring-blue-500/50' : ''}`}
              />

              {/* Submit button */}
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  formState === 'submitting'
                    ? 'bg-blue-500/50 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25'
                }`}
              >
                {formState === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
