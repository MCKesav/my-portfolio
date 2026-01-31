import { createContext, useContext, useState, useEffect } from 'react';

/**
 * Theme Configuration
 * Add new themes here following the same structure
 */
export const THEMES = {
  dark: {
    id: 'dark',
    name: 'Midnight',
    emoji: '🌙',
    description: 'Dark & elegant with gold accents',
  },
  warm: {
    id: 'warm',
    name: 'Warm & Energetic',
    emoji: '🍊',
    description: 'Friendly and creative',
  },
  ocean: {
    id: 'ocean',
    name: 'Ocean Breeze',
    emoji: '🌊',
    description: 'Cool and professional',
  },
};

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  // Get initial theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      return savedTheme && THEMES[savedTheme] ? savedTheme : 'dark';
    }
    return 'dark';
  });

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    Object.keys(THEMES).forEach(t => root.classList.remove(`theme-${t}`));
    
    // Add current theme class
    root.classList.add(`theme-${theme}`);
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const cycleTheme = () => {
    const themeKeys = Object.keys(THEMES);
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };

  const value = {
    theme,
    setTheme,
    cycleTheme,
    currentTheme: THEMES[theme],
    themes: THEMES,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
