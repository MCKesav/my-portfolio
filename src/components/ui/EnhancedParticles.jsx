/**
 * EnhancedParticles Component
 * Premium animated particle system with multiple effects
 * Features: stars, orbs, connection lines, mouse interaction, depth layers
 */
import { useEffect, useRef, useCallback } from 'react';

const EnhancedParticles = ({ 
  // Particle settings
  starCount = 80,
  orbCount = 15,
  dustCount = 40,
  // Colors - Premium warm palette
  starColors = ['#ffffff', '#fef3c7', '#fde68a', '#fcd34d'],
  orbColors = ['#d4af37', '#f59e0b', '#be3144', '#14b8a6', '#d97706'],
  // Behavior
  enableConnections = true,
  enableMouseInteraction = true,
  connectionDistance = 150,
  mouseRadius = 200,
  // Visual
  glowIntensity = 1.5,
  twinkleSpeed = 0.02,
  className = '',
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef({ stars: [], orbs: [], dust: [] });
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const scrollRef = useRef(0);

  const initParticles = useCallback((width, height) => {
    // Create stars (small twinkling dots)
    particlesRef.current.stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      baseSize: Math.random() * 2 + 0.5,
      size: 0,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      twinklePhase: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * twinkleSpeed + 0.005,
      brightness: Math.random() * 0.5 + 0.5,
      layer: Math.random(), // For parallax
    }));

    // Create orbs (larger glowing particles)
    particlesRef.current.orbs = Array.from({ length: orbCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      baseSize: Math.random() * 8 + 4,
      size: 0,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: orbColors[Math.floor(Math.random() * orbColors.length)],
      opacity: Math.random() * 0.4 + 0.2,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.015 + 0.008,
      glowSize: Math.random() * 20 + 15,
    }));

    // Create dust (tiny floating particles)
    particlesRef.current.dust = Array.from({ length: dustCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.2,
      vy: Math.random() * 0.1 + 0.05,
      opacity: Math.random() * 0.3 + 0.1,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.03 + 0.01,
    }));
  }, [starCount, orbCount, dustCount, starColors, orbColors, twinkleSpeed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles(width, height);
    };
    resize();

    // Track scroll for parallax
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current = { 
        x: e.clientX, 
        y: e.clientY
      };
    };
    if (enableMouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw dust particles (background layer)
      particlesRef.current.dust.forEach((dust) => {
        dust.wobblePhase += dust.wobbleSpeed;
        dust.x += dust.vx + Math.sin(dust.wobblePhase) * 0.3;
        dust.y += dust.vy;

        // Wrap around
        if (dust.y > height) dust.y = 0;
        if (dust.x < 0) dust.x = width;
        if (dust.x > width) dust.x = 0;

        ctx.beginPath();
        ctx.arc(dust.x, dust.y, dust.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${dust.opacity})`;
        ctx.fill();
      });

      // Draw stars with twinkling
      particlesRef.current.stars.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = (Math.sin(star.twinklePhase) + 1) / 2;
        star.size = star.baseSize * (0.5 + twinkle * 0.5);
        const alpha = star.brightness * (0.3 + twinkle * 0.7);

        // Wrap around
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Star glow
        ctx.shadowColor = star.color;
        ctx.shadowBlur = star.size * 3 * glowIntensity;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        
        // Extra bright center
        ctx.shadowBlur = 0;
        ctx.globalAlpha = alpha * 0.8;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        
        ctx.restore();
      });

      // Draw orbs with glow
      particlesRef.current.orbs.forEach((orb) => {
        orb.pulsePhase += orb.pulseSpeed;
        const pulse = (Math.sin(orb.pulsePhase) + 1) / 2;
        orb.size = orb.baseSize * (0.8 + pulse * 0.4);

        // Movement
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Mouse interaction
        if (enableMouseInteraction) {
          const dx = mouseRef.current.x - orb.x;
          const dy = mouseRef.current.y - orb.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRadius) {
            const force = (mouseRadius - distance) / mouseRadius * 0.015;
            orb.x += dx * force;
            orb.y += dy * force;
          }
        }

        // Bounce off edges
        if (orb.x < orb.size || orb.x > width - orb.size) orb.vx *= -1;
        if (orb.y < orb.size || orb.y > height - orb.size) orb.vy *= -1;

        // Clamp to bounds
        orb.x = Math.max(orb.size, Math.min(width - orb.size, orb.x));
        orb.y = Math.max(orb.size, Math.min(height - orb.size, orb.y));

        // Draw orb
        ctx.save();
          
          // Handle hex colors for gradient
          const hexMatch = orb.color.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
          if (hexMatch) {
            const r = parseInt(hexMatch[1], 16);
            const g = parseInt(hexMatch[2], 16);
            const b = parseInt(hexMatch[3], 16);
            
            // Outer glow
            const gradient = ctx.createRadialGradient(
              orb.x, orb.y, 0,
              orb.x, orb.y, orb.glowSize * (0.8 + pulse * 0.4)
            );
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${orb.opacity * (0.5 + pulse * 0.5)})`);
            gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${orb.opacity * 0.3 * pulse})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            
            ctx.beginPath();
            ctx.arc(orb.x, orb.y, orb.glowSize * (0.8 + pulse * 0.4), 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
          }
          
          // Core
          ctx.shadowColor = orb.color;
          ctx.shadowBlur = orb.size * 2 * glowIntensity;
          ctx.globalAlpha = orb.opacity * (0.6 + pulse * 0.4);
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
          ctx.fillStyle = orb.color;
          ctx.fill();
          
          ctx.restore();
      });

      // Draw connections between nearby orbs
      if (enableConnections) {
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particlesRef.current.orbs.length; i++) {
          const orb1 = particlesRef.current.orbs[i];
          
          for (let j = i + 1; j < particlesRef.current.orbs.length; j++) {
            const orb2 = particlesRef.current.orbs[j];
            const dx = orb1.x - orb2.x;
            const dy = orb1.y - orb2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              const alpha = (1 - distance / connectionDistance) * 0.15;
              
              // Handle hex colors for gradient
              const hex1 = orb1.color.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
              const hex2 = orb2.color.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
              
              if (hex1 && hex2) {
                const r1 = parseInt(hex1[1], 16), g1 = parseInt(hex1[2], 16), b1 = parseInt(hex1[3], 16);
                const r2 = parseInt(hex2[1], 16), g2 = parseInt(hex2[2], 16), b2 = parseInt(hex2[3], 16);
                const gradient = ctx.createLinearGradient(orb1.x, orb1.y, orb2.x, orb2.y);
                gradient.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, ${alpha})`);
                gradient.addColorStop(1, `rgba(${r2}, ${g2}, ${b2}, ${alpha})`);
                ctx.strokeStyle = gradient;
              } else {
                ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              }
              
              ctx.beginPath();
              ctx.moveTo(orb1.x, orb1.y);
              ctx.lineTo(orb2.x, orb2.y);
              ctx.stroke();
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Resize handler with debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 100);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(resizeTimeout);
    };
  }, [initParticles, enableConnections, enableMouseInteraction, connectionDistance, mouseRadius, glowIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ 
        zIndex: 1,
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default EnhancedParticles;
