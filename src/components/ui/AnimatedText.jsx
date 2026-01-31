/**
 * AnimatedText Component
 * Text with animated gradient and shimmer effects
 */
import { useMemo } from 'react';

/**
 * GradientText - Animated flowing gradient text
 */
export const GradientText = ({ 
  children, 
  className = '',
  colors = ['#d4af37', '#f59e0b', '#be3144', '#d4af37'],
  animate = true,
  duration = 3,
}) => {
  const gradientStyle = useMemo(() => ({
    background: `linear-gradient(90deg, ${colors.join(', ')})`,
    backgroundSize: animate ? '200% auto' : '100% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: animate ? `gradient-flow ${duration}s ease infinite` : 'none',
  }), [colors, animate, duration]);

  return (
    <span className={className} style={gradientStyle}>
      {children}
    </span>
  );
};

/**
 * ShimmerText - Text with moving shimmer highlight
 */
export const ShimmerText = ({ 
  children, 
  className = '',
  shimmerColor = 'rgba(255, 255, 255, 0.8)',
  duration = 2,
}) => {
  const shimmerStyle = useMemo(() => ({
    position: 'relative',
    display: 'inline-block',
  }), []);

  return (
    <span className={`shimmer-text ${className}`} style={shimmerStyle}>
      {children}
      <style>{`
        .shimmer-text {
          background: linear-gradient(
            90deg,
            transparent 0%,
            ${shimmerColor} 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer ${duration}s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </span>
  );
};

/**
 * TypewriterText - Text that types out character by character
 */
export const TypewriterText = ({ 
  text, 
  className = '',
  speed = 50,
  delay = 0,
  cursor = true,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;
    let index = 0;

    const startTyping = () => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
        timeout = setTimeout(startTyping, speed);
      }
    };

    const delayTimeout = setTimeout(startTyping, delay);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
      clearInterval(cursorInterval);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <span 
          className="inline-block w-0.5 h-[1em] bg-current ml-1 align-middle"
          style={{ opacity: showCursor ? 1 : 0 }}
        />
      )}
    </span>
  );
};

// Need to import these for TypewriterText
import { useState, useEffect } from 'react';

/**
 * SplitText - Text that animates in letter by letter
 */
export const SplitText = ({ 
  children, 
  className = '',
  delay = 0,
  letterDelay = 30,
  animation = 'fade-up',
}) => {
  const text = typeof children === 'string' ? children : '';
  const letters = text.split('');

  const getAnimationStyle = (index) => {
    const totalDelay = delay + (index * letterDelay);
    
    const animations = {
      'fade-up': {
        opacity: 1,
        transform: 'translateY(0)',
      },
      'fade-down': {
        opacity: 1,
        transform: 'translateY(0)',
      },
      'scale': {
        opacity: 1,
        transform: 'scale(1)',
      },
    };

    return {
      display: 'inline-block',
      animation: `split-text-${animation} 0.5s ease forwards`,
      animationDelay: `${totalDelay}ms`,
      opacity: 0,
    };
  };

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <span
          key={index}
          style={getAnimationStyle(index)}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
      <style>{`
        @keyframes split-text-fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes split-text-fade-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes split-text-scale {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </span>
  );
};

export default GradientText;
