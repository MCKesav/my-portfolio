/**
 * HoverReveal Component
 * Reveals hidden content on hover with smooth animations
 * Creates interactive cards with layered information
 */
import { useState } from 'react';

const HoverReveal = ({
  children,
  revealContent,
  revealPosition = 'bottom', // 'bottom', 'top', 'left', 'right', 'center'
  revealDuration = 300,
  overlayColor = 'rgba(15, 23, 42, 0.9)',
  overlayBlur = 8,
  className = '',
  revealClassName = '',
  hoverScale = 1.02,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getRevealStyles = () => {
    const base = {
      transition: `all ${revealDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
    };

    const positions = {
      bottom: {
        initial: { transform: 'translateY(100%)', opacity: 0 },
        reveal: { transform: 'translateY(0)', opacity: 1 },
      },
      top: {
        initial: { transform: 'translateY(-100%)', opacity: 0 },
        reveal: { transform: 'translateY(0)', opacity: 1 },
      },
      left: {
        initial: { transform: 'translateX(-100%)', opacity: 0 },
        reveal: { transform: 'translateX(0)', opacity: 1 },
      },
      right: {
        initial: { transform: 'translateX(100%)', opacity: 0 },
        reveal: { transform: 'translateX(0)', opacity: 1 },
      },
      center: {
        initial: { transform: 'scale(0.8)', opacity: 0 },
        reveal: { transform: 'scale(1)', opacity: 1 },
      },
    };

    const position = positions[revealPosition] || positions.bottom;
    return {
      ...base,
      ...(isHovered ? position.reveal : position.initial),
    };
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? `scale(${hoverScale})` : 'scale(1)',
        transition: `transform ${revealDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
      }}
    >
      {/* Main content */}
      <div
        style={{
          transition: `filter ${revealDuration}ms ease`,
          filter: isHovered ? `blur(${overlayBlur / 2}px)` : 'blur(0px)',
        }}
      >
        {children}
      </div>

      {/* Reveal overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${revealClassName}`}
        style={{
          backgroundColor: overlayColor,
          backdropFilter: `blur(${overlayBlur}px)`,
          ...getRevealStyles(),
        }}
      >
        {revealContent}
      </div>
    </div>
  );
};

export default HoverReveal;
