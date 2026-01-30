import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/**
 * Modern Glass Navbar Component
 * Sleek navigation with glassmorphism effect and page routing
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Resume', path: '/resume' },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'top-2' : 'top-4'
      }`}
    >
      {/* Desktop Navigation - Modern Glass Pill */}
      <div className="hidden md:flex items-center">
        <div 
          className={`
            flex items-center gap-1 px-2 py-2 rounded-2xl
            bg-slate-900/70 backdrop-blur-xl
            border border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.4)]
            transition-all duration-500
            ${isScrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.6)]' : ''}
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`
                relative px-5 py-2.5 rounded-xl text-sm font-medium
                transition-all duration-300 ease-out
                ${isActive(link.path)
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                }
              `}
            >
              {/* Active indicator background */}
              {isActive(link.path) && (
                <span 
                  className="absolute inset-0 bg-white/10 rounded-xl"
                  style={{
                    animation: 'fadeIn 0.3s ease-out'
                  }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
          
          {/* Contact Button - Highlighted */}
          <Link
            to="/contact"
            className={`
              relative ml-1 px-6 py-2.5 rounded-xl text-sm font-medium
              transition-all duration-300 ease-out overflow-hidden
              ${isActive('/contact')
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                : 'bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25'
              }
            `}
          >
            <span className="relative z-10">Contact</span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`
            p-3 rounded-2xl
            bg-slate-900/80 backdrop-blur-xl
            border border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.4)]
            text-white transition-all duration-300
            ${isMobileMenuOpen ? 'rotate-90' : ''}
          `}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`
            absolute top-full right-0 mt-3 w-56
            transition-all duration-300 ease-out
            ${isMobileMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4 pointer-events-none'
            }
          `}
        >
          <div 
            className="
              p-2 rounded-2xl
              bg-slate-900/90 backdrop-blur-xl
              border border-white/10
              shadow-[0_8px_32px_rgba(0,0,0,0.5)]
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  block px-4 py-3 rounded-xl text-sm font-medium
                  transition-all duration-300
                  ${isActive(link.path)
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Contact Button */}
            <div className="mt-2 pt-2 border-t border-white/10">
              <Link
                to="/contact"
                className={`
                  block w-full py-3 text-center rounded-xl text-sm font-medium
                  bg-gradient-to-r from-blue-600 to-purple-600 text-white
                  hover:from-blue-500 hover:to-purple-500
                  transition-all duration-300
                  ${isActive('/contact') ? 'shadow-lg shadow-blue-500/25' : ''}
                `}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
