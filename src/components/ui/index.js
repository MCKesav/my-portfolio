// UI Components - Central export file
// Import and re-export all reusable UI components

// Liquid Glass Design System (Apple-inspired)
export { 
  default as LiquidGlass,
  LiquidGlassNav,
  LiquidGlassPill,
  LiquidGlassCard,
  LiquidGlassHero,
  LiquidGlassForm,
} from './LiquidGlass';

// SVG Filter for true liquid distortion effect
export { default as LiquidGlassFilter } from './LiquidGlassFilter';

// New Visual Effects
export { default as ParticleBackground } from './ParticleBackground';
export { default as CursorGlow } from './CursorGlow';
export { GradientText, ShimmerText, SplitText } from './AnimatedText';

// Legacy Glass Components (use Liquid Glass variants when possible)
export { default as GlassContainer } from './GlassContainer';
export { default as SectionWrapper } from './SectionWrapper';
export { default as SectionHeader } from './SectionHeader';
export { default as SubHeading } from './SubHeading';
export { default as GlassButton } from './GlassButton';
export { default as IconButton } from './IconButton';
export { default as IconBox } from './IconBox';
export { default as FilterButton } from './FilterButton';
export { default as FormInput } from './FormInput';
export { default as ContactInfoItem } from './ContactInfoItem';
export { default as SkillBar } from './SkillBar';
export { default as SkillChip } from './SkillChip';
export { default as TimelineItem } from './TimelineItem';
export { default as ProjectCard } from './ProjectCard';
export { default as SuccessState } from './SuccessState';
export { default as StatusBadge } from './StatusBadge';
export { default as Avatar } from './Avatar';
export { StatCard, QuickStat } from './StatCard';
