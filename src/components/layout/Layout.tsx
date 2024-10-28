import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ModuleNavigator from './ModuleNavigator';
import { Menu } from 'lucide-react';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on a module/lesson page
  const isModulePage = location.pathname.includes('/module/');
  
  // Check if we're on the home page (handle all possible home page paths)
  const isHomePage = location.pathname === '/' || 
                    location.pathname === '/unchained-academy' || 
                    location.pathname === '/unchained-academy/' ||
                    location.pathname.replace(/\/$/, '') === '/unchained-academy';

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
        <div className={`py-8 ${isModulePage ? 'lg:flex lg:gap-8 xl:gap-12' : ''}`}>
          {/* Sidebar - Only show on module pages */}
          {isModulePage && (
            <>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden fixed bottom-4 right-4 z-50 bg-primary text-white p-4 rounded-full shadow-lg"
                aria-label="Toggle navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Mobile Sidebar Overlay */}
              {isSidebarOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                  onClick={() => setIsSidebarOpen(false)}
                />
              )}

              {/* Sidebar */}
              <aside
                className={`
                  fixed lg:static inset-y-0 left-0 z-50 
                  w-64 xl:w-72 2xl:w-80
                  transform lg:transform-none
                  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                  transition-transform duration-200 ease-in-out
                  overflow-y-auto
                  bg-surface-dark lg:bg-transparent
                  h-screen lg:h-auto
                `}
              >
                <ModuleNavigator
                  isMobile={true}
                  onNavigate={() => setIsSidebarOpen(false)}
                />
              </aside>
            </>
          )}

          {/* Main Content */}
          <main 
            className={`
              ${isModulePage ? 'lg:flex-1 lg:min-w-0' : 'w-full'}
              ${isHomePage ? 'max-w-none' : ''}
              ${!isHomePage ? 'max-w-[100ch] mx-auto' : ''}
            `}
          >
            <Outlet />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
