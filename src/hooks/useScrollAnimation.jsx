/**
 * useScrollAnimation Hook
 * Triggers animations when elements enter the viewport
 * Uses Intersection Observer for performance
 */
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible, hasAnimated };
};

/**
 * useStaggeredAnimation Hook
 * For animating lists of items with staggered delays
 */
export const useStaggeredAnimation = (itemCount, baseDelay = 100) => {
  const { ref, isVisible } = useScrollAnimation();
  
  const getDelay = (index) => {
    return isVisible ? index * baseDelay : 0;
  };

  const getStyle = (index) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${getDelay(index)}ms`,
  });

  return { ref, isVisible, getDelay, getStyle };
};

/**
 * ScrollReveal Component
 * Wrapper that animates children when scrolled into view
 */
export const ScrollReveal = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  className = '',
  ...props 
}) => {
  const { ref, isVisible } = useScrollAnimation();

  const animations = {
    'fade-up': {
      initial: { opacity: 0, transform: 'translateY(40px)' },
      animate: { opacity: 1, transform: 'translateY(0)' },
    },
    'fade-down': {
      initial: { opacity: 0, transform: 'translateY(-40px)' },
      animate: { opacity: 1, transform: 'translateY(0)' },
    },
    'fade-left': {
      initial: { opacity: 0, transform: 'translateX(-40px)' },
      animate: { opacity: 1, transform: 'translateX(0)' },
    },
    'fade-right': {
      initial: { opacity: 0, transform: 'translateX(40px)' },
      animate: { opacity: 1, transform: 'translateX(0)' },
    },
    'scale': {
      initial: { opacity: 0, transform: 'scale(0.9)' },
      animate: { opacity: 1, transform: 'scale(1)' },
    },
    'blur': {
      initial: { opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' },
      animate: { opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' },
    },
  };

  const anim = animations[animation] || animations['fade-up'];
  const currentStyle = isVisible ? anim.animate : anim.initial;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...currentStyle,
        transition: `all ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'transform, opacity',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default useScrollAnimation;
