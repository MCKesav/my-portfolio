/**
 * useTiltEffect Hook
 * Creates a 3D tilt effect on hover
 * Inspired by Apple's spatial UI interactions
 */
import { useRef, useState, useCallback } from 'react';

export const useTiltEffect = (options = {}) => {
  const {
    maxTilt = 10,
    scale = 1.02,
    speed = 400,
    glare = true,
    glareMaxOpacity = 0.2,
  } = options;

  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * maxTilt;
    const tiltY = ((centerX - x) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`,
      transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
    });

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlareStyle({
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareMaxOpacity}) 0%, transparent 60%)`,
        opacity: 1,
      });
    }
  }, [maxTilt, scale, speed, glare, glareMaxOpacity]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
    });
    if (glare) {
      setGlareStyle({ opacity: 0 });
    }
  }, [speed, glare]);

  return {
    ref,
    style,
    glareStyle,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
};

/**
 * TiltCard Component
 * A card with 3D tilt effect on hover
 */
export const TiltCard = ({ 
  children, 
  className = '', 
  tiltOptions = {},
  ...props 
}) => {
  const { ref, style, glareStyle, handlers } = useTiltEffect(tiltOptions);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ ...style, transformStyle: 'preserve-3d' }}
      {...handlers}
      {...props}
    >
      {children}
      {/* Glare overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          ...glareStyle,
          borderRadius: 'inherit',
        }}
      />
    </div>
  );
};

export default useTiltEffect;
