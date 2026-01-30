/**
 * CursorGlow Component
 * Creates a subtle glow effect that follows the cursor
 * Adds interactivity and depth to the UI
 */
import { useEffect, useState } from 'react';

const CursorGlow = ({ 
  size = 400,
  color = 'rgba(139, 92, 246, 0.15)',
  blur = 80,
  enabled = true,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, isVisible]);

  if (!enabled) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: position.x - size / 2,
        top: position.y - size / 2,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        opacity: isVisible ? 1 : 0,
        transform: 'translate3d(0, 0, 0)', // GPU acceleration
      }}
    />
  );
};

export default CursorGlow;
