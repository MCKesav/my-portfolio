/**
 * =====================================================
 * HYBRID LIQUID GLASS DESIGN SYSTEM
 * =====================================================
 * 
 * This system combines multiple open-source implementations,
 * each used for what it does best:
 * 
 * 1. BASE GLASS (Custom CSS) - Our foundation
 *    - Elevation-based blur/opacity tokens
 *    - Light refraction gradients
 *    - Performance-optimized backdrop-filter
 *    Used for: Cards, buttons, inputs, navbar, forms
 * 
 * 2. ADVANCED LIQUID EFFECTS (rdev/liquid-glass-react)
 *    - Chromatic aberration
 *    - Elastic displacement
 *    - Edge refraction via WebGL
 *    Used SELECTIVELY for: Hero, Loading, Featured cards
 * 
 * 3. CALIBRATION VALUES (aakhalidhruv28)
 *    - Blur: 20-40px optimal range
 *    - Saturation: 120-180%
 *    - Tint strength: 0.05-0.15
 *    Extracted and baked into our tokens
 * 
 * DESIGN PRINCIPLES (from Apple SwiftUI reference):
 *    - Glass is contextual, not everywhere
 *    - Different elevation = different material
 *    - Motion reinforces depth
 *    - Light refraction > flat transparency
 * =====================================================
 */

// Base Glass Components (CSS-only, performance-safe)
export { default as GlassContainer } from '../GlassContainer';
export { default as GlassButton } from '../GlassButton';
export { default as GlassInput } from '../FormInput';

// Unified Liquid Glass Material System
export { default as LiquidGlassMaterial } from './LiquidGlassMaterial';
export { LiquidGlassMaterialCSS } from './LiquidGlassMaterial';
export { 
  default as useLiquidGlass,
  LiquidGlassProvider,
  GLASS_PRESETS 
} from './useLiquidGlass';

// Enhanced Components (uses rdev for advanced effects)
export { default as LiquidHero } from './LiquidHero';
export { LiquidHeroCSS } from './LiquidHero';
export { default as LiquidLoader } from './LiquidLoader';
export { LiquidLoaderCSS } from './LiquidLoader';
export { default as FeaturedProjectCard } from './FeaturedProjectCard';
export { FeaturedProjectCardCSS } from './FeaturedProjectCard';

// SVG Filters
export { default as LiquidGlassFilter } from '../LiquidGlassFilter';

// Re-export all CSS for easy inclusion
export const AllLiquidGlassCSS = `
/* =====================================================
   LIQUID GLASS HYBRID SYSTEM CSS
   Generated from component CSS exports
   ===================================================== */
`;

