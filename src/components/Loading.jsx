import { useEffect, useState } from 'react';
import { GradientText } from './ui/AnimatedText';

/**
 * Loading Component
 * Premium loading screen with liquid glass effects and animated elements
 */
const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Delay content appearance for smooth entry
    setTimeout(() => setShowContent(true), 100);
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start fade out animation
          setTimeout(() => setFadeOut(true), 500);
          // Call onComplete after fade out
          setTimeout(() => onComplete(), 1200);
          return 100;
        }
        return prev + 1.5;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ${
        fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs with blur */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
            animationDelay: '1s',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main loading content */}
      <div 
        className={`relative z-10 flex flex-col items-center transition-all duration-700 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Liquid Glass Logo */}
        <div className="relative mb-10">
          {/* Glow layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
          <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-30" />
          
          {/* Main glass container */}
          <div 
            className="relative w-36 h-36 flex items-center justify-center rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: `
                0 8px 32px rgba(0,0,0,0.3),
                inset 0 1px 1px rgba(255,255,255,0.2),
                0 0 60px rgba(139, 92, 246, 0.2)
              `,
            }}
          >
            {/* Inner reflection */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 40%)',
              }}
            />
            
            {/* Initials */}
            <span className="relative z-10 text-5xl font-bold">
              <GradientText colors={['#60a5fa', '#a78bfa', '#f472b6', '#60a5fa']}>
                MCK
              </GradientText>
            </span>
            
            {/* Spinning ring */}
            <div 
              className="absolute inset-[-4px] rounded-full border-2 border-transparent animate-spin-slow"
              style={{
                borderTopColor: 'rgba(139, 92, 246, 0.5)',
                borderRightColor: 'rgba(59, 130, 246, 0.3)',
                animationDuration: '3s',
              }}
            />
          </div>
        </div>

        {/* Name with animated gradient */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">
          <GradientText 
            colors={['#ffffff', '#e0e7ff', '#c7d2fe', '#ffffff']} 
            duration={4}
          >
            Movva Chenna Kesav
          </GradientText>
        </h1>
        
        <p className="text-lg text-gray-400 mb-10 tracking-wider">
          AI Engineer & Software Engineer
        </p>

        {/* Premium progress bar */}
        <div className="w-72 md:w-96">
          <div 
            className="h-1.5 rounded-full overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.1)',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            <div 
              className="h-full rounded-full relative overflow-hidden transition-all duration-150 ease-out"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
              }}
            >
              {/* Shimmer effect */}
              <div 
                className="absolute inset-0 animate-shimmer"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  backgroundSize: '200% 100%',
                }}
              />
            </div>
          </div>
          
          {/* Progress text */}
          <div className="flex justify-between mt-3 text-sm">
            <span className="text-gray-500">Initializing experience...</span>
            <span className="text-gray-400 font-mono">{progress}%</span>
          </div>
        </div>

        {/* Animated dots */}
        <div className="mt-10 flex items-center gap-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <span 
              key={i}
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: `hsl(${220 + i * 30}, 80%, 60%)`,
                animationDelay: `${i * 150}ms`,
                boxShadow: `0 0 10px hsla(${220 + i * 30}, 80%, 60%, 0.5)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
