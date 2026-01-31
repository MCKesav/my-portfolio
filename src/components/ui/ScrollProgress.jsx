/**
 * ScrollProgress Component
 * Shows reading/scroll progress indicator
 * Creates a modern progress bar at top of page
 */
import { useEffect, useState } from 'react';

const ScrollProgress = ({
  position = 'top', // 'top' or 'bottom'
  height = 3,
  colors = ['#3b82f6', '#8b5cf6', '#ec4899'],
  backgroundColor = 'transparent',
  showPercentage = false,
  percentagePosition = 'right', // 'left', 'right', 'center'
  zIndex = 50,
  className = '',
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progressPercent = (scrollPosition / scrollHeight) * 100;
      setProgress(Math.min(progressPercent, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gradient = colors.length > 1 
    ? `linear-gradient(90deg, ${colors.join(', ')})`
    : colors[0];

  const percentageStyles = {
    left: { left: '1rem', right: 'auto' },
    right: { right: '1rem', left: 'auto' },
    center: { left: '50%', transform: 'translateX(-50%)' },
  };

  return (
    <div
      className={`fixed left-0 right-0 ${className}`}
      style={{
        [position]: 0,
        height: height,
        backgroundColor,
        zIndex,
      }}
    >
      {/* Progress bar */}
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: gradient,
          boxShadow: progress > 0 ? `0 0 10px ${colors[0]}40, 0 0 20px ${colors[0]}20` : 'none',
        }}
      />

      {/* Percentage indicator */}
      {showPercentage && progress > 0 && (
        <div
          className="fixed text-xs font-medium text-white/80 px-2 py-1 rounded-full bg-slate-800/80 backdrop-blur-sm"
          style={{
            [position]: height + 8,
            ...percentageStyles[percentagePosition],
            zIndex: zIndex + 1,
          }}
        >
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
};

export default ScrollProgress;
