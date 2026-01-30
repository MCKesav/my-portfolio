/**
 * LiquidGlassFilter Component
 * SVG filter definitions for Apple's Liquid Glass effect
 * 
 * This creates the characteristic "liquid" distortion effect seen in 
 * macOS Sequoia and VisionOS by using SVG displacement and blur filters.
 * 
 * Usage:
 * 1. Include <LiquidGlassFilter /> once in your app (typically in App.jsx or index)
 * 2. Apply the filter using CSS: filter: url(#liquid-glass-filter)
 * 3. Or use the .liquid-glass-effect class
 */

const LiquidGlassFilter = () => {
  return (
    <svg 
      className="liquid-glass-svg-filters" 
      style={{ 
        position: 'absolute', 
        width: 0, 
        height: 0, 
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <defs>
        {/* Main Liquid Glass Filter - Full effect */}
        <filter 
          id="liquid-glass-filter" 
          x="-50%" 
          y="-50%" 
          width="200%" 
          height="200%"
          colorInterpolationFilters="sRGB"
        >
          {/* Turbulence for organic distortion */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.01 0.01" 
            numOctaves="3" 
            seed="5"
            result="noise"
          />
          
          {/* Displacement map creates the liquid warping */}
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="8" 
            xChannelSelector="R" 
            yChannelSelector="G"
            result="displaced"
          />
          
          {/* Slight blur for glass diffusion */}
          <feGaussianBlur 
            in="displaced" 
            stdDeviation="0.5"
            result="blurred"
          />
          
          {/* Composite back with original for sharpness */}
          <feComposite 
            in="blurred" 
            in2="SourceGraphic" 
            operator="over"
          />
        </filter>

        {/* Subtle Liquid Glass - Less distortion */}
        <filter 
          id="liquid-glass-subtle" 
          x="-25%" 
          y="-25%" 
          width="150%" 
          height="150%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.015 0.015" 
            numOctaves="2" 
            seed="3"
            result="noise"
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="4" 
            xChannelSelector="R" 
            yChannelSelector="G"
          />
        </filter>

        {/* Edge Glow Filter - Rainbow refraction */}
        <filter 
          id="liquid-glass-glow" 
          x="-50%" 
          y="-50%" 
          width="200%" 
          height="200%"
        >
          {/* Create a soft glow around edges */}
          <feMorphology 
            in="SourceAlpha" 
            operator="dilate" 
            radius="2"
            result="dilated"
          />
          <feGaussianBlur 
            in="dilated" 
            stdDeviation="4"
            result="blurred"
          />
          
          {/* Color the glow with rainbow spectrum */}
          <feColorMatrix 
            in="blurred" 
            type="matrix"
            values="
              0.8 0.2 0.2 0 0
              0.2 0.8 0.2 0 0
              0.2 0.2 0.8 0 0
              0   0   0   0.4 0
            "
            result="coloredGlow"
          />
          
          {/* Merge glow with original */}
          <feMerge>
            <feMergeNode in="coloredGlow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Chromatic Aberration - Rainbow edge effect */}
        <filter 
          id="liquid-glass-chromatic" 
          x="-10%" 
          y="-10%" 
          width="120%" 
          height="120%"
        >
          {/* Red channel offset */}
          <feOffset in="SourceGraphic" dx="1" dy="0" result="red" />
          <feColorMatrix 
            in="red" 
            type="matrix"
            values="
              1 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 1 0
            "
            result="redOnly"
          />
          
          {/* Green channel (center) */}
          <feColorMatrix 
            in="SourceGraphic" 
            type="matrix"
            values="
              0 0 0 0 0
              0 1 0 0 0
              0 0 0 0 0
              0 0 0 1 0
            "
            result="greenOnly"
          />
          
          {/* Blue channel offset */}
          <feOffset in="SourceGraphic" dx="-1" dy="0" result="blue" />
          <feColorMatrix 
            in="blue" 
            type="matrix"
            values="
              0 0 0 0 0
              0 0 0 0 0
              0 0 1 0 0
              0 0 0 1 0
            "
            result="blueOnly"
          />
          
          {/* Blend all channels */}
          <feBlend in="redOnly" in2="greenOnly" mode="screen" result="rg" />
          <feBlend in="rg" in2="blueOnly" mode="screen" />
        </filter>

        {/* Combined Premium Effect */}
        <filter 
          id="liquid-glass-premium" 
          x="-50%" 
          y="-50%" 
          width="200%" 
          height="200%"
          colorInterpolationFilters="sRGB"
        >
          {/* Subtle turbulence */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.012 0.012" 
            numOctaves="3" 
            seed="7"
            result="noise"
          />
          
          {/* Light displacement */}
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="6" 
            xChannelSelector="R" 
            yChannelSelector="G"
            result="displaced"
          />
          
          {/* Very subtle blur */}
          <feGaussianBlur 
            in="displaced" 
            stdDeviation="0.3"
            result="softened"
          />
          
          {/* Sharpen back */}
          <feConvolveMatrix 
            in="softened"
            order="3"
            kernelMatrix="0 -0.5 0 -0.5 3 -0.5 0 -0.5 0"
            result="sharpened"
          />
          
          {/* Final composite */}
          <feComposite 
            in="sharpened" 
            in2="SourceGraphic" 
            operator="over"
          />
        </filter>

        {/* Gradient definitions for edge highlights */}
        <linearGradient id="liquid-glass-edge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
        </linearGradient>

        <radialGradient id="liquid-glass-glow-gradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default LiquidGlassFilter;
