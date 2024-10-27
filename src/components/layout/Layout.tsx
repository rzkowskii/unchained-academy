import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ModuleNavigator from './ModuleNavigator';
import { Menu } from 'lucide-react';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      
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

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex gap-8 py-8">
          {/* Sidebar */}
          <aside
            className={`
              fixed lg:static inset-y-0 left-0 z-50 w-64
              transform lg:transform-none
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
              transition-transform duration-200 ease-in-out
              overflow-y-auto
            `}
          >
            <ModuleNavigator
              isMobile={true}
              onNavigate={() => setIsSidebarOpen(false)}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
