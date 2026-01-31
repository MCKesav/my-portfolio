import { Heart, ArrowUp, Download } from 'lucide-react';
import { GlassButton, IconButton, Avatar, SocialLinks } from './ui';
import { scrollToTop } from '../utils/scroll';
import { ScrollReveal } from '../hooks/useScrollAnimation';
import { GradientText } from './ui/AnimatedText';
import { NAV_LINKS, PROFILE, RESUME_PATH } from '../data/constants';

/**
 * Footer Component
 * Site footer with navigation, social links, and copyright
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900/95 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div>
              <div className="flex items-center gap-3 mb-4 group">
                <Avatar initials={PROFILE.initials} size="md" className="group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    <GradientText>{PROFILE.name}</GradientText>
                  </h3>
                  <p className="text-sm text-gray-400">{PROFILE.title}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                {PROFILE.bio.slice(0, 150)}...
              </p>
              {/* Social links */}
              <SocialLinks size="md" itemClassName="icon-hover" />
            </div>
          </ScrollReveal>

          {/* Quick links */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-amber-400 group-hover:w-3 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
                {/* Resume download link */}
                <li>
                  <a
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="text-amber-400 hover:text-amber-300 hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  <span className="text-gray-300">Email:</span> {PROFILE.email}
                </p>
                <p className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  <span className="text-gray-300">Phone:</span> {PROFILE.phone}
                </p>
                <p className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  <span className="text-gray-300">Location:</span> {PROFILE.location}
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
              <GlassButton href="#contact" size="sm" className="mt-6 hover:scale-105 transition-transform duration-300">
                Let's Connect
              </GlassButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} Movva Chenna Kesav. All rights reserved.
              </p>

              {/* Made with love */}
              <p className="text-gray-400 text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" /> using React & Tailwind
              </p>

              {/* Back to top button */}
              <IconButton
                icon={<ArrowUp className="w-5 h-5" />}
                onClick={scrollToTop}
                label="Back to top"
                size="md"
                className="hover:scale-110 hover:-translate-y-2 transition-all duration-300"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
