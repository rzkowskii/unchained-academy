import { Menu, X, BookOpen, Code, Activity, User, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ModuleNavigator from './ModuleNavigator';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLessonPage = location.pathname.includes('/module/');

  const navigation = [
    { name: 'Tutorials', href: '/tutorials', icon: BookOpen },
    { name: 'Labs', href: '/labs', icon: Code },
    { name: 'Node Monitor', href: '/monitor', icon: Activity },
  ];

  return (
    <header className="bg-surface border-b border-gray-800">
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-primary">
              Unchained Academy
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Progress Indicator - Desktop */}
            {isLessonPage && (
              <div className="hidden lg:block">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-32 bg-surface-dark rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '25%' }} />
                  </div>
                  <span className="text-sm text-gray-400">25% Complete</span>
                </div>
              </div>
            )}

            {/* Profile Section */}
            <div className="hidden lg:flex items-center">
              <button className="p-2 rounded-full hover:bg-surface-dark transition-colors">
                <User className="w-6 h-6 text-gray-300" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-primary"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-800 pt-4">
            {/* Progress Indicator - Mobile */}
            {isLessonPage && (
              <div className="mb-4">
                <div className="flex items-center space-x-2">
                  <div className="h-2 flex-grow bg-surface-dark rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '25%' }} />
                  </div>
                  <span className="text-sm text-gray-400">25% Complete</span>
                </div>
              </div>
            )}

            {/* Main Navigation */}
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Module Navigation on lesson pages */}
            {isLessonPage && (
              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="mb-2 text-sm font-medium text-gray-400">Current Module</div>
                <div className="bg-surface-dark rounded-lg">
                  <ModuleNavigator 
                    isMobile={true} 
                    onNavigate={() => setIsMenuOpen(false)}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
