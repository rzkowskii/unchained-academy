import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ModuleNavigator from './ModuleNavigator';

export default function Layout({ children }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isLessonPage = location.pathname.includes('/module/');

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when route changes
  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileNavOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className={`sticky top-0 z-50 bg-surface border-b border-gray-800 transition-shadow
          ${isScrolled ? 'shadow-lg' : ''}`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Header />
            
            {/* Mobile Navigation Toggle */}
            {isLessonPage && (
              <button
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-primary transition-colors"
                aria-expanded={isMobileNavOpen}
                aria-controls="mobile-nav"
                aria-label="Toggle navigation menu"
              >
                {isMobileNavOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex">
        {/* Desktop Navigation */}
        {isLessonPage && (
          <aside className="hidden lg:block w-64 border-r border-gray-800 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
            <ModuleNavigator />
          </aside>
        )}

        {/* Mobile Navigation Overlay */}
        {isLessonPage && (
          <div
            className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden transition-opacity
              ${isMobileNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-hidden={!isMobileNavOpen}
            onClick={() => setIsMobileNavOpen(false)}
          />
        )}

        {/* Mobile Navigation Drawer */}
        {isLessonPage && (
          <div
            id="mobile-nav"
            className={`fixed inset-y-0 left-0 w-64 bg-surface z-50 transform lg:hidden transition-transform
              ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`}
            aria-hidden={!isMobileNavOpen}
          >
            <div className="h-full overflow-y-auto">
              <ModuleNavigator 
                isMobile={true}
                onNavigate={() => setIsMobileNavOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main 
          className="flex-grow overflow-x-hidden"
          role="main"
          id="main-content"
        >
          <div className="container py-8 px-4 lg:px-8">
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Skip to main content link (hidden until focused) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
          focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
    </div>
  );
}
