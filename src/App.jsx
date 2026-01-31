import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import { LiquidGlassFilter, CursorGlow, ScrollProgress, FloatingNav, EnhancedParticles } from './components/ui';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

/**
 * Main App Component
 * Orchestrates the portfolio with loading screen and page routing
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => setShowContent(true), 100);
  };

  // Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <Router>
      {/* SVG Filters for Liquid Glass Effect - Include once at app level */}
      <LiquidGlassFilter />
      
      {/* Cursor Glow Effect - Follows mouse */}
      <CursorGlow 
        size={400} 
        color="rgba(212, 175, 55, 0.06)" 
        blur={120}
      />

      {/* Enhanced Global Particles - Stars, Orbs & Dust */}
      <EnhancedParticles 
        starCount={80}
        orbCount={15}
        dustCount={40}
        starColors={['#fffef0', '#fef3c7', '#fde68a', '#d4af37', '#f5f5dc']}
        orbColors={['#d4af37', '#be3144', '#008080', '#ffbf00', '#663399', '#50c878']}
        enableConnections={true}
        enableMouseInteraction={true}
        connectionDistance={150}
        mouseRadius={200}
        glowIntensity={1.5}
      />

      {/* Scroll Progress Indicator */}
      <ScrollProgress 
        colors={['#d4af37', '#be3144', '#008080']}
        height={3}
        showPercentage={false}
      />

      {/* Floating Navigation Dock */}
      <FloatingNav showAfterScroll={400} />
      
      <div className="min-h-screen">
        {/* Loading Screen */}
        {isLoading && <Loading onComplete={handleLoadingComplete} />}
        
        {/* Main Content */}
        <div 
          className={`transition-opacity duration-500 ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ScrollToTop />
          
          {/* Navigation */}
          <Navbar />
          
          {/* Main Sections - Page Routes */}
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          
          {/* Footer - shown on all pages except contact (which has its own) */}
          <Routes>
            <Route path="/contact" element={null} />
            <Route path="*" element={<Footer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
