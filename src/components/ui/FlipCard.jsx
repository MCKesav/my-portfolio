/**
 * FlipCard Component
 * 3D card flip animation on hover
 * Creates engaging interactive cards
 */
import { useState } from 'react';

const FlipCard = ({
  front,
  back,
  width = '100%',
  height = 300,
  flipDirection = 'horizontal', // 'horizontal' or 'vertical'
  className = '',
  frontClassName = '',
  backClassName = '',
  flipOnClick = false,
  flipOnHover = true,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (flipOnClick) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseEnter = () => {
    if (flipOnHover) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (flipOnHover) {
      setIsFlipped(false);
    }
  };

  const rotateAxis = flipDirection === 'horizontal' ? 'rotateY' : 'rotateX';
  const backRotation = flipDirection === 'horizontal' ? 'rotateY(180deg)' : 'rotateX(180deg)';

  return (
    <div
      className={`perspective-1000 ${className}`}
      style={{ width, height }}
      onClick={handleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? `${rotateAxis}(180deg)` : `${rotateAxis}(0deg)`,
        }}
      >
        {/* Front face */}
        <div
          className={`absolute inset-0 backface-hidden ${frontClassName}`}
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          {front}
        </div>

        {/* Back face */}
        <div
          className={`absolute inset-0 backface-hidden ${backClassName}`}
          style={{
            backfaceVisibility: 'hidden',
            transform: backRotation,
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
