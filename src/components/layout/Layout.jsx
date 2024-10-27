import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ModuleNavigator from './ModuleNavigator';

export default function Layout({ children }) {
  const location = useLocation();
  const isLessonPage = location.pathname.includes('/module/');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex">
        {/* Desktop Module Navigator - Only show on lesson pages */}
        {isLessonPage && (
          <div className="hidden lg:block w-64 border-r border-gray-800 overflow-y-auto">
            <ModuleNavigator />
          </div>
        )}
        
        {/* Main Content Area */}
        <main className="flex-grow overflow-y-auto">
          <div className="container py-8 px-4 lg:px-8">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
