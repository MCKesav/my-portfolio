/**
 * NeonText Component
 * Glowing neon text effect with customizable colors
 * Creates cyberpunk/futuristic aesthetics
 */
const NeonText = ({
  children,
  color = '#22d3ee', // cyan-400
  intensity = 1,
  flickerSpeed = 0, // 0 = no flicker, higher = faster flicker
  className = '',
  as: Component = 'span',
  animate = true,
}) => {
  const glowLayers = [
    `0 0 ${5 * intensity}px ${color}`,
    `0 0 ${10 * intensity}px ${color}`,
    `0 0 ${20 * intensity}px ${color}`,
    `0 0 ${40 * intensity}px ${color}`,
    `0 0 ${80 * intensity}px ${color}`,
  ].join(', ');

  return (
    <Component
      className={`
        relative inline-block
        ${animate ? 'animate-neon-pulse' : ''}
        ${flickerSpeed > 0 ? 'animate-neon-flicker' : ''}
        ${className}
      `}
      style={{
        color: color,
        textShadow: glowLayers,
        animationDuration: flickerSpeed > 0 ? `${1 / flickerSpeed}s` : undefined,
        '--neon-color': color,
        '--neon-intensity': intensity,
      }}
    >
      {children}
    </Component>
  );
};

export default NeonText;
