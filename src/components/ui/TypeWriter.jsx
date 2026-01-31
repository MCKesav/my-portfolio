/**
 * TypeWriter Component
 * Animated typing effect with cursor
 * Creates engaging text reveals
 */
import { useEffect, useState, useRef } from 'react';

const TypeWriter = ({
  words = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
  cursorChar = '|',
  cursorBlinkSpeed = 500,
  loop = true,
  className = '',
  cursorClassName = '',
  onWordComplete,
  onLoopComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef(null);

  // Cursor blink effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(blinkInterval);
  }, [cursorBlinkSpeed]);

  // Typing animation
  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (isPaused) {
        timeoutRef.current = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, delayBetweenWords);
        return;
      }

      if (isDeleting) {
        // Deleting characters
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Move to next word
          setIsDeleting(false);
          const nextIndex = (wordIndex + 1) % words.length;
          
          if (nextIndex === 0 && !loop) {
            onLoopComplete?.();
            return;
          }
          
          if (nextIndex === 0) {
            onLoopComplete?.();
          }
          
          setWordIndex(nextIndex);
        }
      } else {
        // Typing characters
        if (displayText.length < currentWord.length) {
          setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          // Word complete
          onWordComplete?.(currentWord);
          setIsPaused(true);
          timeoutRef.current = setTimeout(handleTyping, 0);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, wordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, delayBetweenWords, loop]);

  return (
    <span className={className}>
      {displayText}
      <span 
        className={`${cursorClassName} ${showCursor ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 0.1s' }}
      >
        {cursorChar}
      </span>
    </span>
  );
};

export default TypeWriter;
