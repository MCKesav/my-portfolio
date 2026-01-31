/**
 * GlowingBorder Component
 * Animated gradient border with glow effect
 * Creates premium, modern card styling
 */
import { forwardRef } from 'react';

const GlowingBorder = forwardRef(({
  children,
  colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#22d3ee', '#3b82f6'],
  borderWidth = 2,
  borderRadius = 20,
  glowIntensity = 0.5,
  animationSpeed = 3,
  className = '',
  innerClassName = '',
  hoverEffect = true,
  ...props
}, ref) => {
  const gradientColors = colors.join(', ');
  
  return (
    <div
      ref={ref}
      className={`relative group ${className}`}
      style={{
        padding: borderWidth,
        borderRadius: borderRadius,
      }}
      {...props}
    >
      {/* Animated gradient border */}
      <div
        className="absolute inset-0 rounded-[inherit] opacity-100"
        style={{
          background: `linear-gradient(90deg, ${gradientColors})`,
          backgroundSize: '200% 100%',
          animation: `gradient-border-flow ${animationSpeed}s linear infinite`,
          borderRadius: borderRadius,
        }}
      />
      
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-[inherit] blur-xl transition-opacity duration-500 ${
          hoverEffect ? 'opacity-0 group-hover:opacity-100' : ''
        }`}
        style={{
          background: `linear-gradient(90deg, ${gradientColors})`,
          backgroundSize: '200% 100%',
          animation: `gradient-border-flow ${animationSpeed}s linear infinite`,
          opacity: hoverEffect ? undefined : glowIntensity,
        }}
      />
      
      {/* Inner content */}
      <div
        className={`relative bg-slate-900/90 backdrop-blur-xl rounded-[inherit] ${innerClassName}`}
        style={{
          borderRadius: borderRadius - borderWidth,
        }}
      >
        {children}
      </div>
      
      <style jsx>{`
        @keyframes gradient-border-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </div>
  );
});

GlowingBorder.displayName = 'GlowingBorder';

export default GlowingBorder;
