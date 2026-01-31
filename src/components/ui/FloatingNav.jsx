/**
 * FloatingNav Component
 * Floating action navigation with smooth transitions
 * Creates a modern dock-style navigation
 */
import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, FileText, Mail, ChevronUp } from 'lucide-react';

const FloatingNav = ({
  items = [
    { icon: <Home size={20} />, label: 'Home', href: '#home' },
    { icon: <User size={20} />, label: 'About', href: '#about' },
    { icon: <Briefcase size={20} />, label: 'Experience', href: '#experience' },
    { icon: <Code size={20} />, label: 'Skills', href: '#skills' },
    { icon: <FileText size={20} />, label: 'Resume', href: '#resume' },
    { icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
  ],
  position = 'bottom', // 'bottom', 'left', 'right'
  showAfterScroll = 100,
  showScrollTop = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfterScroll);
      
      // Determine active section
      const sections = items.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items, showAfterScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const positionStyles = {
    bottom: 'bottom-6 left-1/2 -translate-x-1/2 flex-row',
    left: 'left-6 top-1/2 -translate-y-1/2 flex-col',
    right: 'right-6 top-1/2 -translate-y-1/2 flex-col',
  };

  return (
    <nav
      className={`
        fixed z-50 flex gap-1 p-2
        bg-black/60 backdrop-blur-xl
        border border-amber-500/10 rounded-2xl
        shadow-2xl shadow-black/30
        transition-all duration-500 ease-out
        ${positionStyles[position]}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        ${className}
      `}
    >
      {items.map((item, index) => {
        const isActive = activeSection === item.href.replace('#', '');
        const isHovered = hoveredItem === index;
        
        return (
          <button
            key={index}
            onClick={() => handleClick(item.href)}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`
              relative p-3 rounded-xl
              transition-all duration-300 ease-out
              ${isActive 
                ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-lg shadow-amber-500/25' 
                : 'text-gray-400 hover:text-amber-100 hover:bg-amber-500/10'
              }
            `}
            style={{
              transform: isHovered ? 'scale(1.15) translateY(-4px)' : 'scale(1)',
            }}
          >
            {item.icon}
            
            {/* Tooltip */}
            <span
              className={`
                absolute -top-10 left-1/2 -translate-x-1/2
                px-2 py-1 text-xs font-medium text-amber-100
                bg-black/80 border border-amber-500/20 rounded-lg whitespace-nowrap
                transition-all duration-200
                ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
              `}
            >
              {item.label}
            </span>

            {/* Active indicator dot */}
            {isActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            )}
          </button>
        );
      })}

      {/* Scroll to top button */}
      {showScrollTop && (
        <>
          <div className="w-px h-8 bg-amber-500/20 mx-1 self-center" />
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setHoveredItem('top')}
            onMouseLeave={() => setHoveredItem(null)}
            className={`
              relative p-3 rounded-xl
              text-gray-400 hover:text-amber-100 hover:bg-amber-500/10
              transition-all duration-300 ease-out
            `}
            style={{
              transform: hoveredItem === 'top' ? 'scale(1.15) translateY(-4px)' : 'scale(1)',
            }}
          >
            <ChevronUp size={20} />
            
            <span
              className={`
                absolute -top-10 left-1/2 -translate-x-1/2
                px-2 py-1 text-xs font-medium text-amber-100
                bg-black/80 border border-amber-500/20 rounded-lg whitespace-nowrap
                transition-all duration-200
                ${hoveredItem === 'top' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
              `}
            >
              Back to Top
            </span>
          </button>
        </>
      )}
    </nav>
  );
};

export default FloatingNav;
