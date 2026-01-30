/**
 * useLiquidGlass Hook & Context
 * =====================================================
 * 
 * Provides centralized configuration for the liquid glass system.
 * Inspired by aakhalidhruv28's calibration playground but
 * extracted into production-ready presets.
 * 
 * WHY THIS EXISTS:
 * - Single source of truth for glass material properties
 * - Easy theming and brand customization
 * - Performance toggles for mobile devices
 * - Consistent behavior across all glass components
 */

import { createContext, useContext, useState, useMemo, useCallback } from 'react';

/**
 * Glass Material Presets
 * Calibrated values from testing against Apple references
 */
export const GLASS_PRESETS = {
  // Level 1: Subtle - for pills, chips, tags
  subtle: {
    blur: 12,
    saturation: 120,
    tint: 'rgba(255, 255, 255, 0.06)',
    tintStrength: 0.06,
    border: 'rgba(255, 255, 255, 0.10)',
    shadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    radius: 10,
    // rdev-specific (disabled for subtle)
    displacementScale: 0,
    aberrationIntensity: 0,
    elasticity: 0,
  },
  
  // Level 2: Standard - for cards, panels
  standard: {
    blur: 24,
    saturation: 140,
    tint: 'rgba(255, 255, 255, 0.12)',
    tintStrength: 0.12,
    border: 'rgba(255, 255, 255, 0.15)',
    shadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
    radius: 18,
    // rdev-specific (minimal)
    displacementScale: 20,
    aberrationIntensity: 0.5,
    elasticity: 0.05,
  },
  
  // Level 3: Prominent - for navbar, modals
  prominent: {
    blur: 32,
    saturation: 160,
    tint: 'rgba(255, 255, 255, 0.16)',
    tintStrength: 0.16,
    border: 'rgba(255, 255, 255, 0.20)',
    shadow: '0 16px 40px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.10)',
    radius: 22,
    // rdev-specific (moderate)
    displacementScale: 40,
    aberrationIntensity: 1,
    elasticity: 0.1,
  },
  
  // Level 4: Hero - for hero sections, loading
  hero: {
    blur: 40,
    saturation: 180,
    tint: 'rgba(255, 255, 255, 0.18)',
    tintStrength: 0.18,
    border: 'rgba(255, 255, 255, 0.25)',
    shadow: '0 24px 48px rgba(0, 0, 0, 0.20), 0 8px 16px rgba(0, 0, 0, 0.12)',
    radius: 26,
    // rdev-specific (full effect)
    displacementScale: 70,
    aberrationIntensity: 2,
    elasticity: 0.15,
  },
  
  // Special: Featured - for highlighted project cards
  featured: {
    blur: 28,
    saturation: 150,
    tint: 'rgba(139, 92, 246, 0.08)', // Purple accent tint
    tintStrength: 0.14,
    border: 'rgba(139, 92, 246, 0.25)',
    shadow: '0 12px 32px rgba(139, 92, 246, 0.15), 0 4px 12px rgba(0, 0, 0, 0.10)',
    radius: 20,
    // rdev-specific (accent effect)
    displacementScale: 50,
    aberrationIntensity: 1.5,
    elasticity: 0.12,
  },
};

/**
 * Liquid Glass Context
 */
const LiquidGlassContext = createContext(null);

/**
 * Liquid Glass Provider
 * Wraps app to provide glass configuration
 */
export const LiquidGlassProvider = ({ 
  children, 
  defaultPreset = 'standard',
  enableAdvancedEffects = true,
  reducedMotion = false,
}) => {
  const [config, setConfig] = useState({
    currentPreset: defaultPreset,
    enableAdvancedEffects,
    reducedMotion,
  });

  // Check for reduced motion preference
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Check for mobile device (disable heavy effects)
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768 || 'ontouchstart' in window;
  }, []);

  // Get effective configuration
  const effectiveConfig = useMemo(() => ({
    ...config,
    enableAdvancedEffects: config.enableAdvancedEffects && !prefersReducedMotion && !isMobile,
    reducedMotion: config.reducedMotion || prefersReducedMotion,
  }), [config, prefersReducedMotion, isMobile]);

  // Get preset values with performance adjustments
  const getPreset = useCallback((presetName) => {
    const preset = GLASS_PRESETS[presetName] || GLASS_PRESETS.standard;
    
    if (!effectiveConfig.enableAdvancedEffects) {
      // Disable rdev effects on mobile/reduced motion
      return {
        ...preset,
        displacementScale: 0,
        aberrationIntensity: 0,
        elasticity: 0,
      };
    }
    
    return preset;
  }, [effectiveConfig]);

  // Generate CSS variables from preset
  const getCSSVariables = useCallback((presetName) => {
    const preset = getPreset(presetName);
    return {
      '--glass-blur': `${preset.blur}px`,
      '--glass-saturation': `${preset.saturation}%`,
      '--glass-tint': preset.tint,
      '--glass-border': preset.border,
      '--glass-shadow': preset.shadow,
      '--glass-radius': `${preset.radius}px`,
    };
  }, [getPreset]);

  const value = {
    config: effectiveConfig,
    setConfig,
    getPreset,
    getCSSVariables,
    presets: GLASS_PRESETS,
  };

  return (
    <LiquidGlassContext.Provider value={value}>
      {children}
    </LiquidGlassContext.Provider>
  );
};

/**
 * useLiquidGlass Hook
 * Access glass configuration in any component
 */
export const useLiquidGlass = (presetName = 'standard') => {
  const context = useContext(LiquidGlassContext);
  
  // Fallback if used outside provider
  if (!context) {
    const preset = GLASS_PRESETS[presetName] || GLASS_PRESETS.standard;
    return {
      preset,
      cssVars: {
        '--glass-blur': `${preset.blur}px`,
        '--glass-saturation': `${preset.saturation}%`,
        '--glass-tint': preset.tint,
        '--glass-border': preset.border,
        '--glass-shadow': preset.shadow,
        '--glass-radius': `${preset.radius}px`,
      },
      enableAdvancedEffects: true,
      reducedMotion: false,
    };
  }

  const preset = context.getPreset(presetName);
  const cssVars = context.getCSSVariables(presetName);

  return {
    preset,
    cssVars,
    enableAdvancedEffects: context.config.enableAdvancedEffects,
    reducedMotion: context.config.reducedMotion,
  };
};

export default useLiquidGlass;
