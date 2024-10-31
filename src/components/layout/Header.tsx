import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { modules, getAllLessons } from '../../lessons/config';
import ProgressRing from '../ui/ProgressRing';
import Tooltip from '../ui/Tooltip';
import { useUI } from '../../context/UIContext';

interface HeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, onToggleSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useUI();

  // Calculate overall progress
  const calculateProgress = () => {
    const totalLessons = getAllLessons().length;
    const completedLessons = getAllLessons().filter(lesson => lesson.completed).length;
    return (completedLessons / totalLessons) * 100;
  };

  const isActive = (path: string) => location.pathname === path;

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle search with '/'
      if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 100);
      }

      // Close search with Escape
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search logic here
    const lessons = getAllLessons().filter(lesson => 
      lesson.title.toLowerCase().includes(query.toLowerCase()) ||
      lesson.description?.toLowerCase().includes(query.toLowerCase())
    );

    if (lessons.length > 0 && query.length > 0) {
      showToast(`Found ${lessons.length} matching lessons`, 'info');
    }
  };

  return (
    <header className="bg-surface shadow-lg border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Menu Button */}
          <Tooltip content={isSidebarOpen ? 'Close menu' : 'Open menu'}>
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-surface-light 
                       focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
              aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isSidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </Tooltip>

          {/* Logo */}
          <div className="flex-1 flex items-center justify-center lg:justify-start">
            <Link 
              to="/" 
              className="flex items-center group"
              aria-label="Go to homepage"
            >
              <div className="relative">
                <img
                  className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
                  src="/logo.svg"
                  alt=""
                />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary to-secondary 
                           bg-clip-text text-transparent">
                Unchained Academy
              </span>
            </Link>
          </div>

          {/* Progress and Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Progress Indicator */}
            <Tooltip content="Your overall progress">
              <div className="flex items-center space-x-2">
                <ProgressRing
                  progress={calculateProgress()}
                  size={32}
                  strokeWidth={3}
                  className="text-primary"
                />
                <span className="text-sm text-gray-400">
                  {Math.round(calculateProgress())}% Complete
                </span>
              </div>
            </Tooltip>

            {/* Search Bar */}
            <div className="relative">
              <Tooltip content="Press '/' to search">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-surface-light rounded-md
                           focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  aria-label="Toggle search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </Tooltip>
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-surface-dark rounded-lg shadow-lg 
                             border border-gray-800 p-4 z-50">
                  <div className="relative">
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      placeholder="Search lessons..."
                      className="w-full bg-surface text-white rounded-md pl-10 pr-3 py-2 
                               border border-gray-700 focus:border-primary focus:ring-1 
                               focus:ring-primary outline-none"
                      data-search-input
                    />
                    <svg
                      className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 text-xs text-gray-500 flex items-center justify-between">
                    <span>
                      Press <kbd className="px-2 py-1 bg-surface rounded">/</kbd> to search
                    </span>
                    <span>
                      Press <kbd className="px-2 py-1 bg-surface rounded">ESC</kbd> to close
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-1">
              <Tooltip content="Return to homepage">
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                            ${isActive('/') 
                              ? 'bg-surface-light text-white' 
                              : 'text-gray-300 hover:text-white hover:bg-surface-light'}`}
                >
                  Home
                </Link>
              </Tooltip>
              <Tooltip content="Learn more about Unchained Academy">
                <Link
                  to="/about"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                            ${isActive('/about') 
                              ? 'bg-surface-light text-white' 
                              : 'text-gray-300 hover:text-white hover:bg-surface-light'}`}
                >
                  About
                </Link>
              </Tooltip>
              <Tooltip content="View source code on GitHub">
                <a
                  href="https://github.com/unchained-network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 
                           hover:text-white hover:bg-surface-light transition-colors"
                >
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 
                             0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 
                             1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 
                             0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 
                             1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 
                             3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 
                             20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </a>
              </Tooltip>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
