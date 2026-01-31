import { useTheme, THEMES } from '../../context/ThemeContext';
import { Sun, Moon, Palette } from 'lucide-react';

/**
 * Theme Toggle Component
 * Cycles through available themes with smooth animation
 */
const ThemeToggle = ({ className = '' }) => {
  const { theme, cycleTheme, currentTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'dark':
        return <Moon className="w-5 h-5" />;
      case 'warm':
        return <Sun className="w-5 h-5" />;
      case 'ocean':
        return <Palette className="w-5 h-5" />;
      default:
        return <Palette className="w-5 h-5" />;
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className={`
        relative group p-2.5 rounded-xl
        bg-white/5 hover:bg-white/10
        border border-white/10 hover:border-white/20
        backdrop-blur-xl
        transition-all duration-300
        hover:scale-105 active:scale-95
        ${className}
      `}
      aria-label={`Current theme: ${currentTheme.name}. Click to change.`}
      title={`${currentTheme.emoji} ${currentTheme.name}`}
    >
      {/* Icon */}
      <span className="relative z-10 text-white/80 group-hover:text-white transition-colors">
        {getIcon()}
      </span>

      {/* Hover tooltip */}
      <span className="
        absolute -bottom-10 left-1/2 -translate-x-1/2
        px-3 py-1.5 rounded-lg
        bg-slate-900/95 backdrop-blur-xl
        border border-white/10
        text-xs text-white whitespace-nowrap
        opacity-0 group-hover:opacity-100
        translate-y-2 group-hover:translate-y-0
        transition-all duration-300
        pointer-events-none
        z-50
      ">
        {currentTheme.emoji} {currentTheme.name}
      </span>
    </button>
  );
};

/**
 * Theme Selector Panel
 * Shows all themes in a dropdown/panel format
 */
export const ThemeSelector = ({ className = '' }) => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {Object.values(themes).map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl
            border transition-all duration-300
            ${theme === t.id
              ? 'bg-primary-accent/20 border-primary-accent/50 text-white'
              : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }
          `}
        >
          <span className="text-lg">{t.emoji}</span>
          <span className="text-sm font-medium">{t.name}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
