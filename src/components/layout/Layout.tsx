import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ModuleNavigator from './ModuleNavigator';
import PageTransition from '../ui/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { getLessonById, getNextLesson, getPreviousLesson } from '../../lessons/config';

interface LayoutProps {
  children: React.ReactNode;
}

interface KeyboardEvent {
  key: string;
  target: EventTarget | null;
  preventDefault: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: globalThis.KeyboardEvent) => {
      // Only handle navigation if we're on a lesson page
      const match = location.pathname.match(/\/module\/(\d+)\/lesson\/(\d+)/);
      if (!match) return;

      const [, moduleId, lessonId] = match;
      const currentLesson = getLessonById(moduleId, lessonId);
      if (!currentLesson) return;

      switch (e.key) {
        case 'ArrowLeft':
          const prevLesson = getPreviousLesson(moduleId, lessonId);
          if (prevLesson) {
            navigate(prevLesson.path);
          }
          break;
        case 'ArrowRight':
          const nextLesson = getNextLesson(moduleId, lessonId);
          if (nextLesson) {
            navigate(nextLesson.path);
          }
          break;
        case ' ':
          if (!e.target || (e.target as HTMLElement).tagName === 'BODY') {
            e.preventDefault();
            setIsSidebarOpen(prev => !prev);
          }
          break;
        case 'Escape':
          if (isSidebarOpen && isMobile) {
            setIsSidebarOpen(false);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [location.pathname, navigate, isSidebarOpen, isMobile]);

  // Handle focus management
  const handleSidebarOpen = useCallback(() => {
    lastFocusedElement.current = document.activeElement as HTMLElement;
    setTimeout(() => {
      const firstFocusableElement = sidebarRef.current?.querySelector(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement;
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }, 100);
  }, []);

  const handleSidebarClose = useCallback(() => {
    if (lastFocusedElement.current) {
      lastFocusedElement.current.focus();
    }
  }, []);

  useEffect(() => {
    if (isSidebarOpen && isMobile) {
      handleSidebarOpen();
    } else if (!isMobile && !isSidebarOpen) {
      handleSidebarClose();
    }
  }, [isSidebarOpen, isMobile, handleSidebarOpen, handleSidebarClose]);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header 
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <AnimatePresence>
            {(isSidebarOpen || !isMobile) && (
              <motion.div
                ref={sidebarRef}
                role="navigation"
                aria-label="Course navigation"
                className={`
                  fixed lg:relative inset-0 z-30 bg-background lg:bg-transparent
                  lg:w-80 lg:flex-shrink-0
                  ${isSidebarOpen && isMobile ? 'overflow-y-auto' : ''}
                `}
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }}
              >
                {/* Overlay for mobile */}
                {isMobile && (
                  <motion.div
                    role="presentation"
                    className="absolute inset-0 bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsSidebarOpen(false)}
                    onKeyDown={(e: React.KeyboardEvent) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setIsSidebarOpen(false);
                      }
                    }}
                    tabIndex={-1}
                  />
                )}
                
                {/* Sidebar content */}
                <div className="relative z-10">
                  <ModuleNavigator
                    isMobile={isMobile}
                    onNavigate={() => setIsSidebarOpen(false)}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main content */}
          <main
            className={`
              flex-1 transition-all duration-300
              ${isSidebarOpen ? 'lg:ml-80' : 'lg:ml-0'}
            `}
            role="main"
            aria-label="Lesson content"
            tabIndex={-1}
          >
            <motion.div
              className="bg-surface rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.2
              }}
            >
              <PageTransition>
                {children}
              </PageTransition>
            </motion.div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
