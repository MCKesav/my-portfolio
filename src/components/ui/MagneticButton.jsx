/**
 * MagneticButton Component
 * Interactive button with magnetic cursor attraction effect
 * Creates a premium, playful interaction
 */
import { useRef, useState } from 'react';

const MagneticButton = ({
  children,
  className = '',
  strength = 0.4,
  radius = 150,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (disabled || !buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
    if (distance < radius) {
      const magnetStrength = (1 - distance / radius) * strength;
      setPosition({
        x: distanceX * magnetStrength,
        y: distanceY * magnetStrength,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-amber-500 via-rose-500 to-teal-500
      hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]
      text-white font-semibold
    `,
    secondary: `
      bg-white/8 backdrop-blur-xl border border-amber-500/20
      hover:bg-white/15 hover:border-amber-500/40
      text-white font-medium
    `,
    outline: `
      bg-transparent border-2 border-amber-500/40
      hover:bg-amber-500/10 hover:border-amber-500/60
      text-white font-medium
    `,
    neon: `
      bg-transparent border-2 border-teal-400
      hover:bg-teal-400/10 hover:shadow-[0_0_30px_rgba(0,128,128,0.5),inset_0_0_30px_rgba(0,128,128,0.1)]
      text-teal-400 font-bold
    `,
  };

  return (
    <div
      className="relative inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <button
        ref={buttonRef}
        onClick={onClick}
        disabled={disabled}
        className={`
          relative rounded-xl overflow-hidden
          transition-all duration-300 ease-out
          ${sizeStyles[size]}
          ${variantStyles[variant]}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
        `}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${isHovered ? 1.05 : 1})`,
        }}
        {...props}
      >
        {/* Shine effect */}
        <span
          className={`
            absolute inset-0 opacity-0 transition-opacity duration-300
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            -translate-x-full
            ${isHovered ? 'opacity-100 translate-x-full' : ''}
          `}
          style={{
            transition: isHovered ? 'transform 0.6s ease-out, opacity 0.3s' : 'opacity 0.3s',
          }}
        />
        
        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    </div>
  );
};

export default MagneticButton;
