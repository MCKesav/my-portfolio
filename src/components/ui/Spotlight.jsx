/**
 * Spotlight Component
 * Interactive spotlight effect that follows cursor
 * Creates dramatic lighting and focus effects
 */
import { useEffect, useRef, useState } from 'react';

const Spotlight = ({
  children,
  className = '',
  spotlightColor = 'rgba(59, 130, 246, 0.15)',
  spotlightSize = 400,
  borderColor = 'rgba(59, 130, 246, 0.3)',
  showBorder = true,
}) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        setOpacity(1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setOpacity(0);
      }}
    >
      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      {/* Border highlight */}
      {showBorder && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 rounded-[inherit]"
          style={{
            opacity: opacity * 0.5,
            background: `radial-gradient(${spotlightSize * 0.8}px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 50%)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            padding: '1px',
          }}
        />
      )}

      {/* Content */}
      {children}
    </div>
  );
};

export default Spotlight;
