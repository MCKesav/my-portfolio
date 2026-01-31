/**
 * Centralized Data Constants
 * Single source of truth for all shared data across components
 * 
 * RULE: Any data that appears in more than one component MUST be defined here.
 */

import { Github, Linkedin, Code2, Mail, Phone, MapPin } from 'lucide-react';
import { createElement } from 'react';

// ============================================================
// RESUME PATH
// ============================================================
export const RESUME_PATH = '/resume/Resume.pdf';

// ============================================================
// PROFILE DATA
// ============================================================
export const PROFILE = {
  name: 'Movva Chenna Kesav',
  initials: 'MCK',
  title: 'AI/ML Engineer & Software Developer',
  email: 'movva.chenna.kesav@gmail.com',
  phone: '+91-9490251635',
  location: 'Visakhapatnam, India',
  bio: 'Computer Science undergraduate specializing in AI/ML with strong experience in AI-driven product development, distributed systems, and backend engineering. Proven ability to build scalable MVPs and real-world systems, demonstrated through multiple first-place wins in national and global hackathons.',
};

// ============================================================
// EDUCATION DATA
// ============================================================
export const EDUCATION = {
  institution: 'Gandhi Institute of Technology and Management (GITAM)',
  location: 'Visakhapatnam',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  specialization: 'Artificial Intelligence and Machine Learning',
  duration: '2023 – 2027',
  coursework: [
    'Data Structures and Algorithms',
    'Operating Systems',
    'Computer Networks',
    'Object-Oriented Programming',
    'Database Management Systems',
    'System Design and Integration',
    'Artificial Intelligence',
    'Machine Learning',
  ],
};

// ============================================================
// SOCIAL LINKS
// Single source - used by Dashboard, Footer, Contact
// ============================================================
export const SOCIAL_LINKS = [
  { 
    id: 'github',
    label: 'GitHub', 
    href: 'https://github.com/movvakesav',
    Icon: Github,
  },
  { 
    id: 'linkedin',
    label: 'LinkedIn', 
    href: 'https://linkedin.com/in/movvakesav',
    Icon: Linkedin,
  },
  { 
    id: 'leetcode',
    label: 'LeetCode', 
    href: 'https://leetcode.com/movvakesav',
    Icon: Code2,
  },
  { 
    id: 'email',
    label: 'Email', 
    href: 'mailto:movva.chenna.kesav@gmail.com',
    Icon: Mail,
  },
];

// Helper function to render social link icons with consistent sizing
export const getSocialIcon = (id, size = 20, className = '') => {
  const link = SOCIAL_LINKS.find(s => s.id === id);
  if (!link) return null;
  return createElement(link.Icon, { size, className });
};

// ============================================================
// NAVIGATION LINKS
// Used by Navbar, Footer, FloatingNav
// ============================================================
export const NAV_LINKS = [
  { name: 'Home', path: '/', hash: '#home' },
  { name: 'About', path: '/about', hash: '#about' },
  { name: 'Experience', path: '/experience', hash: '#experience' },
  { name: 'Skills', path: '/skills', hash: '#skills' },
  { name: 'Resume', path: '/resume', hash: '#resume' },
  { name: 'Contact', path: '/contact', hash: '#contact' },
];

// ============================================================
// ACHIEVEMENTS
// Used by Dashboard, Experience, ResumeDownload
// ============================================================
export const ACHIEVEMENTS = [
  {
    id: 1,
    emoji: '🏆',
    title: 'Google TechSprint Winner',
    description: '1st place among 300+ teams for NurtureNet, an AI-powered maternal health platform (India-wide)',
    short: 'Google TechSprint Winner',
  },
  {
    id: 2,
    emoji: '🥇',
    title: 'GitHub Hackathon Winner',
    description: '1st place for Ila, an AI-based study companion and note summarizer',
    short: 'GitHub Hackathon Winner',
  },
  {
    id: 3,
    emoji: '🎓',
    title: 'Amazon ML Summer School',
    description: 'Selected from approximately 200,000 applicants for Amazon\'s Machine Learning Summer School program',
    short: 'Amazon ML Summer School',
  },
];

// ============================================================
// EXPERIENCE DATA
// Used by Experience, Dashboard, ResumeDownload
// ============================================================
export const EXPERIENCE = {
  current: {
    role: 'Software Engineer (SDE) Intern',
    company: 'JPMorgan Chase & Co.',
    location: 'Hybrid',
    duration: 'May 2025 – June 2025',
    type: 'Internship',
    description: 'Integrated Apache Kafka to enable robust asynchronous communication and real-time data streaming across distributed systems. Automated project setup and environment configuration workflows, significantly reducing onboarding time for new developers.',
    highlights: [
      'Integrated Apache Kafka for async communication and real-time data streaming across distributed systems',
      'Automated project setup and environment configuration workflows, reducing developer onboarding time',
      'Worked with Spring Boot, Kafka, H2, RESTful APIs, and CI/CD pipelines',
      'Gained hands-on exposure to large-scale backend systems and microservices architecture',
      'Collaborated with cross-functional teams to improve service reliability',
    ],
    technologies: ['Apache Kafka', 'Spring Boot', 'REST APIs', 'CI/CD', 'H2', 'Microservices'],
  },
  quickStats: [
    { label: 'Experience', value: 'SDE Intern' },
    { label: 'Company', value: 'JPMorgan Chase' },
    { label: 'Projects', value: '5+ Major' },
    { label: 'Focus', value: 'AI/ML & Backend' },
  ],
};

// ============================================================
// PROJECTS DATA
// Used by Experience, Dashboard
// ============================================================
export const PROJECTS = [
  {
    id: 1,
    name: 'NurtureNet',
    subtitle: 'AI-Powered Maternal Health Platform',
    badge: 'Startup MVP | Google TechSprint Winner',
    description: 'End-to-end AI-powered maternal health platform addressing critical gaps in maternal care across pre-conception, pregnancy, post-partum, and early childcare phases.',
    highlights: [
      'Won Google TechSprint Hackathon (India-wide), 1st Place among 300+ teams',
      'Developed AI-driven clinical risk detection for complications like preeclampsia and gestational diabetes',
      'Implemented mental health monitoring using sentiment analysis for postpartum depression indicators',
      'Built personalized AI guidance systems for nutrition, self-care, and phase-specific education',
      'Currently developing scalable MVP with enhanced reliability and accessibility-first design',
    ],
    technologies: ['Python', 'AI/ML', 'NLP', 'Sentiment Analysis', 'Healthcare AI'],
    link: '#',
  },
  {
    id: 2,
    name: 'Ila',
    subtitle: 'AI Study Companion and Note Summarizer',
    badge: 'Startup MVP | GitHub Hackathon Winner',
    description: 'AI-powered study assistant designed to improve learning efficiency through intelligent summarization and active recall.',
    highlights: [
      'Won GitHub Hackathon, 1st Place',
      'Developed AI systems for lecture summarization, flashcard generation, and study tracking',
      'Designed architecture with focus on hallucination reduction, ensuring outputs remain grounded in user-provided content',
      'Implemented modular system design for future expansion into personalized learning analytics',
    ],
    technologies: ['Python', 'NLP', 'LLMs', 'Transformers', 'Machine Learning'],
    link: '#',
  },
  {
    id: 3,
    name: 'Webpage Summarizer',
    subtitle: 'NLP-Based Abstractive Summarization System',
    badge: 'AI/NLP Project',
    description: 'Web-based NLP application using the Pegasus transformer model for abstractive text summarization.',
    highlights: [
      'Built using Pegasus transformer model for abstractive text summarization',
      'Designed pipelines for preprocessing, chunking, and summarizing long-form content',
      'Applied best practices in software engineering for clean, maintainable code',
      'Improved summarization quality through fine-tuning and transformer architectures',
    ],
    technologies: ['Python', 'Pegasus', 'Transformers', 'NLP', 'Flask'],
    link: '#',
  },
  {
    id: 4,
    name: 'Surf Securely',
    subtitle: 'Phishing Detection System',
    badge: 'Cybersecurity Project',
    description: 'Cybersecurity-focused application to detect phishing threats from shortened URLs and social media links.',
    highlights: [
      'Developed to detect phishing threats from shortened URLs and social media links',
      'Applied feature engineering techniques for URL and webpage attribute extraction',
      'Integrated third-party security APIs for enhanced malicious URL detection',
      'Demonstrates applied security engineering and real-world threat mitigation',
    ],
    technologies: ['Python', 'Machine Learning', 'Security APIs', 'Feature Engineering'],
    link: '#',
  },
  {
    id: 5,
    name: 'Price Notification',
    subtitle: 'Automated Price Tracking Application',
    badge: 'Automation Project',
    description: 'Automated price-tracking system to monitor e-commerce product prices in real time.',
    highlights: [
      'Built real-time price monitoring for e-commerce products',
      'Implemented web scraping using Requests and BeautifulSoup',
      'Designed backend logic for efficient data extraction and update workflows',
      'Demonstrates backend development and applied automation skills',
    ],
    technologies: ['Python', 'BeautifulSoup', 'Requests', 'Web Scraping', 'Automation'],
    link: '#',
  },
];

// ============================================================
// CONTACT INFO
// Used by Contact, Footer
// ============================================================
export const CONTACT_INFO = [
  { id: 'email', label: 'Email', value: PROFILE.email, Icon: Mail },
  { id: 'phone', label: 'Phone', value: PROFILE.phone, Icon: Phone },
  { id: 'location', label: 'Location', value: PROFILE.location, Icon: MapPin },
];

// ============================================================
// RESUME HIGHLIGHTS
// Used by ResumeDownload
// ============================================================
export const RESUME_HIGHLIGHTS = [
  'SDE Intern at JPMorgan Chase & Co. (May–June 2025)',
  'B.Tech CSE (AI & ML) at GITAM, 2023–2027',
  'Google TechSprint Hackathon Winner (1st Place)',
  'GitHub Hackathon Winner (1st Place)',
  'Amazon ML Summer School Selected',
  '5+ Major AI/ML & Full Stack Projects',
  'Expertise in Python, Java, Rust, Kafka, Spring Boot',
];

// ============================================================
// SKILLS DATA
// Comprehensive technical skills from resume
// ============================================================
export const SKILLS = {
  languages: [
    { name: 'Python', level: 95 },
    { name: 'Java', level: 85 },
    { name: 'C/C++', level: 80 },
    { name: 'Rust', level: 70 },
    { name: 'JavaScript', level: 85 },
    { name: 'SQL', level: 85 },
    { name: 'HTML/CSS', level: 90 },
  ],
  aiml: [
    { name: 'Machine Learning', level: 90 },
    { name: 'Deep Learning', level: 85 },
    { name: 'Natural Language Processing', level: 90 },
    { name: 'Transformers & LLMs', level: 85 },
    { name: 'Prompt Engineering', level: 88 },
    { name: 'Feature Engineering', level: 85 },
    { name: 'Hallucination Reduction', level: 80 },
    { name: 'AI System Design', level: 85 },
  ],
  backend: [
    { name: 'Apache Kafka', level: 80 },
    { name: 'Spring Boot', level: 80 },
    { name: 'FastAPI', level: 85 },
    { name: 'Flask', level: 85 },
    { name: 'Django', level: 75 },
    { name: 'REST APIs', level: 90 },
    { name: 'Microservices', level: 80 },
  ],
  databases: [
    { name: 'PostgreSQL', level: 85 },
    { name: 'MySQL', level: 85 },
    { name: 'MongoDB', level: 80 },
  ],
  cloudDevops: [
    { name: 'AWS', level: 75 },
    { name: 'Docker', level: 80 },
    { name: 'Kubernetes', level: 70 },
    { name: 'CI/CD Pipelines', level: 80 },
    { name: 'Linux', level: 85 },
    { name: 'Git & GitHub', level: 95 },
  ],
  data: [
    { name: 'Pandas', level: 90 },
    { name: 'NumPy', level: 90 },
    { name: 'Matplotlib', level: 85 },
    { name: 'Data Preprocessing', level: 90 },
  ],
  other: [
    'System Design',
    'Object-Oriented Programming',
    'Data Structures & Algorithms',
    'Cybersecurity',
    'Web Scraping',
    'API Integration',
    'Agile/Scrum',
    'Technical Writing',
    'Product Development',
    'MVP Development',
  ],
};

// ============================================================
// TYPEWRITER ROLES
// Used by Dashboard hero
// ============================================================
export const TYPEWRITER_ROLES = [
  'AI/ML Engineer',
  'Software Developer',
  'Backend Engineer',
  'Problem Solver',
  'Hackathon Winner',
];

// ============================================================
// COLOR SCHEMES
// Centralized color configuration for components
// ============================================================
export const COLORS = {
  // Primary brand colors
  gold: { 
    bg: 'rgba(251, 191, 36, 0.15)', 
    border: 'rgba(251, 191, 36, 0.3)', 
    text: 'rgb(253, 224, 71)',
    glow: 'rgba(251, 191, 36, 0.15)',
    gradient: 'linear-gradient(90deg, #d4af37 0%, #fbbf24 50%, #fde68a 100%)',
  },
  amber: { 
    bg: 'rgba(245, 158, 11, 0.15)', 
    border: 'rgba(245, 158, 11, 0.3)', 
    text: 'rgb(252, 211, 77)',
    glow: 'rgba(245, 158, 11, 0.15)',
    gradient: 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 50%, #fcd34d 100%)',
  },
  rose: { 
    bg: 'rgba(244, 63, 94, 0.15)', 
    border: 'rgba(244, 63, 94, 0.25)', 
    text: 'rgb(251, 113, 133)',
    glow: 'rgba(244, 63, 94, 0.1)',
    gradient: 'linear-gradient(90deg, #be3144 0%, #f43f5e 50%, #fb7185 100%)',
  },
  teal: { 
    bg: 'rgba(20, 184, 166, 0.15)', 
    border: 'rgba(20, 184, 166, 0.25)', 
    text: 'rgb(94, 234, 212)',
    glow: 'rgba(20, 184, 166, 0.1)',
    gradient: 'linear-gradient(90deg, #14b8a6 0%, #2dd4bf 50%, #5eead4 100%)',
  },
};

// ============================================================
// ANIMATION PRESETS
// Standardized animation configurations
// ============================================================
export const ANIMATIONS = {
  // Hover effects (use as className)
  hoverLift: 'hover:-translate-y-1 transition-all duration-300',
  hoverScale: 'hover:scale-105 transition-all duration-300',
  hoverGlow: 'hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300',
  hoverAll: 'hover:scale-105 hover:-translate-y-1 transition-all duration-300',
  
  // Timing functions
  smooth: 'transition-all duration-300 ease-out',
  swift: 'transition-all duration-200 ease-out',
  gentle: 'transition-all duration-500 ease-out',
};
