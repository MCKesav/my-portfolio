import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { GlassContainer, GlassButton, IconButton, Avatar } from './ui';
import { scrollToTop } from '../utils/scroll';

/**
 * Footer Component
 * Site footer with navigation, social links, and copyright
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-slate-900/95 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Avatar initials="MCK" size="md" />
              <div>
                <h3 className="text-xl font-bold text-white">Movva Chenna Kesav</h3>
                <p className="text-sm text-gray-400">AI Engineer & Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Building intelligent systems and innovative solutions. 
              Passionate about AI, machine learning, and creating impactful software.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  icon={social.icon}
                  href={social.href}
                  label={social.label}
                  size="md"
                />
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                <span className="text-gray-300">Email:</span> contact@movvakesav.com
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-gray-300">Location:</span> India
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-gray-300">Status:</span>{' '}
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for opportunities
                </span>
              </p>
            </div>

            {/* CTA */}
            <GlassButton href="#contact" size="sm" className="mt-6">
              Let's Connect
            </GlassButton>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Movva Chenna Kesav. All rights reserved.
            </p>

            {/* Made with love */}
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> using React & Tailwind
            </p>

            {/* Back to top button */}
            <IconButton
              icon={<ArrowUp className="w-5 h-5" />}
              onClick={scrollToTop}
              label="Back to top"
              size="md"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
