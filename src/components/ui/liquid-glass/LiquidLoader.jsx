/**
 * LiquidLoader Component
 * =====================================================
 * 
 * Loading screen with rdev liquid-glass-react elasticity effects.
 * One of THREE components using rdev (Hero, Loading, Featured).
 * 
 * Features:
 * - Elastic blob animation using rdev elasticity
 * - Smooth pulsing effect
 * - Graceful CSS fallback
 * - Customizable loading messages
 */

import { useState, useEffect, useMemo } from 'react';
import { useLiquidGlass } from './useLiquidGlass';

/**
 * LiquidLoader
 * 
 * @param {string} message - Loading message
 * @param {number} progress - Optional progress 0-100
 * @param {boolean} fullScreen - Fill entire viewport
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} className - Additional classes
 */
const LiquidLoader = ({
  message = 'Loading...',
  progress = null,
  fullScreen = false,
  size = 'md',
  className = '',
  ...props
}) => {
  const { preset, enableAdvancedEffects } = useLiquidGlass('hero');
  const [rdevComponent, setRdevComponent] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [dots, setDots] = useState('');

  // Animate loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 400);
    return () => clearInterval(interval);
  }, []);

  // Dynamically import liquid-glass-react
  useEffect(() => {
    setIsMounted(true);
    
    if (enableAdvancedEffects) {
      import('liquid-glass-react')
        .then((module) => {
          setRdevComponent(() => module.default || module.LiquidGlass);
        })
        .catch((err) => {
          console.warn('Could not load liquid-glass-react:', err);
        });
    }
  }, [enableAdvancedEffects]);

  // Size configurations
  const sizeConfig = useMemo(() => ({
    sm: { blobSize: 60, fontSize: '0.875rem', padding: '1rem' },
    md: { blobSize: 100, fontSize: '1rem', padding: '2rem' },
    lg: { blobSize: 140, fontSize: '1.125rem', padding: '3rem' },
  }), []);

  const currentSize = sizeConfig[size] || sizeConfig.md;

  // rdev configuration for elastic blob
  const rdevConfig = useMemo(() => ({
    displacementScale: 80,
    blurAmount: preset.blur,
    saturation: preset.saturation / 100,
    aberrationIntensity: 1,
    elasticity: 0.25, // Higher elasticity for bouncy effect
    cornerRadius: 999, // Full circle
    mode: 'standard',
  }), [preset]);

  // Container styles
  const containerStyles = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    padding: currentSize.padding,
    ...(fullScreen && {
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(8px)',
    }),
  }), [fullScreen, currentSize]);

  // Blob styles (CSS fallback)
  const blobStyles = useMemo(() => ({
    width: currentSize.blobSize,
    height: currentSize.blobSize,
    borderRadius: '50%',
    background: `
      radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 50%),
      linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(59, 130, 246, 0.6))
    `,
    boxShadow: `
      0 0 40px rgba(139, 92, 246, 0.4),
      0 0 80px rgba(59, 130, 246, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.1)
    `,
    animation: 'liquid-loader-pulse 2s ease-in-out infinite',
    position: 'relative',
  }), [currentSize]);

  // Inner glass effect
  const innerGlassStyles = useMemo(() => ({
    position: 'absolute',
    inset: '15%',
    borderRadius: '50%',
    backdropFilter: `blur(${preset.blur}px) saturate(${preset.saturation}%)`,
    WebkitBackdropFilter: `blur(${preset.blur}px) saturate(${preset.saturation}%)`,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  }), [preset]);

  // Blob content
  const blobContent = (
    <div style={{ position: 'relative' }}>
      {/* Spinning outer ring */}
      <div 
        className="liquid-loader-ring"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: -10,
          borderRadius: '50%',
          border: '2px solid transparent',
          borderTopColor: 'rgba(139, 92, 246, 0.5)',
          borderRightColor: 'rgba(59, 130, 246, 0.3)',
          animation: 'liquid-loader-spin 1.5s linear infinite',
        }}
      />
      
      {/* Main blob */}
      <div style={blobStyles}>
        <div style={innerGlassStyles} />
      </div>
    </div>
  );

  // If rdev available and enabled, use elastic blob
  const renderBlob = () => {
    if (isMounted && rdevComponent && enableAdvancedEffects) {
      const RdevGlass = rdevComponent;
      return (
        <RdevGlass {...rdevConfig}>
          {blobContent}
        </RdevGlass>
      );
    }
    return blobContent;
  };

  return (
    <div 
      className={`liquid-loader ${className}`}
      style={containerStyles}
      role="status"
      aria-live="polite"
      {...props}
    >
      {renderBlob()}
      
      {/* Message */}
      <div 
        className="liquid-loader-message"
        style={{
          fontSize: currentSize.fontSize,
          color: 'rgba(255, 255, 255, 0.8)',
          fontWeight: 500,
          letterSpacing: '0.02em',
        }}
      >
        {message}{dots}
      </div>
      
      {/* Progress bar (optional) */}
      {progress !== null && (
        <div 
          className="liquid-loader-progress"
          style={{
            width: '200px',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          <div 
            className="liquid-loader-progress-fill"
            style={{
              width: `${Math.min(100, Math.max(0, progress))}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)',
              borderRadius: '2px',
              transition: 'width 0.3s ease',
              boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
            }}
          />
        </div>
      )}
    </div>
  );
};

// CSS to add to index.css
export const LiquidLoaderCSS = `
/* LiquidLoader Animations */
@keyframes liquid-loader-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

@keyframes liquid-loader-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Elastic morph for advanced mode */
@keyframes liquid-loader-morph {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  50% {
    border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
  }
  75% {
    border-radius: 60% 30% 60% 40% / 70% 40% 50% 60%;
  }
}

.liquid-loader-blob {
  animation: 
    liquid-loader-pulse 2s ease-in-out infinite,
    liquid-loader-morph 4s ease-in-out infinite;
}
`;

export default LiquidLoader;
