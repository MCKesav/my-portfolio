/**
 * MorphingBlob Component
 * Animated organic blob shapes for modern backgrounds
 * Creates smooth morphing animations with gradient fills
 */
import { useEffect, useRef } from 'react';

const MorphingBlob = ({
  colors = ['#3b82f6', '#8b5cf6', '#ec4899'],
  size = 400,
  speed = 4,
  complexity = 6,
  className = '',
  style = {},
}) => {
  const pathRef = useRef(null);
  const animationRef = useRef(null);
  const timeRef = useRef(0);
  const uniqueId = useRef(`blob-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const generateBlobPath = (time) => {
      const points = [];
      const numPoints = complexity;
      const angleStep = (Math.PI * 2) / numPoints;
      const radius = size / 2.5;
      
      for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep;
        const offset = Math.sin(time + i * 0.8) * (radius * 0.25) + 
                       Math.cos(time * 0.7 + i * 1.2) * (radius * 0.15);
        const r = radius + offset;
        const x = size / 2 + Math.cos(angle) * r;
        const y = size / 2 + Math.sin(angle) * r;
        points.push({ x, y });
      }

      // Create smooth bezier curve through points
      let d = `M ${points[0].x} ${points[0].y}`;
      
      for (let i = 0; i < points.length; i++) {
        const p0 = points[(i - 1 + points.length) % points.length];
        const p1 = points[i];
        const p2 = points[(i + 1) % points.length];
        const p3 = points[(i + 2) % points.length];
        
        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;
        
        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
      }
      
      d += ' Z';
      return d;
    };

    const animate = () => {
      timeRef.current += 0.015 / (speed / 4);
      path.setAttribute('d', generateBlobPath(timeRef.current));
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [size, speed, complexity]);

  return (
    <div 
      className={`pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={uniqueId.current} x1="0%" y1="0%" x2="100%" y2="100%">
            {colors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (colors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
          <filter id={`${uniqueId.current}-blur`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
        
        {/* Glow layer */}
        <path
          ref={pathRef}
          fill={`url(#${uniqueId.current})`}
          opacity="0.3"
          filter={`url(#${uniqueId.current}-blur)`}
          style={{ transform: 'scale(1.1)', transformOrigin: 'center' }}
        />
        
        {/* Main blob */}
        <path
          ref={pathRef}
          fill={`url(#${uniqueId.current})`}
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default MorphingBlob;
